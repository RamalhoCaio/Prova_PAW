import Link from "next/link";

export default function dashboard(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Dashboard Page</h1>
            <Link href='./'>Sair</Link>
            

        </main>
    )
}