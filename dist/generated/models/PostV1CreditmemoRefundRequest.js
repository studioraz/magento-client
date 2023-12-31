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
exports.PostV1CreditmemoRefundRequestToJSON = exports.PostV1CreditmemoRefundRequestFromJSONTyped = exports.PostV1CreditmemoRefundRequestFromJSON = exports.instanceOfPostV1CreditmemoRefundRequest = void 0;
var runtime_1 = require("../runtime");
var SalesDataCreditmemoInterface_1 = require("./SalesDataCreditmemoInterface");
/**
 * Check if a given object implements the PostV1CreditmemoRefundRequest interface.
 */
function instanceOfPostV1CreditmemoRefundRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "creditmemo" in value;
    return isInstance;
}
exports.instanceOfPostV1CreditmemoRefundRequest = instanceOfPostV1CreditmemoRefundRequest;
function PostV1CreditmemoRefundRequestFromJSON(json) {
    return PostV1CreditmemoRefundRequestFromJSONTyped(json, false);
}
exports.PostV1CreditmemoRefundRequestFromJSON = PostV1CreditmemoRefundRequestFromJSON;
function PostV1CreditmemoRefundRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'creditmemo': (0, SalesDataCreditmemoInterface_1.SalesDataCreditmemoInterfaceFromJSON)(json['creditmemo']),
        'offlineRequested': !(0, runtime_1.exists)(json, 'offlineRequested') ? undefined : json['offlineRequested'],
    };
}
exports.PostV1CreditmemoRefundRequestFromJSONTyped = PostV1CreditmemoRefundRequestFromJSONTyped;
function PostV1CreditmemoRefundRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'creditmemo': (0, SalesDataCreditmemoInterface_1.SalesDataCreditmemoInterfaceToJSON)(value.creditmemo),
        'offlineRequested': value.offlineRequested,
    };
}
exports.PostV1CreditmemoRefundRequestToJSON = PostV1CreditmemoRefundRequestToJSON;
//# sourceMappingURL=PostV1CreditmemoRefundRequest.js.map