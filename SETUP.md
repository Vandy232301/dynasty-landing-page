# Dynasty Landing Page - Complete Setup Guide

Welcome! This guide will walk you through setting up and running the Dynasty landing page.

## 🚀 Quick Start (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Visit http://localhost:3000
```

That's it! Your landing page is now running locally.

## 📋 What's Included

This landing page includes:

✅ **Modern Tech Stack**
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations

✅ **Features**
- Fully responsive design (mobile, tablet, desktop)
- Smooth parallax animations
- Mobile-friendly navigation menu
- Scroll-to-top button
- SEO optimized
- Fast loading times
- Accessible design

✅ **SEO & Performance**
- Meta tags configured
- Open Graph support
- Structured data (JSON-LD)
- Sitemap generation
- Image optimization
- Code splitting

✅ **Components**
- Mobile menu with smooth animations
- Scroll animations
- Loading screen
- Animated counters
- Feature cards
- Parallax sections

## 📁 Project Structure

```
dynasty_landing_page/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── MobileMenu.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── ParallaxSection.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── FeatureCard.tsx
│   │   └── Analytics.tsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useScrollAnimation.ts
│   │   └── useIntersectionObserver.ts
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── manifest.ts         # PWA manifest
├── public/
│   ├── images/             # All images from Figma
│   │   ├── logo.svg
│   │   ├── partner-logo-*.svg
│   │   ├── result-screenshot-*.png
│   │   └── ...
│   └── robots.txt          # SEO robots file
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Documentation
```

## 🎨 Design Features

### Colors
- **Primary:** `#5500FF` (Purple)
- **Dark Background:** `#000000`
- **Dark Secondary:** `#0B0B0B`
- **Borders:** `#151515`

### Typography
- **Font:** Inter (Google Fonts)
- **Hero Heading:** 45px
- **Section Titles:** 45px
- **Body Text:** 18px
- **Small Text:** 12px

### Sections

1. **Header** - Fixed navigation with mobile menu
2. **Hero Section** - Main headline with parallax background
3. **Showcase** - Large showcase image
4. **Trust Badges** - Partner logos
5. **Secondary Hero** - Supporting message
6. **Three Pillars** - Memecoin, Futures, Wealth trading
7. **Why It Works** - Feature highlights
8. **Results** - Trading results gallery
9. **Test CTA** - Free community offer
10. **Final CTA** - Main signup call-to-action
11. **Footer** - Disclaimer and legal text

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Run development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server (must build first)
npm start

# Run linter
npm run lint
```

## 🌐 Customization

### Update Content
Edit `app/page.tsx` to change:
- Headings and text
- CTA button links
- Section content
- Images

### Update Styles
Edit `tailwind.config.ts` to change:
- Colors
- Fonts
- Spacing
- Breakpoints

### Update SEO
Edit `app/layout.tsx` to change:
- Page title
- Meta description
- Keywords
- Open Graph tags

See `CUSTOMIZATION.md` for detailed instructions.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All images, text, and layouts adapt automatically.

## ⚡ Performance

### Current Optimizations
- Next.js Image component for automatic optimization
- WebP/AVIF image formats
- Lazy loading for below-the-fold content
- Code splitting for faster initial load
- Optimized fonts with display swap
- Minimal JavaScript bundle size

### Expected Performance
- **Lighthouse Score:** 95+ on all metrics
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s

## 🔍 SEO Features

### Meta Tags
- Title and description
- Open Graph for social sharing
- Twitter Cards
- Keywords

### Structured Data
- Organization schema
- Offer schema
- Proper semantic HTML

### Technical SEO
- Sitemap.xml (auto-generated)
- Robots.txt
- Clean URLs
- Fast loading times
- Mobile-friendly
- Accessible design

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Done! Vercel will automatically:
- Build your project
- Optimize assets
- Set up HTTPS
- Configure CDN
- Enable auto-deployments

### Deploy to Other Platforms

See `DEPLOYMENT.md` for instructions on:
- Netlify
- Docker
- Custom VPS
- Other hosting providers

## 📊 Analytics (Optional)

### Google Analytics
1. Get your GA tracking ID
2. Create `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
3. Analytics will auto-load

### Custom Events
Track CTA clicks and conversions in `app/page.tsx`.

## 🐛 Troubleshooting

### Images Not Showing
- Check images exist in `public/images/`
- Verify correct file paths
- Clear browser cache

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Styling Issues
- Clear Tailwind cache
- Check for typos in class names
- Verify Tailwind config

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill
# Or use different port
npm run dev -- -p 3001
```

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

### Guides
- `README.md` - Project overview
- `CUSTOMIZATION.md` - Detailed customization guide
- `DEPLOYMENT.md` - Deployment instructions

## ✅ Pre-Launch Checklist

Before going live, ensure you:

- [ ] Update all text content
- [ ] Replace placeholder images
- [ ] Update CTA links with real URLs
- [ ] Configure domain/URL
- [ ] Add Google Analytics (optional)
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check all links work
- [ ] Verify SEO meta tags
- [ ] Test form submissions (if any)
- [ ] Set up error monitoring
- [ ] Configure SSL/HTTPS
- [ ] Submit sitemap to Google
- [ ] Test page speed
- [ ] Check accessibility

## 🎯 Next Steps

1. **Customize Content**
   - Update text in `app/page.tsx`
   - Replace images in `public/images/`
   - Update colors in `tailwind.config.ts`

2. **Set Up Domain**
   - Purchase domain
   - Configure DNS
   - Deploy to hosting

3. **Add Analytics**
   - Set up Google Analytics
   - Add conversion tracking
   - Monitor performance

4. **Launch!**
   - Test everything
   - Deploy to production
   - Share with your community

## 💬 Support

Need help? Check:
- This README
- CUSTOMIZATION.md
- DEPLOYMENT.md
- Next.js documentation
- GitHub Issues

## 🎉 You're All Set!

Your Dynasty landing page is ready to go. Happy customizing!

---

**Note:** Replace all placeholder URLs and content with your actual information before deploying to production.

