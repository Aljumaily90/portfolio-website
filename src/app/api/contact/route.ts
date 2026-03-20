import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, privacy } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
    }
    if (!privacy) {
      return NextResponse.json({ error: 'Datenschutz muss bestätigt werden.' }, { status: 400 })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse.' }, { status: 400 })
    }

    const formspreeUrl = process.env.FORMSPREE_URL || 'https://formspree.io/f/xzdjwedj'
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL

    // Formspree (primary) + n8n (parallel, non-blocking)
    const formspreePromise = fetch(formspreeUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
    })

    const n8nPromise = n8nWebhookUrl
      ? fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, nachricht: message, unternehmen: subject }),
        }).catch((err) => console.error('n8n webhook error:', err))
      : Promise.resolve()

    const [res] = await Promise.all([formspreePromise, n8nPromise])

    if (!res.ok) {
      const data = await res.json()
      console.error('Formspree error:', data)
      return NextResponse.json({ error: 'Nachricht konnte nicht gesendet werden.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Interner Serverfehler.' }, { status: 500 })
  }
}
