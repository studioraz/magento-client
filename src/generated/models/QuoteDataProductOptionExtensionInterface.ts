/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { BundleDataBundleOptionInterface } from './BundleDataBundleOptionInterface';
import {
    BundleDataBundleOptionInterfaceFromJSON,
    BundleDataBundleOptionInterfaceFromJSONTyped,
    BundleDataBundleOptionInterfaceToJSON,
} from './BundleDataBundleOptionInterface';
import type { CatalogDataCustomOptionInterface } from './CatalogDataCustomOptionInterface';
import {
    CatalogDataCustomOptionInterfaceFromJSON,
    CatalogDataCustomOptionInterfaceFromJSONTyped,
    CatalogDataCustomOptionInterfaceToJSON,
} from './CatalogDataCustomOptionInterface';
import type { ConfigurableProductDataConfigurableItemOptionValueInterface } from './ConfigurableProductDataConfigurableItemOptionValueInterface';
import {
    ConfigurableProductDataConfigurableItemOptionValueInterfaceFromJSON,
    ConfigurableProductDataConfigurableItemOptionValueInterfaceFromJSONTyped,
    ConfigurableProductDataConfigurableItemOptionValueInterfaceToJSON,
} from './ConfigurableProductDataConfigurableItemOptionValueInterface';
import type { DownloadableDataDownloadableOptionInterface } from './DownloadableDataDownloadableOptionInterface';
import {
    DownloadableDataDownloadableOptionInterfaceFromJSON,
    DownloadableDataDownloadableOptionInterfaceFromJSONTyped,
    DownloadableDataDownloadableOptionInterfaceToJSON,
} from './DownloadableDataDownloadableOptionInterface';
import type { GroupedProductDataGroupedOptionsInterface } from './GroupedProductDataGroupedOptionsInterface';
import {
    GroupedProductDataGroupedOptionsInterfaceFromJSON,
    GroupedProductDataGroupedOptionsInterfaceFromJSONTyped,
    GroupedProductDataGroupedOptionsInterfaceToJSON,
} from './GroupedProductDataGroupedOptionsInterface';

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
export function instanceOfQuoteDataProductOptionExtensionInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuoteDataProductOptionExtensionInterfaceFromJSON(json: any): QuoteDataProductOptionExtensionInterface {
    return QuoteDataProductOptionExtensionInterfaceFromJSONTyped(json, false);
}

export function QuoteDataProductOptionExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataProductOptionExtensionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customOptions': !exists(json, 'custom_options') ? undefined : ((json['custom_options'] as Array<any>).map(CatalogDataCustomOptionInterfaceFromJSON)),
        'downloadableOption': !exists(json, 'downloadable_option') ? undefined : DownloadableDataDownloadableOptionInterfaceFromJSON(json['downloadable_option']),
        'bundleOptions': !exists(json, 'bundle_options') ? undefined : ((json['bundle_options'] as Array<any>).map(BundleDataBundleOptionInterfaceFromJSON)),
        'groupedOptions': !exists(json, 'grouped_options') ? undefined : ((json['grouped_options'] as Array<any>).map(GroupedProductDataGroupedOptionsInterfaceFromJSON)),
        'configurableItemOptions': !exists(json, 'configurable_item_options') ? undefined : ((json['configurable_item_options'] as Array<any>).map(ConfigurableProductDataConfigurableItemOptionValueInterfaceFromJSON)),
    };
}

export function QuoteDataProductOptionExtensionInterfaceToJSON(value?: QuoteDataProductOptionExtensionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'custom_options': value.customOptions === undefined ? undefined : ((value.customOptions as Array<any>).map(CatalogDataCustomOptionInterfaceToJSON)),
        'downloadable_option': DownloadableDataDownloadableOptionInterfaceToJSON(value.downloadableOption),
        'bundle_options': value.bundleOptions === undefined ? undefined : ((value.bundleOptions as Array<any>).map(BundleDataBundleOptionInterfaceToJSON)),
        'grouped_options': value.groupedOptions === undefined ? undefined : ((value.groupedOptions as Array<any>).map(GroupedProductDataGroupedOptionsInterfaceToJSON)),
        'configurable_item_options': value.configurableItemOptions === undefined ? undefined : ((value.configurableItemOptions as Array<any>).map(ConfigurableProductDataConfigurableItemOptionValueInterfaceToJSON)),
    };
}

