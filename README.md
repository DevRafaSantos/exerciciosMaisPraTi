# Guia de Instalação — Projeto com Prompt Sync em JavaScript

Este projeto utiliza a biblioteca `prompt-sync` para capturar entradas do usuário no terminal. Antes de começar, siga atentamente os passos abaixo.

---

## ✅ Pré-requisitos

Antes de instalar qualquer biblioteca, é necessário ter o **Node.js** instalado na sua máquina.

### 1. Instalar o Node.js

- Acesse o site oficial: [https://nodejs.org/pt](https://nodejs.org/pt)
- Baixe e instale a versão recomendada para seu sistema operacional.

---

## ⚙️ Configuração do Ambiente

### 2. Abrir o Visual Studio Code

- Abra o VS Code normalmente.

### 3. Acessar o Terminal

- Vá em **Terminal > Novo Terminal**.
- Caso o terminal esteja em PowerShell ou outro modo, altere para o modo **CMD** (Prompt de Comando), se necessário.

---

## 📁 Localização do Projeto

### 4. Verificar Diretório

Antes de instalar o `prompt-sync`, **certifique-se de estar no diretório correto do seu projeto**.

Use o comando abaixo para navegar até a pasta desejada, em seguida instale o prompt-sync conforme passos abaixo:

passo 1) 
cd caminho/da/sua/pasta

passo 2) 
npm install prompt-sync

## ⚙️ Exemplo de utilização do prompt-sync

```bash
//A linha abaixo deve ser inserida apenas uma única vez no projeto
  const prompt = require("prompt-sync")()

//Solicitando a informação do usuário na tela:
  let nome = prompt("Digite seu nome: ")
  console.log("Olá, ${nome}!")




