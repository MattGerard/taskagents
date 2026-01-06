# TaskAgents.ai Website

Production-grade AI agents and workflow automation for enterprise. This is the source code for the TaskAgents.ai marketing website.

## Overview

This is a static website built with plain HTML, CSS, and vanilla JavaScript. It's designed to be deployed to GitHub Pages with zero build process.

### Tech Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom design system with CSS variables
- **Vanilla JavaScript** - Progressive enhancement for forms and interactivity
- **GitHub Pages** - Static hosting

## Project Structure

```
taskagents/
├── index.html              # Home page
├── main.css               # Design system and global styles
├── main.js                # Shared JavaScript functionality
├── services/
│   └── index.html         # Services page
├── case-studies/
│   └── index.html         # Case studies page
├── about/
│   └── index.html         # About page
├── contact/
│   └── index.html         # Contact page with form
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
├── CNAME                  # Custom domain configuration
└── favicon files          # Various favicon formats
```

## Running Locally

Since this is a static site, you can run it locally with any static file server:

### Option 1: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open http://localhost:8000

### Option 2: Node.js
```bash
npx http-server
```

### Option 3: VS Code
Use the "Live Server" extension in VS Code

## Deployment

This site is configured to deploy automatically to GitHub Pages from the `master` branch.

### GitHub Pages Setup
1. The repository is already configured with a `CNAME` file pointing to `taskagents.ai`
2. GitHub Pages serves directly from the root of the `master` branch
3. Any push to `master` will automatically update the live site

### DNS Configuration
Ensure your DNS provider has an A record or CNAME pointing to GitHub Pages:
- A record: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Or CNAME: `[username].github.io`

## Configuration Required

### 1. Contact Form Setup (REQUIRED)

The contact form uses Formspree. You must configure it before the form will work:

1. Go to https://formspree.io/ and create a free account
2. Create a new form and get your form endpoint
3. Open `contact/index.html`
4. Find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORMSPREE_FORM_ID"
   ```
5. Replace `YOUR_FORMSPREE_FORM_ID` with your actual Formspree form ID

**Alternative Form Providers:**
- Basin: https://usebasin.com/
- FormSubmit: https://formsubmit.co/
- EmailJS: https://www.emailjs.com/

### 2. Social Media Links (OPTIONAL)

Update social media links in all page footers:

1. Find the footer section in each HTML file
2. Replace `#` with your actual social media URLs:
   ```html
   <!-- TODO: Replace # with actual social media URLs when available -->
   <li>
     <a href="#" aria-label="LinkedIn" title="LinkedIn">
   ```

### 3. Email Address (OPTIONAL)

The default contact email is `info@taskagents.ai`. To change it:

1. Search for `info@taskagents.ai` in all HTML files
2. Replace with your preferred email address

### 4. Google Fonts (OPTIONAL)

The site uses Inter font from Google Fonts. To change the font:

1. Visit https://fonts.google.com/
2. Select your preferred font
3. Update the `<link>` tag in all HTML files
4. Update the CSS variable in `main.css`:
   ```css
   --font-sans: 'YourFont', sans-serif;
   ```

## Customization

### Colors

Edit CSS variables in `main.css`:

```css
:root {
  --color-primary: #2563eb;      /* Primary blue */
  --color-accent: #8b5cf6;       /* Accent purple */
  --color-text-primary: #1f2937; /* Dark text */
  /* ... more colors ... */
}
```

### Typography

Adjust font sizes and weights in `main.css`:

```css
:root {
  --text-base: 1rem;
  --text-lg: 1.125rem;
  /* ... more sizes ... */
}
```

### Content

All content is in the HTML files. Simply edit the text in:
- `index.html` - Home page
- `services/index.html` - Services descriptions
- `case-studies/index.html` - Case study examples
- `about/index.html` - About content
- `contact/index.html` - Contact page

## SEO

### Update Sitemap

When you add or remove pages, update `sitemap.xml` with the new URLs and last modified dates.

### Meta Tags

Each page has SEO meta tags in the `<head>` section:
- `<title>` - Page title
- `<meta name="description">` - Page description
- Open Graph tags for social sharing

Update these for better SEO.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

The site uses modern CSS features but degrades gracefully in older browsers.

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG AA standards
- Form validation with clear error messages

## Performance

- No external dependencies except Google Fonts
- Minimal JavaScript (progressive enhancement)
- Optimized CSS with CSS variables
- Static assets served from GitHub Pages CDN
- Lazy loading for images (if you add more images)

## Maintenance

### Adding New Pages

1. Create a new directory: `mkdir new-page`
2. Create `new-page/index.html` based on existing pages
3. Update navigation in all existing pages
4. Update `sitemap.xml`
5. Update footer links if needed

### Updating Case Studies

Edit `case-studies/index.html` to add new case studies. Follow the existing pattern:

```html
<div class="card">
  <div class="card-header">
    <span class="badge badge-primary">Industry</span>
    <h2 class="card-title">Project Title</h2>
  </div>
  <!-- ... content ... -->
</div>
```

## Troubleshooting

### Form Not Working
- Verify you've replaced `YOUR_FORMSPREE_FORM_ID` in `contact/index.html`
- Check browser console for errors
- Test with the mailto fallback link

### Pages Not Loading on GitHub Pages
- Verify `CNAME` file is correct
- Check GitHub Pages settings in repository settings
- Ensure DNS is configured correctly

### Styles Not Loading
- Check that `main.css` path is correct in all HTML files
- Verify paths are relative (not absolute)

### Mobile Menu Not Working
- Check that `main.js` is loaded in all HTML files
- Verify JavaScript console for errors

## License

All rights reserved. Copyright 2026 TaskAgents.AI.

## Support

For questions about this website, contact: info@taskagents.ai
