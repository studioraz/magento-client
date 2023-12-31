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
/**
 * ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface
 * @export
 * @interface GiftMessageDataMessageExtensionInterface
 */
export interface GiftMessageDataMessageExtensionInterface {
    /**
     *
     * @type {string}
     * @memberof GiftMessageDataMessageExtensionInterface
     */
    entityId?: string;
    /**
     *
     * @type {string}
     * @memberof GiftMessageDataMessageExtensionInterface
     */
    entityType?: string;
}
/**
 * Check if a given object implements the GiftMessageDataMessageExtensionInterface interface.
 */
export declare function instanceOfGiftMessageDataMessageExtensionInterface(value: object): boolean;
export declare function GiftMessageDataMessageExtensionInterfaceFromJSON(json: any): GiftMessageDataMessageExtensionInterface;
export declare function GiftMessageDataMessageExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): GiftMessageDataMessageExtensionInterface;
export declare function GiftMessageDataMessageExtensionInterfaceToJSON(value?: GiftMessageDataMessageExtensionInterface | null): any;
