"use strict";
/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TAG = 'disk-db-async';
var pino = require("pino");
var pretty = pino.pretty();
pretty.pipe(process.stdout);
var logger = pino({
    name: TAG,
    safe: true,
}, pretty);
var enabled = false;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.enableLogs = function (val) {
        enabled = val;
    };
    Logger.logInfo = function (o) {
        if (enabled) {
            logger.info(o);
        }
    };
    Logger.logWarn = function (o) {
        if (enabled) {
            logger.warn(o);
        }
    };
    Logger.logError = function (o) {
        if (enabled) {
            logger.error(o);
        }
    };
    return Logger;
}());
exports.default = Logger;
//# sourceMappingURL=log.js.map