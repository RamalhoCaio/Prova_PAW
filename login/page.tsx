import Link from "next/link";

export default function login(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Login Page</h1>
            
            <input type='text' name="User" placeholder="Nome de Usuario"/>
            <input type='password' name="Senha" placeholder="Senha"/>

            <Link href='./dashboard'>Entrar</Link>
            <Link href='./'>Voltar</Link>
            
        </main>
    )
}