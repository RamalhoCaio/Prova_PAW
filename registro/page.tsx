import Link from "next/link";

export default function registro(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Register Page</h1>
            <input type='text' name="User" placeholder="Nome de Usuario"/>
            <input type='text' name="Senha" placeholder="Senha"/>
            <input type='password' name="Senha" placeholder="Confirmar Senha"/>
            
            <Link href='./dashboard'>Criar conta</Link>
            <Link href='./'>Voltar</Link>
            
        </main>
    )
}