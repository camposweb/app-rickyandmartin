import { Header } from '@/components/Header'
import Head from 'next/head'
import { ContactContainer } from './styles'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <Header />
      <ContactContainer>
        <h1>Contato</h1>
      </ContactContainer>
    </>
  )
}
