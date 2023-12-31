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
exports.SalesDataOrderStatusHistorySearchResultInterfaceToJSON = exports.SalesDataOrderStatusHistorySearchResultInterfaceFromJSONTyped = exports.SalesDataOrderStatusHistorySearchResultInterfaceFromJSON = exports.instanceOfSalesDataOrderStatusHistorySearchResultInterface = void 0;
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
var SalesDataOrderStatusHistoryInterface_1 = require("./SalesDataOrderStatusHistoryInterface");
/**
 * Check if a given object implements the SalesDataOrderStatusHistorySearchResultInterface interface.
 */
function instanceOfSalesDataOrderStatusHistorySearchResultInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfSalesDataOrderStatusHistorySearchResultInterface = instanceOfSalesDataOrderStatusHistorySearchResultInterface;
function SalesDataOrderStatusHistorySearchResultInterfaceFromJSON(json) {
    return SalesDataOrderStatusHistorySearchResultInterfaceFromJSONTyped(json, false);
}
exports.SalesDataOrderStatusHistorySearchResultInterfaceFromJSON = SalesDataOrderStatusHistorySearchResultInterfaceFromJSON;
function SalesDataOrderStatusHistorySearchResultInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(SalesDataOrderStatusHistoryInterface_1.SalesDataOrderStatusHistoryInterfaceFromJSON)),
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.SalesDataOrderStatusHistorySearchResultInterfaceFromJSONTyped = SalesDataOrderStatusHistorySearchResultInterfaceFromJSONTyped;
function SalesDataOrderStatusHistorySearchResultInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(SalesDataOrderStatusHistoryInterface_1.SalesDataOrderStatusHistoryInterfaceToJSON)),
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.SalesDataOrderStatusHistorySearchResultInterfaceToJSON = SalesDataOrderStatusHistorySearchResultInterfaceToJSON;
//# sourceMappingURL=SalesDataOrderStatusHistorySearchResultInterface.js.map