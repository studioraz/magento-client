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
exports.SalesDataInvoiceSearchResultInterfaceToJSON = exports.SalesDataInvoiceSearchResultInterfaceFromJSONTyped = exports.SalesDataInvoiceSearchResultInterfaceFromJSON = exports.instanceOfSalesDataInvoiceSearchResultInterface = void 0;
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
var SalesDataInvoiceInterface_1 = require("./SalesDataInvoiceInterface");
/**
 * Check if a given object implements the SalesDataInvoiceSearchResultInterface interface.
 */
function instanceOfSalesDataInvoiceSearchResultInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfSalesDataInvoiceSearchResultInterface = instanceOfSalesDataInvoiceSearchResultInterface;
function SalesDataInvoiceSearchResultInterfaceFromJSON(json) {
    return SalesDataInvoiceSearchResultInterfaceFromJSONTyped(json, false);
}
exports.SalesDataInvoiceSearchResultInterfaceFromJSON = SalesDataInvoiceSearchResultInterfaceFromJSON;
function SalesDataInvoiceSearchResultInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(SalesDataInvoiceInterface_1.SalesDataInvoiceInterfaceFromJSON)),
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.SalesDataInvoiceSearchResultInterfaceFromJSONTyped = SalesDataInvoiceSearchResultInterfaceFromJSONTyped;
function SalesDataInvoiceSearchResultInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(SalesDataInvoiceInterface_1.SalesDataInvoiceInterfaceToJSON)),
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.SalesDataInvoiceSearchResultInterfaceToJSON = SalesDataInvoiceSearchResultInterfaceToJSON;
//# sourceMappingURL=SalesDataInvoiceSearchResultInterface.js.map