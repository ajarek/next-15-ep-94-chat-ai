'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Tu można dodać wysyłkę danych do API
    setSubmitted(true)
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1>Contact</h1>
      {submitted ? (
        <div>Thank you for contacting us!</div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className='max-w-xl w-full flex flex-col gap-2 border-2 rounded-xl p-4'
        >
          <div className='flex flex-col gap-2'>
            <Label>Name:</Label>
            <Input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Label>Email:</Label>
            <Input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <Label>Message:</Label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              style={{ width: '100%', marginBottom: 12 }}
            />
          </div>
          <Button type='submit'>Submit</Button>
        </form>
      )}
    </div>
  )
}

export default Contact
