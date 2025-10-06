"use client"

import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  async function submit(e: any) {
    e.preventDefault()
    const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    const data = await res.json()
    if (res.ok) {
      setMsg('Login successful')
      // store token in localStorage for demo
      localStorage.setItem('token', data.token)
    } else {
      setMsg(data.error || 'Login failed')
    }
  }

  return (
    <main className="p-8">
      <h1>Login</h1>
      <form onSubmit={submit} className="space-y-2 max-w-sm">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        <button type="submit">Login</button>
      </form>
      {msg && <p>{msg}</p>}
    </main>
  )
}
