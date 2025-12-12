import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Localizacao from './pages/Localizacao'

/**
 * Container principal da aplicação com layout responsivo
 */
const AppContainer = styled.div`
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

/**
 * Container do conteúdo principal com largura máxima e centralização
 */
const MainContent = styled.main`
  flex: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.25rem;
  width: 100%;
`

/**
 * Componente principal da aplicação
 * Gerencia o roteamento e estrutura geral do layout
 */
function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/localizacao" element={<Localizacao />} />
        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  )
}

export default App