# TaskAgents.ai - Setup Guide

This guide will help you configure and deploy your new TaskAgents.ai website.

## Quick Start Checklist

- [ ] Configure contact form endpoint (Formspree)
- [ ] Update social media links
- [ ] Verify email addresses
- [ ] Test locally
- [ ] Deploy to GitHub Pages
- [ ] Verify custom domain (taskagents.ai)

## Detailed Setup Instructions

### 1. Configure Contact Form (REQUIRED)

The contact form will NOT work until you configure a form endpoint.

**Using Formspree (Recommended):**

1. Go to https://formspree.io/ and create a free account
2. Click "New Project" and create a project named "TaskAgents"
3. Click "New Form" and name it "Contact Form"
4. Copy your form endpoint (looks like: `https://formspree.io/f/xwpkgqnr`)
5. Open `contact/index.html` in your editor
6. Find line ~70:
   ```html
   action="https://formspree.io/f/YOUR_FORMSPREE_FORM_ID"
   ```
7. Replace `YOUR_FORMSPREE_FORM_ID` with your actual form ID
8. Save the file

**Alternative: Using FormSubmit (No signup required):**

1. Open `contact/index.html`
2. Change the form action to:
   ```html
   action="https://formsubmit.co/info@taskagents.ai"
   ```
3. Replace `info@taskagents.ai` with your email
4. Add this hidden field inside the form:
   ```html
   <input type="hidden" name="_captcha" value="false">
   ```

### 2. Update Social Media Links (OPTIONAL)

The footer on every page has placeholder social media links:

1. Open each HTML file (index.html, services/index.html, etc.)
2. Search for: `<!-- TODO: Replace # with actual social media URLs`
3. Replace `#` with your actual URLs:
   - LinkedIn: `https://linkedin.com/company/yourcompany`
   - GitHub: `https://github.com/yourorganization`
4. Or remove the social links section if you don't want them

**Tip:** Use find-and-replace across all files to update efficiently.

### 3. Verify Email Addresses (OPTIONAL)

The default email is `info@taskagents.ai`. If you want to change it:

1. Search for `info@taskagents.ai` in all HTML files
2. Replace with your preferred email address
3. Make sure to update:
   - Footer links
   - Contact page text
   - Mailto links

### 4. Test Locally

Before deploying, test the site locally:

**Option A: Python**
```bash
python -m http.server 8000
```

**Option B: Node.js**
```bash
npx http-server
```

**Option C: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

Then test:
- [ ] All navigation links work
- [ ] Mobile menu works (resize browser window)
- [ ] Contact form shows validation errors
- [ ] All pages load correctly
- [ ] Anchor links work (e.g., services/#assessment)

### 5. Deploy to GitHub Pages

Your repository is already configured for GitHub Pages.

**Verify GitHub Pages Settings:**

1. Go to your GitHub repository
2. Click "Settings" → "Pages"
3. Ensure:
   - Source: `Deploy from a branch`
   - Branch: `master` / `root`
   - Custom domain: `taskagents.ai`
4. Click "Save"

**Push Changes:**

```bash
git add .
git commit -m "Complete website setup"
git push origin master
```

GitHub will automatically build and deploy your site within 1-2 minutes.

### 6. Verify Deployment

After pushing:

1. Wait 1-2 minutes for GitHub Pages to deploy
2. Visit https://taskagents.ai in your browser
3. Check:
   - [ ] All pages load
   - [ ] Images and CSS load correctly
   - [ ] Navigation works
   - [ ] Contact form submits (test it!)
   - [ ] Mobile responsive design works

**Troubleshooting:**
- If CSS doesn't load, check that paths are relative (not absolute)
- If custom domain doesn't work, verify DNS settings
- Check GitHub Actions tab for deployment errors

### 7. DNS Configuration (If Not Already Done)

If `taskagents.ai` doesn't resolve:

**For Apex Domain (taskagents.ai):**

Add A records pointing to:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For WWW Subdomain:**

Add CNAME record:
```
www.taskagents.ai → [yourusername].github.io
```

DNS changes can take 24-48 hours to propagate.

## Post-Deployment Customization

### Update Meta Tags for SEO

Each page has meta tags in the `<head>`. Consider updating:

1. **Open Graph images:** Replace `TALOGO.png` with a custom social sharing image (1200x630px recommended)
2. **Descriptions:** Refine meta descriptions for better search results
3. **Keywords:** Update based on your target audience

### Add Analytics (Optional)

To track visitors, add Google Analytics or similar:

1. Sign up for Google Analytics
2. Get your tracking code
3. Add before `</head>` in all HTML files:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Customize Content

Now that the site is live, you can customize:

1. **Case Studies:** Add real project examples as you complete them
2. **Services:** Adjust pricing, timelines, or offerings
3. **About Page:** Update as your team grows
4. **Blog (Optional):** Add a blog section for content marketing

## Maintenance

### Regular Updates

- Update case studies quarterly
- Review and update service descriptions annually
- Keep contact information current
- Update copyright year in footer

### Monitoring

- Test contact form monthly
- Check for broken links quarterly
- Monitor Google Search Console for SEO issues
- Review analytics for user behavior

## Security Best Practices

- ✅ No sensitive data in repository
- ✅ Contact form has spam protection (honeypot)
- ✅ Rate limiting on form submissions
- ✅ HTTPS enforced via GitHub Pages
- ⚠️ Consider adding Content Security Policy headers (via GitHub Pages settings or Cloudflare)

## Need Help?

If you run into issues:

1. Check the README.md for troubleshooting tips
2. Verify all configuration steps were completed
3. Check browser console for JavaScript errors
4. Review GitHub Pages deployment logs

For form-specific issues:
- Formspree docs: https://help.formspree.io/
- FormSubmit docs: https://formsubmit.co/

## Next Steps

Once your site is live:

1. ✅ Submit sitemap to Google Search Console
2. ✅ Share on social media
3. ✅ Add to email signatures
4. ✅ Update LinkedIn/GitHub profiles with website link
5. ✅ Consider setting up email forwarding for info@taskagents.ai

Congratulations! Your professional AI consulting website is now live. 🎉
