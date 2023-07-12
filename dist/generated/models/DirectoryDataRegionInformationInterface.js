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
exports.DirectoryDataRegionInformationInterfaceToJSON = exports.DirectoryDataRegionInformationInterfaceFromJSONTyped = exports.DirectoryDataRegionInformationInterfaceFromJSON = exports.instanceOfDirectoryDataRegionInformationInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the DirectoryDataRegionInformationInterface interface.
 */
function instanceOfDirectoryDataRegionInformationInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfDirectoryDataRegionInformationInterface = instanceOfDirectoryDataRegionInformationInterface;
function DirectoryDataRegionInformationInterfaceFromJSON(json) {
    return DirectoryDataRegionInformationInterfaceFromJSONTyped(json, false);
}
exports.DirectoryDataRegionInformationInterfaceFromJSON = DirectoryDataRegionInformationInterfaceFromJSON;
function DirectoryDataRegionInformationInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.DirectoryDataRegionInformationInterfaceFromJSONTyped = DirectoryDataRegionInformationInterfaceFromJSONTyped;
function DirectoryDataRegionInformationInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'code': value.code,
        'name': value.name,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.DirectoryDataRegionInformationInterfaceToJSON = DirectoryDataRegionInformationInterfaceToJSON;
//# sourceMappingURL=DirectoryDataRegionInformationInterface.js.map