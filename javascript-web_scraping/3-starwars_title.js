#!/usr/bin/node

const request = require('request');
const argv = process.argv;
const url = 'https://swapi-api.hbtn.io/api/films/';

request(url + argv[2], function (err, res, body) {
  if (err) {
    console.log(err);
  }
  const json = JSON.parse(body);
  console.log(json.title);
});
