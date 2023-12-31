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
exports.FrameworkSearchSearchResultInterfaceToJSON = exports.FrameworkSearchSearchResultInterfaceFromJSONTyped = exports.FrameworkSearchSearchResultInterfaceFromJSON = exports.instanceOfFrameworkSearchSearchResultInterface = void 0;
var FrameworkSearchAggregationInterface_1 = require("./FrameworkSearchAggregationInterface");
var FrameworkSearchDocumentInterface_1 = require("./FrameworkSearchDocumentInterface");
var FrameworkSearchSearchCriteriaInterface_1 = require("./FrameworkSearchSearchCriteriaInterface");
/**
 * Check if a given object implements the FrameworkSearchSearchResultInterface interface.
 */
function instanceOfFrameworkSearchSearchResultInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "aggregations" in value;
    isInstance = isInstance && "searchCriteria" in value;
    isInstance = isInstance && "totalCount" in value;
    return isInstance;
}
exports.instanceOfFrameworkSearchSearchResultInterface = instanceOfFrameworkSearchSearchResultInterface;
function FrameworkSearchSearchResultInterfaceFromJSON(json) {
    return FrameworkSearchSearchResultInterfaceFromJSONTyped(json, false);
}
exports.FrameworkSearchSearchResultInterfaceFromJSON = FrameworkSearchSearchResultInterfaceFromJSON;
function FrameworkSearchSearchResultInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'items': (json['items'].map(FrameworkSearchDocumentInterface_1.FrameworkSearchDocumentInterfaceFromJSON)),
        'aggregations': (0, FrameworkSearchAggregationInterface_1.FrameworkSearchAggregationInterfaceFromJSON)(json['aggregations']),
        'searchCriteria': (0, FrameworkSearchSearchCriteriaInterface_1.FrameworkSearchSearchCriteriaInterfaceFromJSON)(json['search_criteria']),
        'totalCount': json['total_count'],
    };
}
exports.FrameworkSearchSearchResultInterfaceFromJSONTyped = FrameworkSearchSearchResultInterfaceFromJSONTyped;
function FrameworkSearchSearchResultInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'items': (value.items.map(FrameworkSearchDocumentInterface_1.FrameworkSearchDocumentInterfaceToJSON)),
        'aggregations': (0, FrameworkSearchAggregationInterface_1.FrameworkSearchAggregationInterfaceToJSON)(value.aggregations),
        'search_criteria': (0, FrameworkSearchSearchCriteriaInterface_1.FrameworkSearchSearchCriteriaInterfaceToJSON)(value.searchCriteria),
        'total_count': value.totalCount,
    };
}
exports.FrameworkSearchSearchResultInterfaceToJSON = FrameworkSearchSearchResultInterfaceToJSON;
//# sourceMappingURL=FrameworkSearchSearchResultInterface.js.map