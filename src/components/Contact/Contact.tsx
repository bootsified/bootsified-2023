import React from 'react'
import GithubIcon from '@assets/icons/contact-icon-github.svg'
import LinkedInIcon from '@assets/icons/contact-icon-linkedin.svg'
import PDFIcon from '@assets/icons/contact-icon-pdf.svg'
import TwitterIcon from '@assets/icons/contact-icon-twitter.svg'
import Link from 'next/link'

import ContactForm from './ContactForm'

import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Let me hear from&nbsp;you...</h1>
      <div className={styles.content}>
        <ContactForm />
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
              <a
                className={styles.link}
                href="https://docs.google.com/document/d/1rQctHdBV9pXxVna_HOguMz88CmM4ywg9sugs21w9_Ls/export?format=pdf"
                download
              >
                <PDFIcon />
                <span>John &ldquo;Boots&rdquo; Highland Resume</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )
}

export default Contact
