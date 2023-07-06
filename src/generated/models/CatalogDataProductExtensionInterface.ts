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
import type { BundleDataOptionInterface } from './BundleDataOptionInterface';
import {
    BundleDataOptionInterfaceFromJSON,
    BundleDataOptionInterfaceFromJSONTyped,
    BundleDataOptionInterfaceToJSON,
} from './BundleDataOptionInterface';
import type { CatalogDataCategoryLinkInterface } from './CatalogDataCategoryLinkInterface';
import {
    CatalogDataCategoryLinkInterfaceFromJSON,
    CatalogDataCategoryLinkInterfaceFromJSONTyped,
    CatalogDataCategoryLinkInterfaceToJSON,
} from './CatalogDataCategoryLinkInterface';
import type { CatalogInventoryDataStockItemInterface } from './CatalogInventoryDataStockItemInterface';
import {
    CatalogInventoryDataStockItemInterfaceFromJSON,
    CatalogInventoryDataStockItemInterfaceFromJSONTyped,
    CatalogInventoryDataStockItemInterfaceToJSON,
} from './CatalogInventoryDataStockItemInterface';
import type { ConfigurableProductDataOptionInterface } from './ConfigurableProductDataOptionInterface';
import {
    ConfigurableProductDataOptionInterfaceFromJSON,
    ConfigurableProductDataOptionInterfaceFromJSONTyped,
    ConfigurableProductDataOptionInterfaceToJSON,
} from './ConfigurableProductDataOptionInterface';
import type { DownloadableDataLinkInterface } from './DownloadableDataLinkInterface';
import {
    DownloadableDataLinkInterfaceFromJSON,
    DownloadableDataLinkInterfaceFromJSONTyped,
    DownloadableDataLinkInterfaceToJSON,
} from './DownloadableDataLinkInterface';
import type { DownloadableDataSampleInterface } from './DownloadableDataSampleInterface';
import {
    DownloadableDataSampleInterfaceFromJSON,
    DownloadableDataSampleInterfaceFromJSONTyped,
    DownloadableDataSampleInterfaceToJSON,
} from './DownloadableDataSampleInterface';
import type { SalesRuleDataRuleDiscountInterface } from './SalesRuleDataRuleDiscountInterface';
import {
    SalesRuleDataRuleDiscountInterfaceFromJSON,
    SalesRuleDataRuleDiscountInterfaceFromJSONTyped,
    SalesRuleDataRuleDiscountInterfaceToJSON,
} from './SalesRuleDataRuleDiscountInterface';

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductInterface
 * @export
 * @interface CatalogDataProductExtensionInterface
 */
export interface CatalogDataProductExtensionInterface {
    /**
     * 
     * @type {Array<number>}
     * @memberof CatalogDataProductExtensionInterface
     */
    websiteIds?: Array<number>;
    /**
     * 
     * @type {Array<CatalogDataCategoryLinkInterface>}
     * @memberof CatalogDataProductExtensionInterface
     */
    categoryLinks?: Array<CatalogDataCategoryLinkInterface>;
    /**
     * 
     * @type {CatalogInventoryDataStockItemInterface}
     * @memberof CatalogDataProductExtensionInterface
     */
    stockItem?: CatalogInventoryDataStockItemInterface;
    /**
     * 
     * @type {Array<DownloadableDataLinkInterface>}
     * @memberof CatalogDataProductExtensionInterface
     */
    downloadableProductLinks?: Array<DownloadableDataLinkInterface>;
    /**
     * 
     * @type {Array<DownloadableDataSampleInterface>}
     * @memberof CatalogDataProductExtensionInterface
     */
    downloadableProductSamples?: Array<DownloadableDataSampleInterface>;
    /**
     * 
     * @type {Array<BundleDataOptionInterface>}
     * @memberof CatalogDataProductExtensionInterface
     */
    bundleProductOptions?: Array<BundleDataOptionInterface>;
    /**
     * 
     * @type {Array<ConfigurableProductDataOptionInterface>}
     * @memberof CatalogDataProductExtensionInterface
     */
    configurableProductOptions?: Array<ConfigurableProductDataOptionInterface>;
    /**
     * 
     * @type {Array<number>}
     * @memberof CatalogDataProductExtensionInterface
     */
    configurableProductLinks?: Array<number>;
    /**
     * 
     * @type {Array<SalesRuleDataRuleDiscountInterface>}
     * @memberof CatalogDataProductExtensionInterface
     */
    discounts?: Array<SalesRuleDataRuleDiscountInterface>;
}

