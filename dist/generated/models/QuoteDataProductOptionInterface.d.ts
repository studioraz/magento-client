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
import type { QuoteDataProductOptionExtensionInterface } from './QuoteDataProductOptionExtensionInterface';
/**
 * Product option interface
 * @export
 * @interface QuoteDataProductOptionInterface
 */
export interface QuoteDataProductOptionInterface {
    /**
     *
     * @type {QuoteDataProductOptionExtensionInterface}
     * @memberof QuoteDataProductOptionInterface
     */
    extensionAttributes?: QuoteDataProductOptionExtensionInterface;
}
/**
 * Check if a given object implements the QuoteDataProductOptionInterface interface.
 */
export declare function instanceOfQuoteDataProductOptionInterface(value: object): boolean;
export declare function QuoteDataProductOptionInterfaceFromJSON(json: any): QuoteDataProductOptionInterface;
export declare function QuoteDataProductOptionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataProductOptionInterface;
export declare function QuoteDataProductOptionInterfaceToJSON(value?: QuoteDataProductOptionInterface | null): any;
