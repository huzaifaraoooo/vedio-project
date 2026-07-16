import nodemailer from 'nodemailer'
import process from 'node:process'

const RECEIVER_FALLBACK = 'huzaifaraoooo@gmail.com'
const limits = { name: 80, email: 150, subject: 150, message: 3000 }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const response = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  body: JSON.stringify(body),
})

const clean = (value) => typeof value === 'string' ? value.trim() : ''
const escapeHtml = (value) => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[character])

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return response(405, { error: 'Method not allowed.' })
  if ((event.body || '').length > 8000) return response(413, { error: 'Request is too large.' })

  let body
  try { body = JSON.parse(event.body || '{}') } catch { return response(400, { error: 'Invalid JSON body.' }) }
  if (clean(body.company)) return response(400, { error: 'Submission rejected.' })

  const values = {
    name: clean(body.name),
    email: clean(body.email),
    subject: clean(body.subject),
    message: clean(body.message),
  }
  const errors = {}
  if (values.name.length < 2 || values.name.length > limits.name) errors.name = 'Name must contain 2–80 characters.'
  if (!emailPattern.test(values.email) || values.email.length > limits.email) errors.email = 'Enter a valid email address under 150 characters.'
  if (values.subject.length < 3 || values.subject.length > limits.subject) errors.subject = 'Subject must contain 3–150 characters.'
  if (values.message.length < 10 || values.message.length > limits.message) errors.message = 'Message must contain 10–3000 characters.'
  if (Object.keys(errors).length) return response(400, { error: 'Please correct the submitted fields.', fields: errors })

  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_RECEIVER } = process.env
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) return response(500, { error: 'Email service is not configured.' })

  const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD } })
  const text = `Portfolio Contact Message\n\nName:\n${values.name}\n\nEmail:\n${values.email}\n\nSubject:\n${values.subject}\n\nMessage:\n${values.message}`
  const html = `<h2>Portfolio Contact Message</h2><p><strong>Name:</strong><br>${escapeHtml(values.name)}</p><p><strong>Email:</strong><br>${escapeHtml(values.email)}</p><p><strong>Subject:</strong><br>${escapeHtml(values.subject)}</p><p><strong>Message:</strong><br>${escapeHtml(values.message).replace(/\n/g, '<br>')}</p>`

  try {
    await transporter.sendMail({
      from: `Rao Huzaifa Portfolio <${GMAIL_USER}>`,
      to: CONTACT_RECEIVER || RECEIVER_FALLBACK,
      replyTo: values.email,
      subject: `Portfolio Contact: ${values.subject}`,
      text,
      html,
    })
    return response(200, { message: 'Message sent successfully.' })
  } catch {
    return response(500, { error: 'Message could not be sent.' })
  }
}
