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
exports.AnalyticsDataLinkInterfaceToJSON = exports.AnalyticsDataLinkInterfaceFromJSONTyped = exports.AnalyticsDataLinkInterfaceFromJSON = exports.instanceOfAnalyticsDataLinkInterface = void 0;
/**
 * Check if a given object implements the AnalyticsDataLinkInterface interface.
 */
function instanceOfAnalyticsDataLinkInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "initializationVector" in value;
    return isInstance;
}
exports.instanceOfAnalyticsDataLinkInterface = instanceOfAnalyticsDataLinkInterface;
function AnalyticsDataLinkInterfaceFromJSON(json) {
    return AnalyticsDataLinkInterfaceFromJSONTyped(json, false);
}
exports.AnalyticsDataLinkInterfaceFromJSON = AnalyticsDataLinkInterfaceFromJSON;
function AnalyticsDataLinkInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'url': json['url'],
        'initializationVector': json['initialization_vector'],
    };
}
exports.AnalyticsDataLinkInterfaceFromJSONTyped = AnalyticsDataLinkInterfaceFromJSONTyped;
function AnalyticsDataLinkInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'url': value.url,
        'initialization_vector': value.initializationVector,
    };
}
exports.AnalyticsDataLinkInterfaceToJSON = AnalyticsDataLinkInterfaceToJSON;
//# sourceMappingURL=AnalyticsDataLinkInterface.js.map