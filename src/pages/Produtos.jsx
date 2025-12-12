import ProductGrid from '../components/ProductGrid'
import styled from 'styled-components'

/**
 * Container principal da página de produtos
 */
const ProdutosContainer = styled.div`
  min-height: 100vh;
  background-color: #f8fafc;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`

/**
 * Título da página de produtos
 */
const PageTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`

/**
 * Container para centralizar o conteúdo
 */
const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

/**
 * Página de Produtos
 * Exibe todos os produtos com sistema de filtros e pesquisa
 */
export default function Produtos() {
  return (
    <ProdutosContainer>
      <ContentContainer>
        <PageTitle>Nossos Produtos</PageTitle>
        <ProductGrid />
      </ContentContainer>
    </ProdutosContainer>
  )
}