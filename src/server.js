import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import express from 'express';
import { renderToString } from 'react-dom/server';
import path from 'path';
var xml = require('xml');
var proxyaddr = require('proxy-addr');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var metaTags = require('./Content/seo.json');

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());


server.get('/sitemap.xml', (req, res) => {
  res.contentType('application/xml');
  res.sendFile(path.join(__dirname, '../sitemap.xml'));
})

server.get('/robots.txt', (req, res) => {
  res.contentType('text/html');
  res.sendFile(path.join(__dirname, '../public/robots.txt'));
})



server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
		console.log(`${req.url}` + metaTags[req.url].title)
		let title = metaTags[req.url].title;
		let description = metaTags[req.url].description;
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
				<meta name="title" content=${title} />
				<meta name="description" content=${description} />
        <meta name="google-site-verification" content="uN3vkgARTYJmKL3YlurzMSF2twf5dJKYvSce8oEr-u4" />
        <link href="https://fonts.googleapis.com/css?family=Advent+Pro:100,300,400,500,600,700|Darker+Grotesque:300,400|Quicksand:300,400|Montserrat:500|Oxygen|Muli|Open+Sans|Lato:700" rel="stylesheet">
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
