"use strict";
/*
 * disk-db-async
 * http://arvindr21.github.io/disk-db-async
 *
 * Copyright (c) 2018 Arvind Ravulavaru
 * Licensed under the MIT license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("../logger/log");
var fs = require("async-file");
var tools_util_1 = require("./tools.util");
var Store_1 = require("../store/Store");
var collection_lib_1 = require("../lib/collection.lib");
var Globals_1 = require("../Globals");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.existsPath = function (path) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var stats, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs.stat(path)];
                    case 1:
                        stats = _a.sent();
                        if (stats && stats.birthtime) {
                            resolve(stats);
                        }
                        else {
                            reject(stats);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        reject(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        return promise;
    };
    Utils.existsCollection = function (path, collections, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var promise;
            return __generator(this, function (_a) {
                promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.all(collections.map(function (file) { return __awaiter(_this, void 0, void 0, function () {
                                    var fPath, contents, coll, err_2, coll;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                fPath = path + '/' + file + '.db';
                                                contents = Globals_1.EMPTY_CONTENT;
                                                _a.label = 1;
                                            case 1:
                                                _a.trys.push([1, 6, , 9]);
                                                return [4 /*yield*/, fs.readFile(fPath, 'utf8')];
                                            case 2:
                                                contents = _a.sent();
                                                if (!!tools_util_1.default.IsJsonString(contents)) return [3 /*break*/, 5];
                                                if (!options.overRideInvalidJSON) return [3 /*break*/, 4];
                                                // update file contents
                                                return [4 /*yield*/, fs.writeFile(fPath, Globals_1.EMPTY_CONTENT)];
                                            case 3:
                                                // update file contents
                                                _a.sent();
                                                return [3 /*break*/, 5];
                                            case 4: 
                                            // File contents are not valid
                                            // What should we do? Abort?
                                            throw new Error(fPath + ' has invalid JSON content');
                                            case 5:
                                                coll = new collection_lib_1.default(fPath, file, contents, true);
                                                Store_1.default.setData(coll);
                                                return [3 /*break*/, 9];
                                            case 6:
                                                err_2 = _a.sent();
                                                log_1.default.logError(err_2);
                                                if (!err_2) return [3 /*break*/, 8];
                                                if (!options.createMissing) return [3 /*break*/, 8];
                                                // create file
                                                contents = Globals_1.EMPTY_CONTENT;
                                                return [4 /*yield*/, fs.writeFile(fPath, Globals_1.EMPTY_CONTENT)];
                                            case 7:
                                                _a.sent();
                                                coll = new collection_lib_1.default(fPath, file, contents, false);
                                                Store_1.default.setData(coll);
                                                _a.label = 8;
                                            case 8: return [3 /*break*/, 9];
                                            case 9: return [2 /*return*/];
                                        }
                                    });
                                }); }))];
                            case 1:
                                _a.sent();
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, promise];
            });
        });
    };
    return Utils;
}());
exports.default = Utils;
//# sourceMappingURL=fileops.util.js.map