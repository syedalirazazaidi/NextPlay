import Link from 'next/link'
import Image from 'next/image'
import profilePic from './me.png'


export default function Navbar() {
  return (
    <nav>
      <Image
        src={profilePic}
        alt='Ali Raza'
        width={40}
        placeholder='blur'
        quality={100}
      />
      <h1>Ali Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}