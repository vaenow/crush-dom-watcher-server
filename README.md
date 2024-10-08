# dom-watcher-server

Express.js server to handle and store these notifications. 

![screenshots01.png](statics%2Fscreenshots01.png)

![screenshots02.png](statics%2Fscreenshots02.png)

![screenshots03.png](statics%2Fscreenshots03.png)

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
