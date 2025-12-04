# Article Templates for Completion

## Copy these templates and add to `/src/data/blogArticles.ts`

---

## ARTICLE 6: How to Deploy a Next.js App on Vercel

```typescript
{
  id: "6",
  slug: "how-to-deploy-nextjs-app-on-vercel",
  title: "How to Deploy a Next.js App on Vercel: Complete Step-by-Step Guide",
  description: "Learn how to deploy your Next.js application to Vercel with this comprehensive guide covering setup, configuration, environment variables, and best practices.",
  category: "Deployment",
  author: "TechProjectHub",
  publishDate: "2024-12-06",
  readingTime: 8,
  featuredImage: "/images/blog/vercel-deployment.jpg",
  tags: ["Next.js", "Vercel", "Deployment", "Hosting"],
  content: `# How to Deploy a Next.js App on Vercel: Complete Step-by-Step Guide

Vercel is the best platform for deploying Next.js applications. Created by the same team that built Next.js, it offers seamless integration, automatic deployments, and excellent performance.

## Why Choose Vercel for Next.js?

**Advantages**:
- Zero configuration deployment
- Automatic HTTPS and SSL
- Global CDN
- Serverless functions support
- Preview deployments for every push
- Free tier for personal projects

## Prerequisites

Before deploying, ensure you have:
- A Next.js project ready to deploy
- Git repository (GitHub, GitLab, or Bitbucket)
- Vercel account (free to create)
- Node.js installed locally

## Step 1: Prepare Your Next.js Project

