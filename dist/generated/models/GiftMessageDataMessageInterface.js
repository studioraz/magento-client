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
exports.GiftMessageDataMessageInterfaceToJSON = exports.GiftMessageDataMessageInterfaceFromJSONTyped = exports.GiftMessageDataMessageInterfaceFromJSON = exports.instanceOfGiftMessageDataMessageInterface = void 0;
var runtime_1 = require("../runtime");
var GiftMessageDataMessageExtensionInterface_1 = require("./GiftMessageDataMessageExtensionInterface");
/**
 * Check if a given object implements the GiftMessageDataMessageInterface interface.
 */
function instanceOfGiftMessageDataMessageInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "recipient" in value;
    isInstance = isInstance && "message" in value;
    return isInstance;
}
exports.instanceOfGiftMessageDataMessageInterface = instanceOfGiftMessageDataMessageInterface;
function GiftMessageDataMessageInterfaceFromJSON(json) {
    return GiftMessageDataMessageInterfaceFromJSONTyped(json, false);
}
exports.GiftMessageDataMessageInterfaceFromJSON = GiftMessageDataMessageInterfaceFromJSON;
function GiftMessageDataMessageInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'giftMessageId': !(0, runtime_1.exists)(json, 'gift_message_id') ? undefined : json['gift_message_id'],
        'customerId': !(0, runtime_1.exists)(json, 'customer_id') ? undefined : json['customer_id'],
        'sender': json['sender'],
        'recipient': json['recipient'],
        'message': json['message'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : (0, GiftMessageDataMessageExtensionInterface_1.GiftMessageDataMessageExtensionInterfaceFromJSON)(json['extension_attributes']),
    };
}
exports.GiftMessageDataMessageInterfaceFromJSONTyped = GiftMessageDataMessageInterfaceFromJSONTyped;
function GiftMessageDataMessageInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'gift_message_id': value.giftMessageId,
        'customer_id': value.customerId,
        'sender': value.sender,
        'recipient': value.recipient,
        'message': value.message,
        'extension_attributes': (0, GiftMessageDataMessageExtensionInterface_1.GiftMessageDataMessageExtensionInterfaceToJSON)(value.extensionAttributes),
    };
}
exports.GiftMessageDataMessageInterfaceToJSON = GiftMessageDataMessageInterfaceToJSON;
//# sourceMappingURL=GiftMessageDataMessageInterface.js.map