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
exports.CustomerDataGroupSearchResultsInterfaceToJSON = exports.CustomerDataGroupSearchResultsInterfaceFromJSONTyped = exports.CustomerDataGroupSearchResultsInterfaceFromJSON = exports.instanceOfCustomerDataGroupSearchResultsInterface = void 0;
var CustomerDataGroupInterface_1 = require("./CustomerDataGroupInterface");
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
/**
 * Check if a given object implements the CustomerDataGroupSearchResultsInterface interface.
 */
function instanceOfCustomerDataGroupSearchResultsInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfCustomerDataGroupSearchResultsInterface = instanceOfCustomerDataGroupSearchResultsInterface;
function CustomerDataGroupSearchResultsInterfaceFromJSON(json) {
    return CustomerDataGroupSearchResultsInterfaceFromJSONTyped(json, false);
}
exports.CustomerDataGroupSearchResultsInterfaceFromJSON = CustomerDataGroupSearchResultsInterfaceFromJSON;
function CustomerDataGroupSearchResultsInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(CustomerDataGroupInterface_1.CustomerDataGroupInterfaceFromJSON)),
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.CustomerDataGroupSearchResultsInterfaceFromJSONTyped = CustomerDataGroupSearchResultsInterfaceFromJSONTyped;
function CustomerDataGroupSearchResultsInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(CustomerDataGroupInterface_1.CustomerDataGroupInterfaceToJSON)),
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.CustomerDataGroupSearchResultsInterfaceToJSON = CustomerDataGroupSearchResultsInterfaceToJSON;
//# sourceMappingURL=CustomerDataGroupSearchResultsInterface.js.map