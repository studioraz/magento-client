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
exports.InventoryApiDataSourceItemInterfaceToJSON = exports.InventoryApiDataSourceItemInterfaceFromJSONTyped = exports.InventoryApiDataSourceItemInterfaceFromJSON = exports.instanceOfInventoryApiDataSourceItemInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the InventoryApiDataSourceItemInterface interface.
 */
function instanceOfInventoryApiDataSourceItemInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfInventoryApiDataSourceItemInterface = instanceOfInventoryApiDataSourceItemInterface;
function InventoryApiDataSourceItemInterfaceFromJSON(json) {
    return InventoryApiDataSourceItemInterfaceFromJSONTyped(json, false);
}
exports.InventoryApiDataSourceItemInterfaceFromJSON = InventoryApiDataSourceItemInterfaceFromJSON;
function InventoryApiDataSourceItemInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sku': !(0, runtime_1.exists)(json, 'sku') ? undefined : json['sku'],
        'sourceCode': !(0, runtime_1.exists)(json, 'source_code') ? undefined : json['source_code'],
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.InventoryApiDataSourceItemInterfaceFromJSONTyped = InventoryApiDataSourceItemInterfaceFromJSONTyped;
function InventoryApiDataSourceItemInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sku': value.sku,
        'source_code': value.sourceCode,
        'quantity': value.quantity,
        'status': value.status,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.InventoryApiDataSourceItemInterfaceToJSON = InventoryApiDataSourceItemInterfaceToJSON;
//# sourceMappingURL=InventoryApiDataSourceItemInterface.js.map