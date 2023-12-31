"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Magento Community
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteCartManagementV1Api = void 0;
var runtime = __importStar(require("../runtime"));
var models_1 = require("../models");
/**
 *
 */
var QuoteCartManagementV1Api = /** @class */ (function (_super) {
    __extends(QuoteCartManagementV1Api, _super);
    function QuoteCartManagementV1Api() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns information for the cart for a specified customer.
     */
    QuoteCartManagementV1Api.prototype.getV1CartsMineRaw = function (initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, token, tokenString, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        headerParameters = {};
                        if (!(this.configuration && this.configuration.accessToken)) return [3 /*break*/, 2];
                        token = this.configuration.accessToken;
                        return [4 /*yield*/, token("bearerAuth", [])];
                    case 1:
                        tokenString = _a.sent();
                        if (tokenString) {
                            headerParameters["Authorization"] = "Bearer ".concat(tokenString);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/V1/carts/mine",
                            method: 'GET',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.QuoteDataCartInterfaceFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Returns information for the cart for a specified customer.
     */
    QuoteCartManagementV1Api.prototype.getV1CartsMine = function (initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getV1CartsMineRaw(initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates an empty cart and quote for a guest.
     */
    QuoteCartManagementV1Api.prototype.postV1CartsRaw = function (initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, token, tokenString, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        headerParameters = {};
                        if (!(this.configuration && this.configuration.accessToken)) return [3 /*break*/, 2];
                        token = this.configuration.accessToken;
                        return [4 /*yield*/, token("bearerAuth", [])];
                    case 1:
                        tokenString = _a.sent();
                        if (tokenString) {
                            headerParameters["Authorization"] = "Bearer ".concat(tokenString);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/V1/carts/",
                            method: 'POST',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _a.sent();
                        if (this.isJsonMime(response.headers.get('content-type'))) {
                            return [2 /*return*/, new runtime.JSONApiResponse(response)];
                        }
                        else {
                            return [2 /*return*/, new runtime.TextApiResponse(response)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates an empty cart and quote for a guest.
     */
    QuoteCartManagementV1Api.prototype.postV1Carts = function (initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postV1CartsRaw(initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates an empty cart and quote for a specified customer if customer does not have a cart yet.
     */
    QuoteCartManagementV1Api.prototype.postV1CartsMineRaw = function (initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, token, tokenString, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        headerParameters = {};
                        if (!(this.configuration && this.configuration.accessToken)) return [3 /*break*/, 2];
                        token = this.configuration.accessToken;
                        return [4 /*yield*/, token("bearerAuth", [])];
                    case 1:
                        tokenString = _a.sent();
                        if (tokenString) {
                            headerParameters["Authorization"] = "Bearer ".concat(tokenString);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/V1/carts/mine",
                            method: 'POST',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _a.sent();
                        if (this.isJsonMime(response.headers.get('content-type'))) {
                            return [2 /*return*/, new runtime.JSONApiResponse(response)];
                        }
                        else {
                            return [2 /*return*/, new runtime.TextApiResponse(response)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates an empty cart and quote for a specified customer if customer does not have a cart yet.
     */
    QuoteCartManagementV1Api.prototype.postV1CartsMine = function (initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postV1CartsMineRaw(initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates an empty cart and quote for a specified customer if customer does not have a cart yet.
     */
    QuoteCartManagementV1Api.prototype.postV1CustomersCustomerIdCartsRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, token, tokenString, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                            throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling postV1CustomersCustomerIdCarts.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (!(this.configuration && this.configuration.accessToken)) return [3 /*break*/, 2];
                        token = this.configuration.accessToken;
                        return [4 /*yield*/, token("bearerAuth", [])];
                    case 1:
                        tokenString = _a.sent();
                        if (tokenString) {
                            headerParameters["Authorization"] = "Bearer ".concat(tokenString);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/V1/customers/{customerId}/carts".replace("{".concat("customerId", "}"), encodeURIComponent(String(requestParameters.customerId))),
                            method: 'POST',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _a.sent();
                        if (this.isJsonMime(response.headers.get('content-type'))) {
                            return [2 /*return*/, new runtime.JSONApiResponse(response)];
                        }
                        else {
                            return [2 /*return*/, new runtime.TextApiResponse(response)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates an empty cart and quote for a specified customer if customer does not have a cart yet.
     */
    QuoteCartManagementV1Api.prototype.postV1CustomersCustomerIdCarts = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postV1CustomersCustomerIdCartsRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Assigns a specified customer to a specified shopping cart.
     */
    QuoteCartManagementV1Api.prototype.putV1CartsCartIdRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, token, tokenString, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.cartId === null || requestParameters.cartId === undefined) {
                            throw new runtime.RequiredError('cartId', 'Required parameter requestParameters.cartId was null or undefined when calling putV1CartsCartId.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (!(this.configuration && this.configuration.accessToken)) return [3 /*break*/, 2];
                        token = this.configuration.accessToken;
                        return [4 /*yield*/, token("bearerAuth", [])];
                    case 1:
                        tokenString = _a.sent();
                        if (tokenString) {
                            headerParameters["Authorization"] = "Bearer ".concat(tokenString);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/V1/carts/{cartId}".replace("{".concat("cartId", "}"), encodeURIComponent(String(requestParameters.cartId))),
                            method: 'PUT',
                            headers: headerParameters,
                            query: queryParameters,
                            body: (0, models_1.PutV1CartsCartIdRequestToJSON)(requestParameters.putV1CartsCartIdRequest),
                        }, initOverrides)];
                    case 3:
                        response = _a.sent();
                        if (this.isJsonMime(response.headers.get('content-type'))) {
                            return [2 /*return*/, new runtime.JSONApiResponse(response)];
                        }
                        else {
                            return [2 /*return*/, new runtime.TextApiResponse(response)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Assigns a specified customer to a specified shopping cart.
     */
    QuoteCartManagementV1Api.prototype.putV1CartsCartId = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.putV1CartsCartIdRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Places an order for a specified cart.
     */
    QuoteCartManagementV1Api.prototype.putV1CartsCartIdOrderRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, token, tokenString, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.cartId === null || requestParameters.cartId === undefined) {
                            throw new runtime.RequiredError('cartId', 'Required parameter requestParameters.cartId was null or undefined when calling putV1CartsCartIdOrder.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (!(this.configuration && this.configuration.accessToken)) return [3 /*break*/, 2];
                        token = this.configuration.accessToken;
                        return [4 /*yield*/, token("bearerAuth", [])];
                    case 1:
                        tokenString = _a.sent();
                        if (tokenString) {
                            headerParameters["Authorization"] = "Bearer ".concat(tokenString);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/V1/carts/{cartId}/order".replace("{".concat("cartId", "}"), encodeURIComponent(String(requestParameters.cartId))),
                            method: 'PUT',
                            headers: headerParameters,
                            query: queryParameters,
                            body: (0, models_1.PutV1CartsMineOrderRequestToJSON)(requestParameters.putV1CartsMineOrderRequest),
                        }, initOverrides)];
                    case 3:
                        response = _a.sent();
                        if (this.isJsonMime(response.headers.get('content-type'))) {
                            return [2 /*return*/, new runtime.JSONApiResponse(response)];
                        }
                        else {
                            return [2 /*return*/, new runtime.TextApiResponse(response)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Places an order for a specified cart.
     */
    QuoteCartManagementV1Api.prototype.putV1CartsCartIdOrder = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.putV1CartsCartIdOrderRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Places an order for a specified cart.
     */
    QuoteCartManagementV1Api.prototype.putV1CartsMineOrderRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, token, tokenString, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (!(this.configuration && this.configuration.accessToken)) return [3 /*break*/, 2];
                        token = this.configuration.accessToken;
                        return [4 /*yield*/, token("bearerAuth", [])];
                    case 1:
                        tokenString = _a.sent();
                        if (tokenString) {
                            headerParameters["Authorization"] = "Bearer ".concat(tokenString);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/V1/carts/mine/order",
                            method: 'PUT',
                            headers: headerParameters,
                            query: queryParameters,
                            body: (0, models_1.PutV1CartsMineOrderRequestToJSON)(requestParameters.putV1CartsMineOrderRequest),
                        }, initOverrides)];
                    case 3:
                        response = _a.sent();
                        if (this.isJsonMime(response.headers.get('content-type'))) {
                            return [2 /*return*/, new runtime.JSONApiResponse(response)];
                        }
                        else {
                            return [2 /*return*/, new runtime.TextApiResponse(response)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Places an order for a specified cart.
     */
    QuoteCartManagementV1Api.prototype.putV1CartsMineOrder = function (requestParameters, initOverrides) {
        if (requestParameters === void 0) { requestParameters = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.putV1CartsMineOrderRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return QuoteCartManagementV1Api;
}(runtime.BaseAPI));
exports.QuoteCartManagementV1Api = QuoteCartManagementV1Api;
//# sourceMappingURL=QuoteCartManagementV1Api.js.map