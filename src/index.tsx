import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 6000,
          createdAt: new Date("2021-03-18T09:00:00"),
        },
        {
          id: 2,
          title: 'Batata Inglesa',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 3700,
          createdAt: new Date("2021-03-20T03:24:00"),
        },
        {
          id: 3,
          title: 'Habibs',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 18250,
          createdAt: new Date("2021-03-21T03:24:00"),
        },
        {
          id: 4,
          title: 'Escritório',
          type: 'withdraw',
          category: 'Aluguel',
          amount: 2500,
          createdAt: new Date("2021-03-10T03:24:00"),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);