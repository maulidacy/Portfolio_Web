const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files (for CSS, images, etc.)
app.use(express.static('public'));

// Route for home page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Portfolio</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h2>Hello, I'm [Your Name]</h2>
          <p>A passionate developer creating amazing web experiences.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </body>
    </html>
  `);
});

// Route for about page
app.get('/about', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About - My Portfolio</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <header>
        <h1>About Me</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>I'm a web developer with a passion for creating beautiful and functional websites.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </body>
    </html>
  `);
});

// Route for projects page
app.get('/projects', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Projects - My Portfolio</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <header>
        <h1>My Projects</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>My Projects</h2>
          <ul>
            <li>Project 1: Description</li>
            <li>Project 2: Description</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </body>
    </html>
  `);
});

// Route for contact page
app.get('/contact', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact - My Portfolio</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <header>
        <h1>Contact Me</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Contact Information</h2>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Portfolio app listening at http://localhost:${port}`);
});
