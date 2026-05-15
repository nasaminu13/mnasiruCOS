import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav>
        <ul className= "flex justify-evenly bg-slate-950 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/login">Login</Link></li>
        </ul>
    </nav>
  )
}
