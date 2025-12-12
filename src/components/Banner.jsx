import { useState, useEffect } from 'react'
import styled from 'styled-components'

/**
 * Imagens do carrossel
 */
const imagensBanner = [
  {
    id: 1,
    imagem: "/assets/Banner/banner1.jpg",
    titulo: "Ofertas Imperdíveis",
    subtitulo: "Descontos de até 50% em produtos selecionados. Aproveite enquanto durarem os estoques!",
    cor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: 2,
    imagem: "/assets/Banner/banner2.jpg",
    titulo: "Produtos Frescos",
    subtitulo: "Qualidade garantida em todos os nossos produtos. Venha conferir nossas novidades!",
    cor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    id: 3,
    imagem: "/assets/Banner/banner3.jpg",
    titulo: "Entrega Rápida",
    subtitulo: "Receba seus produtos no conforto da sua casa. Delivery disponível em toda a região!",
    cor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  }
]

/**
 * Container principal do banner
 */
const BannerContainer = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  position: relative;
  overflow: hidden;
`

/**
 * Banner principal com carrossel
 */
const MainBanner = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`

/**
 * Container do slide
 */
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imagem});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  position: relative;

  /* Overlay para melhor legibilidade do texto */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 2rem;
  }
`

/**
 * Botões de navegação
 */
const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #333;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }
  
  &.prev {
    left: 2rem;
  }
  
  &.next {
    right: 2rem;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    
    &.prev {
      left: 1rem;
    }
    
    &.next {
      right: 1rem;
    }
  }
`

/**
 * Indicadores de slide
 */
const SlideIndicators = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
`

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
  }
`

/**
 * Conteúdo do banner
 */
const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

/**
 * Badge de oferta
 */
const OfferBadge = styled.div`
  background-color: #ef4444;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  display: inline-block;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
`

/**
 * Título principal do banner
 */
const BannerTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`

/**
 * Subtítulo do banner
 */
const BannerSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`

/**
 * Container dos botões
 */
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`

/**
 * Botão principal do banner
 */
const PrimaryButton = styled.button`
  background-color: #fbbf24;
  color: #1f2937;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(251, 191, 36, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background-color: #f59e0b;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(251, 191, 36, 0.6);
  }
`

/**
 * Botão secundário do banner
 */
const SecondaryButton = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background-color: white;
    color: #1e40af;
    transform: translateY(-2px);
  }
`

/**
 * Componente de Banner Principal com Carrossel
 * Exibe um banner de largura total com carrossel de 3 imagens
 */
export default function Banner() {
  const [slideAtual, setSlideAtual] = useState(0)

  /**
   * Avança para o próximo slide
   */
  const proximoSlide = () => {
    setSlideAtual((prev) => (prev + 1) % imagensBanner.length)
  }

  /**
   * Volta para o slide anterior
   */
  const slideAnterior = () => {
    setSlideAtual((prev) => (prev - 1 + imagensBanner.length) % imagensBanner.length)
  }

  /**
   * Vai para um slide específico
   */
  const irParaSlide = (index) => {
    setSlideAtual(index)
  }

  /**
   * Auto-play do carrossel
   */
  useEffect(() => {
    const interval = setInterval(() => {
      proximoSlide()
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  /**
   * Função para lidar com clique no botão principal
   */
  const handlePrimaryAction = () => {
    console.log('Ação principal do banner')
    // Navegar para ofertas ou página específica
  }

  /**
   * Função para lidar com clique no botão secundário
   */
  const handleSecondaryAction = () => {
    console.log('Ação secundária do banner')
    // Navegar para produtos ou catálogo
  }

  const bannerAtual = imagensBanner[slideAtual]

  return (
    <BannerContainer>
      <MainBanner>
        <SlideContainer imagem={bannerAtual.imagem}>
          <BannerContent>
            <OfferBadge>Ofertas Relâmpago</OfferBadge>
            <BannerTitle>{bannerAtual.titulo}</BannerTitle>
            <BannerSubtitle>
              {bannerAtual.subtitulo}
            </BannerSubtitle>
            <ButtonContainer>
              <PrimaryButton onClick={handlePrimaryAction}>
                Ver Ofertas
              </PrimaryButton>
              <SecondaryButton onClick={handleSecondaryAction}>
                Todos os Produtos
              </SecondaryButton>
            </ButtonContainer>
          </BannerContent>
        </SlideContainer>
        
        <NavButton className="prev" onClick={slideAnterior}>
          ‹
        </NavButton>
        <NavButton className="next" onClick={proximoSlide}>
          ›
        </NavButton>
        
        <SlideIndicators>
          {imagensBanner.map((_, index) => (
            <Indicator
              key={index}
              $active={index === slideAtual}
              onClick={() => irParaSlide(index)}
            />
          ))}
        </SlideIndicators>
      </MainBanner>
    </BannerContainer>
  )
}