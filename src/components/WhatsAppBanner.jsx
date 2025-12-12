import styled from 'styled-components'

/**
 * Container do banner do WhatsApp
 */
const WhatsAppContainer = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #128c7e 0%, #25d366 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
  }
  
  @media (min-width: 480px) {
    padding: 1.25rem 1.5rem;
    gap: 1rem;
  }
  
  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
`

/**
 * Ícone do WhatsApp
 */
const WhatsAppIcon = styled.div`
  font-size: 2rem;
  color: white;
  
  @media (min-width: 480px) {
    font-size: 2.25rem;
  }
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

/**
 * Container do texto
 */
const TextContainer = styled.div`
  color: white;
  flex: 1;
  
  @media (max-width: 480px) {
    text-align: center;
  }
`

/**
 * Título do banner
 */
const BannerTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  
  @media (min-width: 480px) {
    font-size: 1.25rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

/**
 * Subtítulo do banner
 */
const BannerSubtitle = styled.p`
  margin: 0.25rem 0 0 0;
  font-size: 0.8rem;
  opacity: 0.9;
  
  @media (min-width: 480px) {
    font-size: 0.875rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

/**
 * Seta indicativa
 */
const Arrow = styled.div`
  font-size: 1.25rem;
  color: white;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(5px);
    }
    60% {
      transform: translateX(3px);
    }
  }
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`

/**
 * Componente Banner do WhatsApp
 * Exibe um banner chamativo para contato via WhatsApp
 */
export default function WhatsAppBanner() {
  /**
   * Função para abrir o WhatsApp
   */
  const abrirWhatsApp = () => {
    const numeroWhatsApp = '+5518997340380' // Substitua pelo número real
    const mensagem = encodeURIComponent('Olá! Vim através do site do Mercado JB e gostaria de mais informações.')
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`
    window.open(url, '_blank')
  }

  return (
    <WhatsAppContainer onClick={abrirWhatsApp}>
      <WhatsAppIcon>📱</WhatsAppIcon>
      <TextContainer>
        <BannerTitle>Como posso te ajudar?</BannerTitle>
        <BannerSubtitle>Saiba do seu pedido, Ofertas, Lojas, Cartão Carrefour e muito mais.</BannerSubtitle>
      </TextContainer>
      <Arrow>→</Arrow>
    </WhatsAppContainer>
  )
}