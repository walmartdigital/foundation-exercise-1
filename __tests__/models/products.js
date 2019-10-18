jest.mock('request-promise');

const requestPromise = require('request-promise');
const product = require('../../src/models/products.js');

test('Should return url for carnes', async () => {
  await product.get('carnes');
  expect(requestPromise).toHaveBeenCalledWith(
    'https://www.lider.cl/supermercado/category/Carnes-y-Pescados/Vacuno/_/N-1gleruj'
  );
});
