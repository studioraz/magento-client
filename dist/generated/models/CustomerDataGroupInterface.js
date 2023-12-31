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
exports.CustomerDataGroupInterfaceToJSON = exports.CustomerDataGroupInterfaceFromJSONTyped = exports.CustomerDataGroupInterfaceFromJSON = exports.instanceOfCustomerDataGroupInterface = void 0;
var runtime_1 = require("../runtime");
var CustomerDataGroupExtensionInterface_1 = require("./CustomerDataGroupExtensionInterface");
/**
 * Check if a given object implements the CustomerDataGroupInterface interface.
 */
function instanceOfCustomerDataGroupInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "taxClassId" in value;
    return isInstance;
}
exports.instanceOfCustomerDataGroupInterface = instanceOfCustomerDataGroupInterface;
function CustomerDataGroupInterfaceFromJSON(json) {
    return CustomerDataGroupInterfaceFromJSONTyped(json, false);
}
exports.CustomerDataGroupInterfaceFromJSON = CustomerDataGroupInterfaceFromJSON;
function CustomerDataGroupInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'code': json['code'],
        'taxClassId': json['tax_class_id'],
        'taxClassName': !(0, runtime_1.exists)(json, 'tax_class_name') ? undefined : json['tax_class_name'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : (0, CustomerDataGroupExtensionInterface_1.CustomerDataGroupExtensionInterfaceFromJSON)(json['extension_attributes']),
    };
}
exports.CustomerDataGroupInterfaceFromJSONTyped = CustomerDataGroupInterfaceFromJSONTyped;
function CustomerDataGroupInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'code': value.code,
        'tax_class_id': value.taxClassId,
        'tax_class_name': value.taxClassName,
        'extension_attributes': (0, CustomerDataGroupExtensionInterface_1.CustomerDataGroupExtensionInterfaceToJSON)(value.extensionAttributes),
    };
}
exports.CustomerDataGroupInterfaceToJSON = CustomerDataGroupInterfaceToJSON;
//# sourceMappingURL=CustomerDataGroupInterface.js.map