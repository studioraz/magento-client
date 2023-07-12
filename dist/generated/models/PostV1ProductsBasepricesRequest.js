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
exports.PostV1ProductsBasepricesRequestToJSON = exports.PostV1ProductsBasepricesRequestFromJSONTyped = exports.PostV1ProductsBasepricesRequestFromJSON = exports.instanceOfPostV1ProductsBasepricesRequest = void 0;
var CatalogDataBasePriceInterface_1 = require("./CatalogDataBasePriceInterface");
/**
 * Check if a given object implements the PostV1ProductsBasepricesRequest interface.
 */
function instanceOfPostV1ProductsBasepricesRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "prices" in value;
    return isInstance;
}
exports.instanceOfPostV1ProductsBasepricesRequest = instanceOfPostV1ProductsBasepricesRequest;
function PostV1ProductsBasepricesRequestFromJSON(json) {
    return PostV1ProductsBasepricesRequestFromJSONTyped(json, false);
}
exports.PostV1ProductsBasepricesRequestFromJSON = PostV1ProductsBasepricesRequestFromJSON;
function PostV1ProductsBasepricesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'prices': (json['prices'].map(CatalogDataBasePriceInterface_1.CatalogDataBasePriceInterfaceFromJSON)),
    };
}
exports.PostV1ProductsBasepricesRequestFromJSONTyped = PostV1ProductsBasepricesRequestFromJSONTyped;
function PostV1ProductsBasepricesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'prices': (value.prices.map(CatalogDataBasePriceInterface_1.CatalogDataBasePriceInterfaceToJSON)),
    };
}
exports.PostV1ProductsBasepricesRequestToJSON = PostV1ProductsBasepricesRequestToJSON;
//# sourceMappingURL=PostV1ProductsBasepricesRequest.js.map