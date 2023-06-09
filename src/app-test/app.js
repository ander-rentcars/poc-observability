const express = require("express");
const api = require("@opentelemetry/api");
const request = require('request')
var log4js = require("log4js");

var logger = log4js.getLogger();
logger.level = "ALL";

const PORT = parseInt(process.env.PORT || "8080");
const app = express();

app.get('/', (req, res) => {
  const currentSpan = api.trace.getSpan(api.context.active());

  // Add custom attribute
  currentSpan.setAttribute("my-attribute", "my-attribute-value")
  
  res.send('Hello World!');
  logger.info("Hello World log")
  logger.error("Hello World error")
  logger.debug("Hello World debug")
  logger.trace("Hello World trace")
})

app.get('/test', (req, res) => {
  request('http://app2:8080/', (error, resp, body) => {
    res.send(body);
    logger.debug(body)
    logger.error(error)
  })
})

app.get('/error', (req, res) => {
  logger.error("Deu ruim")
  throw new Error("Deu ruim")
})

app.get('/advice', (req, res) => {
  request('https://api.adviceslip.com/advice', (error, resp, body) => {
    res.send(JSON.parse(body).slip.advice);
    logger.debug(body)
  })
})

app.listen(PORT, () => {
  logger.info(`Listening for requests on http://localhost:${PORT}`);
});