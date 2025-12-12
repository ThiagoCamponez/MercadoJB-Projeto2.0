import styled from 'styled-components'

/**
 * Container principal do footer
 */
const FooterContainer = styled.footer`
  background-color: #1f2937;
  color: white;
  padding: 3rem 1rem 1rem;
  margin-top: auto;
  
  @media (min-width: 768px) {
    padding: 4rem 2rem 2rem;
  }
`

/**
 * Container do conteúdo do footer
 */
const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
`

/**
 * Seção do footer
 */
const FooterSection = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #f97316;
  }
  
  p, li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    color: #d1d5db;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  a {
    color: #d1d5db;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #f97316;
    }
  }
`

/**
 * Container das formas de pagamento
 */
const PagamentosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

/**
 * Item de forma de pagamento
 */
const PagamentoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.30rem;
  background-color: #374151;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  text-align: center;
  
  &:hover {
    background-color: #4b5563;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

/**
 * Linha divisória
 */
const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #374151;
  margin: 2rem 0 1rem;
`

/**
 * Copyright
 */
const Copyright = styled.div`
  text-align: center;
  color: #9ca3af;
  font-size: 0.9rem;
`

/**
 * Componente Footer
 * Rodapé do site com informações da empresa e formas de pagamento
 */
export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Mercado JB</h3>
          <p>Seu supermercado de confiança há mais de 20 anos.</p>
          <p>Produtos frescos e de qualidade para toda a família.</p>
        </FooterSection>
        
        <FooterSection>
          <h3>Contato</h3>
          <ul>
            <li>📍 Rua das Flores, 123 - Centro</li>
            <li>📞 (11) 1234-5678</li>
            <li>📧 contato@mercadojb.com.br</li>
            <li>🕒 Seg-Sáb: 7h às 22h | Dom: 8h às 20h</li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Links Úteis</h3>
          <ul>
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/contato">Fale Conosco</a></li>
            <li><a href="/localizacao">Como Chegar</a></li>
            <li><a href="/produtos">Nossos Produtos</a></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Formas de Pagamento</h3>
          
          <PagamentosContainer>
            <PagamentoItem>
              <img src="/assets/FormasPagamentos/master.svg" alt="Mastercard" style={{width: '50px', height: '32px'}} />
              <div>Mastercard</div>
            </PagamentoItem>
            <PagamentoItem>
              <img src="/assets/FormasPagamentos/visa.svg" alt="Visa" style={{width: '50px', height: '32px'}} />
              <div>Visa</div>
            </PagamentoItem>
            <PagamentoItem>
              <img src="/assets/FormasPagamentos/elo.svg" alt="Elo" style={{width: '50px', height: '32px'}} />
              <div>Elo</div>
            </PagamentoItem>
            <PagamentoItem>
              <img src="/assets/FormasPagamentos/pix.svg" alt="PIX" style={{width: '50px', height: '32px'}} />
              <div>PIX</div>
            </PagamentoItem>
            <PagamentoItem>
              <img src="/assets/FormasPagamentos/sodexo.png" alt="Sodexo" style={{width: '50px', height: '32px'}} />
              <div>Sodexo</div>
            </PagamentoItem>
          </PagamentosContainer>
        </FooterSection>
      </FooterContent>
      
      <Divider />
      <Copyright>
        © 2024 Mercado JB. Todos os direitos reservados. | Desenvolvido por <a href="https://thiagocamponez.tech/" target='blank'>Thiago Camponêz</a>
      </Copyright>
    </FooterContainer>
  )
}