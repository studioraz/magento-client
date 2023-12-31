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

import { exists, mapValues } from '../runtime';
import type { GiftMessageDataMessageExtensionInterface } from './GiftMessageDataMessageExtensionInterface';
import {
    GiftMessageDataMessageExtensionInterfaceFromJSON,
    GiftMessageDataMessageExtensionInterfaceFromJSONTyped,
    GiftMessageDataMessageExtensionInterfaceToJSON,
} from './GiftMessageDataMessageExtensionInterface';

/**
 * Interface MessageInterface
 * @export
 * @interface GiftMessageDataMessageInterface
 */
export interface GiftMessageDataMessageInterface {
    /**
     * Gift message ID. Otherwise, null.
     * @type {number}
     * @memberof GiftMessageDataMessageInterface
     */
    giftMessageId?: number;
    /**
     * Customer ID. Otherwise, null.
     * @type {number}
     * @memberof GiftMessageDataMessageInterface
     */
    customerId?: number;
    /**
     * Sender name.
     * @type {string}
     * @memberof GiftMessageDataMessageInterface
     */
    sender: string;
    /**
     * Recipient name.
     * @type {string}
     * @memberof GiftMessageDataMessageInterface
     */
    recipient: string;
    /**
     * Message text.
     * @type {string}
     * @memberof GiftMessageDataMessageInterface
     */
    message: string;
    /**
     * 
     * @type {GiftMessageDataMessageExtensionInterface}
     * @memberof GiftMessageDataMessageInterface
     */
    extensionAttributes?: GiftMessageDataMessageExtensionInterface;
}

/**
 * Check if a given object implements the GiftMessageDataMessageInterface interface.
 */
export function instanceOfGiftMessageDataMessageInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "recipient" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function GiftMessageDataMessageInterfaceFromJSON(json: any): GiftMessageDataMessageInterface {
    return GiftMessageDataMessageInterfaceFromJSONTyped(json, false);
}

export function GiftMessageDataMessageInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): GiftMessageDataMessageInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'giftMessageId': !exists(json, 'gift_message_id') ? undefined : json['gift_message_id'],
        'customerId': !exists(json, 'customer_id') ? undefined : json['customer_id'],
        'sender': json['sender'],
        'recipient': json['recipient'],
        'message': json['message'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : GiftMessageDataMessageExtensionInterfaceFromJSON(json['extension_attributes']),
    };
}

export function GiftMessageDataMessageInterfaceToJSON(value?: GiftMessageDataMessageInterface | null): any {
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
        'extension_attributes': GiftMessageDataMessageExtensionInterfaceToJSON(value.extensionAttributes),
    };
}

