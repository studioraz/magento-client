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
exports.PostV1CustomersRequestToJSON = exports.PostV1CustomersRequestFromJSONTyped = exports.PostV1CustomersRequestFromJSON = exports.instanceOfPostV1CustomersRequest = void 0;
var runtime_1 = require("../runtime");
var CustomerDataCustomerInterface_1 = require("./CustomerDataCustomerInterface");
/**
 * Check if a given object implements the PostV1CustomersRequest interface.
 */
function instanceOfPostV1CustomersRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "customer" in value;
    return isInstance;
}
exports.instanceOfPostV1CustomersRequest = instanceOfPostV1CustomersRequest;
function PostV1CustomersRequestFromJSON(json) {
    return PostV1CustomersRequestFromJSONTyped(json, false);
}
exports.PostV1CustomersRequestFromJSON = PostV1CustomersRequestFromJSON;
function PostV1CustomersRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customer': (0, CustomerDataCustomerInterface_1.CustomerDataCustomerInterfaceFromJSON)(json['customer']),
        'password': !(0, runtime_1.exists)(json, 'password') ? undefined : json['password'],
        'redirectUrl': !(0, runtime_1.exists)(json, 'redirectUrl') ? undefined : json['redirectUrl'],
    };
}
exports.PostV1CustomersRequestFromJSONTyped = PostV1CustomersRequestFromJSONTyped;
function PostV1CustomersRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customer': (0, CustomerDataCustomerInterface_1.CustomerDataCustomerInterfaceToJSON)(value.customer),
        'password': value.password,
        'redirectUrl': value.redirectUrl,
    };
}
exports.PostV1CustomersRequestToJSON = PostV1CustomersRequestToJSON;
//# sourceMappingURL=PostV1CustomersRequest.js.map