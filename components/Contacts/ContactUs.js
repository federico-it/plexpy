/* eslint-disable no-console */
import React, { useRef, useState } from 'react'

import emailjs from '@emailjs/browser'
import { BUILD_MANIFEST } from 'next/dist/shared/lib/constants'
import { useForm } from 'react-hook-form'

export const ContactUs = () => {
  const cancelCourse = () => {
    this.form.reset()
  }
  const cancelForm = () => {
    document.getElementById('bua').className += ' hidden'
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const onSubmit = data => {
    emailjs
      .sendForm(
        'service_2esnrcl',
        'template_qnwe1ha',
        form.current,
        '99ig9vF5PulFb9gAj'
      )
      .then(
        result => {
          console.log(result.text), cancelCourse, cancelForm
        },
        error => {
          console.log(error.text)
        }
      )
  }
  const form = useRef()

  return (
    <form ref={form} onSubmit={handleSubmit(cancelForm)}>
      <div id='bua' className='mt-3 -mb-5 ml-14'>
        <label className='dark:text-black text-white font-extrabold'>
          Name
        </label>
      </div>
      <br />
      <input
        className='ml-14 rounded-lg h-9 mb-6 w-5/6'
        type='text'
        name='user_name'
        {...register('user_name', { required: true, maxLength: 30 })}
      />
      <br />
      <div className='ml-14'>
        <label className='dark:text-black text-white font-extrabold'>
          Email
        </label>
      </div>
      <input
        className='ml-14 rounded-lg h-9 mb-6 w-5/6'
        type='email'
        name='user_email'
        {...register('user_email', {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          },
        })}
      />
      {errors.email && <span>This field is required</span>}
      <br />
      <div className='ml-14'>
        <label className='dark:text-black text-white font-extrabold'>
          Message
        </label>
      </div>
      <textarea
        className='ml-14 rounded-lg h-9 mb-6 w-5/6'
        {...register('message', { required: true, maxLength: 300 })}
        name='message'
      />
      <br />
      <input
        className='ml-14 mb-12 w-5/6 px-28 py-2 mx-auto text-lg font-bold text-gray-900 bg-gray-100 rounded-md dark:text-gray-100 dark:bg-gray-800'
        type='submit'
        value='Send Message 📨'
      />
    </form>
  )
}

export default ContactUs
