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
exports.SalesDataShippingAssignmentInterfaceToJSON = exports.SalesDataShippingAssignmentInterfaceFromJSONTyped = exports.SalesDataShippingAssignmentInterfaceFromJSON = exports.instanceOfSalesDataShippingAssignmentInterface = void 0;
var runtime_1 = require("../runtime");
var SalesDataOrderItemInterface_1 = require("./SalesDataOrderItemInterface");
var SalesDataShippingInterface_1 = require("./SalesDataShippingInterface");
/**
 * Check if a given object implements the SalesDataShippingAssignmentInterface interface.
 */
function instanceOfSalesDataShippingAssignmentInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "shipping" in value;
    isInstance = isInstance && "items" in value;
    return isInstance;
}
exports.instanceOfSalesDataShippingAssignmentInterface = instanceOfSalesDataShippingAssignmentInterface;
function SalesDataShippingAssignmentInterfaceFromJSON(json) {
    return SalesDataShippingAssignmentInterfaceFromJSONTyped(json, false);
}
exports.SalesDataShippingAssignmentInterfaceFromJSON = SalesDataShippingAssignmentInterfaceFromJSON;
function SalesDataShippingAssignmentInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'shipping': (0, SalesDataShippingInterface_1.SalesDataShippingInterfaceFromJSON)(json['shipping']),
        'items': (json['items'].map(SalesDataOrderItemInterface_1.SalesDataOrderItemInterfaceFromJSON)),
        'stockId': !(0, runtime_1.exists)(json, 'stock_id') ? undefined : json['stock_id'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.SalesDataShippingAssignmentInterfaceFromJSONTyped = SalesDataShippingAssignmentInterfaceFromJSONTyped;
function SalesDataShippingAssignmentInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'shipping': (0, SalesDataShippingInterface_1.SalesDataShippingInterfaceToJSON)(value.shipping),
        'items': (value.items.map(SalesDataOrderItemInterface_1.SalesDataOrderItemInterfaceToJSON)),
        'stock_id': value.stockId,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.SalesDataShippingAssignmentInterfaceToJSON = SalesDataShippingAssignmentInterfaceToJSON;
//# sourceMappingURL=SalesDataShippingAssignmentInterface.js.map