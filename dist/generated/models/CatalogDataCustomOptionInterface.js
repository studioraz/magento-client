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
exports.CatalogDataCustomOptionInterfaceToJSON = exports.CatalogDataCustomOptionInterfaceFromJSONTyped = exports.CatalogDataCustomOptionInterfaceFromJSON = exports.instanceOfCatalogDataCustomOptionInterface = void 0;
var runtime_1 = require("../runtime");
var CatalogDataCustomOptionExtensionInterface_1 = require("./CatalogDataCustomOptionExtensionInterface");
/**
 * Check if a given object implements the CatalogDataCustomOptionInterface interface.
 */
function instanceOfCatalogDataCustomOptionInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "optionId" in value;
    isInstance = isInstance && "optionValue" in value;
    return isInstance;
}
exports.instanceOfCatalogDataCustomOptionInterface = instanceOfCatalogDataCustomOptionInterface;
function CatalogDataCustomOptionInterfaceFromJSON(json) {
    return CatalogDataCustomOptionInterfaceFromJSONTyped(json, false);
}
exports.CatalogDataCustomOptionInterfaceFromJSON = CatalogDataCustomOptionInterfaceFromJSON;
function CatalogDataCustomOptionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'optionId': json['option_id'],
        'optionValue': json['option_value'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : (0, CatalogDataCustomOptionExtensionInterface_1.CatalogDataCustomOptionExtensionInterfaceFromJSON)(json['extension_attributes']),
    };
}
exports.CatalogDataCustomOptionInterfaceFromJSONTyped = CatalogDataCustomOptionInterfaceFromJSONTyped;
function CatalogDataCustomOptionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'option_id': value.optionId,
        'option_value': value.optionValue,
        'extension_attributes': (0, CatalogDataCustomOptionExtensionInterface_1.CatalogDataCustomOptionExtensionInterfaceToJSON)(value.extensionAttributes),
    };
}
exports.CatalogDataCustomOptionInterfaceToJSON = CatalogDataCustomOptionInterfaceToJSON;
//# sourceMappingURL=CatalogDataCustomOptionInterface.js.map