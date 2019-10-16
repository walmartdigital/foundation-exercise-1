const request = require('request-promise');
const $ = require('cheerio');
const _ = require('lodash');

const getURL = category => {
  let url = 'https://www.lider.cl/supermercado/category/';
  switch (category) {
    case 'CARNES':
      url += 'Carnes-y-Pescados/Vacuno/_/N-1gleruj';
      break;
    case 'FRUTAS':
      url += 'Frutas-y-Verduras/Frutas/_/N-2l8cxe';
      break;
    case 'LECHES':
      url += 'Frescos-L%C3%A1cteos/Leches/_/N-1syzw6g';
      break;
  }

  return url;
};

const getLinkTags = document =>
  $('.box-product > div', document)
    .find('.product-details')
    .find('a');

const getImages = document =>
  _.map($('.product-image > a > div > img', document), 'attribs');

const buildProducts = (linkTags, images) => {
  let products = [];
  _.forEach(linkTags, (atag, iterator) => {
    let producto = {
      href: atag.attribs.href,
      'product-name': atag.children[0].children[0].data,
      'product-descriptcion': atag.children[1].children[0].data,
      'price-sale': Math.floor(Math.random() * (10000 - 1000)) + 1000,
      'src-img': images[iterator].src
    };

    products.push(producto);
  });

  return products;
};

exports.get = async (category = '') => {
  const url = getURL(category.toUpperCase().trim());
  let productos = [];

  if (url === '') {
    return productos;
  }

  return await request(url).then(html => {
    let linkTags = getLinkTags(html);
    let images = getImages(html);

    return buildProducts(linkTags, images);
  });
};
