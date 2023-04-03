import Image from 'next/image'
import { HeaderContainer } from './styles'
import logoApp from '@/assets/logo.svg'
import Link from 'next/link'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoApp} alt="logo" />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </HeaderContainer>
  )
}
