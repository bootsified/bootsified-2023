import React from 'react'
import GithubIcon from '@assets/icons/contact-icon-github.svg'
import LinkedInIcon from '@assets/icons/contact-icon-linkedin.svg'
import PDFIcon from '@assets/icons/contact-icon-pdf.svg'
import TwitterIcon from '@assets/icons/contact-icon-twitter.svg'
import Link from 'next/link'

import Button from '../Button'

import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Let me hear from&nbsp;you...</h1>
      <div className={styles.content}>
        <form className={styles.form}>
          <p>
            If you need to reach me, please fill out the quick form below and I will get back with
            you ASAP. Thanks!
          </p>
          <div className={styles.inputGroup}>
            <label htmlFor="txt-name" className={styles.label}>
              Your Name
            </label>
            <input id="txt-name" type="text" className={styles.input} name="Name" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="txt-email" className={styles.label}>
              Your Email Address
            </label>
            <input id="txt-email" type="email" className={styles.input} name="Email" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="txt-message" className={styles.label}>
              Your Message
            </label>
            <textarea
              className={styles.textarea}
              name="Message"
              id="txt-message"
              required
            ></textarea>
          </div>
          <div className={styles.buttons}>
            <Button variant="primary">Send it</Button>
          </div>
        </form>
        <aside className={styles.otherLinks}>
          <h2>Other Links</h2>
          <ul>
            <li>
              <Link
                className={styles.link}
                href="https://www.linkedin.com/in/boots-highland/"
                target="_blank"
              >
                <LinkedInIcon />
                <span>linkedin.com/in/boots-highland</span>
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="https://github.com/bootsified" target="_blank">
                <GithubIcon />
                <span>github.com/bootsified</span>
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="https://twitter.com/bootsified" target="_blank">
                <TwitterIcon />
                <span>twitter.com/bootsified</span>
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/pdf/john-boots-highland-resume-2023.pdf"
                download
              >
                <PDFIcon />
                <span>John &ldquo;Boots&rdquo; Highland Resumé</span>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )
}

export default Contact
