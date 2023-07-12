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
exports.FrameworkAttributeInterfaceToJSON = exports.FrameworkAttributeInterfaceFromJSONTyped = exports.FrameworkAttributeInterfaceFromJSON = exports.instanceOfFrameworkAttributeInterface = void 0;
/**
 * Check if a given object implements the FrameworkAttributeInterface interface.
 */
function instanceOfFrameworkAttributeInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "attributeCode" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfFrameworkAttributeInterface = instanceOfFrameworkAttributeInterface;
function FrameworkAttributeInterfaceFromJSON(json) {
    return FrameworkAttributeInterfaceFromJSONTyped(json, false);
}
exports.FrameworkAttributeInterfaceFromJSON = FrameworkAttributeInterfaceFromJSON;
function FrameworkAttributeInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attributeCode': json['attribute_code'],
        'value': json['value'],
    };
}
exports.FrameworkAttributeInterfaceFromJSONTyped = FrameworkAttributeInterfaceFromJSONTyped;
function FrameworkAttributeInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attribute_code': value.attributeCode,
        'value': value.value,
    };
}
exports.FrameworkAttributeInterfaceToJSON = FrameworkAttributeInterfaceToJSON;
//# sourceMappingURL=FrameworkAttributeInterface.js.map