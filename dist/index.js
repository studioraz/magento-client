"use strict";
// import all from './generated';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapResult = exports.wrapException = exports.MagentoClient = void 0;
var generated_1 = require("./generated");
__exportStar(require("./generated"), exports);
var MagentoClient = /** @class */ (function () {
    function MagentoClient(opts) {
        // check options
        if (!opts.username) {
            throw 'admin username config is required';
        }
        if (!opts.password) {
            throw 'admin password config is required';
        }
        if (!opts.basePath) {
            throw 'base path config is required';
        }
        var _fetch = opts.fetchApi || fetch;
        // create credentials
        var clientConfiguration = new generated_1.Configuration({
            username: opts.username,
            password: opts.password,
            basePath: opts.basePath
        });
        var args = [clientConfiguration, clientConfiguration.basePath, _fetch];
        this.integrationAdminTokenServiceV1Api = new (generated_1.IntegrationAdminTokenServiceV1Api.bind.apply(generated_1.IntegrationAdminTokenServiceV1Api, __spreadArray([void 0], __read(args), false)))();
        this.integrationCustomerTokenServiceV1Api = new (generated_1.IntegrationCustomerTokenServiceV1Api.bind.apply(generated_1.IntegrationCustomerTokenServiceV1Api, __spreadArray([void 0], __read(args), false)))();
        var clientConfiguration1 = new generated_1.Configuration({
            username: opts.username,
            password: opts.password,
            accessToken: this.generateAccessToken({
                postV1IntegrationAdminTokenRequest: {
                    username: opts.username,
                    password: opts.password
                }
            })
        });
        var args1 = [clientConfiguration1, clientConfiguration1.basePath, _fetch];
        this.catalogCategoryManagementV1Api = new (generated_1.CatalogCategoryManagementV1Api.bind.apply(generated_1.CatalogCategoryManagementV1Api, __spreadArray([void 0], __read(args1), false)))();
        this.srMagentoRestApiAddonConfigManagementServiceV1Api = new (generated_1.SRMagentoRestApiAddonConfigManagementServiceV1Api.bind.apply(generated_1.SRMagentoRestApiAddonConfigManagementServiceV1Api, __spreadArray([void 0], __read(args1), false)))();
        this.customerAccountManagementV1Api = new (generated_1.CustomerAccountManagementV1Api.bind.apply(generated_1.CustomerAccountManagementV1Api, __spreadArray([void 0], __read(args1), false)))();
    }
    ;
    MagentoClient.prototype.generateAccessToken = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('generateAccessToken', function () {
                        return _this.integrationAdminTokenServiceV1Api.postV1IntegrationAdminToken(requestParameters);
                    })];
            });
        });
    };
    MagentoClient.prototype.generateCustomerToken = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('generateCustomerToken', function () {
                        return _this.integrationCustomerTokenServiceV1Api.postV1IntegrationCustomerToken(requestParameters);
                    })];
            });
        });
    };
    MagentoClient.prototype.getCategories = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getCategories', function () {
                        return _this.catalogCategoryManagementV1Api.getV1Categories(requestParameters);
                    })];
            });
        });
    };
    MagentoClient.prototype.getSysConfigs = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('getSysConfigs', function () {
                        return _this.srMagentoRestApiAddonConfigManagementServiceV1Api.postV1SrsysconfigConfigGet(requestParameters);
                    })];
            });
        });
    };
    MagentoClient.prototype.setSysConfigs = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('setSysConfigs', function () {
                        return _this.srMagentoRestApiAddonConfigManagementServiceV1Api.postV1SrsysconfigConfigSet(requestParameters);
                    })];
            });
        });
    };
    MagentoClient.prototype.createCustomerAccount = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, wrapCall('createCustomerAccount', function () {
                        return _this.customerAccountManagementV1Api.postV1Customers(requestParameters);
                    })];
            });
        });
    };
    return MagentoClient;
}());
exports.MagentoClient = MagentoClient;
// helper
function wrapCall(tag, fn) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, fn()];
                case 1: return [2 /*return*/, _b.sent()];
                case 2:
                    e_1 = _b.sent();
                    if (!e_1.json) return [3 /*break*/, 4];
                    return [4 /*yield*/, e_1.json()];
                case 3:
                    _a = _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _a = e_1;
                    _b.label = 5;
                case 5: throw _a;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function wrapException(fn) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, wrapCall('wrapped exception', fn)];
        });
    });
}
exports.wrapException = wrapException;
function wrapResult(fn) {
    return __awaiter(this, void 0, void 0, function () {
        var content, e_2, statusCode, message, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, fn()];
                case 1:
                    content = _b.sent();
                    return [2 /*return*/, {
                            content: content,
                        }];
                case 2:
                    e_2 = _b.sent();
                    statusCode = e_2.status ? e_2.status : 500;
                    if (!e_2.json) return [3 /*break*/, 4];
                    return [4 /*yield*/, e_2.json()];
                case 3:
                    _a = _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _a = e_2;
                    _b.label = 5;
                case 5:
                    message = _a;
                    return [2 /*return*/, {
                            error: {
                                statusCode: statusCode,
                                message: message,
                            },
                        }];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.wrapResult = wrapResult;
exports.default = MagentoClient;
//# sourceMappingURL=index.js.map