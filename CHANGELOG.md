# Resumo das Alterações — Website Aggiu v2

## Logo
- Nova logo **"Connected Constellation"** em SVG, com nós coloridos conectados por linhas, representando a rede de conexões da Aggiu
- Usa `currentColor` para se adaptar automaticamente ao fundo claro ou escuro (navbar, footer, hero)

## Favicon
- Substituído o favicon inline (data URI) por um arquivo `favicon.svg` dedicado em todas as 8 páginas
- Mais confiável e consistente entre navegadores

## Hero com Imagem de Fundo
- A seção hero da home agora usa a foto do site original como background
- Overlay gradiente escuro por cima para manter a legibilidade do texto

## Página Metodologia (redesign completo)
Saímos de uma lista vertical de texto para um layout visual com:
- **Diagrama circular** com 5 etapas ao redor de um hub central "Processo de investimento"
- Ícones SVG para cada etapa e anel animado conectando os passos
- **Cards detalhados** abaixo em grid 3+2, com números grandes, ícones e descrições completas
- **Interatividade**: hover no diagrama destaca o card correspondente; clique rola até ele
- Layout responsivo: no mobile, o diagrama vira lista vertical

## Botão Flutuante do WhatsApp
Adicionado em todas as 8 páginas:
- Botão verde fixo no canto inferior direito com ícone do WhatsApp
- Label "Fale conosco" aparece no hover (desktop)
- Animação de pulse ao carregar a página para chamar atenção
- Mensagem pré-preenchida: *"Olá, gostaria de saber mais sobre os serviços da Aggiu."*
- Responsivo: tamanho reduzido no mobile, sem label

> **Atenção:** O número do WhatsApp ainda é placeholder (`5511999999999`). Substituir pelo número real buscando `5511999999999` nos arquivos HTML.

## Deploy
- Repositório publicado no GitHub: `asiilva/website_aggiu`
- Configuração do Vercel com `vercel.json`:
  - **Clean URLs**: `sobre.html` acessível como `/sobre`
  - **Cache headers** para CSS, JS e favicon
  - **Output directory**: `prototype`
- `package.json` com build script para compatibilidade com Vercel