**Check package.json**:
\\\`\\\`\\\`json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
\\\`\\\`\\\`

**Test build locally**:
\\\`\\\`\\\`bash
npm run build
npm run start
\\\`\\\`\\\`

## Step 2: Push to Git Repository

\\\`\\\`\\\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
\\\`\\\`\\\`

## Step 3: Connect to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Sign up or log in
3. Click "Add New Project"
4. Import your Git repository
5. Select your repository from the list

## Step 4: Configure Project Settings

**Framework Preset**: Next.js (auto-detected)

**Build Settings**:
- Build Command: \\\`next build\\\`
- Output Directory: \\\`.next\\\`
- Install Command: \\\`npm install\\\`

**Root Directory**: Leave as \\\`./\\\` unless using monorepo

## Step 5: Environment Variables

Add environment variables in Vercel dashboard:

1. Go to Project Settings
2. Click "Environment Variables"
3. Add your variables:
   - \\\`DATABASE_URL\\\`
   - \\\`API_KEY\\\`
   - \\\`NEXT_PUBLIC_API_URL\\\`

**Important**: Variables starting with \\\`NEXT_PUBLIC_\\\` are exposed to the browser.

## Step 6: Deploy

Click **"Deploy"** and wait for:
- Installing dependencies
- Building application
- Deploying to edge network

**Deployment time**: Usually 1-3 minutes

## Step 7: Verify Deployment

Visit your deployment URL:
- Production: \\\`https://your-project.vercel.app\\\`
- Check all pages load correctly
- Test API routes
- Verify environment variables work

## Advanced Configuration

**Custom Domain**:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

**vercel.json Configuration**:
\\\`\\\`\\\`json
{
  "rewrites": [
    { "source": "/api/:path*", "destination": "/api/:path*" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
\\\`\\\`\\\`

## Automatic Deployments

Every git push triggers:
- **Production deployment** (main branch)
- **Preview deployment** (other branches)

**Preview URLs** are unique for each commit, perfect for testing.

## Best Practices

1. **Use Environment Variables**: Never commit secrets
2. **Test Builds Locally**: Run \\\`npm run build\\\` before pushing
3. **Monitor Performance**: Use Vercel Analytics
4. **Set Up Domains**: Use custom domains for production
5. **Enable Branch Deployments**: Test features before merging

## Troubleshooting

**Build Fails**:
- Check build logs in Vercel dashboard
- Verify all dependencies are in package.json
- Test build locally first

**Environment Variables Not Working**:
- Ensure variables are set in Vercel dashboard
- Redeploy after adding variables
- Check variable names (case-sensitive)

**404 Errors**:
- Verify file structure matches routes
- Check next.config.js for rewrites
- Ensure dynamic routes are properly configured

## Performance Optimization

**Image Optimization**:
\\\`\\\`\\\`jsx
import Image from 'next/image'

<Image 
  src="/hero.jpg" 
  width={800} 
  height={600}
  alt="Hero image"
/>
\\\`\\\`\\\`

**API Routes**:
- Use serverless functions
- Implement caching
- Optimize database queries

## Monitoring and Analytics

Enable Vercel Analytics:
1. Go to Project Settings
2. Enable Analytics
3. View real-time metrics
4. Monitor Core Web Vitals

## Conclusion

Deploying Next.js to Vercel is straightforward and powerful. With automatic deployments, preview URLs, and excellent performance, it's the ideal platform for Next.js applications.

Ready to deploy your project? Browse our [Next.js projects](/projects) for complete examples with deployment configurations.`
}
```

---

## ARTICLE 7: How to Integrate Razorpay

```typescript
{
  id: "7",
  slug: "how-to-integrate-razorpay-in-website",
  title: "How to Integrate Razorpay in a Website: Frontend + Backend Guide",
  description: "Complete guide to integrating Razorpay payment gateway in your website with frontend checkout, backend verification, and security best practices.",
  category: "Payment Integration",
  author: "TechProjectHub",
  publishDate: "2024-12-07",
  readingTime: 10,
  featuredImage: "/images/blog/razorpay-integration.jpg",
  tags: ["Razorpay", "Payment Gateway", "Integration", "Security"],
  content: `# How to Integrate Razorpay in a Website: Frontend + Backend Guide

Razorpay is India's leading payment gateway, supporting multiple payment methods including UPI, cards, wallets, and net banking. This guide covers complete integration from setup to production.

## Why Choose Razorpay?

**Advantages**:
- Multiple payment methods
- Easy integration
- Competitive pricing (2% + GST)
- Instant settlements
- Excellent documentation
- Strong security features

## Prerequisites

- Razorpay account (sign up at razorpay.com)
- Basic knowledge of JavaScript
- Backend server (Node.js, Python, PHP, etc.)
- HTTPS enabled website (required for production)

## Step 1: Create Razorpay Account

1. Visit [razorpay.com](https://razorpay.com)
2. Sign up for an account
3. Complete KYC verification
4. Get API keys from Dashboard

**Test Mode Keys**:
- Key ID: \\\`rzp_test_XXXXXXXXXXXXXXXX\\\`
- Key Secret: \\\`YYYYYYYYYYYYYYYY\\\`

**Live Mode Keys** (after KYC):
- Key ID: \\\`rzp_live_XXXXXXXXXXXXXXXX\\\`
- Key Secret: \\\`YYYYYYYYYYYYYYYY\\\`

## Step 2: Frontend Integration

**Add Razorpay Checkout Script**:
\\\`\\\`\\\`html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
\\\`\\\`\\\`

**Create Payment Button**:
\\\`\\\`\\\`html
<button id="payButton">Pay Now</button>
\\\`\\\`\\\`

**Initialize Razorpay**:
\\\`\\\`\\\`javascript
document.getElementById('payButton').onclick = async function() {
  // 1. Create order on backend
  const response = await fetch('/api/create-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: 50000 }) // Amount in paise
  });
  
  const order = await response.json();
  
  // 2. Open Razorpay checkout
  const options = {
    key: 'rzp_test_XXXXXXXXXXXXXXXX',
    amount: order.amount,
    currency: 'INR',
    name: 'Your Company Name',
    description: 'Product Description',
    order_id: order.id,
    handler: function(response) {
      // 3. Verify payment on backend
      verifyPayment(response);
    },
    prefill: {
      name: 'Customer Name',
      email: 'customer@example.com',
      contact: '9999999999'
    },
    theme: {
      color: '#3399cc'
    }
  };
  
  const razorpay = new Razorpay(options);
  razorpay.open();
};

async function verifyPayment(response) {
  const result = await fetch('/api/verify-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      razorpay_order_id: response.razorpay_order_id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature
    })
  });
  
  const data = await result.json();
  
  if (data.success) {
    alert('Payment Successful!');
    window.location.href = '/success';
  } else {
    alert('Payment Verification Failed');
  }
}
\\\`\\\`\\\`

## Step 3: Backend - Create Order

**Node.js Example**:
\\\`\\\`\\\`javascript
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.post('/api/create-order', async (req, res) => {
  const { amount } = req.body;
  
  const options = {
    amount: amount, // amount in paise
    currency: 'INR',
    receipt: \\\`receipt_\\\${Date.now()}\\\`
  };
  
  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\\\`\\\`\\\`

## Step 4: Backend - Verify Payment

**Signature Verification** (Critical for Security):
\\\`\\\`\\\`javascript
const crypto = require('crypto');

app.post('/api/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
  const body = razorpay_order_id + '|' + razorpay_payment_id;
  
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');
  
  if (expectedSignature === razorpay_signature) {
    // Payment is verified
    // Update database, send confirmation email, etc.
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, error: 'Invalid signature' });
  }
});
\\\`\\\`\\\`

## Security Best Practices

1. **Never Expose Key Secret**: Keep it on backend only
2. **Always Verify Signature**: Don't trust frontend data
3. **Use HTTPS**: Required for production
4. **Validate Amount**: Check amount on backend
5. **Log Transactions**: Maintain audit trail
6. **Handle Webhooks**: For asynchronous updates

## Webhooks Setup

**Configure Webhook**:
1. Go to Razorpay Dashboard → Webhooks
2. Add webhook URL: \\\`https://yoursite.com/api/webhook\\\`
3. Select events: \\\`payment.captured\\\`, \\\`payment.failed\\\`

**Handle Webhook**:
\\\`\\\`\\\`javascript
app.post('/api/webhook', (req, res) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  
  const signature = req.headers['x-razorpay-signature'];
  const body = JSON.stringify(req.body);
  
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
  
  if (signature === expectedSignature) {
    const event = req.body.event;
    const payment = req.body.payload.payment.entity;
    
    if (event === 'payment.captured') {
      // Update order status
    }
  }
  
  res.json({ status: 'ok' });
});
\\\`\\\`\\\`

## Testing

**Test Cards**:
- Card Number: 4111 1111 1111 1111
- CVV: Any 3 digits
- Expiry: Any future date

**Test UPI**:
- UPI ID: success@razorpay

## Going Live

1. **Complete KYC**: Submit documents in dashboard
2. **Switch to Live Keys**: Update environment variables
3. **Test Thoroughly**: Use small amounts first
4. **Enable Payment Methods**: Configure in dashboard
5. **Set Up Settlements**: Add bank account

## Common Issues

**Payment Failed**:
- Check API keys are correct
- Verify HTTPS is enabled
- Check amount is in paise (multiply by 100)

**Signature Mismatch**:
- Ensure correct key secret
- Check order_id and payment_id are correct
- Verify HMAC implementation

## Conclusion

Razorpay integration is straightforward with proper backend verification. Always prioritize security and never trust frontend data alone.

Need a ready-made solution? Check our [e-commerce projects](/projects?category=web) with Razorpay integration included.`
}
```

---

## ARTICLE 8-10: Quick Templates

**Article 8: Noise Removal Tool**
- Category: AI/ML
- Cover: Python libraries (librosa, noisereduce, scipy)
- Include: Code examples, audio processing steps
- Link to: /projects?category=ml

**Article 9: Data Science Capstone Projects**
- Category: Projects
- Cover: 5-6 project ideas with datasets
- Include: Evaluation criteria, tools needed
- Link to: /projects, /blog/power-bi-project-ideas-for-beginners

**Article 10: Project Report Writing**
- Category: Tutorials
- Cover: Report structure, formatting, checklist
- Include: Template sections, tips
- Link to: /projects, /blog/best-final-year-computer-science-projects

---

## Instructions

1. Copy the article objects above
2. Add them to the `blogArticles` array in `/src/data/blogArticles.ts`
3. Ensure proper comma separation
4. Complete articles 8-10 following the same format
5. Each article should be 900-1200 words
6. Include internal links to /projects
7. Add code examples where relevant
8. Use proper markdown formatting

## Tips

- Use \\\`\\\`\\\` for code blocks (escape backticks)
- Include H2 (##) and H3 (###) headings
- Add bullet points and numbered lists
- Link to relevant project categories
- Keep tone educational and helpful
- Target college students and junior developers
