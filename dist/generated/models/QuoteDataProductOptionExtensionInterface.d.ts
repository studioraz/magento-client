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
import type { BundleDataBundleOptionInterface } from './BundleDataBundleOptionInterface';
import type { CatalogDataCustomOptionInterface } from './CatalogDataCustomOptionInterface';
import type { ConfigurableProductDataConfigurableItemOptionValueInterface } from './ConfigurableProductDataConfigurableItemOptionValueInterface';
import type { DownloadableDataDownloadableOptionInterface } from './DownloadableDataDownloadableOptionInterface';
import type { GroupedProductDataGroupedOptionsInterface } from './GroupedProductDataGroupedOptionsInterface';
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface
 * @export
 * @interface QuoteDataProductOptionExtensionInterface
 */
export interface QuoteDataProductOptionExtensionInterface {
    /**
     *
     * @type {Array<CatalogDataCustomOptionInterface>}
     * @memberof QuoteDataProductOptionExtensionInterface
     */
    customOptions?: Array<CatalogDataCustomOptionInterface>;
    /**
     *
     * @type {DownloadableDataDownloadableOptionInterface}
     * @memberof QuoteDataProductOptionExtensionInterface
     */
    downloadableOption?: DownloadableDataDownloadableOptionInterface;
    /**
     *
     * @type {Array<BundleDataBundleOptionInterface>}
     * @memberof QuoteDataProductOptionExtensionInterface
     */
    bundleOptions?: Array<BundleDataBundleOptionInterface>;
    /**
     *
     * @type {Array<GroupedProductDataGroupedOptionsInterface>}
     * @memberof QuoteDataProductOptionExtensionInterface
     */
    groupedOptions?: Array<GroupedProductDataGroupedOptionsInterface>;
    /**
     *
     * @type {Array<ConfigurableProductDataConfigurableItemOptionValueInterface>}
     * @memberof QuoteDataProductOptionExtensionInterface
     */
    configurableItemOptions?: Array<ConfigurableProductDataConfigurableItemOptionValueInterface>;
}
/**
 * Check if a given object implements the QuoteDataProductOptionExtensionInterface interface.
 */
export declare function instanceOfQuoteDataProductOptionExtensionInterface(value: object): boolean;
export declare function QuoteDataProductOptionExtensionInterfaceFromJSON(json: any): QuoteDataProductOptionExtensionInterface;
export declare function QuoteDataProductOptionExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataProductOptionExtensionInterface;
export declare function QuoteDataProductOptionExtensionInterfaceToJSON(value?: QuoteDataProductOptionExtensionInterface | null): any;
