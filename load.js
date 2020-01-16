'use strict';

const async = require('async');
const request = require('request');
const rp = require('request-promise');
const querystring = require('querystring');
const cliProgress = require('cli-progress');

const COUNT = 100000;
const LIMIT = 300;

const SERVER_IP = "192.168.1.48"
const SERVER_PORT = "8080"

function getDoc(bar) {
  return async function() {
    const res = await rp({
      uri: `http://${SERVER_IP}:${SERVER_PORT}/route`,
      method: 'Get',
      json: true
    })
    bar.increment();
  }
}


async function main() {
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar.start(COUNT, 0);
  await async.timesLimit(COUNT, LIMIT, getDoc(bar));
}
main()
