import styled from 'styled-components'

/**
 * Componente para exibir um card de produto
 */

/**
 * Container do card do produto com sombra e fundo branco
 */
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  background-color: white;
  padding: 0.25rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.35);
  }
`

/**
 * Imagem do produto responsiva
 */
const ProductImage = styled.img`
  margin-bottom: 0.25rem;
  height: 12rem;
  width: 100%;
  border-radius: 0.375rem;
  object-fit: contain;
  background-color: #f8fafc;
`

/**
 * Nome do produto
 */
const ProductName = styled.h3`
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.4;
  min-height: 2.8rem;
  display: flex;
  align-items: center;
`

/**
 * Preço do produto destacado
 */
const ProductPrice = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 0.5rem;
  background-color: #f97316;
  border-radius: 0.75rem;
  color: white;
  margin: 0;
  min-width: 80px;
`

/**
 * Componente ProductCard
 * Exibe informações de um produto em formato de card
 */
export default function ProductCard({ produto }) {
  return (
    <CardContainer>
      <ProductImage
        src={`/assets/${produto.imagem}`}
        alt={produto.nome}
        loading="lazy"
      />
      <ProductName>{produto.nome}</ProductName>
      <ProductPrice>
        {produto.preco}
      </ProductPrice>
    </CardContainer>
  )
}