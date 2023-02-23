'use client'

import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid'

import Alert from '@/components/Alert'
import Button from '@/components/Button'

import styles from './ContactForm.module.css'

const ContactForm = () => {
  const [buttonLabel, setButtonLabel] = useState('Send it')
  const [thanksName, setThanksName] = useState('')
  const [success, setSuccess] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbwu5NKrJgwbg6W5iasbyBm-OeTpYlk2mqISrwlgVPB4utvfvdChRh-JVWCSDzMJqBVw4Q/exec'

  const submitToGoogle = (event: any) => {
    event.preventDefault()
    setButtonLabel('Sure hope this works...')
    setSuccess(false)
    setDisabled(true)
    fetch(scriptUrl, { method: 'POST', body: new FormData(event.target) })
      .then(response => {
        // console.log('Success!', response)
        setButtonLabel('Send it')
        setThanksName(nameRef.current?.value.split(' ')[0] || 'friend')
        setSuccess(true)
        setDisabled(false)
        nameRef!.current!.value = ''
        emailRef!.current!.value = ''
        messageRef!.current!.value = ''
      })
      .catch(error => console.error('Error!', error.message))
  }

  return (
    <div className={styles.container}>
      <form
        ref={formRef}
        className={clsx(styles.form, disabled && styles.disabled)}
        onSubmit={submitToGoogle}
      >
        <p>
          If you need to reach me, please fill out the quick form below and I will get back with you
          ASAP. Thanks!
        </p>

        {success && (
          <Alert className={styles.alert} alertType="success">
            <h2>Thanks, {thanksName}!</h2>
            <p>Your message was sent.</p>
          </Alert>
        )}

        <div className={styles.inputGroup}>
          <label htmlFor="txt-name" className={styles.label}>
            Your Name
          </label>
          <input
            ref={nameRef}
            id="txt-name"
            type="text"
            className={styles.input}
            name="Name"
            required
            disabled={disabled}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="txt-email" className={styles.label}>
            Your Email Address
          </label>
          <input
            ref={emailRef}
            id="txt-email"
            type="email"
            className={styles.input}
            name="Email"
            required
            disabled={disabled}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="txt-message" className={styles.label}>
            Your Message
          </label>
          <textarea
            ref={messageRef}
            className={styles.textarea}
            name="Message"
            id="txt-message"
            required
            disabled={disabled}
          ></textarea>
        </div>
        <div className={styles.buttons}>
          <Button ref={buttonRef} variant="primary" disabled={disabled}>
            {buttonLabel}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
