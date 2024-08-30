# dom-watcher-server

Express.js server to handle and store these notifications. 

## Prepare the .env

```shell

$ npm run init_mv   # init the .env file

$ npm i    

```

## Run

```shell

$ npm start

```

## Build docker image

```shell

$ ./docker.sh demo

```


## API endpoint
```shell
https://crush.hk.xexlab.com/alert
```

## Connect MongoDB

```shell
mongodb://crush:pass@mongo-prod.db.xexlab.com:31101/domWatcher?authSource=domWatcher&authMechanism=SCRAM-SHA-256
```
