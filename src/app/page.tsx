'use client'

import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

export default function Home() {
  const [user, setUser] = useState('')

  const getUser = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value)
  }

  const starred = () => {}
  return (
    <main>
      <input onChange={getUser} type="text" placeholder="Usuário github" />
      <Link href={`/repos/${user}`}>
        <button>Ver favoritos</button>
      </Link>
      {user && <pre>Usuário: {user}</pre>}
    </main>
  )
}
