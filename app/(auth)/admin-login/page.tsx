"use client"

import { useState } from 'react'

export default function AdminSetup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  async function submit(e: any) {
    e.preventDefault()
    const res = await fetch('/api/auth/register-admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-token': prompt('admin setup token') || '' },
      body: JSON.stringify({ name, email, password }),
    })
    const data = await res.json()
    if (res.ok) setMsg('Admin created')
    else setMsg(data.error || 'Failed')
  }

  return (
    <main className="p-8">
      <h1>Admin setup</h1>
      <form onSubmit={submit} className="space-y-2 max-w-sm">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        <button type="submit">Create Admin</button>
      </form>
      {msg && <p>{msg}</p>}
    </main>
  )
}
