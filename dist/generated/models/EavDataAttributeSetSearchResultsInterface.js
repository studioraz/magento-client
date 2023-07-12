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
exports.EavDataAttributeSetSearchResultsInterfaceToJSON = exports.EavDataAttributeSetSearchResultsInterfaceFromJSONTyped = exports.EavDataAttributeSetSearchResultsInterfaceFromJSON = exports.instanceOfEavDataAttributeSetSearchResultsInterface = void 0;
var EavDataAttributeSetInterface_1 = require("./EavDataAttributeSetInterface");
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
/**
 * Check if a given object implements the EavDataAttributeSetSearchResultsInterface interface.
 */
function instanceOfEavDataAttributeSetSearchResultsInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfEavDataAttributeSetSearchResultsInterface = instanceOfEavDataAttributeSetSearchResultsInterface;
function EavDataAttributeSetSearchResultsInterfaceFromJSON(json) {
    return EavDataAttributeSetSearchResultsInterfaceFromJSONTyped(json, false);
}
exports.EavDataAttributeSetSearchResultsInterfaceFromJSON = EavDataAttributeSetSearchResultsInterfaceFromJSON;
function EavDataAttributeSetSearchResultsInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(EavDataAttributeSetInterface_1.EavDataAttributeSetInterfaceFromJSON)),
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.EavDataAttributeSetSearchResultsInterfaceFromJSONTyped = EavDataAttributeSetSearchResultsInterfaceFromJSONTyped;
function EavDataAttributeSetSearchResultsInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(EavDataAttributeSetInterface_1.EavDataAttributeSetInterfaceToJSON)),
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.EavDataAttributeSetSearchResultsInterfaceToJSON = EavDataAttributeSetSearchResultsInterfaceToJSON;
//# sourceMappingURL=EavDataAttributeSetSearchResultsInterface.js.map