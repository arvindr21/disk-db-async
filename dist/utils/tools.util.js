"use strict";
/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Tools = /** @class */ (function () {
    function Tools() {
    }
    Tools.IsJsonString = function (jsonStr) {
        try {
            JSON.parse(jsonStr);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    return Tools;
}());
exports.default = Tools;
//# sourceMappingURL=tools.util.js.map