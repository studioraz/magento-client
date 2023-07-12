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
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface
 * @export
 * @interface QuoteDataPaymentExtensionInterface
 */
export interface QuoteDataPaymentExtensionInterface {
    /**
     *
     * @type {Array<string>}
     * @memberof QuoteDataPaymentExtensionInterface
     */
    agreementIds?: Array<string>;
}
/**
 * Check if a given object implements the QuoteDataPaymentExtensionInterface interface.
 */
export declare function instanceOfQuoteDataPaymentExtensionInterface(value: object): boolean;
export declare function QuoteDataPaymentExtensionInterfaceFromJSON(json: any): QuoteDataPaymentExtensionInterface;
export declare function QuoteDataPaymentExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataPaymentExtensionInterface;
export declare function QuoteDataPaymentExtensionInterfaceToJSON(value?: QuoteDataPaymentExtensionInterface | null): any;
