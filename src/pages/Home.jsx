import styled from 'styled-components'
import Banner from '../components/Banner'
import DestaquesDodia from '../components/DestaquesDodia'
import WhatsAppBanner from '../components/WhatsAppBanner'

/**
 * Container principal da página Home
 */
const HomeContainer = styled.main`
  min-height: 100vh;
  background-color: #f8fafc;
`

/**
 * Componente da página Home
 * Exibe banners promocionais e destaques do dia
 */
export default function Home() {
  return (
    <HomeContainer>
      <Banner />
      <DestaquesDodia />
      <WhatsAppBanner />
    </HomeContainer>
  )
}