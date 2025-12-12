import { createGlobalStyle } from 'styled-components'

/**
 * Estilos globais da aplicação usando styled-components
 * Inclui reset CSS, estilos da scrollbar e configurações gerais
 */
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    line-height: 1.6;
    color: #1e293b;
    background-color: #f8fafc;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
  }

  /* Estilos para a barra de rolagem */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ff7a00;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #e67000;
  }

  /* Estilos para links */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Estilos para botões */
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* Estilos para imagens */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Estilos para inputs */
  input, textarea {
    font-family: inherit;
  }

  /* Utilitários responsivos */
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 0.5rem;
    }
  }
`

export default GlobalStyles