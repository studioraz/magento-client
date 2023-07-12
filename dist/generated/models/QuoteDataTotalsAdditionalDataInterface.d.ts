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
import type { FrameworkAttributeInterface } from './FrameworkAttributeInterface';
import type { QuoteDataTotalsAdditionalDataExtensionInterface } from './QuoteDataTotalsAdditionalDataExtensionInterface';
/**
 * Additional data for totals collection.
 * @export
 * @interface QuoteDataTotalsAdditionalDataInterface
 */
export interface QuoteDataTotalsAdditionalDataInterface {
    /**
     *
     * @type {QuoteDataTotalsAdditionalDataExtensionInterface}
     * @memberof QuoteDataTotalsAdditionalDataInterface
     */
    extensionAttributes?: QuoteDataTotalsAdditionalDataExtensionInterface;
    /**
     * Custom attributes values.
     * @type {Array<FrameworkAttributeInterface>}
     * @memberof QuoteDataTotalsAdditionalDataInterface
     */
    customAttributes?: Array<FrameworkAttributeInterface>;
}
/**
 * Check if a given object implements the QuoteDataTotalsAdditionalDataInterface interface.
 */
export declare function instanceOfQuoteDataTotalsAdditionalDataInterface(value: object): boolean;
export declare function QuoteDataTotalsAdditionalDataInterfaceFromJSON(json: any): QuoteDataTotalsAdditionalDataInterface;
export declare function QuoteDataTotalsAdditionalDataInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataTotalsAdditionalDataInterface;
export declare function QuoteDataTotalsAdditionalDataInterfaceToJSON(value?: QuoteDataTotalsAdditionalDataInterface | null): any;
