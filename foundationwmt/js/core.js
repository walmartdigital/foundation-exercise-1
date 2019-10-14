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

let getProducts = categoria => {
  let url = `http://localhost:3001/v1/products/${categoria}`;

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
            renderProducts(data);
          })
          .catch(err => console.log('Error:', err))
      );
    })
    .catch(error => console.error('Error:', error));
};

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
            <p class="card-text">${product['product-descriptcion']}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            <a href="#" class="btn btn-primary">Agregar al carro</a>
          </div>
        </div>
      </div>`;

      $(htmlProducto).appendTo('#item-products');
    });
  }
};
