import { HtmlTemplate } from '../types';

export const templates: HtmlTemplate[] = [
  {
    id: 'basic',
    name: 'Basic Layout',
    html: `<div class="container">
  <h1>Welcome to CSS Preview</h1>
  <p>This is a simple layout to test your CSS styles. Edit the CSS in the editor to see changes reflected here in real-time.</p>
  <button>Click Me</button>
  <div class="card">
    <div class="card-title">Card Title</div>
    <div class="card-content">This is some content inside a card element. You can style this however you want.</div>
  </div>
</div>`,
  },
  {
    id: 'article',
    name: 'Article Layout',
    html: `<div class="container">
  <h1>The Art of CSS Styling</h1>
  <p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML.</p>
  <p>With CSS, you can control the color, font, layout, and many other aspects of your web pages.</p>
  <button>Read More</button>
  <div class="card">
    <div class="card-title">Did You Know?</div>
    <div class="card-content">CSS was first proposed by Håkon Wium Lie in 1994 while working at CERN with Tim Berners-Lee.</div>
  </div>
</div>`,
  },
  {
    id: 'profile',
    name: 'Profile Card',
    html: `<div class="container">
  <h1>John Doe</h1>
  <p>Frontend Developer & UI Designer</p>
  <p>Passionate about creating beautiful and functional user interfaces with clean, efficient code.</p>
  <button>Contact Me</button>
  <div class="card">
    <div class="card-title">Skills</div>
    <div class="card-content">HTML, CSS, JavaScript, React, UI/UX Design, Responsive Web Development</div>
  </div>
</div>`,
  },
];