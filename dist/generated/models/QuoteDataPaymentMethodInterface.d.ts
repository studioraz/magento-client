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
 * Interface PaymentMethodInterface
 * @export
 * @interface QuoteDataPaymentMethodInterface
 */
export interface QuoteDataPaymentMethodInterface {
    /**
     * Payment method code
     * @type {string}
     * @memberof QuoteDataPaymentMethodInterface
     */
    code: string;
    /**
     * Payment method title
     * @type {string}
     * @memberof QuoteDataPaymentMethodInterface
     */
    title: string;
}
/**
 * Check if a given object implements the QuoteDataPaymentMethodInterface interface.
 */
export declare function instanceOfQuoteDataPaymentMethodInterface(value: object): boolean;
export declare function QuoteDataPaymentMethodInterfaceFromJSON(json: any): QuoteDataPaymentMethodInterface;
export declare function QuoteDataPaymentMethodInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataPaymentMethodInterface;
export declare function QuoteDataPaymentMethodInterfaceToJSON(value?: QuoteDataPaymentMethodInterface | null): any;
