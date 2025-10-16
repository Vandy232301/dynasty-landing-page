# Customization Guide

This guide will help you customize the Dynasty landing page to match your specific needs.

## Updating Content

### Hero Section
File: `app/page.tsx`

Look for the Hero Section and update:
- Main heading text
- Subheading text
- CTA button text and links

### Three Pillars (Trading Sections)
File: `app/page.tsx`

Each trading section (Memecoin, Futures, Wealth) can be customized:
- Section titles
- Description text
- Performance statistics
- Images

### Trust/Partner Logos
Images: `public/images/partner-logo-*.svg`

Replace these files with your actual partner logos while keeping the same filenames.

### Results Section
Images: `public/images/result-screenshot-*.png`

Replace with your actual trading results screenshots.

## Styling Changes

### Colors
File: `tailwind.config.ts`

Update the color scheme:
```typescript
colors: {
  primary: '#5500FF',        // Main brand color
  dark: '#000000',           // Background
  'dark-secondary': '#0B0B0B', // Cards background
  'dark-border': '#151515',   // Border color
  'dark-accent': '#181818',   // Accent elements
}
```

### Typography
File: `tailwind.config.ts`

Change the font family:
```typescript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

Don't forget to import the font in `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'
const yourFont = YourFont({ subsets: ['latin'] })
```

### Spacing and Sizes
File: `app/page.tsx`

Adjust:
- Section padding: `py-16`, `py-20`
- Container max width: `max-w-[1512px]`
- Text sizes: `text-[45px]`, `text-lg`, etc.
- Border radius: `rounded-sm`

## Adding New Sections

1. Add a new section in `app/page.tsx`:
```tsx
<section className="max-w-[1512px] mx-auto px-6 py-16">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-[45px] leading-[1.21] font-normal text-center mb-16"
  >
    Your Section Title
  </motion.h2>
  {/* Your content */}
</section>
```

2. Add navigation link in the header if needed

## Animations

### Adjusting Animation Speed
File: `app/page.tsx`

Modify the `transition` properties:
```tsx
transition={{ duration: 0.8, delay: 0.2 }}
```

### Parallax Effects
File: `app/page.tsx`

Adjust parallax speed in the hero section:
```tsx
const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
// Change '50%' to adjust parallax intensity
```

### Hover Effects
Add or modify hover states:
```tsx
whileHover={{ scale: 1.05 }}
className="... hover:border-primary/50 transition-colors"
```

## Links and CTAs

### Update CTA URLs
File: `app/page.tsx`

Find all CTA buttons and update `href` attributes:
```tsx
<a href="YOUR_SIGNUP_URL">
  Accesează DYNASTY
</a>
```

### Social Media Links
Update in multiple places:
- Footer
- Mobile menu
- Header (if applicable)

## SEO Optimization

### Meta Tags
File: `app/layout.tsx`

Update metadata:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  keywords: ['your', 'keywords'],
  // ... other meta tags
}
```

### Structured Data
File: `app/layout.tsx`

Update the JSON-LD structured data with your information:
```typescript
{
  '@type': 'Organization',
  name: 'Your Name',
  url: 'Your URL',
  // ... other properties
}
```

### Sitemap
File: `app/sitemap.ts`

Update the URL:
```typescript
url: 'https://yourdomain.com',
```

## Images

### Adding New Images
1. Place images in `public/images/`
2. Use Next.js Image component:
```tsx
<Image
  src="/images/your-image.png"
  alt="Description"
  width={800}
  height={600}
  className="..."
/>
```

### Image Optimization
- Use WebP or PNG format
- Optimize before uploading (use tools like TinyPNG)
- Provide appropriate width/height props
- Use `priority` prop for above-the-fold images

## Mobile Responsiveness

### Breakpoints
Tailwind CSS breakpoints used:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-Specific Styles
Add responsive classes:
```tsx
className="text-3xl md:text-[45px] px-4 md:px-6"
```

### Mobile Menu
File: `app/components/MobileMenu.tsx`

Customize the mobile navigation menu appearance and behavior.

## Performance Optimization

### Image Loading
- Use `loading="lazy"` for below-fold images
- Use `priority` for hero images
- Optimize image sizes

### Code Splitting
- Keep components modular
- Use dynamic imports for heavy components:
```tsx
const HeavyComponent = dynamic(() => import('./HeavyComponent'))
```

### Caching
Configure in `next.config.mjs`:
```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
}
```

## Analytics Integration

### Google Analytics
1. Get your GA ID from Google Analytics
2. Add to environment variables
3. The Analytics component will automatically load it

### Custom Events
Track button clicks:
```tsx
onClick={() => {
  if (window.gtag) {
    window.gtag('event', 'button_click', {
      event_category: 'CTA',
      event_label: 'Access Dynasty'
    })
  }
}}
```

## Testing

### Local Testing
```bash
npm run dev
```

### Production Build Testing
```bash
npm run build
npm start
```

### Cross-Browser Testing
Test on:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

## Common Issues

### Images Not Loading
- Check file paths
- Verify images exist in `public/images/`
- Check file extensions

### Animations Not Working
- Ensure Framer Motion is installed
- Check browser compatibility
- Verify viewport settings

### Styling Issues
- Clear browser cache
- Check Tailwind classes
- Verify CSS specificity

## Best Practices

1. **Always test locally before deploying**
2. **Keep backups of working versions**
3. **Use version control (Git)**
4. **Test on multiple devices**
5. **Optimize images before uploading**
6. **Keep dependencies updated**
7. **Monitor performance metrics**
8. **Use semantic HTML**
9. **Maintain accessibility standards**
10. **Document your changes**

## Support

If you need help with customization, refer to:
- Next.js documentation: https://nextjs.org/docs
- Tailwind CSS documentation: https://tailwindcss.com/docs
- Framer Motion documentation: https://www.framer.com/motion/