/**
 * Check if a given object implements the CatalogDataProductExtensionInterface interface.
 */
export function instanceOfCatalogDataProductExtensionInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogDataProductExtensionInterfaceFromJSON(json: any): CatalogDataProductExtensionInterface {
    return CatalogDataProductExtensionInterfaceFromJSONTyped(json, false);
}

export function CatalogDataProductExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductExtensionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'websiteIds': !exists(json, 'website_ids') ? undefined : json['website_ids'],
        'categoryLinks': !exists(json, 'category_links') ? undefined : ((json['category_links'] as Array<any>).map(CatalogDataCategoryLinkInterfaceFromJSON)),
        'stockItem': !exists(json, 'stock_item') ? undefined : CatalogInventoryDataStockItemInterfaceFromJSON(json['stock_item']),
        'downloadableProductLinks': !exists(json, 'downloadable_product_links') ? undefined : ((json['downloadable_product_links'] as Array<any>).map(DownloadableDataLinkInterfaceFromJSON)),
        'downloadableProductSamples': !exists(json, 'downloadable_product_samples') ? undefined : ((json['downloadable_product_samples'] as Array<any>).map(DownloadableDataSampleInterfaceFromJSON)),
        'bundleProductOptions': !exists(json, 'bundle_product_options') ? undefined : ((json['bundle_product_options'] as Array<any>).map(BundleDataOptionInterfaceFromJSON)),
        'configurableProductOptions': !exists(json, 'configurable_product_options') ? undefined : ((json['configurable_product_options'] as Array<any>).map(ConfigurableProductDataOptionInterfaceFromJSON)),
        'configurableProductLinks': !exists(json, 'configurable_product_links') ? undefined : json['configurable_product_links'],
        'discounts': !exists(json, 'discounts') ? undefined : ((json['discounts'] as Array<any>).map(SalesRuleDataRuleDiscountInterfaceFromJSON)),
    };
}

export function CatalogDataProductExtensionInterfaceToJSON(value?: CatalogDataProductExtensionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'website_ids': value.websiteIds,
        'category_links': value.categoryLinks === undefined ? undefined : ((value.categoryLinks as Array<any>).map(CatalogDataCategoryLinkInterfaceToJSON)),
        'stock_item': CatalogInventoryDataStockItemInterfaceToJSON(value.stockItem),
        'downloadable_product_links': value.downloadableProductLinks === undefined ? undefined : ((value.downloadableProductLinks as Array<any>).map(DownloadableDataLinkInterfaceToJSON)),
        'downloadable_product_samples': value.downloadableProductSamples === undefined ? undefined : ((value.downloadableProductSamples as Array<any>).map(DownloadableDataSampleInterfaceToJSON)),
        'bundle_product_options': value.bundleProductOptions === undefined ? undefined : ((value.bundleProductOptions as Array<any>).map(BundleDataOptionInterfaceToJSON)),
        'configurable_product_options': value.configurableProductOptions === undefined ? undefined : ((value.configurableProductOptions as Array<any>).map(ConfigurableProductDataOptionInterfaceToJSON)),
        'configurable_product_links': value.configurableProductLinks,
        'discounts': value.discounts === undefined ? undefined : ((value.discounts as Array<any>).map(SalesRuleDataRuleDiscountInterfaceToJSON)),
    };
}

