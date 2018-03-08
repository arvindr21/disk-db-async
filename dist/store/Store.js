"use strict";
/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var storage = [];
var Store = /** @class */ (function () {
    function Store() {
    }
    Store.setData = function (data) {
        try {
            storage.push(data);
        }
        catch (ex) {
            return false;
        }
        return true;
    };
    Store.getData = function (sendContents) {
        if (sendContents === void 0) { sendContents = false; }
        if (sendContents) {
            return storage;
        }
        else {
            var stgClone = JSON.parse(JSON.stringify(storage));
            stgClone.forEach(function (c) { delete c.contents; });
            return stgClone;
        }
    };
    return Store;
}());
exports.default = Store;
//# sourceMappingURL=Store.js.map