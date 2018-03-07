## Documentation
Documentation for using `disk-db-async`.

### Setup `disk-db-async`
1. `$ mkdir my-app`
2. `$ cd my-app`
3. `$ npm init -y`
4. `$ npm install disk-db-async --save`
5. `$ touch index.js`

### Usage
Working with `disk-db-async` module.

#### Create a new instance of `disk-db-async`

```js
const DiskDBAsync = require("../disk-db-async/");
let db = new DiskDBAsync('./_DB/', ['collection-name'], {
	enableLogs: 0,
	overRideInvalidJSON: 1
});

db.connect().then(function(info) {
    console.log('Connect Success!');
}).catch(function(err) {
    console.log('Connect Failed! \n\tErr: ', err);
});
```

```bash
$ node app.js
Connect Success!
```

or

```bash
$ node app.js
Connect Failed! 
	Err:  Invalid File System path provided
```
