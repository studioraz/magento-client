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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostV1ProductsRequestToJSON = exports.PostV1ProductsRequestFromJSONTyped = exports.PostV1ProductsRequestFromJSON = exports.instanceOfPostV1ProductsRequest = void 0;
var runtime_1 = require("../runtime");
var CatalogDataProductInterface_1 = require("./CatalogDataProductInterface");
/**
 * Check if a given object implements the PostV1ProductsRequest interface.
 */
function instanceOfPostV1ProductsRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "product" in value;
    return isInstance;
}
exports.instanceOfPostV1ProductsRequest = instanceOfPostV1ProductsRequest;
function PostV1ProductsRequestFromJSON(json) {
    return PostV1ProductsRequestFromJSONTyped(json, false);
}
exports.PostV1ProductsRequestFromJSON = PostV1ProductsRequestFromJSON;
function PostV1ProductsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'product': (0, CatalogDataProductInterface_1.CatalogDataProductInterfaceFromJSON)(json['product']),
        'saveOptions': !(0, runtime_1.exists)(json, 'saveOptions') ? undefined : json['saveOptions'],
    };
}
exports.PostV1ProductsRequestFromJSONTyped = PostV1ProductsRequestFromJSONTyped;
function PostV1ProductsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'product': (0, CatalogDataProductInterface_1.CatalogDataProductInterfaceToJSON)(value.product),
        'saveOptions': value.saveOptions,
    };
}
exports.PostV1ProductsRequestToJSON = PostV1ProductsRequestToJSON;
//# sourceMappingURL=PostV1ProductsRequest.js.map