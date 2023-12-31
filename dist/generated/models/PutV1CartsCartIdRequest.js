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
exports.PutV1CartsCartIdRequestToJSON = exports.PutV1CartsCartIdRequestFromJSONTyped = exports.PutV1CartsCartIdRequestFromJSON = exports.instanceOfPutV1CartsCartIdRequest = void 0;
/**
 * Check if a given object implements the PutV1CartsCartIdRequest interface.
 */
function instanceOfPutV1CartsCartIdRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "storeId" in value;
    return isInstance;
}
exports.instanceOfPutV1CartsCartIdRequest = instanceOfPutV1CartsCartIdRequest;
function PutV1CartsCartIdRequestFromJSON(json) {
    return PutV1CartsCartIdRequestFromJSONTyped(json, false);
}
exports.PutV1CartsCartIdRequestFromJSON = PutV1CartsCartIdRequestFromJSON;
function PutV1CartsCartIdRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customerId': json['customerId'],
        'storeId': json['storeId'],
    };
}
exports.PutV1CartsCartIdRequestFromJSONTyped = PutV1CartsCartIdRequestFromJSONTyped;
function PutV1CartsCartIdRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customerId': value.customerId,
        'storeId': value.storeId,
    };
}
exports.PutV1CartsCartIdRequestToJSON = PutV1CartsCartIdRequestToJSON;
//# sourceMappingURL=PutV1CartsCartIdRequest.js.map