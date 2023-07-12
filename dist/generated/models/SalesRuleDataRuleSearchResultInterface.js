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
exports.SalesRuleDataRuleSearchResultInterfaceToJSON = exports.SalesRuleDataRuleSearchResultInterfaceFromJSONTyped = exports.SalesRuleDataRuleSearchResultInterfaceFromJSON = exports.instanceOfSalesRuleDataRuleSearchResultInterface = void 0;
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
var SalesRuleDataRuleInterface_1 = require("./SalesRuleDataRuleInterface");
/**
 * Check if a given object implements the SalesRuleDataRuleSearchResultInterface interface.
 */
function instanceOfSalesRuleDataRuleSearchResultInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfSalesRuleDataRuleSearchResultInterface = instanceOfSalesRuleDataRuleSearchResultInterface;
function SalesRuleDataRuleSearchResultInterfaceFromJSON(json) {
    return SalesRuleDataRuleSearchResultInterfaceFromJSONTyped(json, false);
}
exports.SalesRuleDataRuleSearchResultInterfaceFromJSON = SalesRuleDataRuleSearchResultInterfaceFromJSON;
function SalesRuleDataRuleSearchResultInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(SalesRuleDataRuleInterface_1.SalesRuleDataRuleInterfaceFromJSON)),
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.SalesRuleDataRuleSearchResultInterfaceFromJSONTyped = SalesRuleDataRuleSearchResultInterfaceFromJSONTyped;
function SalesRuleDataRuleSearchResultInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(SalesRuleDataRuleInterface_1.SalesRuleDataRuleInterfaceToJSON)),
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.SalesRuleDataRuleSearchResultInterfaceToJSON = SalesRuleDataRuleSearchResultInterfaceToJSON;
//# sourceMappingURL=SalesRuleDataRuleSearchResultInterface.js.map