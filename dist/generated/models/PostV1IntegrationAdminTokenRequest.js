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
exports.PostV1IntegrationAdminTokenRequestToJSON = exports.PostV1IntegrationAdminTokenRequestFromJSONTyped = exports.PostV1IntegrationAdminTokenRequestFromJSON = exports.instanceOfPostV1IntegrationAdminTokenRequest = void 0;
/**
 * Check if a given object implements the PostV1IntegrationAdminTokenRequest interface.
 */
function instanceOfPostV1IntegrationAdminTokenRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "password" in value;
    return isInstance;
}
exports.instanceOfPostV1IntegrationAdminTokenRequest = instanceOfPostV1IntegrationAdminTokenRequest;
function PostV1IntegrationAdminTokenRequestFromJSON(json) {
    return PostV1IntegrationAdminTokenRequestFromJSONTyped(json, false);
}
exports.PostV1IntegrationAdminTokenRequestFromJSON = PostV1IntegrationAdminTokenRequestFromJSON;
function PostV1IntegrationAdminTokenRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'username': json['username'],
        'password': json['password'],
    };
}
exports.PostV1IntegrationAdminTokenRequestFromJSONTyped = PostV1IntegrationAdminTokenRequestFromJSONTyped;
function PostV1IntegrationAdminTokenRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'username': value.username,
        'password': value.password,
    };
}
exports.PostV1IntegrationAdminTokenRequestToJSON = PostV1IntegrationAdminTokenRequestToJSON;
//# sourceMappingURL=PostV1IntegrationAdminTokenRequest.js.map