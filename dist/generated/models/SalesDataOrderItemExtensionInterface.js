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
exports.SalesDataOrderItemExtensionInterfaceToJSON = exports.SalesDataOrderItemExtensionInterfaceFromJSONTyped = exports.SalesDataOrderItemExtensionInterfaceFromJSON = exports.instanceOfSalesDataOrderItemExtensionInterface = void 0;
var runtime_1 = require("../runtime");
var GiftMessageDataMessageInterface_1 = require("./GiftMessageDataMessageInterface");
/**
 * Check if a given object implements the SalesDataOrderItemExtensionInterface interface.
 */
function instanceOfSalesDataOrderItemExtensionInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfSalesDataOrderItemExtensionInterface = instanceOfSalesDataOrderItemExtensionInterface;
function SalesDataOrderItemExtensionInterfaceFromJSON(json) {
    return SalesDataOrderItemExtensionInterfaceFromJSONTyped(json, false);
}
exports.SalesDataOrderItemExtensionInterfaceFromJSON = SalesDataOrderItemExtensionInterfaceFromJSON;
function SalesDataOrderItemExtensionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'giftMessage': !(0, runtime_1.exists)(json, 'gift_message') ? undefined : (0, GiftMessageDataMessageInterface_1.GiftMessageDataMessageInterfaceFromJSON)(json['gift_message']),
    };
}
exports.SalesDataOrderItemExtensionInterfaceFromJSONTyped = SalesDataOrderItemExtensionInterfaceFromJSONTyped;
function SalesDataOrderItemExtensionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'gift_message': (0, GiftMessageDataMessageInterface_1.GiftMessageDataMessageInterfaceToJSON)(value.giftMessage),
    };
}
exports.SalesDataOrderItemExtensionInterfaceToJSON = SalesDataOrderItemExtensionInterfaceToJSON;
//# sourceMappingURL=SalesDataOrderItemExtensionInterface.js.map