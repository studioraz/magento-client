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
exports.PutV1ConfigurableproductsSkuOptionsIdRequestToJSON = exports.PutV1ConfigurableproductsSkuOptionsIdRequestFromJSONTyped = exports.PutV1ConfigurableproductsSkuOptionsIdRequestFromJSON = exports.instanceOfPutV1ConfigurableproductsSkuOptionsIdRequest = void 0;
var ConfigurableProductDataOptionInterface_1 = require("./ConfigurableProductDataOptionInterface");
/**
 * Check if a given object implements the PutV1ConfigurableproductsSkuOptionsIdRequest interface.
 */
function instanceOfPutV1ConfigurableproductsSkuOptionsIdRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "option" in value;
    return isInstance;
}
exports.instanceOfPutV1ConfigurableproductsSkuOptionsIdRequest = instanceOfPutV1ConfigurableproductsSkuOptionsIdRequest;
function PutV1ConfigurableproductsSkuOptionsIdRequestFromJSON(json) {
    return PutV1ConfigurableproductsSkuOptionsIdRequestFromJSONTyped(json, false);
}
exports.PutV1ConfigurableproductsSkuOptionsIdRequestFromJSON = PutV1ConfigurableproductsSkuOptionsIdRequestFromJSON;
function PutV1ConfigurableproductsSkuOptionsIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'option': (0, ConfigurableProductDataOptionInterface_1.ConfigurableProductDataOptionInterfaceFromJSON)(json['option']),
    };
}
exports.PutV1ConfigurableproductsSkuOptionsIdRequestFromJSONTyped = PutV1ConfigurableproductsSkuOptionsIdRequestFromJSONTyped;
function PutV1ConfigurableproductsSkuOptionsIdRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'option': (0, ConfigurableProductDataOptionInterface_1.ConfigurableProductDataOptionInterfaceToJSON)(value.option),
    };
}
exports.PutV1ConfigurableproductsSkuOptionsIdRequestToJSON = PutV1ConfigurableproductsSkuOptionsIdRequestToJSON;
//# sourceMappingURL=PutV1ConfigurableproductsSkuOptionsIdRequest.js.map