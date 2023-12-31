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
exports.PutV1CustomersValidateRequestToJSON = exports.PutV1CustomersValidateRequestFromJSONTyped = exports.PutV1CustomersValidateRequestFromJSON = exports.instanceOfPutV1CustomersValidateRequest = void 0;
var CustomerDataCustomerInterface_1 = require("./CustomerDataCustomerInterface");
/**
 * Check if a given object implements the PutV1CustomersValidateRequest interface.
 */
function instanceOfPutV1CustomersValidateRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "customer" in value;
    return isInstance;
}
exports.instanceOfPutV1CustomersValidateRequest = instanceOfPutV1CustomersValidateRequest;
function PutV1CustomersValidateRequestFromJSON(json) {
    return PutV1CustomersValidateRequestFromJSONTyped(json, false);
}
exports.PutV1CustomersValidateRequestFromJSON = PutV1CustomersValidateRequestFromJSON;
function PutV1CustomersValidateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customer': (0, CustomerDataCustomerInterface_1.CustomerDataCustomerInterfaceFromJSON)(json['customer']),
    };
}
exports.PutV1CustomersValidateRequestFromJSONTyped = PutV1CustomersValidateRequestFromJSONTyped;
function PutV1CustomersValidateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customer': (0, CustomerDataCustomerInterface_1.CustomerDataCustomerInterfaceToJSON)(value.customer),
    };
}
exports.PutV1CustomersValidateRequestToJSON = PutV1CustomersValidateRequestToJSON;
//# sourceMappingURL=PutV1CustomersValidateRequest.js.map