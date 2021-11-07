import {
  Factory, Response, ActiveModelSerializer,
    Model,  createServer
 } from 'miragejs';
import faker from 'faker';


export function TradingDayServerUp() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },

    models: {
      transaction: Model.extend({})
    },

    factories: {
      transaction: Factory.extend({
        name(i) {
          return `Transaction ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt(){
          return faker.date.recent(10);
        }
      })
    },

    seeds(server) {
      server.createList('transaction', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/transactions', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams

        const total = schema.all('transaction').length

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const transactions = this.serialize(schema.all('transaction'))
          .transactions.slice(pageStart, pageEnd);

        return new Response(
          200,
          { 'x-total-count': String(total)},
          { transactions }
        )
      });

      this.get('/transactions/:id');
      this.post('/transactions');

      this.namespace = '';
      this.passthrough();

    }
  });

  return server;
}


