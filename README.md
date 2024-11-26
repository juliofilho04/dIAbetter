# Prevenção de Diabetes

Este é um projeto de aplicação web, desenvolvido com Flask, que utiliza um modelo de aprendizado de máquina para prever a probabilidade de uma pessoa ter diabetes com base em informações clínicas e pessoais. Além disso, o projeto oferece uma funcionalidade para calcular o IMC (Índice de Massa Corporal).

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Licença](#licença)

---

## 🧐 Sobre o Projeto

Este projeto tem como objetivo ajudar na identificação de possíveis casos de diabetes por meio de um sistema simples e acessível. A aplicação utiliza um modelo de machine learning treinado previamente, permitindo uma interação fácil e resultados rápidos para o usuário.

Além da funcionalidade principal de prevenção, o projeto também oferece ferramentas complementares, como o cálculo de IMC, para auxiliar no acompanhamento da saúde geral do usuário.

---

## ⚙️ Funcionalidades

- Prevenção de diabetes baseada em:
  - Idade
  - Gênero
  - Histórico de hipertensão e doenças cardíacas
  - Histórico de tabagismo
  - Níveis de glicose no sangue, HbA1c e IMC
- Cálculo do Índice de Massa Corporal (IMC).
- Alternância de gráficos para melhor visualização dos dados (se habilitado).
- Validação de dados de entrada com mensagens de erro claras.

---

## 🚀 Como Usar

### Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
- **Python 3.7** ou superior.
- Gerenciador de pacotes `pip`.
- Dependências listadas no arquivo `requirements.txt`.

### Passo a Passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/preditor-diabetes.git
   cd preditor-diabetes
Instale as dependências do projeto:

pip install -r requirements.txt

Certifique-se de que o arquivo diabetes_model.pkl está no diretório do projeto.

Execute a aplicação:
python app.py

🛠️ Tecnologias Utilizadas
Flask - Framework para desenvolvimento web.
Pandas e NumPy - Manipulação e análise de dados.
Pickle - Serialização do modelo de machine learning.
HTML, CSS e Bootstrap - Interface do usuário.

📝 Licença
Este projeto está sob a licença MIT. Para mais informações, consulte o arquivo LICENSE.
