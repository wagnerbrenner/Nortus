# 🔥 Projeto Fênix – Desafio React / Next.js (Nortus)

Este projeto foi desenvolvido como parte do **desafio técnico da Loomi**, com o objetivo de **recriar a interface da plataforma Nortus**, utilizando **Next.js, React e TypeScript**, consumindo uma **API legacy (v1)**.

O foco do projeto é entregar uma aplicação **moderna, performática, organizada e de fácil manutenção**, seguindo fielmente o protótipo do Figma e atendendo aos requisitos técnicos definidos no desafio.

---

## 🌐 Links Importantes

- **Aplicação em produção (Vercel)**
  👉 [https://nortus-gray.vercel.app/login](https://nortus-gray.vercel.app/login)

- **Documentação complementar (Notion)**
  👉 [https://www.notion.so/Teste-Lommi-2be560ac5d3c800c8207e9f79a11b370?source=copy_link](https://www.notion.so/Teste-Lommi-2be560ac5d3c800c8207e9f79a11b370?source=copy_link)

- **Documentação da API (v1)**
  👉 [https://nortus-challenge.api.stage.loomi.com.br/docs](https://nortus-challenge.api.stage.loomi.com.br/docs)

---

## 🎯 Objetivo do Projeto

- Recriar a interface da plataforma **Nortus** com base no protótipo fornecido
- Consumir dados de uma **API legacy**
- Demonstrar domínio em **React, Next.js, TypeScript e boas práticas de front-end**
- Aplicar conceitos de **arquitetura, organização de código e experiência do usuário**

---

## 🚀 Tecnologias Utilizadas

- **Next.js (12+)** – Framework React com SSR e SSG
- **React** – Biblioteca para construção de interfaces
- **TypeScript** – Tipagem estática e maior segurança
- **TailwindCSS** – Estilização utilitária e responsiva
- **Axios** – Consumo da API
- **Zustand** – Gerenciamento de estado global
- **Zod** – Validação de formulários e dados
- **ApexCharts** – Gráficos e KPIs
- **OpenLayers** – Mapas interativos
- **Sonner** – Feedbacks e notificações

---

## ✨ Funcionalidades Implementadas

### 🔐 Autenticação

- Tela de **Login** com:
  - Validação de formulário
  - Toggle de visualização de senha
  - Integração com API de autenticação

- Token salvo em **cookies**
- Dados do usuário persistidos em **localStorage**

---

### 📊 Dashboard

- Visualização de **KPIs**
- Gráficos interativos com ApexCharts
- **Mapa de clientes por região** utilizando OpenLayers
- Filtros dinâmicos por região e categoria

---

### 🎫 Gestão de Tickets

- Listagem de tickets
- Criação de novo ticket
- Feedback visual de sucesso e erro
- Filtros por status, prioridade e responsável

---

### 💬 Chat com Assistente Virtual

- Interface de chat
- Sugestões automáticas (mockadas)
- Simulação de interação com IA

---

### 🧮 Simulador de Planos

- Simulação de planos de seguro
- Ajuste de valores em tempo real
- Seleção de plano (Básico, Intermediário e Premium)
- Indicadores de conversão e ROI
- Benefícios e coberturas adicionais

---

## 🧱 Arquitetura e Organização

```bash
src/
├── app/              # Rotas (Next.js App Router)
├── components/       # Componentes reutilizáveis
├── services/         # Camada de integração com a API
├── stores/           # Estado global (Zustand)
├── schemas/          # Validações com Zod
├── utils/            # Funções utilitárias e helpers
```

### 📐 Padrões adotados

- Componentização clara e reutilizável
- Separação de responsabilidades
- Estado global apenas quando necessário
- Tipagem forte em toda a aplicação

---

## 🧪 Como rodar o projeto localmente

### Pré-requisitos

- Node.js 18+
- NPM ou Yarn

### Instalação

```bash
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env.local`:

- Peça o env de testes.

### Executar em desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:
👉 [http://localhost:3000](http://localhost:3000)

---

## ☁️ Deploy

A aplicação está hospedada na **Vercel**, com deploy contínuo a partir do repositório Git.

🔗 Produção:
[https://nortus-gray.vercel.app/login](https://nortus-gray.vercel.app/login)

---

## 📌 Observações Técnicas

- Projeto segue um **Gitflow simplificado** (`main` / `feature/*`)
- Responsividade mínima considerada: **1000px**
- API utilizada é **legacy**, exigindo tratamento e normalização de dados no front-end
- Estrutura pensada para fácil escalabilidade e manutenção

---

## 👨‍💻 Autor

**Wagner Brenner**
Desenvolvedor Front-end / Full Stack

---

## ✅ Considerações Finais

Este projeto foi desenvolvido com foco em **qualidade de código, organização, performance e clareza**, buscando refletir boas práticas do mercado e uma experiência próxima de um ambiente real de produção.

Qualquer feedback é muito bem-vindo 🚀
