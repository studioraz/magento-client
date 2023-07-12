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
exports.PutV1ProductsSkuLinksRequestToJSON = exports.PutV1ProductsSkuLinksRequestFromJSONTyped = exports.PutV1ProductsSkuLinksRequestFromJSON = exports.instanceOfPutV1ProductsSkuLinksRequest = void 0;
var CatalogDataProductLinkInterface_1 = require("./CatalogDataProductLinkInterface");
/**
 * Check if a given object implements the PutV1ProductsSkuLinksRequest interface.
 */
function instanceOfPutV1ProductsSkuLinksRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "entity" in value;
    return isInstance;
}
exports.instanceOfPutV1ProductsSkuLinksRequest = instanceOfPutV1ProductsSkuLinksRequest;
function PutV1ProductsSkuLinksRequestFromJSON(json) {
    return PutV1ProductsSkuLinksRequestFromJSONTyped(json, false);
}
exports.PutV1ProductsSkuLinksRequestFromJSON = PutV1ProductsSkuLinksRequestFromJSON;
function PutV1ProductsSkuLinksRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'entity': (0, CatalogDataProductLinkInterface_1.CatalogDataProductLinkInterfaceFromJSON)(json['entity']),
    };
}
exports.PutV1ProductsSkuLinksRequestFromJSONTyped = PutV1ProductsSkuLinksRequestFromJSONTyped;
function PutV1ProductsSkuLinksRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'entity': (0, CatalogDataProductLinkInterface_1.CatalogDataProductLinkInterfaceToJSON)(value.entity),
    };
}
exports.PutV1ProductsSkuLinksRequestToJSON = PutV1ProductsSkuLinksRequestToJSON;
//# sourceMappingURL=PutV1ProductsSkuLinksRequest.js.map