import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import JBLogo from '/assets/JB.png'

/**
 * Container principal do header com sombra e fundo branco
 */
const HeaderContainer = styled.header`
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background-color: white;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`

/**
 * Container interno com largura máxima e centralização
 */
const HeaderInner = styled.div`
  margin: 0 auto;
  padding: 0 0.25rem;
  
  @media (min-width: 640px) {
    padding: 0 0.25rem;
  }
`

/**
 * Navegação principal com layout flexível
 */
const Nav = styled.nav`
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

/**
 * Container do logo e título
 */
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
`

/**
 * Imagem do logo responsiva
 */
const LogoImage = styled.img`
  height: 4rem;
  width: 4rem;
  
  @media (min-width: 768px) {
    height: 8rem;
    width: 8rem;
  }
`

/**
 * Container do texto do título
 */
const TitleContainer = styled.div`
  text-align: left;
`

/**
 * Título principal
 */
const MainTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 900;
  color: #0f172a;
  
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`

/**
 * Span colorido do título
 */
const TitleAccent = styled.span`
  color: #ea580c;
`

/**
 * Subtítulo
 */
const Subtitle = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: #0f172a;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

/**
 * Botão do menu mobile
 */
const MenuButton = styled.button`
  font-size: 1.5rem;
  color: #0f172a;
  outline: none;
  
  @media (min-width: 768px) {
    display: none;
  }
`

/**
 * Container das barras do menu hamburger
 */
const MenuBars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

/**
 * Barra individual do menu hamburger
 */
const MenuBar = styled.span`
  display: block;
  height: 0.25rem;
  width: 1.5rem;
  background-color: #0f172a;
`

/**
 * Container do menu de navegação
 */
const MenuContainer = styled.div`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    position: static;
    margin-top: 0;
    background-color: transparent;
    padding: 0;
    box-shadow: none;
  }
`

/**
 * Link de navegação
 */
const NavLink = styled(Link)`
  font-weight: 500;
  color: #0f172a;
  transition: color 0.2s ease;
  
  &:hover {
    color: #f97316;
  }
`

/**
 * Botão de ofertas destacado
 */
const OffersButton = styled(Link)`
  border-radius: 9999px;
  background-color: #f97316;
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #c2410c;
  }
  
  @media (min-width: 768px) {
    padding: 0.75rem 1.25rem;
  }
`

/**
 * Componente Header da aplicação
 * Contém navegação responsiva com menu mobile
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /**
   * Alterna o estado do menu mobile
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  /**
   * Fecha o menu mobile
   */
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <HeaderContainer>
      <HeaderInner>
        <Nav>
          <Link to="/">
            <LogoContainer>
              <LogoImage
                src={JBLogo}
                alt="Logomarca do Mercado JB"
              />
              <TitleContainer>
                <MainTitle>
                  Mercado <TitleAccent>JB</TitleAccent>
                </MainTitle>
                <Subtitle>
                  Nossa família atende a sua!
                </Subtitle>
              </TitleContainer>
            </LogoContainer>
          </Link>

          <MenuButton onClick={toggleMenu}>
            <MenuBars>
              <MenuBar />
              <MenuBar />
              <MenuBar />
            </MenuBars>
          </MenuButton>

          <MenuContainer $isOpen={isMenuOpen}>
            <NavLink to="/produtos" onClick={closeMenu}>
              Produtos
            </NavLink>
            <NavLink to="/sobre" onClick={closeMenu}>
              Sobre
            </NavLink>
            <NavLink to="/contato" onClick={closeMenu}>
              Contato
            </NavLink>
            <NavLink to="/localizacao" onClick={closeMenu}>
              Localização
            </NavLink>
            <OffersButton to="/produtos" onClick={closeMenu}>
              Ofertas
            </OffersButton>
          </MenuContainer>
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  )
}