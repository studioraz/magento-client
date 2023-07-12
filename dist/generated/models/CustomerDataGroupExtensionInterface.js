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
exports.CustomerDataGroupExtensionInterfaceToJSON = exports.CustomerDataGroupExtensionInterfaceFromJSONTyped = exports.CustomerDataGroupExtensionInterfaceFromJSON = exports.instanceOfCustomerDataGroupExtensionInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CustomerDataGroupExtensionInterface interface.
 */
function instanceOfCustomerDataGroupExtensionInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfCustomerDataGroupExtensionInterface = instanceOfCustomerDataGroupExtensionInterface;
function CustomerDataGroupExtensionInterfaceFromJSON(json) {
    return CustomerDataGroupExtensionInterfaceFromJSONTyped(json, false);
}
exports.CustomerDataGroupExtensionInterfaceFromJSON = CustomerDataGroupExtensionInterfaceFromJSON;
function CustomerDataGroupExtensionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'excludeWebsiteIds': !(0, runtime_1.exists)(json, 'exclude_website_ids') ? undefined : json['exclude_website_ids'],
    };
}
exports.CustomerDataGroupExtensionInterfaceFromJSONTyped = CustomerDataGroupExtensionInterfaceFromJSONTyped;
function CustomerDataGroupExtensionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'exclude_website_ids': value.excludeWebsiteIds,
    };
}
exports.CustomerDataGroupExtensionInterfaceToJSON = CustomerDataGroupExtensionInterfaceToJSON;
//# sourceMappingURL=CustomerDataGroupExtensionInterface.js.map