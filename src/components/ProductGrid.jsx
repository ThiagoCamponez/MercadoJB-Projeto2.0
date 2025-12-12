import { useState } from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'

/**
 * Lista de produtos em promoção com categorias e atributos adicionais
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
  { id: 9, nome: "Arroz Valicel 5kg", preco: "R$ 23,90", precoNumerico: 29.90, imagem: "arroz-valicel.jpg", categoria: "Alimentos", marca: "Valicel", disponivel: true },
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
  { id: 28, nome: "Energético Monster Energy 473ml", preco: "R$ 11,99", precoNumerico: 8.99, imagem: "energetico-monster-energy-lata-473ml-1.jpg", categoria: "Bebidas", marca: "Monster", disponivel: true },
  { id: 29, nome: "Limpador Multiuso Veja 500ml", preco: "R$ 4,90", precoNumerico: 4.90, imagem: "limpador-multiuso-veja-500ml-1.jpg", categoria: "Limpeza", marca: "Veja", disponivel: true },
  { id: 30, nome: "Nutella Creme de Avelã 350g", preco: "R$ 18,90", precoNumerico: 18.90, imagem: "nutella-creme-de-avela-350g-1.jpg", categoria: "Doces", marca: "Nutella", disponivel: true },
  { id: 31, nome: "Queijo Muçarela Fatiado President 150g", preco: "R$ 12,90", precoNumerico: 12.90, imagem: "queijo-mucarela-fatiado-president-150g-1.jpg", categoria: "Laticínios", marca: "President", disponivel: true },
  { id: 32, nome: "Red Bull Energy Drink", preco: "R$ 11,99", precoNumerico: 7.50, imagem: "redbul.jpg", categoria: "Bebidas", marca: "Red Bull", disponivel: true },
  { id: 33, nome: "Refrigerante Guaraná Antarctica 350ml", preco: "R$ 4,99", precoNumerico: 3.20, imagem: "refrigerante-guarana-antarctica-350ml-1.jpg", categoria: "Bebidas", marca: "Antarctica", disponivel: true },
  { id: 34, nome: "Sabão em Pó Tixan Ypê Primavera 1,6kg", preco: "R$ 22,90", precoNumerico: 22.90, imagem: "sabao-em-po-tixan-ype-primavera-16kg-1.webp", categoria: "Limpeza", marca: "Ypê", disponivel: true },
  { id: 35, nome: "Leite Condensado Semidesnatado Moca Cabinha 395g", preco: "R$ 4,50", precoNumerico: 4.50, imagem: "leite-condensado-semidesnatado-moca-caixinha-395g-1.webp", categoria: "Laticínios", marca: "Moca", disponivel: true },
  { id: 36, nome: "Amaciante Downy Concentrado Brisa de Verão 1-5L", preco: "R$ 11,90", precoNumerico: 11.90, imagem: "amaciante_downy_concentrado_brisa_de_verao_1-5L.webp", categoria: "Limpeza", marca: "Downy", disponivel: true },
  { id: 37, nome: "Fraldas Pampers M 70 unidades", preco: "R$ 89,90", precoNumerico: 89.90, imagem: "fralda_pampers_m_70.webp", categoria: "Higiene", marca: "Pampers", disponivel: true },
  { id: 38, nome: "Fraldas Descartável Pampers Pants Ajuste Total XG 32 unidades", preco: "R$ 74,90", precoNumerico: 74.90, imagem: "fralda-descartavel-pampers-pants-ajuste-total-xg-32-unidades-1.webp", categoria: "Higiene", marca: "Pampers", disponivel: true },
  { id: 39, nome: "Fórmula Infantil Sem Lactose Aptamil 800g", preco: "R$ 64,90", precoNumerico: 64.90, imagem: "formula-infantil-sem-lactose-aptamil-800-g-1.webp", categoria: "Alimentos", marca: "Aptamil", disponivel: true },
  { id: 40, nome: "Cerveja Original Pilsen 350ml Lata 12 unidades", preco: "R$ 38,90", precoNumerico: 38.90, imagem: "cerveja-original-pilsen-350ml-lata-12-unidades-1.webp", categoria: "Bebidas", marca: "Original", disponivel: true },
  { id: 41, nome: "Cerveja Preta Caracu Lata 350ml", preco: "R$ 5,99", precoNumerico: 5.99, imagem: "cerveja_preta_caracu_lata.webp", categoria: "Bebidas", marca: "Caracu", disponivel: true },
  { id: 42, nome: "Cerveja Pilsen Brahma Chopp Lata 350ml", preco: "R$ 4,50", precoNumerico: 4.50, imagem: "cerveja-pilsen-brahma-chopp-lata-350ml-1.webp", categoria: "Bebidas", marca: "Brahma", disponivel: true },
  { id: 43, nome: "Cerveja Brahma Duplo Malte Puro Malte 350ml Lata", preco: "R$ 5,99", precoNumerico: 5.99, imagem: "cerveja-brahma-duplo-malte-puro-malte-350ml-lata-1.webp", categoria: "Bebidas", marca: "Brahma", disponivel: true },
  { id: 44, nome: "Cerveja Pilsen Original Lata 350ml", preco: "R$ 4,99", precoNumerico: 4.99, imagem: "cerveja-pilsen-original-lata-350ml-1.webp", categoria: "Bebidas", marca: "Original", disponivel: true },
  { id: 45, nome: "Cerveja Pilsen Antártica Lata 350ml", preco: "R$ 4,50", precoNumerico: 4.50, imagem: "cerveja-pilsen-antartica-lata-350ml-1.webp", categoria: "Bebidas", marca: "Antártica", disponivel: true },
  { id: 46, nome: "Isotônico Gatorade Morango com Maracujá 500ml Garrafa", preco: "R$ 8,90", precoNumerico: 8.90, imagem: "isotonico-gatorade-morango-com-maracuja-500ml-garrafa-1.webp", categoria: "Bebidas", marca: "Gatorade", disponivel: true },
  { id: 47, nome: "Refrigerante Guaraná Antártica Sem Açúcar Garrafa 2l", preco: "R$ 8,99", precoNumerico: 8.99, imagem: "refrigerante-guarana-antarctica-sem-acucar-garrafa-2l-1.webp", categoria: "Bebidas", marca: "Antártica", disponivel: true },
  { id: 48, nome: "Refrigerante Pepsi Cola 2 litros", preco: "R$ 9,99", precoNumerico: 9.99, imagem: "refrigerante-pepsi-cola-2-litros.webp", categoria: "Bebidas", marca: "Pepsi", disponivel: true },
  { id: 49, nome: "Fio Dental Colgate 50m", preco: "R$ 8,90", precoNumerico: 8.90, imagem: "fio-dental-colgate-50m-1.webp", categoria: "Higiene", marca: "Colgate", disponivel: true },
  { id: 50, nome: "Kit Shampoo 375ml + Condicionador 170ml L'Oreal Paris Elseve Glycolic Gloss", preco: "R$ 34,90", precoNumerico: 34.90, imagem: "kit-shampoo-375ml---condicionador-170ml-l-oreal-paris-elseve-glycolic-gloss-1.webp", categoria: "Higiene", marca: "L'Oreal Paris", disponivel: true },
  { id: 51, nome: "Kit Shampoo 350ml + Condicionador 175ml Pantene Pro-V Liso Extremo", preco: "R$ 29,90", precoNumerico: 29.90, imagem: "kit-shampoo-350ml---condicionador-175ml-pantene-pro-v-liso-extremo-1.webp", categoria: "Higiene", marca: "Pantene", disponivel: true },
  { id: 52, nome: "Aparelho Descartável para Barbear Gillette Prestobarba Ultragrip 2 unidades", preco: "R$ 12,90", precoNumerico: 12.90, imagem: "aparelho-descartavel-para-barbear-gillette-prestobarba-ultragrip-2-unidades-1.webp", categoria: "Higiene", marca: "Gillette", disponivel: true },
  { id: 53, nome: "Sabonete em Barra Leite Nivea 85g", preco: "R$ 3,90", precoNumerico: 3.90, imagem: "sabonete-em-barra-leite-nivea-85g-1.webp", categoria: "Higiene", marca: "Nivea", disponivel: true },
  { id: 54, nome: "Biscoito Wafer Minueto Morango 81g", preco: "R$ 2,50", precoNumerico: 2.50, imagem: "bisc-wafer-minueto-morango-81g-1.webp", categoria: "Alimentos", marca: "Minueto", disponivel: true },
  { id: 55, nome: "Kit Shampoo 300ml + Condicionador 190ml Seda Luminous UV", preco: "R$ 24,90", precoNumerico: 24.90, imagem: "kit-shampoo-300ml---condicionador-190ml-seda-luminous-uv-1.webp", categoria: "Higiene", marca: "Seda", disponivel: true },
  { id: 56, nome: "Maionese Heinz Tradicional 390g", preco: "R$ 11,90", precoNumerico: 11.90, imagem: "maionese-heinz-tradicional-390-g-1.webp", categoria: "Condimentos", marca: "Heinz", disponivel: true },
  { id: 57, nome: "Escova de Dente Colgate Slim Soft Black 4 unidades", preco: "R$ 19,90", precoNumerico: 19.90, imagem: "escova-de-dente-colgate-slim-soft-black-4-unidades-1.webp", categoria: "Higiene", marca: "Colgate", disponivel: true },
  { id: 58, nome: "Creme Dental para Dentes Sensíveis Colgate Sensitive Pro Alívio Imediato Original 140g", preco: "R$ 9,90", precoNumerico: 9.90, imagem: "creme-dental-para-dentes-sensiveis-colgate-sensitive-pro-alivio-imediato-original-140g-1.webp", categoria: "Higiene", marca: "Colgate", disponivel: true },
  { id: 59, nome: "Shampoo Anticaspa Clear Men 400ml", preco: "R$ 14,90", precoNumerico: 14.90, imagem: "shampoo-anticaspa-clear-men-400ml.webp", categoria: "Higiene", marca: "Clear", disponivel: true },
  { id: 60, nome: "Biscoito Recheado de Chocolate ao Leite Choco Biscuit Bauducco 80g", preco: "R$ 3,90", precoNumerico: 3.90, imagem: "biscoito-recheado-de-chocolate-ao-leite-choco-biscuit-bauducco-80g-1.webp", categoria: "Alimentos", marca: "Bauducco", disponivel: true },
  { id: 61, nome: "Desodorante Aerossol Antitranspirante Monange Feminino Invisível 150ml", preco: "R$ 12,90", precoNumerico: 12.90, imagem: "desodorante-aerossol-antitranspirante-monange-feminino-invisivel-150ml-1.webp", categoria: "Higiene", marca: "Monange", disponivel: true },
  { id: 62, nome: "Hidratante Desodorante Monange Hidratação Intensiva Extrato de Oliva 200ml", preco: "R$ 10,90", precoNumerico: 10.90, imagem: "hidratante-desodorante-monange-hidratacao-intensiva-extrato-de-oliva-200ml-1.webp", categoria: "Higiene", marca: "Monange", disponivel: true },
  { id: 63, nome: "Antitranspirante Aerosol Rexona Men V8 250ml", preco: "R$ 13,90", precoNumerico: 13.90, imagem: "antitranspirante-aerosol-rexona-men-v8-250-ml-1.webp", categoria: "Higiene", marca: "Rexona", disponivel: true },
  { id: 64, nome: "Kit Shampoo 375ml + Condicionador 170ml L'Oreal Paris Elseve Glycolic Gloss", preco: "R$ 34,90", precoNumerico: 34.90, imagem: "kit-shampoo-375ml---condicionador-170ml-l-oreal-paris-elseve-glycolic-gloss-1.webp", categoria: "Higiene", marca: "L'Oreal Paris", disponivel: true },
  { id: 65, nome: "Caixa Sonho de Valsa e Ouro Branco Sortidos 220g", preco: "R$ 18,90", precoNumerico: 18.90, imagem: "caixa-sonho-de-valsa-e-ouro-branco-sortidos-220g-1.webp", categoria: "Doces", marca: "Garoto", disponivel: true },
  { id: 66, nome: "Kit Shampoo 400ml + Condicionador 175ml Pantene Pro-V Bambu Nutre e Cresce", preco: "R$ 32,90", precoNumerico: 32.90, imagem: "kit-shampoo-400-ml---condicionador-175-ml-pantene-pro-v-bambu-nutre-e-cresce-1.webp", categoria: "Higiene", marca: "Pantene", disponivel: true },
  { id: 67, nome: "Bis Branco 100g", preco: "R$ 4,90", precoNumerico: 4.90, imagem: "bis-branco-1008g-1.webp", categoria: "Alimentos", marca: "Genérico", disponivel: true },
  { id: 68, nome: "Miojo Nissin Galinha Caipira 85g", preco: "R$ 1,50", precoNumerico: 1.50, imagem: "nissin-miojo-galinha-caipira-85g.webp", categoria: "Alimentos", marca: "Nissin", disponivel: true },
  { id: 69, nome: "Escova de Dente Colgate Extra Clean Laranja Azul e Roxa com 3 unidades", preco: "R$ 16,90", precoNumerico: 16.90, imagem: "escova-dental-colgate-extra-clean-laranja-azul-e-roxa-com-3-unidades-1.webp", categoria: "Higiene", marca: "Colgate", disponivel: true },
  { id: 70, nome: "Lasanha Quatro Queijos Sadia 350g", preco: "R$ 22,90", precoNumerico: 22.90, imagem: "lasanha-quatro-queijos-sadia-350g-1.webp", categoria: "Alimentos", marca: "Sadia", disponivel: true },
  { id: 71, nome: "Kit Shampoo 300ml + Condicionador 190ml Seda Liso Perfeito", preco: "R$ 24,90", precoNumerico: 24.90, imagem: "kit-shampoo-300ml---condicionador-190ml-seda-liso-perfeito-1.webp", categoria: "Higiene", marca: "Seda", disponivel: true },
  { id: 72, nome: "Farinha de Milho Yoki Amarela 500g", preco: "R$ 5,90", precoNumerico: 5.90, imagem: "farinha-de-milho-yoki-amarela-500g-1.webp", categoria: "Alimentos", marca: "Yoki", disponivel: true },
  { id: 73, nome: "Mistura de Creme de Leite Mococa 200g", preco: "R$ 8,90", precoNumerico: 8.90, imagem: "Mistura-de-Creme-de-Leite-Mococa-200g.webp", categoria: "Laticínios", marca: "Mococa", disponivel: true },
  { id: 74, nome: "Ketchup Heinz Tradicional 567g", preco: "R$ 10,90", precoNumerico: 10.90, imagem: "ketchup-heinz-tradicional-567g-1.webp", categoria: "Condimentos", marca: "Heinz", disponivel: true },
  { id: 75, nome: "Café em Pó 3 Corações Extraforte 500g", preco: "R$ 19,90", precoNumerico: 19.90, imagem: "cafe-em-po-3-coracoes-extraforte-500g-1.webp", categoria: "Alimentos", marca: "3 Corações", disponivel: true },
  { id: 76, nome: "Amido de Milho Maizena Tradicional 200mg", preco: "R$ 6,90", precoNumerico: 6.90, imagem: "amido-milho-maizena-tradicional-200mg.webp", categoria: "Alimentos", marca: "Maizena", disponivel: true },
  { id: 77, nome: "Café em Pó a Vácuo 3 Corações 500g", preco: "R$ 21,90", precoNumerico: 21.90, imagem: "cafe-em-po-a-vacuo-3-coracoes-500g-1.webp", categoria: "Alimentos", marca: "3 Corações", disponivel: true },
  { id: 78, nome: "Enxaguante Bucal Colgate Plax Ice Infinity 500ml Promo Leve 500ml Pague 350ml", preco: "R$ 9,90", precoNumerico: 9.90, imagem: "enxaguante-bucal-colgate-plax-ice-infinity-500ml-promo-leve-500ml-pague-350ml-1.webp", categoria: "Higiene", marca: "Colgate", disponivel: true },
  { id: 79, nome: "Kit Shampoo 350ml + Condicionador 175ml Pantene Pro-V Restauração", preco: "R$ 29,90", precoNumerico: 29.90, imagem: "kit-shampoo-350ml---condicionador-175ml-pantene-pro-v-restauracao-1.webp", categoria: "Higiene", marca: "Pantene", disponivel: true },
  { id: 80, nome: "Biscoito Wafer Minueto Chocolate 81g", preco: "R$ 2,50", precoNumerico: 2.50, imagem: "bisc-wafer-minueto-chocolate-81g-1.webp", categoria: "Alimentos", marca: "Minueto", disponivel: true },
  { id: 81, nome: "Enxaguante Antisséptico Bucal Listerine Cool Mint Zero Álcool Hortelã 500ml", preco: "R$ 11,90", precoNumerico: 11.90, imagem: "enxaguante-antisseptico-bucal-listerine-cool-mint-zero-alcool-hortela-500ml-1.webp", categoria: "Higiene", marca: "Listerine", disponivel: true },
  { id: 82, nome: "Salgadinho Onda Requeijão Elma Chips Cheetos 160g", preco: "R$ 7,90", precoNumerico: 7.90, imagem: "salgadinho-onda-requeijao-elma-chips-cheetos-160g-1.webp", categoria: "Alimentos", marca: "Elma Chips", disponivel: true },
  { id: 83, nome: "Lasanha de Calabresa Seara 600g", preco: "R$ 24,90", precoNumerico: 24.90, imagem: "lasanha-de-calabresa-seara-600g-1.webp", categoria: "Alimentos", marca: "Seara", disponivel: true },
  { id: 84, nome: "Miojo Nissin Carne 85g", preco: "R$ 1,50", precoNumerico: 1.50, imagem: "nissin-miojo-carne-85g.webp", categoria: "Alimentos", marca: "Nissin", disponivel: true },
  { id: 85, nome: "Lasanha à Bolonhesa com Molho Vermelho Sadia 350g", preco: "R$ 23,90", precoNumerico: 23.90, imagem: "lasanha-a-bolonhesa-com-molho-vermelho-sadia-350g-1.webp", categoria: "Alimentos", marca: "Sadia", disponivel: true },
  { id: 86, nome: "Sobrecoxas Temperada Frango Fácil Sadia 800g", preco: "R$ 34,90", precoNumerico: 34.90, imagem: "sobrecoxa-temperada-frango-facil-sadia-800-g-1.webp", categoria: "Alimentos", marca: "Sadia", disponivel: true },
  { id: 87, nome: "Ling Toscana Grossa Sadia 1kg", preco: "R$ 42,90", precoNumerico: 42.90, imagem: "ling-toscana-grossa-sadia-kg-1.webp", categoria: "Alimentos", marca: "Sadia", disponivel: false },
  { id: 88, nome: "Caldo de Mandioquinha com Frango na Panelinha Seara 300g", preco: "R$ 12,90", precoNumerico: 12.90, imagem: "caldo-de-mandioquinha-com-frango-na-panelinha-seara-300g-1.webp", categoria: "Alimentos", marca: "Seara", disponivel: true },
  { id: 89, nome: "Bombom Nestle Especialidades Caixa 251g", preco: "R$ 22,90", precoNumerico: 22.90, imagem: "bombom-nestle-especialidades-caixa-251g-1.webp", categoria: "Doces", marca: "Nestle", disponivel: true },
  { id: 90, nome: "Cacau em Pó Sadia 1kg", preco: "R$ 28,90", precoNumerico: 28.90, imagem: "coracao_frango_sadia_1kg.webp", categoria: "Alimentos", marca: "Sadia", disponivel: true },
  { id: 91, nome: "Fio Dental Johnson S Reach Expansion Plus Sabor Menta com 50 metros", preco: "R$ 9,90", precoNumerico: 9.90, imagem: "fio-dental-johnson-s-reach-expansion-plus-sabor-menta-com-50-metros-1.webp", categoria: "Higiene", marca: "Johnson", disponivel: true },
  { id: 92, nome: "Sabonete Lux Botanicals Rosas 85g", preco: "R$ 3,50", precoNumerico: 3.50, imagem: "sabonete-lux-botanicals-rosas-85g.webp", categoria: "Higiene", marca: "Lux", disponivel: true },
  { id: 93, nome: "Fermento Biológico Dona Benta 10g", preco: "R$ 5,90", precoNumerico: 5.90, imagem: "fermento-biologico-dona-benta-10g.webp", categoria: "Alimentos", marca: "Dona Benta", disponivel: true },
  { id: 94, nome: "Sabonete Francis Lavandas 90g", preco: "R$ 4,50", precoNumerico: 4.50, imagem: "sabonete-francis-lavandas-90g.webp", categoria: "Higiene", marca: "Francis", disponivel: true },
  { id: 95, nome: "Miojo Nissin Carne Tomate 85g", preco: "R$ 1,50", precoNumerico: 1.50, imagem: "nissin-miojo-carne-tomate-85g.webp", categoria: "Alimentos", marca: "Nissin", disponivel: true },
  { id: 96, nome: "Miojo Nissin Galinha 85g", preco: "R$ 1,50", precoNumerico: 1.50, imagem: "nissin-miojo-galinha-85g.webp", categoria: "Alimentos", marca: "Nissin", disponivel: true },
  { id: 97, nome: "Sabonete Lux Botanicals Orquídea Negra 85g", preco: "R$ 3,50", precoNumerico: 3.50, imagem: "sabonete-lux-botanicals-orquidea-negra-85g.webp", categoria: "Higiene", marca: "Lux", disponivel: true },
  { id: 98, nome: "Pedaços de Frango Coxinha da Asa Congelada com Osso Sadia 1kg", preco: "R$ 32,90", precoNumerico: 32.90, imagem: "pedacos-de-frango-coxinha-da-asa-congelada-com-osso-sadia-1kg-1.webp", categoria: "Alimentos", marca: "Sadia", disponivel: true },
  { id: 99, nome: "Bis ao Leite 100g", preco: "R$ 5,90", precoNumerico: 5.90, imagem: "bis-ao-leite-1008g-1.webp", categoria: "Alimentos", marca: "Genérico", disponivel: true },
  { id: 100, nome: "Farofa Yoki 200g", preco: "R$ 6,90", precoNumerico: 6.90, imagem: "farofa_yoki_200g.png", categoria: "Alimentos", marca: "Yoki", disponivel: true },
  { id: 101, nome: "Ling Toscana Perdigo na Brasa 1kg", preco: "R$ 45,90", precoNumerico: 45.90, imagem: "ling-toscana-perdigao-na-brasa-kg-1.webp", categoria: "Alimentos", marca: "Perdigão", disponivel: true },
  { id: 102, nome: "Talco Tenis Pé", preco: "R$ 8,90", precoNumerico: 8.90, imagem: "talco_tenis_pe.webp", categoria: "Higiene", marca: "Tenis", disponivel: true },
  { id: 103, nome: "Yakissoba Legu Molho Orien Nissin UFO 95g", preco: "R$ 3,90", precoNumerico: 3.90, imagem: "yakissoba-legu-molh-orien-nissin-ufo-95g-1.webp", categoria: "Alimentos", marca: "Nissin", disponivel: true },
  { id: 104, nome: "Ervilha Quero Lata 170g", preco: "R$ 2,50", precoNumerico: 2.50, imagem: "ervilha-quero-lata-170-g-1.webp", categoria: "Alimentos", marca: "Quero", disponivel: true },
  { id: 105, nome: "Mac Yakissoba Nissin UFO Carne 97g", preco: "R$ 3,90", precoNumerico: 3.90, imagem: "mac-yakissoba-nissin-ufo-carne-97g-1.webp", categoria: "Alimentos", marca: "Nissin", disponivel: true },
  { id: 106, nome: "Pizza Brasileira Perdigão", preco: "R$ 18,90", precoNumerico: 18.90, imagem: "pizza-brasileira-perdigao.webp", categoria: "Alimentos", marca: "Perdigão", disponivel: true },
  { id: 107, nome: "Pizza de Calabresa Sadia 460g", preco: "R$ 16,90", precoNumerico: 16.90, imagem: "pizza-de-calabresa-sadia-460g-1.webp", categoria: "Alimentos", marca: "Sadia", disponivel: true },
  { id: 108, nome: "Milho Pipoca Yoki 400g", preco: "R$ 7,90", precoNumerico: 7.90, imagem: "milho-pipoca-yoki-400g-1.webp", categoria: "Alimentos", marca: "Yoki", disponivel: true },
  { id: 109, nome: "Sabonete Phebo Rosas", preco: "R$ 4,50", precoNumerico: 4.50, imagem: "sabonete-phebo-rosas.webp", categoria: "Higiene", marca: "Phebo", disponivel: true },
  { id: 110, nome: "Absorvente Tripla Proteção Suave com Abas Íntimos 32 unidades", preco: "R$ 18,90", precoNumerico: 18.90, imagem: "absorvente-tripla-protecao-suave-com-abas-intimus-32-unidades-1.webp", categoria: "Higiene", marca: "Íntimus", disponivel: true },
  { id: 111, nome: "Sabonete Lux Botanicals Lavanda 85g", preco: "R$ 3,50", precoNumerico: 3.50, imagem: "sabonete-lux-botanicals-lavanda-85g.webp", categoria: "Higiene", marca: "Lux", disponivel: true },
  { id: 112, nome: "Cereal Matinal Nescau Leve 770g Pague 620g", preco: "R$ 15,90", precoNumerico: 15.90, imagem: "cereal-matinal-nescau-leve-770g-pague-620g-1.webp", categoria: "Alimentos", marca: "Nescau", disponivel: true },
  { id: 113, nome: "Arroz Carreteiro na Panelinha Seara 300g", preco: "R$ 11,90", precoNumerico: 11.90, imagem: "arroz-carreteiro-na-panelinha-seara-300g-1.webp", categoria: "Alimentos", marca: "Seara", disponivel: true },
  { id: 114, nome: "Sabonete Phebo Lavanda", preco: "R$ 4,50", precoNumerico: 4.50, imagem: "sabonete-phebo-lavanda.webp", categoria: "Higiene", marca: "Phebo", disponivel: true },
  { id: 115, nome: "Salgadinho Lua Parmesão Elma Chips Cheetos 143g", preco: "R$ 7,50", precoNumerico: 7.50, imagem: "salgadinho-lua-parmesao-elma-chips-cheetos-143g-1.webp", categoria: "Alimentos", marca: "Elma Chips", disponivel: true },
  { id: 116, nome: "Escondidinho de Carne Moída na Panelinha Seara 300g", preco: "R$ 13,90", precoNumerico: 13.90, imagem: "escondidinho-de-carne-moida-na-panelinha-seara-300g-1.webp", categoria: "Alimentos", marca: "Seara", disponivel: true }
]

/**
 * Container da seção de produtos
 */
