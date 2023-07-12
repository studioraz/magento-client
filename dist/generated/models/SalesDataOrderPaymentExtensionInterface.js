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
exports.SalesDataOrderPaymentExtensionInterfaceToJSON = exports.SalesDataOrderPaymentExtensionInterfaceFromJSONTyped = exports.SalesDataOrderPaymentExtensionInterfaceFromJSON = exports.instanceOfSalesDataOrderPaymentExtensionInterface = void 0;
var runtime_1 = require("../runtime");
var VaultDataPaymentTokenInterface_1 = require("./VaultDataPaymentTokenInterface");
/**
 * Check if a given object implements the SalesDataOrderPaymentExtensionInterface interface.
 */
function instanceOfSalesDataOrderPaymentExtensionInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfSalesDataOrderPaymentExtensionInterface = instanceOfSalesDataOrderPaymentExtensionInterface;
function SalesDataOrderPaymentExtensionInterfaceFromJSON(json) {
    return SalesDataOrderPaymentExtensionInterfaceFromJSONTyped(json, false);
}
exports.SalesDataOrderPaymentExtensionInterfaceFromJSON = SalesDataOrderPaymentExtensionInterfaceFromJSON;
function SalesDataOrderPaymentExtensionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'notificationMessage': !(0, runtime_1.exists)(json, 'notification_message') ? undefined : json['notification_message'],
        'vaultPaymentToken': !(0, runtime_1.exists)(json, 'vault_payment_token') ? undefined : (0, VaultDataPaymentTokenInterface_1.VaultDataPaymentTokenInterfaceFromJSON)(json['vault_payment_token']),
    };
}
exports.SalesDataOrderPaymentExtensionInterfaceFromJSONTyped = SalesDataOrderPaymentExtensionInterfaceFromJSONTyped;
function SalesDataOrderPaymentExtensionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'notification_message': value.notificationMessage,
        'vault_payment_token': (0, VaultDataPaymentTokenInterface_1.VaultDataPaymentTokenInterfaceToJSON)(value.vaultPaymentToken),
    };
}
exports.SalesDataOrderPaymentExtensionInterfaceToJSON = SalesDataOrderPaymentExtensionInterfaceToJSON;
//# sourceMappingURL=SalesDataOrderPaymentExtensionInterface.js.map