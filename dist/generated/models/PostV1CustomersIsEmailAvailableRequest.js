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
exports.PostV1CustomersIsEmailAvailableRequestToJSON = exports.PostV1CustomersIsEmailAvailableRequestFromJSONTyped = exports.PostV1CustomersIsEmailAvailableRequestFromJSON = exports.instanceOfPostV1CustomersIsEmailAvailableRequest = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PostV1CustomersIsEmailAvailableRequest interface.
 */
function instanceOfPostV1CustomersIsEmailAvailableRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "customerEmail" in value;
    return isInstance;
}
exports.instanceOfPostV1CustomersIsEmailAvailableRequest = instanceOfPostV1CustomersIsEmailAvailableRequest;
function PostV1CustomersIsEmailAvailableRequestFromJSON(json) {
    return PostV1CustomersIsEmailAvailableRequestFromJSONTyped(json, false);
}
exports.PostV1CustomersIsEmailAvailableRequestFromJSON = PostV1CustomersIsEmailAvailableRequestFromJSON;
function PostV1CustomersIsEmailAvailableRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customerEmail': json['customerEmail'],
        'websiteId': !(0, runtime_1.exists)(json, 'websiteId') ? undefined : json['websiteId'],
    };
}
exports.PostV1CustomersIsEmailAvailableRequestFromJSONTyped = PostV1CustomersIsEmailAvailableRequestFromJSONTyped;
function PostV1CustomersIsEmailAvailableRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customerEmail': value.customerEmail,
        'websiteId': value.websiteId,
    };
}
exports.PostV1CustomersIsEmailAvailableRequestToJSON = PostV1CustomersIsEmailAvailableRequestToJSON;
//# sourceMappingURL=PostV1CustomersIsEmailAvailableRequest.js.map