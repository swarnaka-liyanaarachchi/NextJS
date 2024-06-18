import Link from "next/link"

export default function Home(){
    return( 
    <><h1>Home</h1>
    <Link href="/dashboard">dashboard</Link>
    <br />
    <Link href="/products">products</Link>
    </>
    )
}