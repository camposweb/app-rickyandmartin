import { Header } from '@/components/Header'
import Head from 'next/head'
import { AboutPageContainer } from './styles'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>
      <Header />
      <AboutPageContainer>
        <h1>Sobre</h1>
      </AboutPageContainer>
    </>
  )
}
