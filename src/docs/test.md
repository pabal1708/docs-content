# Mati test

A etapa de testes permite analisar se a integração foi feita de maneira correta e se os pagamentos estão sendo processados sem erros.

Para realizar o teste de integração, serão necessários usuários de teste que permitirão avaliar o funcionamento do checkout através de fluxos de pagamento em um ambiente idêntico ao da integração.

Abaixo listamos os dois tipos de usuários necessários para realizar o fluxo de pagamento do Checkout Pro.

* **Vendedor:** É a conta que você usa para configurar a aplicação e as credenciais para a cobrança.
* **Comprador:** É a conta que você usa para testar o processo de compra.

Para criar um usuário de teste, envie sua **credencial de produção** _Access token_ ao endpoint [/users/test_user](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/test_user/_users_test_user/post) e execute a requisição.
