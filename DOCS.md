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
const DiskDBAsync = require("disk-db-async");
let db = new DiskDBAsync('/path/to/db-folder', ['collection-name']);
```
