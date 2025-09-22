
# Portfólio Pessoal - Luiz Henrique

Um portfólio online pessoal desenvolvido em **Next.js** e **Tailwind CSS**, com cards de perfil interativos e links diretos para minhas redes sociais. Ideal para apresentação profissional e projetos de front-end.

---

## 🔹 Tecnologias Utilizadas

- [Next.js 13+](https://nextjs.org/) - Framework React moderno para SSR e SSG.
- [React](https://reactjs.org/) - Biblioteca para construção de interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - Framework utilitário para estilização rápida e responsiva.
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para maior segurança e escalabilidade.
- [Vercel](https://vercel.com/) - Hospedagem recomendada para Next.js (opcional).

---

## 🔹 Funcionalidades

- Card de perfil interativo com foto circular.
- Links para redes sociais: Instagram, LinkedIn e GitHub.
- Layout responsivo, pronto para desktop e mobile.
- Suporte a tema claro e escuro via CSS prefer-color-scheme.
- Componentes reutilizáveis (Card, Button).

---

## 🔹 Estrutura do Projeto

```
/app
  ├─ page.tsx         # Página principal
  ├─ layout.tsx       # RootLayout com CSS global
/components
  ├─ Card.tsx         # Componente de card de perfil
  ├─ Button.tsx       # Botão reutilizável
/globals.css           # CSS global e Tailwind
/public
  ├─ perfil.png       # Imagem do perfil
```

---

## 🔹 Como Executar o Projeto

1. Clone o repositório:  
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Acesse a pasta do projeto:  
```bash
cd nome-do-repositorio
```

3. Instale as dependências:  
```bash
npm install
# ou
yarn
```

4. Rode o projeto em modo de desenvolvimento:  
```bash
npm run dev
# ou
yarn dev
```

5. Abra no navegador:  
```
http://localhost:3000
```

---

## 🔹 Deploy

- O projeto pode ser facilmente hospedado no [Vercel](https://vercel.com/), com deploy contínuo a partir do GitHub.  

---

## 🔹 Personalização

- Para alterar o perfil ou redes sociais, basta editar o componente `Card.tsx`.
- Cores, fontes e temas podem ser ajustados via `globals.css` ou classes Tailwind.

---

## 🔹 Licença

Este projeto está licenciado sob a MIT License.  
Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
