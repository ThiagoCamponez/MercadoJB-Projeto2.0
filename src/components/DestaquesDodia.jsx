import styled from 'styled-components'

/**
 * Lista de produtos importada do ProductGrid
 */
const produtos = [
  { id: 1, nome: "Sabão em Pó Omo 1,6kg", preco: "R$ 24,90", precoNumerico: 24.90, imagem: "omo.jpg", categoria: "Limpeza", marca: "Omo", disponivel: true },
  { id: 2, nome: "Detergente Ypê", preco: "R$ 2,49", precoNumerico: 2.49, imagem: "detergente-ype.jpg", categoria: "Limpeza", marca: "Ypê", disponivel: true },
  { id: 3, nome: "Limpador Casa 1L", preco: "R$ 9,90", precoNumerico: 9.90, imagem: "casa.jpg", categoria: "Limpeza", marca: "Casa", disponivel: true },
  { id: 4, nome: "Esponja Jeitosa", preco: "R$ 1,00", precoNumerico: 1.00, imagem: "esponja-jeitosa.png", categoria: "Limpeza", marca: "Jeitosa", disponivel: false },
  { id: 5, nome: "Esponja BomBril", preco: "R$ 2,99", precoNumerico: 2.99, imagem: "bombril.jpg", categoria: "Limpeza", marca: "BomBril", disponivel: true },
  { id: 6, nome: "Qboa 1L", preco: "R$ 3,49", precoNumerico: 3.49, imagem: "qboa1l.jpg", categoria: "Limpeza", marca: "Qboa", disponivel: true },
  { id: 7, nome: "Vinagre Chemim 900ml", preco: "R$ 2,69", precoNumerico: 2.69, imagem: "vinagre-chemim.jpg", categoria: "Condimentos", marca: "Chemim", disponivel: true },
  { id: 8, nome: "Papel Hig. Dueto 12 Rolos", preco: "R$ 17,99", precoNumerico: 17.99, imagem: "papel-hig.-dueto-12.jpg", categoria: "Higiene", marca: "Dueto", disponivel: true },
  { id: 9, nome: "Arroz Valicel 5kg", preco: "R$ 29,90", precoNumerico: 29.90, imagem: "arroz-valicel.jpg", categoria: "Alimentos", marca: "Valicel", disponivel: true },
  { id: 10, nome: "Cebola", preco: "R$ 3,50", precoNumerico: 3.50, imagem: "cebola.jpg", categoria: "Hortifruti", marca: "Natural", disponivel: true },
  { id: 11, nome: "Extrato de Tomate", preco: "R$ 2,99", precoNumerico: 2.99, imagem: "extrato-tomate-quero.jpg", categoria: "Condimentos", marca: "Quero", disponivel: true },
  { id: 12, nome: "Margarina Qualy", preco: "R$ 7,90", precoNumerico: 7.90, imagem: "margarina-qualy.jpg", categoria: "Laticínios", marca: "Qualy", disponivel: false },
  { id: 13, nome: "Macarrão Miojo", preco: "R$ 2,90", precoNumerico: 2.90, imagem: "nissin-miojo.jpg", categoria: "Alimentos", marca: "Nissin", disponivel: true },
  { id: 14, nome: "Óleo de Soja Coamo", preco: "R$ 6,99", precoNumerico: 6.99, imagem: "oleo-coamo.jpg", categoria: "Condimentos", marca: "Coamo", disponivel: true },
  { id: 15, nome: "Milho ou Quirera", preco: "R$ 11,50", precoNumerico: 11.50, imagem: "milho-valicel.jpg", categoria: "Alimentos", marca: "Valicel", disponivel: true },
  { id: 16, nome: "Maionese Hellmann's 500g", preco: "R$ 9,90", precoNumerico: 9.90, imagem: "hellmans.jpg", categoria: "Condimentos", marca: "Hellmann's", disponivel: true },
  { id: 17, nome: "Leite Ferm. Bob Esponja", preco: "R$ 7,90", precoNumerico: 7.90, imagem: "bob-esponja.jpg", categoria: "Laticínios", marca: "Bob Esponja", disponivel: true },
  { id: 18, nome: "Macarrão Galo 500g", preco: "R$ 4,90", precoNumerico: 4.90, imagem: "macarrao-galo.jpg", categoria: "Alimentos", marca: "Galo", disponivel: true },
  { id: 19, nome: "Feijão Valicel 1kg", preco: "R$ 7,90", precoNumerico: 7.90, imagem: "feijao-valicel.jpg", categoria: "Alimentos", marca: "Valicel", disponivel: false },
  { id: 20, nome: "Leite Integral Líder 1L", preco: "R$ 5,99", precoNumerico: 5.99, imagem: "leite-lider.jpg", categoria: "Laticínios", marca: "Líder", disponivel: true },
  { id: 21, nome: "Lâmpada Led OuroLux 6v", preco: "R$ 2,99", precoNumerico: 2.99, imagem: "ourolux-6v.jpg", categoria: "Utilidades", marca: "OuroLux", disponivel: true },
  { id: 22, nome: "Barbante várias cores", preco: "R$ 19,90", precoNumerico: 19.90, imagem: "barbante-cia-textil.jpg", categoria: "Utilidades", marca: "Cia Textil", disponivel: true },
  { id: 23, nome: "Carvão 4Kg", preco: "R$ 15,00", precoNumerico: 15.00, imagem: "carvao-4kg.jpg", categoria: "Utilidades", marca: "Genérico", disponivel: true },
  { id: 24, nome: "Carvão 7Kg", preco: "R$ 25,00", precoNumerico: 25.00, imagem: "carvao-7kg.jpg", categoria: "Utilidades", marca: "Genérico", disponivel: true },
  { id: 25, nome: "Batata", preco: "R$ 4,50", precoNumerico: 4.50, imagem: "batata.jpg", categoria: "Hortifruti", marca: "Natural", disponivel: true },
  { id: 26, nome: "Cenoura", preco: "R$ 3,80", precoNumerico: 3.80, imagem: "cenoura.jpg", categoria: "Hortifruti", marca: "Natural", disponivel: true },
  { id: 27, nome: "Laranja", preco: "R$ 5,90", precoNumerico: 5.90, imagem: "laranja.jpg", categoria: "Hortifruti", marca: "Natural", disponivel: true },
  { id: 28, nome: "Energético Monster Energy 473ml", preco: "R$ 8,99", precoNumerico: 8.99, imagem: "energetico-monster-energy-lata-473ml-1.jpg", categoria: "Bebidas", marca: "Monster", disponivel: true },
  { id: 29, nome: "Limpador Multiuso Veja 500ml", preco: "R$ 4,90", precoNumerico: 4.90, imagem: "limpador-multiuso-veja-500ml-1.jpg", categoria: "Limpeza", marca: "Veja", disponivel: true },
  { id: 30, nome: "Nutella Creme de Avelã 350g", preco: "R$ 18,90", precoNumerico: 18.90, imagem: "nutella-creme-de-avela-350g-1.jpg", categoria: "Doces", marca: "Nutella", disponivel: true },
  { id: 31, nome: "Queijo Muçarela Fatiado President 150g", preco: "R$ 12,90", precoNumerico: 12.90, imagem: "queijo-mucarela-fatiado-president-150g-1.jpg", categoria: "Laticínios", marca: "President", disponivel: true },
  { id: 32, nome: "Red Bull Energy Drink", preco: "R$ 7,50", precoNumerico: 7.50, imagem: "redbul.jpg", categoria: "Bebidas", marca: "Red Bull", disponivel: true },
  { id: 33, nome: "Refrigerante Guaraná Antarctica 350ml", preco: "R$ 3,20", precoNumerico: 3.20, imagem: "refrigerante-guarana-antarctica-350ml-1.jpg", categoria: "Bebidas", marca: "Antarctica", disponivel: true }
]

