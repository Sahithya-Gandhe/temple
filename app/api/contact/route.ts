import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send emails using EmailJS
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID
    const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID

    if (!serviceId || !publicKey || !adminTemplateId || !autoReplyTemplateId) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      phone_number: phone || 'Not provided',
      subject: subject,
      message: message,
      reply_to: email,
      to_name: name,
      submission_date: new Date().toLocaleString('en-IN', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata'
      })
    }

    console.log('Sending email with:', {
      serviceId,
      adminTemplateId,
      autoReplyTemplateId,
      publicKey: publicKey.substring(0, 5) + '...' // Log partial key for security
    })

    // Send email to temple administration
    const adminResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: adminTemplateId,
        user_id: publicKey,
        template_params: templateParams
      })
    })

    if (!adminResponse.ok) {
      const errorData = await adminResponse.text()
      console.error('EmailJS admin error:', adminResponse.status, errorData)
      throw new Error(`Failed to send admin email: ${errorData}`)
    }

    // Send auto-reply to the user
    const autoReplyResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: autoReplyTemplateId,
        user_id: publicKey,
        template_params: templateParams
      })
    })

    if (!autoReplyResponse.ok) {
      const errorData = await autoReplyResponse.text()
      console.error('EmailJS auto-reply error:', autoReplyResponse.status, errorData)
      throw new Error(`Failed to send auto-reply email: ${errorData}`)
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
