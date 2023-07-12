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
exports.EavDataAttributeGroupSearchResultsInterfaceToJSON = exports.EavDataAttributeGroupSearchResultsInterfaceFromJSONTyped = exports.EavDataAttributeGroupSearchResultsInterfaceFromJSON = exports.instanceOfEavDataAttributeGroupSearchResultsInterface = void 0;
var EavDataAttributeGroupInterface_1 = require("./EavDataAttributeGroupInterface");
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
/**
 * Check if a given object implements the EavDataAttributeGroupSearchResultsInterface interface.
 */
function instanceOfEavDataAttributeGroupSearchResultsInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfEavDataAttributeGroupSearchResultsInterface = instanceOfEavDataAttributeGroupSearchResultsInterface;
function EavDataAttributeGroupSearchResultsInterfaceFromJSON(json) {
    return EavDataAttributeGroupSearchResultsInterfaceFromJSONTyped(json, false);
}
exports.EavDataAttributeGroupSearchResultsInterfaceFromJSON = EavDataAttributeGroupSearchResultsInterfaceFromJSON;
function EavDataAttributeGroupSearchResultsInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(EavDataAttributeGroupInterface_1.EavDataAttributeGroupInterfaceFromJSON)),
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.EavDataAttributeGroupSearchResultsInterfaceFromJSONTyped = EavDataAttributeGroupSearchResultsInterfaceFromJSONTyped;
function EavDataAttributeGroupSearchResultsInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(EavDataAttributeGroupInterface_1.EavDataAttributeGroupInterfaceToJSON)),
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.EavDataAttributeGroupSearchResultsInterfaceToJSON = EavDataAttributeGroupSearchResultsInterfaceToJSON;
//# sourceMappingURL=EavDataAttributeGroupSearchResultsInterface.js.map