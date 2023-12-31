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
exports.PostV1ProductsTierpricesinformationRequestToJSON = exports.PostV1ProductsTierpricesinformationRequestFromJSONTyped = exports.PostV1ProductsTierpricesinformationRequestFromJSON = exports.instanceOfPostV1ProductsTierpricesinformationRequest = void 0;
/**
 * Check if a given object implements the PostV1ProductsTierpricesinformationRequest interface.
 */
function instanceOfPostV1ProductsTierpricesinformationRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "skus" in value;
    return isInstance;
}
exports.instanceOfPostV1ProductsTierpricesinformationRequest = instanceOfPostV1ProductsTierpricesinformationRequest;
function PostV1ProductsTierpricesinformationRequestFromJSON(json) {
    return PostV1ProductsTierpricesinformationRequestFromJSONTyped(json, false);
}
exports.PostV1ProductsTierpricesinformationRequestFromJSON = PostV1ProductsTierpricesinformationRequestFromJSON;
function PostV1ProductsTierpricesinformationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'skus': json['skus'],
    };
}
exports.PostV1ProductsTierpricesinformationRequestFromJSONTyped = PostV1ProductsTierpricesinformationRequestFromJSONTyped;
function PostV1ProductsTierpricesinformationRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'skus': value.skus,
    };
}
exports.PostV1ProductsTierpricesinformationRequestToJSON = PostV1ProductsTierpricesinformationRequestToJSON;
//# sourceMappingURL=PostV1ProductsTierpricesinformationRequest.js.map