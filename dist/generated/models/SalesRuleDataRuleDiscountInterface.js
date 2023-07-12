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
exports.SalesRuleDataRuleDiscountInterfaceToJSON = exports.SalesRuleDataRuleDiscountInterfaceFromJSONTyped = exports.SalesRuleDataRuleDiscountInterfaceFromJSON = exports.instanceOfSalesRuleDataRuleDiscountInterface = void 0;
var SalesRuleDataDiscountDataInterface_1 = require("./SalesRuleDataDiscountDataInterface");
/**
 * Check if a given object implements the SalesRuleDataRuleDiscountInterface interface.
 */
function instanceOfSalesRuleDataRuleDiscountInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "discountData" in value;
    isInstance = isInstance && "ruleLabel" in value;
    isInstance = isInstance && "ruleId" in value;
    return isInstance;
}
exports.instanceOfSalesRuleDataRuleDiscountInterface = instanceOfSalesRuleDataRuleDiscountInterface;
function SalesRuleDataRuleDiscountInterfaceFromJSON(json) {
    return SalesRuleDataRuleDiscountInterfaceFromJSONTyped(json, false);
}
exports.SalesRuleDataRuleDiscountInterfaceFromJSON = SalesRuleDataRuleDiscountInterfaceFromJSON;
function SalesRuleDataRuleDiscountInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'discountData': (0, SalesRuleDataDiscountDataInterface_1.SalesRuleDataDiscountDataInterfaceFromJSON)(json['discount_data']),
        'ruleLabel': json['rule_label'],
        'ruleId': json['rule_id'],
    };
}
exports.SalesRuleDataRuleDiscountInterfaceFromJSONTyped = SalesRuleDataRuleDiscountInterfaceFromJSONTyped;
function SalesRuleDataRuleDiscountInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'discount_data': (0, SalesRuleDataDiscountDataInterface_1.SalesRuleDataDiscountDataInterfaceToJSON)(value.discountData),
        'rule_label': value.ruleLabel,
        'rule_id': value.ruleId,
    };
}
exports.SalesRuleDataRuleDiscountInterfaceToJSON = SalesRuleDataRuleDiscountInterfaceToJSON;
//# sourceMappingURL=SalesRuleDataRuleDiscountInterface.js.map