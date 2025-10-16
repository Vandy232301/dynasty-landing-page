# Digital Ocean Deployment Guide

This guide will help you deploy the Dynasty landing page to Digital Ocean using App Platform.

## Prerequisites

1. A Digital Ocean account
2. GitHub repository: https://github.com/Vandy232301/dynasty-landing-page
3. Domain name (optional)

## Deployment Steps

### Option 1: Deploy via Digital Ocean App Platform (Recommended)

1. **Login to Digital Ocean**
   - Go to https://cloud.digitalocean.com/
   - Sign in to your account

2. **Create New App**
   - Click "Create" → "Apps"
   - Choose "GitHub" as source
   - Connect your GitHub account if not already connected
   - Select repository: `Vandy232301/dynasty-landing-page`
   - Select branch: `main`

3. **Configure App Settings**
   - **App Name**: `dynasty-landing-page`
   - **Source Directory**: `/` (root)
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
   - **Environment**: `Node.js`
   - **Node.js Version**: `18.x`

4. **Environment Variables**
   - Add any environment variables if needed:
     ```
     NODE_ENV=production
     NEXT_TELEMETRY_DISABLED=1
     ```

5. **Deploy**
   - Click "Create Resources"
   - Wait for deployment to complete (5-10 minutes)

### Option 2: Deploy via Droplet with Docker

1. **Create Droplet**
   - Create a new Droplet (Ubuntu 22.04 LTS)
   - Choose size: Basic $6/month (1GB RAM) or higher
   - Add SSH key for secure access

2. **Connect to Droplet**
   ```bash
   ssh root@YOUR_DROPLET_IP
   ```

3. **Install Docker**
   ```bash
   # Update system
   apt update && apt upgrade -y
   
   # Install Docker
   curl -fsSL https://get.docker.com -o get-docker.sh
   sh get-docker.sh
   
   # Install Docker Compose
   apt install docker-compose-plugin -y
   ```

4. **Clone Repository**
   ```bash
   git clone https://github.com/Vandy232301/dynasty-landing-page.git
   cd dynasty-landing-page
   ```

5. **Deploy with Docker Compose**
   ```bash
   docker compose up -d
   ```

6. **Configure Firewall**
   ```bash
   ufw allow 22
   ufw allow 80
   ufw allow 443
   ufw enable
   ```

### Option 3: Deploy via Droplet with PM2

1. **Create Droplet** (same as Option 2)

2. **Install Node.js and PM2**
   ```bash
   # Install Node.js 18
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   apt-get install -y nodejs
   
   # Install PM2
   npm install -g pm2
   ```

3. **Clone and Setup**
   ```bash
   git clone https://github.com/Vandy232301/dynasty-landing-page.git
   cd dynasty-landing-page
   npm install
   npm run build
   ```

4. **Start with PM2**
   ```bash
   pm2 start npm --name "dynasty-landing" -- start
   pm2 startup
   pm2 save
   ```

## Custom Domain Setup

1. **Add Domain to Digital Ocean**
   - Go to Networking → Domains
   - Add your domain
   - Update nameservers at your domain registrar

2. **Configure SSL Certificate**
   - Digital Ocean App Platform provides free SSL certificates
   - For Droplet deployment, use Let's Encrypt:
   ```bash
   apt install certbot python3-certbot-nginx -y
   certbot --nginx -d yourdomain.com
   ```

## Performance Optimization

### For App Platform
- The app is already optimized with:
  - Next.js Image optimization
  - Static generation where possible
  - Compression enabled
  - CDN through Digital Ocean

### For Droplet
- Add Nginx as reverse proxy:
  ```bash
  apt install nginx -y
  
  # Create Nginx config
  cat > /etc/nginx/sites-available/dynasty-landing << EOF
  server {
      listen 80;
      server_name yourdomain.com;
      
      location / {
          proxy_pass http://localhost:3000;
          proxy_http_version 1.1;
          proxy_set_header Upgrade \$http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host \$host;
          proxy_set_header X-Real-IP \$remote_addr;
          proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto \$scheme;
          proxy_cache_bypass \$http_upgrade;
      }
  }
  EOF
  
  ln -s /etc/nginx/sites-available/dynasty-landing /etc/nginx/sites-enabled/
  nginx -t
  systemctl restart nginx
  ```

## Monitoring and Maintenance

### App Platform
- Built-in monitoring and logs
- Automatic deployments on git push
- Health checks included

### Droplet
- Monitor with PM2: `pm2 monit`
- View logs: `pm2 logs dynasty-landing`
- Restart: `pm2 restart dynasty-landing`

## Cost Estimation

- **App Platform**: $5-12/month (Basic plan)
- **Droplet**: $6-12/month (Basic droplet)
- **Domain**: $10-15/year (if using custom domain)

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (should be 18.x)
   - Verify all dependencies are in package.json
   - Check build logs in Digital Ocean dashboard

2. **Performance Issues**
   - Enable compression in Nginx
   - Use CDN for static assets
   - Monitor resource usage

3. **SSL Issues**
   - Verify domain DNS settings
   - Check certificate status
   - Ensure proper redirects (HTTP → HTTPS)

### Support
- Digital Ocean Documentation: https://docs.digitalocean.com/
- Next.js Deployment: https://nextjs.org/docs/deployment

## Next Steps

1. Set up monitoring and alerts
2. Configure backup strategy
3. Set up CI/CD pipeline
4. Add analytics tracking
5. Implement error tracking (Sentry, etc.)
