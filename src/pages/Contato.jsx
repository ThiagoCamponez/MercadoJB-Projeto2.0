import styled from 'styled-components'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'

/**
 * Container principal da página Contato
 */
const ContatoContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0.25rem;
`

/**
 * Título principal da página
 */
const PageTitle = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`

/**
 * Parágrafo introdutório
 */
const IntroText = styled.p`
  text-align: center;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: #374151;
  line-height: 1.6;
`

/**
 * Grid dos cards de contato
 */
const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

/**
 * Card de contato
 */
const ContactCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`

/**
 * Ícone do card de contato
 */
const ContactIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  &.email {
    color: #3b82f6;
  }
  
  &.whatsapp {
    color: #10b981;
  }
`

/**
 * Título do card de contato
 */
const ContactTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1e293b;
`

/**
 * Texto descritivo do card
 */
const ContactDescription = styled.p`
  color: #6b7280;
  margin-bottom: 0.5rem;
`

/**
 * Link de contato
 */
const ContactLink = styled.a`
  font-weight: 600;
  transition: color 0.2s ease;
  
  &.email {
    color: #3b82f6;
    
    &:hover {
      color: #1d4ed8;
    }
  }
  
  &.whatsapp {
    color: #10b981;
    
    &:hover {
      color: #047857;
    }
  }
`

/**
 * Componente da página Contato
 * Exibe informações de contato com e-mail e WhatsApp
 */
export default function Contato() {
  return (
    <ContatoContainer>
      <PageTitle>
        Fale Conosco
      </PageTitle>

      <IntroText>
        Entre em contato conosco pelos nossos canais abaixo. Ficaremos felizes
        em atendê-lo.
      </IntroText>

      <ContactGrid>
        {/* Contato por E-mail */}
        <ContactCard>
          <ContactIcon className="email">
            <FaEnvelope />
          </ContactIcon>
          <ContactTitle>E-mail</ContactTitle>
          <ContactDescription>Envie-nos um e-mail:</ContactDescription>
          <ContactLink
            href="mailto:leandrocamponez@gmail.com"
            className="email"
          >
            leandrocamponez@gmail.com
          </ContactLink>
        </ContactCard>

        {/* Contato por WhatsApp */}
        <ContactCard>
          <ContactIcon className="whatsapp">
            <FaWhatsapp />
          </ContactIcon>
          <ContactTitle>WhatsApp</ContactTitle>
          <ContactDescription>Mande uma mensagem:</ContactDescription>
          <ContactLink
            href="https://wa.me/5518997340380"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            (18) 99734-0380
          </ContactLink>
        </ContactCard>
      </ContactGrid>
    </ContatoContainer>
  )
}