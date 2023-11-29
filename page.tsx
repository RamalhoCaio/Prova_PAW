import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <Link href='./login'>Fazer Login</Link>
      <Link href='./registro'>Criar Conta</Link>
      <Link href='./recover'>Esqueci a senha</Link>
    </main>
  )
}