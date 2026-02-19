# Sorteador de Números 🎲

Uma aplicação moderna e responsiva para sorteio de números aleatórios, desenvolvida com foco em boas práticas de engenharia de software, separação de responsabilidades e alta testabilidade.

## 🚀 Tecnologias

Este projeto foi construído utilizando as seguintes tecnologias:

* **Vue 3** (Composition API & `<script setup>`)
* **TypeScript** (Tipagem estática e segurança)
* **Tailwind CSS v4** (Estilização utilitária e design system)
* **Vite** (Build tool ultrarrápido)
* **Vitest** (Framework para testes unitários)

## 🏗️ Arquitetura e Boas Práticas

O projeto foi refatorado adotando conceitos de **Clean Architecture**, **Domain-Driven Design (DDD)** e **Object Calisthenics**.

* **Isolamento de Domínio:** As regras de negócio matemáticas (como a definição do intervalo e a garantia de números únicos) não conhecem o Vue ou o DOM. Estão isoladas em classes puras no diretório `src/domain/`.
* **Ausência de `else`:** Lógica fluida com retornos precoces (early returns).
* **Encapsulamento:** Estados inválidos são prevenidos logo na instanciação das classes de domínio (fail-fast).
* **Testabilidade:** A separação de conceitos permite que a regra do sorteio seja integralmente testada de forma unitária sem depender da interface gráfica.

## 📦 Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
```bash
git clone https://github.com/luizhanauer/sorteador.git
```

2. Acesse a pasta do projeto:

```bash
cd sorteador
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 🧪 Como rodar os testes

Os testes unitários da camada de domínio foram escritos com Vitest. Para executá-los em modo de observação (watch), rode:

```bash
npm run test
```

Para executar apenas uma vez (para CI/CD, por exemplo):

```bash
npx vitest run
```

---

Contribuição
------------

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorar a aplicação, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Se você gostou do meu trabalho e quer me agradecer, você pode me pagar um café :)

<a href="https://www.paypal.com/donate/?hosted_button_id=SFR785YEYHC4E" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 150px !important;" ></a>


Licença
-------

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.
