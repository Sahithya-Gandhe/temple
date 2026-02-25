# Email Configuration Guide for Temple Contact Form

## Overview
This setup uses EmailJS to send 2 emails when someone submits the contact form:
1. **Admin Email** → Temple trustees receive the full inquiry details
2. **Auto-Reply Email** → User receives confirmation that their message was received

---

## 📋 Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up with: **agastheeswardevasthanam** account (or create new)
3. Verify your email address

---

## 📧 Step 2: Setup Email Service

1. Go to **Email Services** in EmailJS dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or your email provider
4. Connect your temple email:
    - **trustee@agastheeswaradevasthanam.in** (recommended)
    - OR **contact@agastheeswaradevasthanam.in**
5. Copy the **Service ID** (e.g., `service_abc1234`)

---

## 📝 Step 3: Create Template 1 - Admin Notification

### In EmailJS Dashboard:
1. Go to **Email Templates** → **Create New Template**
2. Template Name: `Temple Contact Form - Admin Notification`

### Template Configuration:

#### **To Email:**
```
trustee@agastheeswaradevasthanam.in
```

#### **From Name:**
```
Temple Website - Contact Form
```

#### **From Email:**
```
{{from_email}}
```

#### **Reply To:**
```
{{reply_to}}
```

#### **Subject:**
```
New Inquiry: {{subject}}
```

