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
exports.InventorySalesApiDataSalesChannelInterfaceToJSON = exports.InventorySalesApiDataSalesChannelInterfaceFromJSONTyped = exports.InventorySalesApiDataSalesChannelInterfaceFromJSON = exports.instanceOfInventorySalesApiDataSalesChannelInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the InventorySalesApiDataSalesChannelInterface interface.
 */
function instanceOfInventorySalesApiDataSalesChannelInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfInventorySalesApiDataSalesChannelInterface = instanceOfInventorySalesApiDataSalesChannelInterface;
function InventorySalesApiDataSalesChannelInterfaceFromJSON(json) {
    return InventorySalesApiDataSalesChannelInterfaceFromJSONTyped(json, false);
}
exports.InventorySalesApiDataSalesChannelInterfaceFromJSON = InventorySalesApiDataSalesChannelInterfaceFromJSON;
function InventorySalesApiDataSalesChannelInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.InventorySalesApiDataSalesChannelInterfaceFromJSONTyped = InventorySalesApiDataSalesChannelInterfaceFromJSONTyped;
function InventorySalesApiDataSalesChannelInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'code': value.code,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.InventorySalesApiDataSalesChannelInterfaceToJSON = InventorySalesApiDataSalesChannelInterfaceToJSON;
//# sourceMappingURL=InventorySalesApiDataSalesChannelInterface.js.map