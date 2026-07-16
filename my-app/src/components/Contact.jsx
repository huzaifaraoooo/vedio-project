import { useState } from 'react'

const initialForm = { name: '', email: '', subject: '', message: '', company: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  const name = values.name.trim(), email = values.email.trim(), subject = values.subject.trim(), message = values.message.trim()
  if (name.length < 2 || name.length > 80) errors.name = 'Please enter a name between 2 and 80 characters.'
  if (!emailPattern.test(email) || email.length > 150) errors.email = 'Please enter a valid email address under 150 characters.'
  if (subject.length < 3 || subject.length > 150) errors.subject = 'Please enter a subject between 3 and 150 characters.'
  if (message.length < 10 || message.length > 3000) errors.message = 'Please enter a message between 10 and 3000 characters.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const update = event => {
    const { name, value } = event.target
    setForm(current => ({ ...current, [name]: value }))
    if (errors[name]) setErrors(current => ({ ...current, [name]: '' }))
  }

  const submit = async event => {
    event.preventDefault()
    if (submitting) return
    const nextErrors = validate(form)
    setErrors(nextErrors)
    setStatus({ type: '', message: '' })
    if (Object.keys(nextErrors).length) return

    setSubmitting(true)
    try {
      const request = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await request.json().catch(() => ({}))
      if (!request.ok) {
        if (result.fields) setErrors(result.fields)
        throw new Error(result.error || 'Request failed')
      }
      setForm(initialForm)
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. I’ll get back to you soon.' })
    } catch {
      setStatus({ type: 'error', message: 'Your message could not be sent. Please try again or email me directly at huzaifaraoooo@gmail.com.' })
    } finally {
      setSubmitting(false)
    }
  }

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', maxLength: 80 },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', maxLength: 150 },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'What would you like to discuss?', maxLength: 150 },
  ]

  return <section className="contact" id="contact">
    <div className="contact-intro" data-reveal><div className="section-label">06 / Contact</div><p className="eyebrow">Let’s build something useful</p><h2>Have a project,<br />internship or <i>opportunity?</i></h2><a className="email-link" href="mailto:huzaifaraoooo@gmail.com">huzaifaraoooo@gmail.com ↗</a><div className="socials"><a href="https://github.com/huzaifaraoooo" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/rao-huzaifa-674446361/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div>
    <form className="contact-form" onSubmit={submit} noValidate data-reveal aria-busy={submitting}>
      <p className="form-note">Send a message directly to my inbox.</p>
      <div className="honeypot" aria-hidden="true"><label htmlFor="company">Company</label><input id="company" name="company" value={form.company} onChange={update} tabIndex="-1" autoComplete="off" /></div>
      {fields.map(field => <div className="form-field" key={field.name}><label htmlFor={field.name}>{field.label}</label><input id={field.name} name={field.name} type={field.type} placeholder={field.placeholder} value={form[field.name]} onChange={update} maxLength={field.maxLength} disabled={submitting} aria-invalid={Boolean(errors[field.name])} aria-describedby={`${field.name}-error`} /><span id={`${field.name}-error`} className="field-error" role="alert">{errors[field.name]}</span></div>)}
      <div className="form-field"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="5" placeholder="Tell me about your project or opportunity…" value={form.message} onChange={update} maxLength="3000" disabled={submitting} aria-invalid={Boolean(errors.message)} aria-describedby="message-error" /><span id="message-error" className="field-error" role="alert">{errors.message}</span></div>
      <button type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send Message'} <span>↗</span></button>
      {status.type && <p className={`form-status ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>{status.type === 'error' ? <>Your message could not be sent. Please try again or email me directly at <a href="mailto:huzaifaraoooo@gmail.com">huzaifaraoooo@gmail.com</a>.</> : status.message}</p>}
    </form>
  </section>
}
