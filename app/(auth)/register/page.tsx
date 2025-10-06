"use client"

import { useState } from 'react'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState('')

  async function submit(e: any) {
    e.preventDefault()
    const res = await fetch('/api/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, password }) })
    const data = await res.json()
    if (res.ok) setMsg('Registered')
    else setMsg(data.error || 'Failed')
  }

  async function requestOtp() {
    const res = await fetch('/api/auth/otp/request', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ phone }) })
    if (res.ok) setMsg('OTP sent (check console in dev)')
  }

  return (
    <main className="p-8">
      <h1>Register</h1>

      <div className="space-y-2 max-w-sm">
        <button onClick={() => window.location.href = '/api/auth/oauth/google'}>Sign up with Google</button>
        <button onClick={() => window.location.href = '/api/auth/oauth/linkedin'}>Sign up with LinkedIn</button>
      </div>

      <form onSubmit={submit} className="space-y-2 max-w-sm mt-4">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        <button type="submit">Register</button>
      </form>

      <hr className="my-4" />

      <div className="max-w-sm">
        <h2>Or sign up / login with mobile</h2>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="09xxxxxxxx" />
        <button onClick={requestOtp}>Request OTP</button>
      </div>

      {msg && <p>{msg}</p>}
    </main>
  )
}
