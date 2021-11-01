const { Router } = require('express')
const axios = require('axios')
const config = require('../../config')

const routes = Router()

// route handle create a new product
routes.post('/', async (req, res, next) => {
  try {
    // TODO: #11
    // 1. GET the new product from the request body
    // 2. Build the URL it should be something like `${config.storeApiBaseUrl}/products`
    // 3. Post a new product using axios [HINT: https://www.npmjs.com/package/axios]
    // 4. Return JSON object contain stats, data, message for the user. it will something like
    // {
    //   status: 'success',
    //   data: product,
    //   message: 'Product created successfully',
    // }
  } catch (err) {
    next(err)
  }
})

// route handle get all product
routes.get('/', async (_req, res, next) => {
  try {
    // TODO: #12
    // 1. Build the URL you will use
    // 2. GET the list of products [HINT: READ DOCS to know more https://fakestoreapi.com/docs]
    // 3. Return JSON object contain stats, data, message for the user. it will something like
    // {
    //   status: 'success',
    //   data: products,
    //   message: 'Products retrieved successfully',
    // }
  } catch (err) {
    next(err)
  }
})

// route handle get specific product as you notice here in the path I am using
// :id will match any request with path /api/products/1, /api/products/2, /api/products/3, etc.
routes.get('/:id', async (req, res, next) => {
  try {
    // TODO: #13
    // 1. Build the URL you will use
    // 2. GET the target product ID from req params [HINT: https://expressjs.com/en/guide/routing.html]
    // 3. GET the target product [HINT: READ DOCS to know more https://fakestoreapi.com/docs]
    // 3. Return JSON object contain stats, data, message for the user. it will something like
    // {
    //   status: 'success',
    //   data: product,
    //   message: 'Product retrieved successfully',
    // }
  } catch (err) {
    next(err)
  }
})

// TODO: #14
// now you should get the idea for creating an Endpoint so we need a new endpoint
// to update specific product based on it's ID

// 1. Build the URL you will use [HINT: READ DOCS to know more https://fakestoreapi.com/docs]
// 2. GET the target product ID from req params [HINT: https://expressjs.com/en/guide/routing.html]
// 3. GET the new product from the request body [HINT: https://expressjs.com/en/4x/api.html#req.body]
// 4. Call API to update product [HINT: READ DOCS to know more https://fakestoreapi.com/docs]
// 5. Return JSON object contain stats, data, message for the user. it will something like
// {
//   status: 'success',
//   data: product,
//   message: 'Product updated successfully',
// }
// handle errors using try, catch

// TODO: #15
// create an Endpoint for deleting a specific product based on it's ID

// 1. Build the URL you will use [HINT: READ DOCS to know more https://fakestoreapi.com/docs]
// 2. GET the target product ID from req params [HINT: https://expressjs.com/en/guide/routing.html]
// 4. Call API to delete product [HINT: READ DOCS to know more https://fakestoreapi.com/docs]
// 5. Return JSON object contain stats, data, message for the user. it will something like
// {
//   status: 'success',
//   data: product,
//   message: 'Product deleted successfully',
// }
// handle errors using try, catch


module.exports = routes
