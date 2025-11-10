import Magnetic from "./magnetic";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <Magnetic>
        <a
          href="https://github.com/cahyamaulida"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://linkedin.com/in/cahyamaulida"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://twitter.com/cahyamaulida"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
      </Magnetic>
    </div>
  );
}

export { SocialLinks };
