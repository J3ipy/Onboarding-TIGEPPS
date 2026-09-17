# TIGEPPS - Onboarding 2026.2

<p align="center">
  <img
    src="https://geppsufs.com/wp-content/uploads/2024/12/logo-banner.png"
    alt="Logo TIGEPPS"
    width="300"
  />
</p>

<p align="center">
  Aplicação web desenvolvida como atividade de onboarding da equipe de
  Tecnologia da Informação do GEPPS — Universidade Federal de Sergipe.
</p>

---

## 📌 Sobre o projeto

Este projeto foi desenvolvido durante o **Onboarding 2026.2 da equipe de Tecnologia da Informação do GEPPS**, com o objetivo de proporcionar uma familiarização prática com as principais tecnologias utilizadas no desenvolvimento web.

A aplicação consiste em uma página responsiva contendo um formulário para cadastro de informações do usuário.

Após o envio, os dados são exibidos na própria interface e armazenados localmente no navegador utilizando o **Web Storage (`localStorage`)**.

Dessa forma, as informações permanecem disponíveis mesmo após a atualização da página.

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- HTML
- CSS
- Web Storage (`localStorage`)

---

## ⚙️ Funcionalidades

A aplicação possui:

- ✅ Página responsiva
- ✅ Formulário com quatro campos
- ✅ Validação de campos obrigatórios
- ✅ Validação básica de e-mail
- ✅ Exibição dos dados enviados
- ✅ Armazenamento de dados utilizando `localStorage`
- ✅ Recuperação automática dos dados após atualizar a página
- ✅ Opção para apagar os dados armazenados

---

## 📝 Formulário

O formulário contém os seguintes campos:

- Nome
- E-mail
- Curso
- Área de interesse no GEPPS

Após o preenchimento e envio, os dados são apresentados na interface.

---

## 💾 Persistência dos dados

Os dados são armazenados utilizando:

```typescript
localStorage.setItem()
````

E recuperados utilizando:

```typescript
localStorage.getItem()
```

Isso permite que as informações permaneçam salvas mesmo após atualizar ou fechar a página.

> O `localStorage` é utilizado neste projeto apenas como uma forma simplificada de persistência de dados para fins de aprendizado.

---

## 📂 Estrutura do projeto

```text
tigepps-onboarding/
│
├── public/
│   └── logo-banner.png
│
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/J3ipy/Onboarding-TIGEPPS.git
```

### 2. Acesse a pasta do projeto

```bash
cd Onboarding-TIGEPPS
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

O Vite exibirá no terminal um endereço semelhante a:

```text
http://localhost:5173
```

Abra esse endereço no navegador.

---

## 🏗️ Gerando a versão de produção

Para gerar a versão otimizada da aplicação:

```bash
npm run build
```

Os arquivos serão gerados na pasta:

```text
dist/
```

Para visualizar o build localmente:

```bash
npm run preview
```

---

## 🎯 Objetivo da atividade

O projeto tem como objetivo proporcionar contato inicial com a stack tecnológica utilizada no desenvolvimento da PWA do GEPPS, abordando conceitos como:

* criação de interfaces com React;
* tipagem com TypeScript;
* configuração de projetos com Vite;
* estilização responsiva com CSS;
* manipulação de formulários;
* validação de dados;
* estado da aplicação;
* persistência local de informações.

---

## 🏫 Instituição

**Universidade Federal de Sergipe — UFS**

**Grupo de Estudos e Pesquisas em Psicologia da Saúde — GEPPS**

**Tecnologia da Informação do GEPPS**

Onboarding 2026.2

---

## 👨‍💻 Autor

Desenvolvido por **João Pedro Santana Silva Santos**

GitHub: [@SEU-USUARIO](https://github.com/J3ipy)

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais durante o onboarding da equipe de Tecnologia da Informação do GEPPS.


pelos seus dados.