/**
 * Container principal dos destaques do dia
 */
const DestaquesContainer = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 1.5rem 1rem;
  background-color: #ffffff;
  
  @media (min-width: 480px) {
    padding: 2rem 1.5rem;
  }
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
  
  @media (min-width: 1200px) {
    padding: 3rem 1rem;
  }
`

/**
 * Header da seção com título e ver mais
 */
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  max-width: 1580px;
  margin-left: auto;
  margin-right: auto;
`

/**
 * Título da seção
 */
const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`

/**
 * Link ver mais
 */
const VerMaisLink = styled.a`
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`

/**
 * Grid dos produtos em destaque
 */
const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  max-width: 1580px;
  width: 100%;
  margin: 0 auto;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: 1400px) {
    grid-template-columns: repeat(6, 1fr);
  }
`

/**
 * Card do produto
 */
const ProdutoCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  position: relative;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

/**
 * Badge de desconto
 */
const BadgeDesconto = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background-color: #ef4444;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  z-index: 1;
`

/**
 * Imagem do produto
 */
const ProdutoImagem = styled.div`
  width: 100%;
  height: 120px;
  background: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  
  @media (min-width: 768px) {
    height: 140px;
  }
`

/**
 * Nome do produto
 */
const ProdutoNome = styled.h3`
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #374151;
  line-height: 1.3;
  height: 2.6rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`

/**
 * Container de preços
 */
const PrecosContainer = styled.div`
  margin-bottom: 0.75rem;
