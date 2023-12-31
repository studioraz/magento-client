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
exports.PostV1CartsCartIdBillingaddressRequestToJSON = exports.PostV1CartsCartIdBillingaddressRequestFromJSONTyped = exports.PostV1CartsCartIdBillingaddressRequestFromJSON = exports.instanceOfPostV1CartsCartIdBillingaddressRequest = void 0;
var runtime_1 = require("../runtime");
var QuoteDataAddressInterface_1 = require("./QuoteDataAddressInterface");
/**
 * Check if a given object implements the PostV1CartsCartIdBillingaddressRequest interface.
 */
function instanceOfPostV1CartsCartIdBillingaddressRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "address" in value;
    return isInstance;
}
exports.instanceOfPostV1CartsCartIdBillingaddressRequest = instanceOfPostV1CartsCartIdBillingaddressRequest;
function PostV1CartsCartIdBillingaddressRequestFromJSON(json) {
    return PostV1CartsCartIdBillingaddressRequestFromJSONTyped(json, false);
}
exports.PostV1CartsCartIdBillingaddressRequestFromJSON = PostV1CartsCartIdBillingaddressRequestFromJSON;
function PostV1CartsCartIdBillingaddressRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceFromJSON)(json['address']),
        'useForShipping': !(0, runtime_1.exists)(json, 'useForShipping') ? undefined : json['useForShipping'],
    };
}
exports.PostV1CartsCartIdBillingaddressRequestFromJSONTyped = PostV1CartsCartIdBillingaddressRequestFromJSONTyped;
function PostV1CartsCartIdBillingaddressRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceToJSON)(value.address),
        'useForShipping': value.useForShipping,
    };
}
exports.PostV1CartsCartIdBillingaddressRequestToJSON = PostV1CartsCartIdBillingaddressRequestToJSON;
//# sourceMappingURL=PostV1CartsCartIdBillingaddressRequest.js.map