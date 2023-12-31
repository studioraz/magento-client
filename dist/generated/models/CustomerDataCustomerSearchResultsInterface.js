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
exports.CustomerDataCustomerSearchResultsInterfaceToJSON = exports.CustomerDataCustomerSearchResultsInterfaceFromJSONTyped = exports.CustomerDataCustomerSearchResultsInterfaceFromJSON = exports.instanceOfCustomerDataCustomerSearchResultsInterface = void 0;
var CustomerDataCustomerInterface_1 = require("./CustomerDataCustomerInterface");
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
/**
 * Check if a given object implements the CustomerDataCustomerSearchResultsInterface interface.
 */
function instanceOfCustomerDataCustomerSearchResultsInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfCustomerDataCustomerSearchResultsInterface = instanceOfCustomerDataCustomerSearchResultsInterface;
function CustomerDataCustomerSearchResultsInterfaceFromJSON(json) {
    return CustomerDataCustomerSearchResultsInterfaceFromJSONTyped(json, false);
}
exports.CustomerDataCustomerSearchResultsInterfaceFromJSON = CustomerDataCustomerSearchResultsInterfaceFromJSON;
function CustomerDataCustomerSearchResultsInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(CustomerDataCustomerInterface_1.CustomerDataCustomerInterfaceFromJSON)),
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.CustomerDataCustomerSearchResultsInterfaceFromJSONTyped = CustomerDataCustomerSearchResultsInterfaceFromJSONTyped;
function CustomerDataCustomerSearchResultsInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(CustomerDataCustomerInterface_1.CustomerDataCustomerInterfaceToJSON)),
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.CustomerDataCustomerSearchResultsInterfaceToJSON = CustomerDataCustomerSearchResultsInterfaceToJSON;
//# sourceMappingURL=CustomerDataCustomerSearchResultsInterface.js.map