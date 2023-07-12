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
exports.SalesDataInvoiceCommentSearchResultInterfaceToJSON = exports.SalesDataInvoiceCommentSearchResultInterfaceFromJSONTyped = exports.SalesDataInvoiceCommentSearchResultInterfaceFromJSON = exports.instanceOfSalesDataInvoiceCommentSearchResultInterface = void 0;
var FrameworkSearchCriteriaInterface_1 = require("./FrameworkSearchCriteriaInterface");
var SalesDataInvoiceCommentInterface_1 = require("./SalesDataInvoiceCommentInterface");
/**
 * Check if a given object implements the SalesDataInvoiceCommentSearchResultInterface interface.
 */
function instanceOfSalesDataInvoiceCommentSearchResultInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfSalesDataInvoiceCommentSearchResultInterface = instanceOfSalesDataInvoiceCommentSearchResultInterface;
function SalesDataInvoiceCommentSearchResultInterfaceFromJSON(json) {
    return SalesDataInvoiceCommentSearchResultInterfaceFromJSONTyped(json, false);
}
exports.SalesDataInvoiceCommentSearchResultInterfaceFromJSON = SalesDataInvoiceCommentSearchResultInterfaceFromJSON;
function SalesDataInvoiceCommentSearchResultInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(SalesDataInvoiceCommentInterface_1.SalesDataInvoiceCommentInterfaceFromJSON)),
        'searchCriteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.SalesDataInvoiceCommentSearchResultInterfaceFromJSONTyped = SalesDataInvoiceCommentSearchResultInterfaceFromJSONTyped;
function SalesDataInvoiceCommentSearchResultInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(SalesDataInvoiceCommentInterface_1.SalesDataInvoiceCommentInterfaceToJSON)),
        'search_criteria': (0, FrameworkSearchCriteriaInterface_1.FrameworkSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.SalesDataInvoiceCommentSearchResultInterfaceToJSON = SalesDataInvoiceCommentSearchResultInterfaceToJSON;
//# sourceMappingURL=SalesDataInvoiceCommentSearchResultInterface.js.map