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
import type { TaxDataGrandTotalDetailsInterface } from './TaxDataGrandTotalDetailsInterface';
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalSegmentInterface
 * @export
 * @interface QuoteDataTotalSegmentExtensionInterface
 */
export interface QuoteDataTotalSegmentExtensionInterface {
    /**
     *
     * @type {Array<TaxDataGrandTotalDetailsInterface>}
     * @memberof QuoteDataTotalSegmentExtensionInterface
     */
    taxGrandtotalDetails?: Array<TaxDataGrandTotalDetailsInterface>;
}
/**
 * Check if a given object implements the QuoteDataTotalSegmentExtensionInterface interface.
 */
export declare function instanceOfQuoteDataTotalSegmentExtensionInterface(value: object): boolean;
export declare function QuoteDataTotalSegmentExtensionInterfaceFromJSON(json: any): QuoteDataTotalSegmentExtensionInterface;
export declare function QuoteDataTotalSegmentExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataTotalSegmentExtensionInterface;
export declare function QuoteDataTotalSegmentExtensionInterfaceToJSON(value?: QuoteDataTotalSegmentExtensionInterface | null): any;
