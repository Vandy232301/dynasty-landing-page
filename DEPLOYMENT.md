# Deployment Guide for Dynasty Landing Page

## Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- Git

## Environment Setup

1. Copy the environment variables:
```bash
cp .env.example .env.local
```

2. Update the values in `.env.local` with your actual URLs and IDs

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Build for Production

1. Create a production build:
```bash
npm run build
```

2. Test the production build locally:
```bash
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Option 2: Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

### Option 3: Docker

1. Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

2. Build and run:
```bash
docker build -t dynasty-landing .
docker run -p 3000:3000 dynasty-landing
```

## Performance Optimization

### Image Optimization
- All images are optimized using Next.js Image component
- Images are served in WebP/AVIF format when supported
- Lazy loading is enabled for below-the-fold images

### Code Splitting
- Automatic code splitting by Next.js
- Dynamic imports for heavy components
- Route-based code splitting

### Caching Strategy
- Static assets are cached indefinitely
- API routes can be cached using `revalidate`
- Use CDN for optimal performance

## SEO Checklist

- [x] Meta tags configured
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Semantic HTML
- [x] Alt tags for images
- [x] Mobile responsive
- [ ] Submit sitemap to Google Search Console
- [ ] Setup Google Analytics
- [ ] Setup social media meta images

## Monitoring

### Performance Monitoring
- Use Vercel Analytics or Google PageSpeed Insights
- Monitor Core Web Vitals:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1

### Error Monitoring
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Google Analytics for user behavior

## Post-Deployment

1. Test all CTAs and links
2. Verify mobile responsiveness
3. Check page load speed
4. Test all animations
5. Verify SEO meta tags
6. Submit to Google Search Console
7. Add to Discord/Telegram for tracking

## Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version: `node -v` (should be 18.17+)

### Image Issues
- Ensure all images exist in `/public/images`
- Check image paths are correct
- Verify image formats are supported

### Performance Issues
- Enable caching headers
- Use CDN for static assets
- Optimize images further
- Reduce bundle size

## Updates and Maintenance

- Keep dependencies updated: `npm update`
- Monitor for security vulnerabilities: `npm audit`
- Regular testing on different devices/browsers
- Update content based on user feedback

## Support

For issues or questions, contact the development team.

