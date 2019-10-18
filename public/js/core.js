let products = [];

$(document).ready(function() {
  cleanProductList();
  getProducts('carnes');
});

let cleanProductList = () => {
  $('#item-products').html(`
    <div class="col-lg-4"></div>
    <div class="col-lg-4"><div class="loader"></div></div>
    <div class="col-lg-4"></div>
  `);
};

const buildProductCard = product => (
  `
    <li style="list-style-type: none">
      <div class="row">
        <div class="col-lg-4">
          <img class="card-img-top" src="${
            product['src-img']
          }" alt="">
        </div>
        <div class="col-lg-8">
          <div>
            <h4 class="card-title">
              <strong>${product['product-name']}</strong>
            </h4>
          </div>
          <div>
            <h5>${product['price-sale'].toLocaleString('es-CL', {
              style: 'currency',
              currency: 'CLP'
            })}</h5>
          </div>
          <div>
            <h5>${product['product-description']}</h5>
          </div>
        </div>
      </div>
    </li>
  `
);

let getProducts = categoria => {
  let url = `/v1/products/${categoria}`;

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      console.log(
        'Pending:',
        res
          .json()
          .then(data => {
            products = data;
            renderProducts(data);
          })
          .catch(err => console.log('Error:', err))
      );
    })
    .catch(error => console.error('Error:', error));
};

const addToCart = productId => {
  $('#shopping-cart-items').append(buildProductCard(products[productId]));
  $('#shoppingCart').modal('show');
}

let renderProducts = data => {
  if (data) {
    $('#item-products').html('');

    data.forEach(product => {
      let htmlProducto = `<div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="${
            product['src-img']
          }" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">${product['product-name']}</a>
            </h4>
            <h5>${product['price-sale'].toLocaleString('es-CL', {
              style: 'currency',
              currency: 'CLP'
            })}</h5>
            <p class="card-text">${product['product-description']}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            <a class="btn btn-primary addShoppingCartBtn" style="color: white" onClick="addToCart(${product['id']})">Agregar al carro</a>
          </div>
        </div>
      </div>`;

      $(htmlProducto).appendTo('#item-products');
    });
  }
};
