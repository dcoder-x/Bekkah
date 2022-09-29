import { Icon } from '@iconify/react'
import React from 'react'
import { headerImg } from '../assets/assets'
import Header from '../components/header'
import '../styles/contact.css'

const Contact = () => {
  return (
    <main id='contact'>
    <Header 
    pageTitle={'Contact'}
    bgImage={headerImg.ai}
    desc={'Reach out to us'}/>
    <form action="">
      <p style={{textAlign:"center",fontSize:'20px'}}>
        Send a quick message
      </p>
      <hr />
      <div className="field">
        <label htmlFor="">
          Full name
        </label>
        <input type="text" placeholder='your name' />
      </div>
      <div className="field">
        <label htmlFor="">
          Email
        </label>
        <input type="text" placeholder='your email address' />
      </div>
      <div className="field">
        <label htmlFor="">
          Subject
        </label>
        <input type="text" placeholder='message title' />
      </div>
      <div className="field">
        <label htmlFor="">
          Message
        </label>
        <input className='message' type="text" placeholder='I have a project in mind' />
      </div>
      <button>
        submit
      </button>
    </form>
    <div className="patners">
            <Icon icon="cib:co-op" />
            <Icon icon="carbon:logo-discord" />
            <Icon icon="carbon:logo-npm" />
            <Icon icon="carbon:logo-npm" />
            <Icon icon="dashicons:buddicons-buddypress-logo" />
            <Icon icon="carbon:logo-linkedin" />
            <Icon icon="carbon:logo-github" />
            <Icon icon="carbon:logo-python" />
            </div>
  </main>
  )
}

export default Contact