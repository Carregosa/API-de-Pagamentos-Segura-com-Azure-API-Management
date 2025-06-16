# API-de-Pagamentos-Segura-com-Azure-API-Management

# Payment API

## Descrição

Este projeto é uma API de pagamentos desenvolvida com foco em segurança e gerenciamento de acesso, utilizando os recursos do Azure. A API permite a criação, consulta e cancelamento de pagamentos, garantindo a proteção dos dados e o controle de acesso.

## Funcionalidades

- **Criação de Pagamentos**: Permite a criação de novos pagamentos.
- **Consulta de Status**: Permite consultar o status de um pagamento.
- **Cancelamento de Pagamentos**: Permite cancelar um pagamento existente.
- **Autenticação e Autorização**: Utiliza Azure Active Directory (AAD) para autenticação e autorização.
- **Monitoramento**: Utiliza Azure Monitor e Log Stream para monitorar a API em tempo real.

## Estrutura do Projeto

/payment-api ├── .github │ └── workflows │ └── azure-deploy.yml ├── src │ ├── controllers │ │ └── paymentController.js │ ├── models │ │ └── paymentModel.js │ ├── routes │ │ └── paymentRoutes.js │ ├── services │ │ └── paymentService.js │ └── app.js ├── tests │ └── payment.test.js ├── .env ├── README.md └── package.json


## Configuração

### Pré-requisitos

- Node.js
- Azure CLI
- Conta no Azure

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/payment-api.git
   cd payment-api
Instale as dependências:


Configure as variáveis de ambiente no arquivo .env.

Executando a Aplicação
Inicie o servidor:


Acesse a API em http://localhost:3000.

Testes
Execute os testes:


Implantação
Este projeto utiliza GitHub Actions para automatizar a implantação no Azure. O workflow de implantação está configurado em .github/workflows/azure-deploy.yml.

Contribuição
Faça um fork do projeto.
Crie uma branch para sua feature (git checkout -b minha-feature).
Commit suas alterações (git commit -am 'Adiciona nova feature').
Faça um push para a branch (git push origin minha-feature).
Abra um Pull Request.
