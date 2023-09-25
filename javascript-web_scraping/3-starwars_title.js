#!/usr/bin/node

const request = require('request');
const argv = process.argv;
let url = 'https://swapi-api.hbtn.io/api/films/';

request(url + argv[2], function (err, res, body) {
  if (err) {
    console.log(err);
  }
  let json = JSON.parse(body);
  console.log(json.title);
});
