# Deployment Checklist

Use this checklist before and after deploying changes to taskagents.ai.

## Pre-Deployment

### Code Quality
- [ ] All HTML files are valid (no syntax errors)
- [ ] CSS loads on all pages
- [ ] JavaScript has no console errors
- [ ] All internal links work
- [ ] All images load correctly
- [ ] Mobile responsive design works

### Configuration
- [ ] Contact form endpoint is configured (not YOUR_FORMSPREE_FORM_ID)
- [ ] Email addresses are correct
- [ ] Social media links are updated (or removed if not using)
- [ ] CNAME file contains correct domain
- [ ] sitemap.xml is up to date

### Content Review
- [ ] No placeholder text remains (search for "Lorem ipsum", "TODO", "REPLACE")
- [ ] All service descriptions are accurate
- [ ] Case studies are anonymized appropriately
- [ ] Copyright year is current
- [ ] Meta descriptions are optimized

### Testing
- [ ] Test locally with `python -m http.server 8000`
- [ ] Test all navigation links
- [ ] Test mobile menu
- [ ] Test contact form validation
- [ ] Test all anchor links (e.g., services/#assessment)
- [ ] Check spelling and grammar

## Deployment

### Git Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Update: [describe your changes]"

# Push to GitHub
git push origin master
```

### Verify GitHub Pages

1. Go to repository Settings → Pages
2. Verify:
   - Source: `master` branch, `/ (root)` folder
   - Custom domain: `taskagents.ai`
   - Enforce HTTPS: ✅ Checked
3. Wait 1-2 minutes for deployment

## Post-Deployment Verification

### Basic Tests
- [ ] Visit https://taskagents.ai
- [ ] Visit https://www.taskagents.ai (should redirect to non-www)
- [ ] All pages load correctly:
  - [ ] Home (/)
  - [ ] Services (/services/)
  - [ ] Case Studies (/case-studies/)
  - [ ] About (/about/)
  - [ ] Contact (/contact/)

### Functionality Tests
- [ ] Navigation menu works
- [ ] Mobile menu works (test on phone or resize browser)
- [ ] All footer links work
- [ ] Anchor links work (e.g., /services/#assessment)
- [ ] Contact form:
  - [ ] Shows validation errors for empty fields
  - [ ] Shows validation error for invalid email
  - [ ] Successfully submits (test with real email)
  - [ ] Confirmation message displays

### Cross-Browser Testing
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (iOS)

### Performance & SEO
- [ ] All CSS and JS files load (check browser Network tab)
- [ ] No 404 errors in console
- [ ] Favicon loads
- [ ] Meta tags are correct (view page source)
- [ ] Open Graph image works (test with https://www.opengraph.xyz/)

## SEO Setup (First Deployment Only)

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property for taskagents.ai
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: https://taskagents.ai/sitemap.xml

### Google Analytics (Optional)
1. Create GA4 property
2. Get tracking code
3. Add to all HTML files (see SETUP.md)
4. Verify tracking works

## Common Issues & Solutions

### Issue: CSS/JS Not Loading
**Cause:** Incorrect paths or HTTPS mixed content

**Solution:**
- Verify paths are relative (e.g., `../main.css` not `/main.css`)
- Check browser console for errors
- Ensure all resources use HTTPS

### Issue: Custom Domain Not Working
**Cause:** DNS not configured or CNAME file missing

**Solution:**
- Verify CNAME file contains `taskagents.ai`
- Check DNS A records point to GitHub Pages IPs
- Wait up to 24 hours for DNS propagation
- GitHub Pages status: https://www.githubstatus.com/

### Issue: Form Not Submitting
**Cause:** Formspree endpoint not configured

**Solution:**
- Verify `action` in contact/index.html has real Formspree ID
- Check Formspree dashboard for submissions
- Test with browser DevTools Network tab open
- Check for CORS errors

### Issue: Pages Return 404
**Cause:** Incorrect GitHub Pages configuration

**Solution:**
- Verify Settings → Pages shows `master` branch
- Ensure index.html exists in each directory
- URLs must include trailing slash: `/about/` not `/about`

## Rollback Procedure

If deployment breaks the site:

```bash
# View recent commits
git log --oneline -5

# Revert to previous commit
git revert HEAD

# Or reset to specific commit (use with caution)
git reset --hard [commit-hash]

# Force push to revert live site
git push origin master --force
```

**Warning:** Force push should be last resort. Prefer `git revert`.

## Monitoring

### Weekly
- [ ] Test contact form
- [ ] Check for broken links
- [ ] Review form submissions in Formspree

### Monthly
- [ ] Review Google Analytics (if configured)
- [ ] Check Google Search Console for errors
- [ ] Update content as needed

### Quarterly
- [ ] Review and update case studies
- [ ] Update service offerings/pricing
- [ ] Check for outdated technology references

## Security

- [ ] No API keys or secrets in repository
- [ ] Contact form has spam protection (honeypot field)
- [ ] HTTPS enforced
- [ ] Regular dependency updates (if you add any build tools later)

## Notes

- GitHub Pages deployment typically takes 1-2 minutes
- DNS changes can take up to 48 hours
- Browser cache may need clearing to see changes (Ctrl+F5 / Cmd+Shift+R)
- Use private/incognito mode to test without cache

## Deployment Log

Keep a record of major deployments:

| Date | Changes | Deployed By | Issues |
|------|---------|-------------|--------|
| 2026-01-05 | Initial site launch | - | None |
|  |  |  |  |
|  |  |  |  |

---

For questions or issues, refer to README.md or SETUP.md.
