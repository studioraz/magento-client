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
exports.FrameworkSearchCriteriaInterfaceToJSON = exports.FrameworkSearchCriteriaInterfaceFromJSONTyped = exports.FrameworkSearchCriteriaInterfaceFromJSON = exports.instanceOfFrameworkSearchCriteriaInterface = void 0;
var runtime_1 = require("../runtime");
var FrameworkSearchFilterGroup_1 = require("./FrameworkSearchFilterGroup");
var FrameworkSortOrder_1 = require("./FrameworkSortOrder");
/**
 * Check if a given object implements the FrameworkSearchCriteriaInterface interface.
 */
function instanceOfFrameworkSearchCriteriaInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "filterGroups" in value;
    return isInstance;
}
exports.instanceOfFrameworkSearchCriteriaInterface = instanceOfFrameworkSearchCriteriaInterface;
function FrameworkSearchCriteriaInterfaceFromJSON(json) {
    return FrameworkSearchCriteriaInterfaceFromJSONTyped(json, false);
}
exports.FrameworkSearchCriteriaInterfaceFromJSON = FrameworkSearchCriteriaInterfaceFromJSON;
function FrameworkSearchCriteriaInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'filterGroups': (json['filter_groups'].map(FrameworkSearchFilterGroup_1.FrameworkSearchFilterGroupFromJSON)),
        'sortOrders': !(0, runtime_1.exists)(json, 'sort_orders') ? undefined : (json['sort_orders'].map(FrameworkSortOrder_1.FrameworkSortOrderFromJSON)),
        'pageSize': !(0, runtime_1.exists)(json, 'page_size') ? undefined : json['page_size'],
        'currentPage': !(0, runtime_1.exists)(json, 'current_page') ? undefined : json['current_page'],
    };
}
exports.FrameworkSearchCriteriaInterfaceFromJSONTyped = FrameworkSearchCriteriaInterfaceFromJSONTyped;
function FrameworkSearchCriteriaInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'filter_groups': (value.filterGroups.map(FrameworkSearchFilterGroup_1.FrameworkSearchFilterGroupToJSON)),
        'sort_orders': value.sortOrders === undefined ? undefined : (value.sortOrders.map(FrameworkSortOrder_1.FrameworkSortOrderToJSON)),
        'page_size': value.pageSize,
        'current_page': value.currentPage,
    };
}
exports.FrameworkSearchCriteriaInterfaceToJSON = FrameworkSearchCriteriaInterfaceToJSON;
//# sourceMappingURL=FrameworkSearchCriteriaInterface.js.map