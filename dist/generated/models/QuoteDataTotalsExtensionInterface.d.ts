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
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsInterface
 * @export
 * @interface QuoteDataTotalsExtensionInterface
 */
export interface QuoteDataTotalsExtensionInterface {
    /**
     *
     * @type {string}
     * @memberof QuoteDataTotalsExtensionInterface
     */
    couponLabel?: string;
}
/**
 * Check if a given object implements the QuoteDataTotalsExtensionInterface interface.
 */
export declare function instanceOfQuoteDataTotalsExtensionInterface(value: object): boolean;
export declare function QuoteDataTotalsExtensionInterfaceFromJSON(json: any): QuoteDataTotalsExtensionInterface;
export declare function QuoteDataTotalsExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataTotalsExtensionInterface;
export declare function QuoteDataTotalsExtensionInterfaceToJSON(value?: QuoteDataTotalsExtensionInterface | null): any;
