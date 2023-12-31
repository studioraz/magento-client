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
import type { GiftMessageDataMessageExtensionInterface } from './GiftMessageDataMessageExtensionInterface';
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
export declare function instanceOfGiftMessageDataMessageInterface(value: object): boolean;
export declare function GiftMessageDataMessageInterfaceFromJSON(json: any): GiftMessageDataMessageInterface;
export declare function GiftMessageDataMessageInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): GiftMessageDataMessageInterface;
export declare function GiftMessageDataMessageInterfaceToJSON(value?: GiftMessageDataMessageInterface | null): any;
