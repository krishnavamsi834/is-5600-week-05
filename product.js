const fs = require('fs').promises
const path = require('path')

const productsFile = path.join(__dirname, 'data/full-products.json')

/**
 * List products
 * @param {*} options 
 * @returns 
 */
async function list(options = {}) {

  const { offset = 0, limit = 25, tag } = options;

  const data = await fs.readFile(productsFile)
  return JSON.parse(data)
    .filter(product => {
      if (!tag) {
        return product
      }
const cuid = require('cuid');
const db = require('./db');

const Product = db.model('Product', {
  _id: { type: String, default: cuid },
  description: { type: String },
  alt_description: { type: String },
  likes: { type: Number, required: true },
  urls: {
    regular: { type: String, required: true },
    small: { type: String, required: true },
    thumb: { type: String, required: true }
  },
  links: {
    self: { type: String, required: true },
    html: { type: String, required: true }
  },
  user: {
    id: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String },
    portfolio_url: { type: String },
    username: { type: String, required: true }
  },
  tags: [{ title: { type: String, required: true } }]
});

async function list({ offset = 0, limit = 25, tag } = {}) {
  const query = tag ? { tags: { $elemMatch: { title: tag } } } : {};
  return await Product.find(query).sort({ _id: 1 }).skip(offset).limit(limit);
}

      return product.tags.find(({ title }) => title == tag)
    })
    .slice(offset, offset + limit) // Slice the products
async function get(_id) {
  return await Product.findById(_id);
}

/**
 * Get a single product
 * @param {string} id
 * @returns {Promise<object>}
 */
async function get(id) {
  const products = JSON.parse(await fs.readFile(productsFile))
async function create(fields) {
  const product = new Product(fields);
  await product.save();
  return product;
}

  // Loop through the products and return the product with the matching id
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i]
    }
  }
async function edit(_id, changes) {
  return await Product.findByIdAndUpdate(_id, changes, { new: true });
}

  // If no product is found, return null
  return null;
async function destroy(_id) {
  return await Product.deleteOne({ _id });
}

module.exports = {
  list,
  get
} 
module.exports = { list, get, create, edit, destroy };