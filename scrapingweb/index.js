const rp = require('request-promise');
const otcsv = require('objects-to-csv');
const $ = require('cheerio');
const _  = require('lodash');

const url = 'https://www.lider.cl/supermercado/category/Carnes-y-Pescados/Vacuno/_/N-1gleruj';

rp(url)
  .then(function(html){
    //success!
    console.log($(".box-product", html).length);

    let productos = [];

    let a = $(".box-product > div",html).find('.product-details').find('a');
    //let div = $(".box-product > div",html).find('.product-details').find('div');

    _.forEach(a, atag => {
        let producto = {
            "href" : atag.attribs.href,
            "product-name": atag.children[0].children[0].data,
            "product-descriptcion": atag.children[1].children[0].data,
            "price-sale": Math.floor(Math.random() * (10000 - 1000)) + 1000
        }

        productos.push(producto);
        
    })
   
    console.log(productos);
    
})
    
  .catch(function(err){
    //handle error
    console.log(err);
  });