#### **Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Georgia', serif;
            background-color: #FAF9F6;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 2px solid #C9A24D;
            border-radius: 12px;
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #4A3F35 0%, #5B5B5B 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            color: #C9A24D;
            font-family: 'Georgia', serif;
        }
        .header p {
            margin: 10px 0 0 0;
            font-size: 14px;
            color: #D4B56A;
        }
        .content {
            padding: 30px;
        }
        .field {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #F8F6F2;
            border-left: 4px solid #C9A24D;
            border-radius: 4px;
        }
        .field-label {
            font-weight: bold;
            color: #4A3F35;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }
        .field-value {
            color: #1C1C1C;
            font-size: 15px;
            line-height: 1.6;
            word-wrap: break-word;
        }
        .message-box {
            background-color: #ffffff;
            border: 1px solid #C9A24D;
            padding: 20px;
            border-radius: 8px;
            margin-top: 10px;
            white-space: pre-wrap;
        }
        .footer {
            background-color: #F8F6F2;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #C9A24D;
            font-size: 12px;
            color: #6B6B6B;
        }
        .timestamp {
            color: #C9A24D;
            font-weight: bold;
            text-align: center;
            padding: 15px;
            background-color: #F8F6F2;
            border-top: 1px solid #C9A24D;
            border-bottom: 1px solid #C9A24D;
        }
        .quick-reply-btn {
            display: inline-block;
            background-color: #C9A24D;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 6px;
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🕉 New Temple Inquiry Received</h1>
            <p>Sri Agastheeswara Swamy Devasthanam</p>
        </div>

        <div class="timestamp">
            Received on: {{submission_date}}
        </div>

        <div class="content">
            <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">{{from_name}}</div>
            </div>

            <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value">
                    <a href="mailto:{{from_email}}" style="color: #C9A24D; text-decoration: none;">
                        {{from_email}}
                    </a>
                </div>
            </div>

            <div class="field">
                <div class="field-label">Phone Number</div>
                <div class="field-value">{{phone_number}}</div>
            </div>

            <div class="field">
                <div class="field-label">Subject / Inquiry Type</div>
                <div class="field-value">{{subject}}</div>
            </div>

            <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box field-value">{{message}}</div>
            </div>

            <center>
                <a href="mailto:{{from_email}}?subject=Re: {{subject}}" class="quick-reply-btn">
                    Reply to {{from_name}}
                </a>
            </center>
        </div>

        <div class="footer">
            <p><strong>Sri Agastheeswara Swamy Temple</strong></p>
            <p>Thondavada, Chandragiri Mandal, Tirupati District, Andhra Pradesh</p>
            <p style="margin-top: 10px; font-size: 11px; color: #999;">
                This is an automated notification from the temple website contact form.
            </p>
        </div>
    </div>
</body>
</html>
```

### Save and copy the **Template ID** (e.g., `template_xyz789`)

---

## 📝 Step 4: Create Template 2 - Auto-Reply to User

### In EmailJS Dashboard:
1. Go to **Email Templates** → **Create New Template**
2. Template Name: `Temple Contact Form - Auto Reply`

### Template Configuration:

#### **To Email:**
```
{{from_email}}
```

#### **From Name:**
```
Sri Agastheeswara Devasthanam
```

#### **From Email:**
(Use your verified email from Email Service)
```
trustee@agastheeswaradevasthanam.in
```

#### **Reply To:**
```
contact@agastheeswaradevasthanam.in
```

#### **Subject:**
```
We've received your message - Sri Agastheeswara Temple
```

#### **Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Georgia', serif;
            background-color: #FAF9F6;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #C9A24D 0%, #D4B56A 100%);
            padding: 40px 30px;
            text-align: center;
        }
        .logo {
            width: 80px;
            height: 80px;
            background-color: white;
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
        }
        .header h1 {
            margin: 0;
            font-size: 26px;
            color: white;
            font-weight: normal;
        }
        .content {
            padding: 40px 30px;
            color: #1C1C1C;
        }
        .greeting {
            font-size: 18px;
            color: #4A3F35;
            margin-bottom: 20px;
        }
        .message-summary {
            background-color: #F8F6F2;
            border-left: 4px solid #C9A24D;
            padding: 20px;
            margin: 25px 0;
            border-radius: 4px;
        }
        .message-summary h3 {
            margin: 0 0 10px 0;
            color: #C9A24D;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .message-summary p {
            margin: 5px 0;
            color: #4A3F35;
            font-size: 15px;
        }
        .info-box {
            background: linear-gradient(to right, #4A3F35, #5B5B5B);
            color: white;
            padding: 25px;
            border-radius: 8px;
            margin: 25px 0;
        }
        .info-box h3 {
            margin: 0 0 15px 0;
            color: #C9A24D;
            font-size: 16px;
        }
        .info-box p {
            margin: 8px 0;
            font-size: 14px;
            line-height: 1.6;
        }
        .contact-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 20px;
        }
        .contact-item {
            background-color: #F8F6F2;
            padding: 15px;
            border-radius: 6px;
            text-align: center;
        }
        .contact-item-label {
            font-size: 11px;
            color: #6B6B6B;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
        }
        .contact-item-value {
            color: #C9A24D;
            font-weight: bold;
            font-size: 14px;
        }
        .divider {
            text-align: center;
            margin: 30px 0;
            color: #C9A24D;
            font-size: 20px;
        }
        .footer {
            background-color: #1C1C1C;
            color: white;
            padding: 30px;
            text-align: center;
        }
        .footer p {
            margin: 5px 0;
            font-size: 13px;
            color: #D4B56A;
        }
        .footer .temple-name {
            font-size: 18px;
            color: #C9A24D;
            margin-bottom: 15px;
            font-weight: bold;
        }
        .social-links {
            margin-top: 20px;
        }
        .social-links a {
            color: #C9A24D;
            text-decoration: none;
            margin: 0 10px;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">🕉</div>
            <h1>Sri Agastheeswara Swamy Temple</h1>
        </div>

        <div class="content">
            <p class="greeting">Namaste {{to_name}},</p>

            <p style="font-size: 16px; line-height: 1.8; color: #3A3A3A;">
                Thank you for reaching out to us! We have received your inquiry regarding <strong>"{{subject}}"</strong> 
                and our temple administration will review your message shortly.
            </p>

            <div class="message-summary">
                <h3>📋 Your Submission Details</h3>
                <p><strong>Subject:</strong> {{subject}}</p>
                <p><strong>Received on:</strong> {{submission_date}}</p>
                <p><strong>Reference Email:</strong> {{from_email}}</p>
            </div>

            <div class="info-box">
                <h3>⏱️ What Happens Next?</h3>
                <p>✓ Our team will carefully review your inquiry within <strong>3 business days</strong></p>
                <p>✓ You will receive a detailed response at <strong>{{from_email}}</strong></p>
                <p>✓ For urgent matters, please call us directly at the numbers below</p>
            </div>

            <div class="divider">❖</div>

            <h3 style="color: #C9A24D; text-align: center; margin-bottom: 20px;">Need Immediate Assistance?</h3>

            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-item-label">Temple Timings</div>
                    <div class="contact-item-value">6:00 AM - 8:00 PM</div>
                </div>
                <div class="contact-item">
                    <div class="contact-item-label">Annadanam</div>
                    <div class="contact-item-value">12:30 PM Daily</div>
                </div>
            </div>

            <p style="margin-top: 25px; text-align: center; font-size: 14px; color: #6B6B6B; font-style: italic;">
                "अन्नदानं परं दानं" - The gift of food is the greatest gift
            </p>
        </div>

        <div class="footer">
            <p class="temple-name">Sri Agastheeswara Swamy Devasthanam</p>
            <p>Thondavada, Chandragiri Mandal</p>
            <p>Tirupati District, Andhra Pradesh, India</p>
            <div style="margin: 20px 0; height: 1px; background: rgba(201,162,77,0.3);"></div>
            <p style="font-size: 12px;">
                📧 trustee@agastheeswaradevasthanam.in<br>
                📧 contact@agastheeswaradevasthanam.in
            </p>
            <div class="social-links">
                <a href="https://temple-wheat-ten.vercel.app">Visit Website</a> • 
                <a href="https://temple-wheat-ten.vercel.app/donate">Support Us</a>
            </div>
            <p style="margin-top: 20px; font-size: 11px; color: #6B6B6B;">
                Om Namah Shivaya 🙏
            </p>
        </div>
    </div>
</body>
</html>
```

### Save and copy the **Template ID** (e.g., `template_qwe456`)

---

## 🔑 Step 5: Environment Variables

Add these to your `.env.local` file:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_qwe456
```

### How to get these values:

1. **Service ID**: From Email Services page (e.g., `service_abc1234`)
2. **Public Key**: EmailJS Dashboard → Account → API Keys (starts with `user_` or similar)
3. **Admin Template ID**: From the first template you created
4. **Auto-Reply Template ID**: From the second template you created

---

## 📦 Step 6: Install EmailJS (if needed)

```bash
npm install @emailjs/browser
```

---

## ✅ Step 7: Test Your Setup

### EmailJS Dashboard Testing:
1. Go to each template in EmailJS
2. Click **Test It** button
3. Fill in test values for all variables:
   - `from_name`: Test User
   - `from_email`: test@example.com
   - `phone_number`: 9876543210
   - `subject`: Test Inquiry
   - `message`: This is a test message
   - `submission_date`: February 7, 2026, 10:30 AM

### Live Testing:
1. Deploy your changes to Vercel
2. Go to https://temple-wheat-ten.vercel.app/contact
3. Fill out the contact form
4. Submit and check:
    - ✅ Admin receives full inquiry details at trustee@agastheeswaradevasthanam.in
   - ✅ User receives auto-reply confirmation at their email

---

## 📊 Variables Used in Templates

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | User's name | Ramesh Kumar |
| `{{from_email}}` | User's email | ramesh@example.com |
| `{{phone_number}}` | User's phone | +91 9876543210 |
| `{{subject}}` | Inquiry subject | General Inquiry |
| `{{message}}` | User's message | I want to know about... |
| `{{reply_to}}` | Reply-to email | ramesh@example.com |
| `{{to_name}}` | Recipient name | Ramesh Kumar |
| `{{submission_date}}` | Submission timestamp | Thursday, February 7, 2026 at 10:30 AM |

---

## 🎨 Customization Tips

### Change Colors:
- **Gold/Sandalwood**: `#C9A24D`
- **Dark Brown**: `#4A3F35`
- **Light Cream**: `#F8F6F2`

### Change Response Time:
In auto-reply template, change "3 business days" to your preferred timeframe.

### Add More Fields:
1. Add field to contact form
2. Pass it in `templateParams` in `/api/contact/route.ts`
3. Use `{{field_name}}` in email template

---

## 🔧 Troubleshooting

### Emails not sending?
1. Check EmailJS dashboard for error logs
2. Verify Service ID and Template IDs are correct
3. Ensure email service is connected and verified
4. Check that `.env.local` variables are set correctly

### Getting 500 errors?
1. Check browser console for detailed error
2. Verify all environment variables are prefixed with `NEXT_PUBLIC_`
3. Restart dev server after adding env variables

### Auto-reply not working?
1. Verify "From Email" in EmailJS service is verified
2. Check spam/junk folder
3. Test template individually in EmailJS dashboard

---

## 📱 Next Steps

After setup is complete, update the contact form to actually submit data (next file update will handle this).
