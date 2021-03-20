import App from './App'
import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'

const events = require('./events.json')
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()

server.disable('x-powered-by')

server.use(express.static(process.env.RAZZLE_PUBLIC_DIR))

server.get('/*', (req, res) => {
  const markup = renderToString(<App />)

  res.status(200).send(
    `<!doctype html>
    <html lang="">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Roaming Hunger Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${cssLinksFromAssets(assets, 'client')}
      </head>
      <body>
        <div id="root">${markup}</div>
        ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
      </body>
    </html>`
  )
})

function cssLinksFromAssets(assets, entrypoint) {
  if (!assets[entrypoint] || !assets[entrypoint].css) {
    return ''
  }
  return assets[entrypoint].css.map(asset=>
    `<link rel="stylesheet" href="${asset}">`
  ).join('')
}

function jsScriptTagsFromAssets(assets, entrypoint, extra = '') {
  if (!assets[entrypoint] || !assets[entrypoint].js) {
    return ''
  }
  return assets[entrypoint].js.map(asset=>
    `<script src="${asset}"${extra}></script>`
  ).join('')
}

export default server
