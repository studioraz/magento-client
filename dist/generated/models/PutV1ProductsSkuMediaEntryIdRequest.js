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
exports.PutV1ProductsSkuMediaEntryIdRequestToJSON = exports.PutV1ProductsSkuMediaEntryIdRequestFromJSONTyped = exports.PutV1ProductsSkuMediaEntryIdRequestFromJSON = exports.instanceOfPutV1ProductsSkuMediaEntryIdRequest = void 0;
var CatalogDataProductAttributeMediaGalleryEntryInterface_1 = require("./CatalogDataProductAttributeMediaGalleryEntryInterface");
/**
 * Check if a given object implements the PutV1ProductsSkuMediaEntryIdRequest interface.
 */
function instanceOfPutV1ProductsSkuMediaEntryIdRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "entry" in value;
    return isInstance;
}
exports.instanceOfPutV1ProductsSkuMediaEntryIdRequest = instanceOfPutV1ProductsSkuMediaEntryIdRequest;
function PutV1ProductsSkuMediaEntryIdRequestFromJSON(json) {
    return PutV1ProductsSkuMediaEntryIdRequestFromJSONTyped(json, false);
}
exports.PutV1ProductsSkuMediaEntryIdRequestFromJSON = PutV1ProductsSkuMediaEntryIdRequestFromJSON;
function PutV1ProductsSkuMediaEntryIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'entry': (0, CatalogDataProductAttributeMediaGalleryEntryInterface_1.CatalogDataProductAttributeMediaGalleryEntryInterfaceFromJSON)(json['entry']),
    };
}
exports.PutV1ProductsSkuMediaEntryIdRequestFromJSONTyped = PutV1ProductsSkuMediaEntryIdRequestFromJSONTyped;
function PutV1ProductsSkuMediaEntryIdRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'entry': (0, CatalogDataProductAttributeMediaGalleryEntryInterface_1.CatalogDataProductAttributeMediaGalleryEntryInterfaceToJSON)(value.entry),
    };
}
exports.PutV1ProductsSkuMediaEntryIdRequestToJSON = PutV1ProductsSkuMediaEntryIdRequestToJSON;
//# sourceMappingURL=PutV1ProductsSkuMediaEntryIdRequest.js.map