`

/**
 * Preço original (riscado)
 */
const PrecoOriginal = styled.div`
  font-size: 0.8rem;
  color: #6b7280;
  text-decoration: line-through;
  margin-bottom: 0.25rem;
`

/**
 * Preço promocional
 */
const PrecoPromocional = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #ef4444;
`

/**
 * Botão de adicionar
 */
const BotaoAdicionar = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #2563eb;
  }
`

/**
 * Função para obter produtos aleatórios da lista
 */
const obterProdutosAleatorios = (quantidade = 6) => {
  const produtosDisponiveis = produtos.filter(produto => produto.disponivel)
  const produtosEmbaralhados = [...produtosDisponiveis].sort(() => Math.random() - 0.5)
  return produtosEmbaralhados.slice(0, quantidade).map(produto => ({
    ...produto,
    precoOriginal: produto.precoNumerico * 1.3, // Simula preço original 30% maior
    precoPromocional: produto.precoNumerico,
    desconto: Math.floor(((produto.precoNumerico * 1.3 - produto.precoNumerico) / (produto.precoNumerico * 1.3)) * 100)
  }))
}

/**
 * Produtos em destaque (gerados aleatoriamente)
 */
const produtosDestaque = obterProdutosAleatorios(6)

/**
 * Componente Destaques do Dia
 * Exibe produtos em promoção especial no estilo Carrefour
 */
export default function DestaquesDodia() {
  /**
   * Função para adicionar produto ao carrinho
   */
  const adicionarAoCarrinho = (produto) => {
    console.log(`Produto adicionado ao carrinho:`, produto)
    // Aqui você implementaria a lógica do carrinho
  }

  /**
   * Função para ver mais produtos
   */
  const verMaisProdutos = () => {
    console.log('Navegando para ver mais produtos')
    // Navegar para página de produtos ou ofertas
  }

  return (
    <DestaquesContainer>
      <SectionHeader>
        <SectionTitle>Destaques do dia</SectionTitle>
        <VerMaisLink onClick={verMaisProdutos}>Ver mais</VerMaisLink>
      </SectionHeader>
      <ProdutosGrid>
        {produtosDestaque.map((produto) => (
          <ProdutoCard key={produto.id}>
            <BadgeDesconto>-{produto.desconto}%</BadgeDesconto>
            <ProdutoImagem>
              <img 
                src={`/assets/${produto.imagem}`} 
                alt={produto.nome}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
            </ProdutoImagem>
            <ProdutoNome>{produto.nome}</ProdutoNome>
            <PrecosContainer>
              <PrecoOriginal>R$ {produto.precoOriginal.toFixed(2)}</PrecoOriginal>
              <PrecoPromocional>R$ {produto.precoPromocional.toFixed(2)}</PrecoPromocional>
            </PrecosContainer>
            <BotaoAdicionar onClick={() => adicionarAoCarrinho(produto)}>
              ADICIONAR
            </BotaoAdicionar>
          </ProdutoCard>
        ))}
      </ProdutosGrid>
    </DestaquesContainer>
  )
}