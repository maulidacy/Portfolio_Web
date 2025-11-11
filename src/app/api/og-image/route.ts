import { NextResponse } from "next/server";

/** helper: timeout */
function withTimeout<T>(p: Promise<T>, ms = 4000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  // @ts-expect-error signal for fetch only
  (p as any).signal = ctrl.signal;
  return { promise: p.finally(() => clearTimeout(t)), signal: ctrl.signal };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const target = searchParams.get("url");
  if (!target) return NextResponse.json({ ok: false }, { status: 400 });

  try {
    const u = new URL(target);
    const headers = {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
        "(KHTML, like Gecko) Chrome/123 Safari/537.36",
      "accept-language": "en;q=0.8,id;q=0.7",
    };

    // fetch HTML dengan timeout & cache 1 hari
    const { promise } = withTimeout(
      fetch(u.toString(), { headers, next: { revalidate: 60 * 60 * 24 } })
    );
    const res = await promise;
    if (!res.ok) throw new Error(`status ${res.status}`);
    const html = await res.text();

    const pick = (re: RegExp) => html.match(re)?.[1];

    // og → twitter → icon
    const og = pick(
      /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i
    );
    const tw = pick(
      /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i
    );
    const ico =
      pick(/<link[^>]+rel=["']icon["'][^>]+href=["']([^"']+)["']/i) ??
      pick(/<link[^>]+rel=["']shortcut icon["'][^>]+href=["']([^"']+)["']/i);

    const absolutize = (s?: string) => (s ? new URL(s, u).toString() : undefined);
    const url =
      absolutize(og) ||
      absolutize(tw) ||
      // favicon universal (sangat cepat)
      `https://icons.duckduckgo.com/ip3/${u.hostname}.ico`;

    return NextResponse.json({ ok: true, url });
  } catch {
    // fallback terakhir → gambar placeholder lokal
    return NextResponse.json(
      { ok: true, url: "/images/project-placeholder.jpg" },
      { status: 200 }
    );
  }
}
