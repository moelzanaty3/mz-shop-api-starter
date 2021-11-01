# MZ Shop API

## Table of Contents

- [MZ Shop API](#mz-shop-api)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [API(s)](#apis)
  - [Development strategy](#development-strategy)
  - [Getting Started](#getting-started)
  - [Built With](#built-with)
  - [License](#license)

## About the Project

This project aims to give you the opportunity to put all of the skills you have learned into one project to build your own API needed for store project. Due to the nature of this course, it is very JavaScript heavy, but it is still expected you create clean and appealing APIs. You will also be targeting the express app, working with test using jest, and retrieving data from fake store API in which one of those is reliant on another to work.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install` || `yarn`
* start the development server with `npm run dev` || `yarn dev`


## API(s)

- [Fake Store API](https://fakestoreapi.com/) - Fake store rest API for your e-commerce or shopping website prototype

## Development strategy

1. Create `.env` file to your root directory as `.env-example`
2. add the needed `environment` variables in `config.js` file using `dotenv` and export it.
3. Create a basic server and follow instrsctions in `app.js` file
4. open `routes/api/products.js` and complte all CRUD APIs under `/api/products` for products so the user will be able to create/read/update/delete make sure you will do this operation with integration with [Fake Store API](https://fakestoreapi.com/)
5. Run unit test using `npm run test` || `yarn test` and make sure all the unit testing running successfully

## Getting Started

1. Download or clone the project:

```bash
git clone https://github.com/mohammedelzanaty/mz-shop-api.git [folder_name]
```

2. Install dependencies

```bash
yarn
```

3. Start the dev server

```bash
yarn dev
```

4. Test with Jest

```bash
yarn test
```

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript Runtime
- [Express.js](https://expressjs.com/) - Server Framework for Node.js
- [Jest](https://jestjs.io/) - Testing suit

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
