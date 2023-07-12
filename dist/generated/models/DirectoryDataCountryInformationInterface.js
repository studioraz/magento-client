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
exports.DirectoryDataCountryInformationInterfaceToJSON = exports.DirectoryDataCountryInformationInterfaceFromJSONTyped = exports.DirectoryDataCountryInformationInterfaceFromJSON = exports.instanceOfDirectoryDataCountryInformationInterface = void 0;
var runtime_1 = require("../runtime");
var DirectoryDataRegionInformationInterface_1 = require("./DirectoryDataRegionInformationInterface");
/**
 * Check if a given object implements the DirectoryDataCountryInformationInterface interface.
 */
function instanceOfDirectoryDataCountryInformationInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "twoLetterAbbreviation" in value;
    isInstance = isInstance && "threeLetterAbbreviation" in value;
    isInstance = isInstance && "fullNameLocale" in value;
    isInstance = isInstance && "fullNameEnglish" in value;
    return isInstance;
}
exports.instanceOfDirectoryDataCountryInformationInterface = instanceOfDirectoryDataCountryInformationInterface;
function DirectoryDataCountryInformationInterfaceFromJSON(json) {
    return DirectoryDataCountryInformationInterfaceFromJSONTyped(json, false);
}
exports.DirectoryDataCountryInformationInterfaceFromJSON = DirectoryDataCountryInformationInterfaceFromJSON;
function DirectoryDataCountryInformationInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'twoLetterAbbreviation': json['two_letter_abbreviation'],
        'threeLetterAbbreviation': json['three_letter_abbreviation'],
        'fullNameLocale': json['full_name_locale'],
        'fullNameEnglish': json['full_name_english'],
        'availableRegions': !(0, runtime_1.exists)(json, 'available_regions') ? undefined : (json['available_regions'].map(DirectoryDataRegionInformationInterface_1.DirectoryDataRegionInformationInterfaceFromJSON)),
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.DirectoryDataCountryInformationInterfaceFromJSONTyped = DirectoryDataCountryInformationInterfaceFromJSONTyped;
function DirectoryDataCountryInformationInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'two_letter_abbreviation': value.twoLetterAbbreviation,
        'three_letter_abbreviation': value.threeLetterAbbreviation,
        'full_name_locale': value.fullNameLocale,
        'full_name_english': value.fullNameEnglish,
        'available_regions': value.availableRegions === undefined ? undefined : (value.availableRegions.map(DirectoryDataRegionInformationInterface_1.DirectoryDataRegionInformationInterfaceToJSON)),
        'extension_attributes': value.extensionAttributes,
    };
}
exports.DirectoryDataCountryInformationInterfaceToJSON = DirectoryDataCountryInformationInterfaceToJSON;
//# sourceMappingURL=DirectoryDataCountryInformationInterface.js.map