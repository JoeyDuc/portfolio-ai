/**
 * Contact Section
 * ──────────────────────────────────────────────────
 * Features:
 *  • EmailJS integration (credentials loaded from .env)
 *  • Full form validation (required fields, email format)
 *  • Loading / success / error states
 *  • Copy-to-clipboard with Toast notifications
 *  • Social links (GitHub, LinkedIn, Email, Phone)
 * ──────────────────────────────────────────────────
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../hooks/useAnimations';
import { CONTACT_INFO } from '../data/portfolioData';
import { EMAILJS_CONFIG, PUBLIC_CONTACT_EMAIL, isEmailJSConfigured } from '../config/emailjs';
import Toast from './Toast';

// ─── Icon Components ──────────────────────────────
const ICONS = {
  github: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  instagram: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  ),
  email: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  phone: (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
};

// ─── Validation ───────────────────────────────────
function validate(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Full name is required';
  else if (data.name.trim().length < 2) errors.name = 'Enter at least 2 characters';
  else if (data.name.length > 100) errors.name = 'Use no more than 100 characters';
  if (!data.email.trim()) errors.email = 'Email address is required';
  else if (data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = 'Enter a valid email address';
  if (!data.subject.trim()) errors.subject = 'Subject is required';
  else if (data.subject.trim().length < 3) errors.subject = 'Enter at least 3 characters';
  else if (data.subject.length > 200) errors.subject = 'Use no more than 200 characters';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 20) errors.message = 'Message must be at least 20 characters';
  else if (data.message.length > 5000) errors.message = 'Use no more than 5,000 characters';
  return errors;
}

const CONTACT_EMAIL = PUBLIC_CONTACT_EMAIL || CONTACT_INFO.email;
const CONTACT_SOCIAL_LINKS = [
  { label: 'GitHub', href: CONTACT_INFO.githubUrl, icon: 'github' },
  { label: 'LinkedIn', href: CONTACT_INFO.linkedinUrl, icon: 'linkedin' },
  { label: 'Email', href: CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : null, icon: 'email' },
].filter((link) => link.href);

// ─── Copy Button ──────────────────────────────────
function CopyButton({ text, onCopied }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopied?.(text);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API may be blocked – silent fail
    }
  }, [text, onCopied]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
      aria-label={`Copy ${text}`}
      style={{
        background: copied ? 'rgba(34,197,94,0.12)' : 'rgba(37,99,235,0.1)',
        border: `1px solid ${copied ? 'rgba(34,197,94,0.35)' : 'rgba(37,99,235,0.25)'}`,
        borderRadius: '7px',
        padding: '0.22rem 0.55rem',
        fontSize: '0.68rem',
        fontWeight: '700',
        color: copied ? '#4ade80' : 'var(--neon-blue)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        flexShrink: 0,
        letterSpacing: '0.02em',
      }}
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}

// ─── Contact info rows ────────────────────────────
const CONTACT_ITEMS = [
  {
    icon: ICONS.phone,
    label: 'Phone',
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone?.replace(/\s/g, '') || ''}`,
    copyText: CONTACT_INFO.phone,
    external: false,
  },
  {
    icon: ICONS.email,
    label: 'Email',
    value: CONTACT_EMAIL,
    href: CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : null,
    copyText: CONTACT_EMAIL,
    external: false,
  },
  {
    icon: ICONS.linkedin,
    label: 'LinkedIn',
    value: CONTACT_INFO.linkedin,
    href: CONTACT_INFO.linkedinUrl,
    copyText: CONTACT_INFO.linkedin,
    external: true,
  },
  {
    icon: ICONS.github,
    label: 'GitHub',
    value: CONTACT_INFO.github,
    href: CONTACT_INFO.githubUrl,
    copyText: CONTACT_INFO.github,
    external: true,
  },
].filter((item) => item.value && item.href);

// ─── Field component ──────────────────────────────
function Field({ name, label, error, children }) {
  return (
    <div>
      <label htmlFor={`contact-${name}`} style={{
        display: 'block',
        fontSize: '0.78rem',
        fontWeight: '600',
        color: 'var(--text-secondary)',
        marginBottom: '0.375rem',
        letterSpacing: '0.02em',
      }}>
        {label} <span style={{ color: '#f87171' }}>*</span>
      </label>
      {children}
      {error && (
        <p id={`contact-${name}-error`} role="alert" style={{ color: '#f87171', fontSize: '0.72rem', marginTop: '0.3rem' }}>
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────
export default function Contact() {
  const [headingRef, headingVisible] = useScrollReveal(0.1);

  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors,   setErrors]   = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formError, setFormError] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const submissionRef = useRef(false);
  const honeypotRef = useRef(null);
  const successRef = useRef(null);
  const configured = isEmailJSConfigured();

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  // Toast state
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = useCallback((message, type = 'success') => {
    setToast({ show: true, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast((t) => ({ ...t, show: false }));
  }, []);

  // Handle copy-to-clipboard toast
  const handleCopied = useCallback(() => {
    showToast('Copied to clipboard.', 'info');
  }, [showToast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (errors[name]) setErrors((previous) => ({ ...previous, [name]: '' }));
    if (status === 'error') setStatus('idle');
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldError = validate({ ...formData, [name]: value })[name];
    setErrors((previous) => ({ ...previous, [name]: fieldError || '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submissionRef.current) return;

    const fieldErrors = validate(formData);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length) {
      e.currentTarget.querySelector(`[name="${Object.keys(fieldErrors)[0]}"]`)?.focus();
      return;
    }
    if (honeypotRef.current?.value) {
      setFormError('Unable to submit this form. Please contact me by email.');
      setStatus('error');
      return;
    }
    if (!configured) {
      setFormError('Message delivery is currently unavailable. Please contact me by email.');
      setStatus('error');
      return;
    }

    const message = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      reply_to: formData.email.trim(),
    };
    submissionRef.current = true;
    setFormError('');
    setStatus('sending');

    try {
      // The recipient is fixed in the EmailJS template, not supplied by visitors.
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        message,
        {
          publicKey: EMAILJS_CONFIG.publicKey,
          limitRate: { id: 'portfolio-contact', throttle: 10000 },
        }
      );
      if (!response || !Number.isInteger(response.status) || response.status < 200 || response.status >= 300) {
        throw new Error('The provider did not confirm submission.');
      }
      setSubmittedName(message.from_name);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('success');
      // Keep the submission lock until the visitor chooses to start a new message.
    } catch (error) {
      submissionRef.current = false;
      setFormError(error?.status === 429
        ? 'Please wait a moment before sending another message.'
        : 'Your message could not be submitted. Please try again or contact me by email.');
      setStatus('error');
    }
  };

  const startAnotherMessage = () => {
    submissionRef.current = false;
    setStatus('idle');
    setFormError('');
    setSubmittedName('');
    requestAnimationFrame(() => document.getElementById('contact-name')?.focus());
  };

  const isSending = status === 'sending';
  const isSubmitDisabled = isSending || !configured;

  return (
    <section id="contact" style={{ padding: '6rem 1.5rem', position: 'relative' }}>

      {/* Global toast */}
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* ── Section header ── */}
        <div
          ref={headingRef}
          className={`reveal ${headingVisible ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Get In Touch
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            fontFamily: 'Poppins, sans-serif',
            lineHeight: '1.1',
            marginTop: '0.75rem',
          }}>
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p style={{
            marginTop: '1rem',
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '1rem auto 0',
          }}>
            Have a question, an opportunity, or an interesting project in mind? Feel free to reach out. I'm always open to meaningful conversations and collaboration.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>

          {/* ── Left: Contact info ── */}
          <div className={`reveal-left ${headingVisible ? 'visible' : ''}`}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              Contact Information
            </h3>

            {CONTACT_ITEMS.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  marginBottom: '0.75rem',
                  borderRadius: '12px',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(8px)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(37,99,235,0.35)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {/* Icon bubble */}
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '11px',
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(6,182,212,0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--neon-blue)',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.15rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.07em',
                    fontWeight: '700',
                  }}>
                    {item.label}
                  </div>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      display: 'block',
                      overflowWrap: 'anywhere',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  >
                    {item.value}
                  </a>
                </div>

                <CopyButton text={item.copyText} onCopied={handleCopied} />
              </motion.div>
            ))}

            {/* Social links */}
            <div style={{ marginTop: '2rem' }}>
              <p style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                marginBottom: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: '700',
              }}>
                Find Me On
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {CONTACT_SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                    title={link.label}
                  >
                    {ICONS[link.icon]}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div style={{
              marginTop: '2rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.75rem 1.25rem',
              background: 'rgba(34, 197, 94, 0.08)',
              border: '1px solid rgba(34, 197, 94, 0.22)',
              borderRadius: '12px',
              fontSize: '0.875rem',
              color: '#4ade80',
              fontWeight: '500',
            }}>
              <span style={{
                width: '9px', height: '9px',
                borderRadius: '50%', background: '#22c55e',
                boxShadow: '0 0 8px #22c55e',
                animation: 'pulse-glow-green 2s ease-in-out infinite',
                flexShrink: 0,
              }} />
              Open to conversations &amp; collaboration
            </div>
          </div>

          {/* ── Right: Contact form ── */}
          <div className={`reveal-right ${headingVisible ? 'visible' : ''}`}>
            <div style={{
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid var(--glass-border)',
              background: 'var(--bg-card)',
              backdropFilter: 'blur(16px)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Top accent bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
              }} />

              {/* ── Success state ── */}
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '2.5rem 1rem' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                    style={{ fontSize: '4rem', marginBottom: '1rem' }}
                  >
                    ✅
                  </motion.div>
                  <h3 ref={successRef} tabIndex={-1} style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Thanks for reaching out, <strong style={{ color: 'var(--text-primary)' }}>{submittedName}</strong>!<br />
                    Your message has been submitted successfully.
                  </p>
                  <button
                    onClick={startAnotherMessage}
                    type="button"
                    className="btn-outline"
                    style={{ marginTop: '1.5rem', fontSize: '0.85rem', padding: '0.6rem 1.5rem' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>

              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form" aria-busy={isSending}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      Send a Message
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      Use the form below to get in touch.
                    </p>
                  </div>

                  {!configured && (
                    <p id="contact-service-status" className="contact-service-status">
                      The contact form is currently unavailable. Please email me directly
                      {CONTACT_EMAIL && <> at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></>}.
                    </p>
                  )}
                  <div className="contact-honeypot" aria-hidden="true">
                    <label htmlFor="contact-website">Leave this field empty</label>
                    <input id="contact-website" name="website" type="text" ref={honeypotRef} autoComplete="off" tabIndex={-1} />
                  </div>

                  {/* Name + Email row */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}>
                    <Field name="name" label="Full Name" error={errors.name}>
                      <input
                        type="text"
                        name="name"
                        id="contact-name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        autoComplete="name"
                        disabled={isSending}
                        aria-required="true"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        onBlur={handleBlur}
                        required
                        maxLength={100}
                        minLength={2}
                      />
                    </Field>

                    <Field name="email" label="Email Address" error={errors.email}>
                      <input
                        type="email"
                        name="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        autoComplete="email"
                        disabled={isSending}
                        aria-required="true"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        onBlur={handleBlur}
                        required
                        maxLength={254}
                      />
                    </Field>
                  </div>

                  {/* Subject */}
                  <div style={{ marginBottom: '1rem' }}>
                    <Field name="subject" label="Subject" error={errors.subject}>
                      <input
                        type="text"
                        name="subject"
                        id="contact-subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="AI/ML Collaboration / Internship Inquiry"
                        className={`form-input ${errors.subject ? 'error' : ''}`}
                        disabled={isSending}
                        aria-required="true"
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                        onBlur={handleBlur}
                        required
                        maxLength={200}
                        minLength={3}
                      />
                    </Field>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <Field name="message" label="Message" error={errors.message}>
                      <textarea
                        name="message"
                        id="contact-message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about the opportunity or what you'd like to discuss..."
                        rows={5}
                        className={`form-input ${errors.message ? 'error' : ''}`}
                        style={{ resize: 'vertical', minHeight: '120px' }}
                        disabled={isSending}
                        aria-required="true"
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                        onBlur={handleBlur}
                        required
                        maxLength={5000}
                        minLength={20}
                      />
                    </Field>
                  </div>

                  {/* Provider failures never clear the visitor's input. */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="contact-error-banner"
                      role="alert"
                      style={{
                        padding: '0.75rem 1rem', borderRadius: '10px',
                        background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.3)',
                        color: '#f87171', fontSize: '0.83rem', marginBottom: '1rem',
                      }}
                    >
                      {formError}
                      {CONTACT_EMAIL && <> <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#f87171', fontWeight: '700', textDecoration: 'underline' }}>{CONTACT_EMAIL}</a></>}
                    </motion.div>
                  )}

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '0.9rem',
                      opacity: isSubmitDisabled ? 0.65 : 1,
                      cursor: isSubmitDisabled ? 'not-allowed' : 'pointer',
                    }}
                    whileHover={isSubmitDisabled ? {} : { scale: 1.02 }}
                    whileTap={isSubmitDisabled ? {} : { scale: 0.98 }}
                    disabled={isSubmitDisabled}
                    aria-describedby={!configured ? 'contact-service-status' : undefined}
                    id="contact-submit-btn"
                    aria-busy={isSending}
                  >
                    {isSending ? (
                      <>
                        <svg
                          width="16" height="16"
                          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                          style={{ animation: 'spin-slow 1s linear infinite' }}
                          aria-hidden="true"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
