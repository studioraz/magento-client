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
exports.TaxDataTaxClassSearchResultsInterfaceToJSON = exports.TaxDataTaxClassSearchResultsInterfaceFromJSONTyped = exports.TaxDataTaxClassSearchResultsInterfaceFromJSON = exports.instanceOfTaxDataTaxClassSearchResultsInterface = void 0;
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
var TaxDataTaxClassInterface_1 = require("./TaxDataTaxClassInterface");
/**
 * Check if a given object implements the TaxDataTaxClassSearchResultsInterface interface.
 */
function instanceOfTaxDataTaxClassSearchResultsInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfTaxDataTaxClassSearchResultsInterface = instanceOfTaxDataTaxClassSearchResultsInterface;
function TaxDataTaxClassSearchResultsInterfaceFromJSON(json) {
    return TaxDataTaxClassSearchResultsInterfaceFromJSONTyped(json, false);
}
exports.TaxDataTaxClassSearchResultsInterfaceFromJSON = TaxDataTaxClassSearchResultsInterfaceFromJSON;
function TaxDataTaxClassSearchResultsInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(TaxDataTaxClassInterface_1.TaxDataTaxClassInterfaceFromJSON)),
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.TaxDataTaxClassSearchResultsInterfaceFromJSONTyped = TaxDataTaxClassSearchResultsInterfaceFromJSONTyped;
function TaxDataTaxClassSearchResultsInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(TaxDataTaxClassInterface_1.TaxDataTaxClassInterfaceToJSON)),
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.TaxDataTaxClassSearchResultsInterfaceToJSON = TaxDataTaxClassSearchResultsInterfaceToJSON;
//# sourceMappingURL=TaxDataTaxClassSearchResultsInterface.js.map