const ProductSection = styled.section`
  grid-column: span 2;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    grid-column: span 3;
  }
  
  @media (min-width: 1024px) {
    grid-column: span 4;
  }
`

/**
 * Container dos filtros e pesquisa
 */
const FiltersContainer = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
`

/**
 * Campo de pesquisa
 */
const SearchInput = styled.input`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  flex: 1;
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`

/**
 * Container dos selects de filtro
 */
const FilterSelect = styled.select`
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.2s ease;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`

/**
 * Container de faixa de preço
 */
const PriceRangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`

/**
 * Input de preço
 */
const PriceInput = styled.input`
  padding: 0.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  width: 80px;
  text-align: center;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`

/**
 * Botão de limpar filtros
 */
const ClearFiltersButton = styled.button`
  padding: 0.75rem 1rem;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #dc2626;
  }
`

/**
 * Contador de resultados
 */
const ResultsCounter = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`

/**
 * Título da seção de produtos
 */
const SectionTitle = styled.h2`
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
 * Grid responsivo dos produtos
 */
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

/**
 * Componente ProductGrid
 * Exibe a grade de produtos em promoção com filtros e pesquisa
 */
export default function ProductGrid() {
  // Estados para filtros e pesquisa
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false)

  // Funções auxiliares para filtros
  const getUniqueCategories = () => [...new Set(produtos.map(p => p.categoria))]
  const getUniqueBrands = () => [...new Set(produtos.map(p => p.marca))]

  // Aplicar filtros nos produtos
  const filteredProducts = produtos.filter(produto => {
    const matchesSearch = produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || produto.categoria === selectedCategory
    const matchesBrand = !selectedBrand || produto.marca === selectedBrand
    const matchesPrice = (!minPrice || produto.precoNumerico >= parseFloat(minPrice)) &&
                        (!maxPrice || produto.precoNumerico <= parseFloat(maxPrice))
    const matchesAvailability = !showOnlyAvailable || produto.disponivel

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesAvailability
  })

  // Limpar todos os filtros
  const clearAllFilters = () => {
    setSearchTerm('')
    setSelectedCategory('')
    setSelectedBrand('')
    setMinPrice('')
    setMaxPrice('')
    setShowOnlyAvailable(false)
  }

  return (
    <ProductSection>
      
      <FiltersContainer>
        {/* Filtro de Pesquisa */}
        <SearchInput
          type="text"
          placeholder="Pesquisar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {/* Filtro por Categoria */}
        <FilterSelect
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas as categorias</option>
          {getUniqueCategories().map(categoria => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </FilterSelect>
        
        {/* Filtro por Marca */}
        <FilterSelect
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">Todas as marcas</option>
          {getUniqueBrands().map(marca => (
            <option key={marca} value={marca}>{marca}</option>
          ))}
        </FilterSelect>
        
        {/* Filtro por Faixa de Preço */}
        <PriceRangeContainer>
          <span>Preço:</span>
          <PriceInput
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            min="0"
            step="0.01"
          />
          <span>até</span>
          <PriceInput
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            min="0"
            step="0.01"
          />
        </PriceRangeContainer>
        
        {/* Checkbox para produtos disponíveis */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={showOnlyAvailable}
            onChange={(e) => setShowOnlyAvailable(e.target.checked)}
          />
          Apenas disponíveis
        </label>
        
        {/* Botão para limpar filtros */}
        <ClearFiltersButton onClick={clearAllFilters}>
          Limpar Filtros
        </ClearFiltersButton>
      </FiltersContainer>
      
      {/* Contador de Resultados */}
      <ResultsCounter>
        {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
      </ResultsCounter>
      
      {/* Grade de Produtos */}
      <ProductsGrid>
        {filteredProducts.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </ProductsGrid>
      
      {/* Mensagem quando não há produtos */}
      {filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
          Nenhum produto encontrado com os filtros aplicados.
        </div>
      )}
    </ProductSection>
  )
}