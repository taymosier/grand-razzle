import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import path from 'path';
var xml = require('xml');

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server.get('/sitemap.xml', (req, res) => {
  res.contentType('application/xml');
  res.sendFile(path.join(__dirname, '../sitemap.xml'));
})



server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Advent+Pro:100,300,400,500,600,700|Montserrat:500|Biryani:200,400|Muli|Open+Sans" rel="stylesheet">
        <title>Grand Luxxe Rentals</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      );
    }
  })

export default server;
