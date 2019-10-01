const rp = require('request-promise');
const otcsv = require('objects-to-csv');
const $ = require('cheerio');
const _ = require('lodash');

const url_carnes = 'https://www.lider.cl/supermercado/category/Carnes-y-Pescados/Vacuno/_/N-1gleruj';
const url_frutas = 'https://www.lider.cl/supermercado/category/Frutas-y-Verduras/Frutas/_/N-2l8cxe';
const url_leche = 'https://www.lider.cl/supermercado/category/Frescos-L%C3%A1cteos/Leches/_/N-1syzw6g';


const _get = async (params) => {
  try {
    let url = "";

    if (params.category.toUpperCase() === "CARNES") {
      url = url_carnes;
    } else if (params.category.toUpperCase() === "FRUTAS") {
      url = url_frutas;
    } else if (params.category.toUpperCase() === "LECHE") {
      url = url_leche
    }

    let productos = [];

    if (url === "" ) {
      return productos;
    }

    let data = await rp(url)
      .then(function(html){
        let a = $(".box-product > div",html).find('.product-details').find('a');
        let images = _.map($(".product-image > a > div > img", html), 'attribs');
        
        _.forEach(a, (atag, iterator) => {
          let producto = {
          "href" : atag.attribs.href,
          "product-name": atag.children[0].children[0].data,
          "product-descriptcion": atag.children[1].children[0].data,
          "price-sale": Math.floor(Math.random() * (10000 - 1000)) + 1000,
          "src-img": images[iterator].src
          }

          productos.push(producto);
        })
        // console.log(productos);
        return productos;
      })
      .catch(function(err){
        //handle error
        console.log(err);
        // return null;
      });

    return data;

  } catch(err) {
    console.log('Error al obtener data: ', err);
  }
}


module.exports = {
get: _get
}