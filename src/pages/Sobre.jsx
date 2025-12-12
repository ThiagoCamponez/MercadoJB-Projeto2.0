import styled from 'styled-components'

/**
 * Container principal da página Sobre
 */
const SobreContainer = styled.div`
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
 * Parágrafo de texto
 */
const TextParagraph = styled.p`
  text-align: center;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 1.7;
  color: #374151;
  
  &:last-of-type {
    margin-bottom: 3rem;
  }
`

/**
 * Grid dos cards de valores
 */
const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

/**
 * Card individual de valor
 */
const ValueCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`

/**
 * Título do card de valor
 */
const ValueTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
`

/**
 * Texto do card de valor
 */
const ValueText = styled.p`
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
`

/**
 * Componente da página Sobre
 * Exibe informações sobre o Mercado JB, missão, visão e valores
 */
export default function Sobre() {
  return (
    <SobreContainer>
      <PageTitle>
        Sobre Nós
      </PageTitle>

      <TextParagraph>
        Bem-vindo ao Mercado JB! Estamos desde 6 de janeiro de 2021 atendendo em
        Santa Inês - PR, somos uma empresa familiar que nasceu com o sonho de
        oferecer à nossa cidade uma experiência de compra única, unindo
        qualidade e atendimento acolhedor. Com dedicação e carinho, cada produto
        em nossas prateleiras é selecionado para garantir o melhor para você e
        sua família.
      </TextParagraph>

      <TextParagraph>
        O Mercado JB é mais do que um comércio; somos um espaço de convivência e
        confiança, onde cada cliente faz parte da nossa família. Acreditamos que
        uma boa experiência de compra vai além dos produtos – é sobre criar um
        ambiente onde todos se sintam em casa, onde cada sorriso e cada gesto
        fazem parte do nosso compromisso com você.
      </TextParagraph>

      <TextParagraph>
        Ao longo dos anos, continuamos a crescer e a fortalecer laços, mantendo
        sempre os valores que guiaram nossa empresa. Venha fazer parte da nossa
        história – juntos, somos mais fortes!
      </TextParagraph>

      <ValuesGrid>
        <ValueCard>
          <ValueTitle>Missão</ValueTitle>
          <ValueText>
            Oferecer aos nossos clientes uma experiência de compra excepcional,
            com produtos de qualidade e atendimento personalizado. Queremos ser
            referência em confiança, variedade e bons preços para todos os
            nossos amigos e clientes.
          </ValueText>
        </ValueCard>

        <ValueCard>
          <ValueTitle>Visão</ValueTitle>
          <ValueText>
            Ser reconhecido como o supermercado preferido dos nossos clientes,
            um local onde eles encontram mais do que produtos – encontram
            confiança, respeito e uma relação de proximidade que fortalece nossa
            empresa.
          </ValueText>
        </ValueCard>

        <ValueCard>
          <ValueTitle>Valores</ValueTitle>
          <ValueText>
            Nossos valores são o alicerce do Mercado JB: honestidade, dedicação,
            compromisso e respeito por cada cliente e colaborador. Trabalhamos
            para manter esses princípios em cada detalhe, garantindo uma
            experiência verdadeira e acolhedora.
          </ValueText>
        </ValueCard>
      </ValuesGrid>
    </SobreContainer>
  )
}