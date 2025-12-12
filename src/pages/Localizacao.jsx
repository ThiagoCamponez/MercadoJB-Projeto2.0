import styled from 'styled-components'

/**
 * Container principal da página Localização
 */
const LocalizacaoContainer = styled.div`
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
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #374151;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

/**
 * Grid das informações de localização
 */
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1.5rem;
  }
`

/**
 * Container de informação individual
 */
const InfoSection = styled.div`
  text-align: center;
`

/**
 * Título da seção de informação
 */
const InfoTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e293b;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

/**
 * Texto de informação
 */
const InfoText = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`

/**
 * Container do mapa
 */
const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

/**
 * Iframe do Google Maps
 */
const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
`

/**
 * Componente da página Localização
 * Exibe endereço, horário de funcionamento e mapa do Google Maps
 */
export default function Localizacao() {
  return (
    <LocalizacaoContainer>
      <PageTitle>
        Nossa Localização
      </PageTitle>

      <IntroText>
        Visite-nos no Mercado JB! Abaixo você encontra nosso endereço e horário
        de funcionamento.
      </IntroText>

      <InfoGrid>
        <InfoSection>
          <InfoTitle>
            Endereço
          </InfoTitle>
          <InfoText>
            Rua Amazonas, 215 - Centro
          </InfoText>
          <InfoText>
            Santa Inês, Paraná - CEP 86660-000
          </InfoText>
        </InfoSection>

        <InfoSection>
          <InfoTitle>
            Horário de Funcionamento
          </InfoTitle>
          <InfoText>
            Segunda a Sábado: 8h - 19h
          </InfoText>
          <InfoText>
            Domingos e Feriados: 8h - 12h
          </InfoText>
        </InfoSection>
      </InfoGrid>

      <MapContainer>
        <MapFrame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.1639006756314!2d-51.90407196978723!3d-22.6385644151011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493a92f6a31747b%3A0x2c7f7c4d077a137f!2sMercado%20JB!5e1!3m2!1spt-BR!2sbr!4v1730682183849!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do Mercado JB"
        />
      </MapContainer>
    </LocalizacaoContainer>
  )
}