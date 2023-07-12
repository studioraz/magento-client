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
import type { GiftMessageDataMessageInterface } from './GiftMessageDataMessageInterface';
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderItemInterface
 * @export
 * @interface SalesDataOrderItemExtensionInterface
 */
export interface SalesDataOrderItemExtensionInterface {
    /**
     *
     * @type {GiftMessageDataMessageInterface}
     * @memberof SalesDataOrderItemExtensionInterface
     */
    giftMessage?: GiftMessageDataMessageInterface;
}
/**
 * Check if a given object implements the SalesDataOrderItemExtensionInterface interface.
 */
export declare function instanceOfSalesDataOrderItemExtensionInterface(value: object): boolean;
export declare function SalesDataOrderItemExtensionInterfaceFromJSON(json: any): SalesDataOrderItemExtensionInterface;
export declare function SalesDataOrderItemExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataOrderItemExtensionInterface;
export declare function SalesDataOrderItemExtensionInterfaceToJSON(value?: SalesDataOrderItemExtensionInterface | null): any;
