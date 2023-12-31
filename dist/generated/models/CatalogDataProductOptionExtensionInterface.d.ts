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
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductOptionInterface
 * @export
 * @interface CatalogDataProductOptionExtensionInterface
 */
export interface CatalogDataProductOptionExtensionInterface {
    /**
     *
     * @type {Array<CatalogDataCustomOptionInterface>}
     * @memberof CatalogDataProductOptionExtensionInterface
     */
    customOptions?: Array<CatalogDataCustomOptionInterface>;
    /**
     *
     * @type {DownloadableDataDownloadableOptionInterface}
     * @memberof CatalogDataProductOptionExtensionInterface
     */
    downloadableOption?: DownloadableDataDownloadableOptionInterface;
    /**
     *
     * @type {Array<BundleDataBundleOptionInterface>}
     * @memberof CatalogDataProductOptionExtensionInterface
     */
    bundleOptions?: Array<BundleDataBundleOptionInterface>;
    /**
     *
     * @type {Array<ConfigurableProductDataConfigurableItemOptionValueInterface>}
     * @memberof CatalogDataProductOptionExtensionInterface
     */
    configurableItemOptions?: Array<ConfigurableProductDataConfigurableItemOptionValueInterface>;
}
/**
 * Check if a given object implements the CatalogDataProductOptionExtensionInterface interface.
 */
export declare function instanceOfCatalogDataProductOptionExtensionInterface(value: object): boolean;
export declare function CatalogDataProductOptionExtensionInterfaceFromJSON(json: any): CatalogDataProductOptionExtensionInterface;
export declare function CatalogDataProductOptionExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductOptionExtensionInterface;
export declare function CatalogDataProductOptionExtensionInterfaceToJSON(value?: CatalogDataProductOptionExtensionInterface | null): any;
