# timeout-micro
> NodeJS/Micro-based Client API to test Timeouts

[![Build Status](https://travis-ci.org/nottinhill/timeout-micro.svg?branch=master)](https://travis-ci.org/nottinhill/timeout-micro) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/nottinhill/timeout-micro/issues) [![HitCount](http://hits.dwyl.io/nottinhil/timeout-micro.svg)](http://hits.dwyl.io/nottinhil/timeout-micro)

## Usage

```bash
$ npm install
$ npm start dev
```

## Deployment

This microservice can be pulled in from [Dockerhub](https://hub.docker.com/r/meshfields/timeout-micro) with

`docker pull meshfields/timeout-micro`

*Prod mode* to be launched with `NODE_ENV=production npm start`.

## Config Modes

Development Mode will use same as Production Mode


## API

Working:

```bash
GET /timeout/{sec}
```

## Authentication

-- Currently Deactivated --

Make sure to send a bearer token along in the header to get authenticate against Auth0.

```
curl --request GET --url 'http://localhost:3001/default/pods' --header 'authorization: Bearer {BEARER}' --header 'content-type: application/json'
```

## License

MIT © 2018 by Meshfields