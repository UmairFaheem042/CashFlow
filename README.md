## schemas/models

1.  Transaction(id, title, description(optional), date(default now()), category, type)
2.  User(id, name, email, [transactionIds(ref. array)], [cardIds(ref. array)])
3.  Card(id, cardNumber, cardName)

## api routes

1.  `POST` /:userId/create-transaction {Params: {userId}, body: {title, description, date, category, type}}
2.  `GET` /:userId/get-all-transactions {Params: {userId}}
3.  `GET` /:userId/get-type-transactions {Params: {userId}, body: {type}}
4.  `GET` /:userId/get-monthly-transactions {Params: {userId}, body: {date}}
5.  `GET` /:userId/get-category-wise-transactions {Params: {userId}, body: {category}}
6.  `GET` /:userId/get-card-wise-transactions {Params: {userId}, body: {card}}
7.  `DELETE` /:userId/deleteTransaction/:transactionId {Params: {userId}, body: {transactionId}}
8.  `PUT` /:userId/updateTransaction/:transactionId {Params: {userId}, body: {transactionId}}
