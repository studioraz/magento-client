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
import type { QuoteDataShippingAssignmentInterface } from './QuoteDataShippingAssignmentInterface';
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\CartInterface
 * @export
 * @interface QuoteDataCartExtensionInterface
 */
export interface QuoteDataCartExtensionInterface {
    /**
     *
     * @type {Array<QuoteDataShippingAssignmentInterface>}
     * @memberof QuoteDataCartExtensionInterface
     */
    shippingAssignments?: Array<QuoteDataShippingAssignmentInterface>;
}
/**
 * Check if a given object implements the QuoteDataCartExtensionInterface interface.
 */
export declare function instanceOfQuoteDataCartExtensionInterface(value: object): boolean;
export declare function QuoteDataCartExtensionInterfaceFromJSON(json: any): QuoteDataCartExtensionInterface;
export declare function QuoteDataCartExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataCartExtensionInterface;
export declare function QuoteDataCartExtensionInterfaceToJSON(value?: QuoteDataCartExtensionInterface | null): any;
