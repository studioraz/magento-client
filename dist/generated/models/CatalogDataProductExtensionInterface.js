"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogDataProductExtensionInterfaceToJSON = exports.CatalogDataProductExtensionInterfaceFromJSONTyped = exports.CatalogDataProductExtensionInterfaceFromJSON = exports.instanceOfCatalogDataProductExtensionInterface = void 0;
var runtime_1 = require("../runtime");
var BundleDataOptionInterface_1 = require("./BundleDataOptionInterface");
var CatalogDataCategoryLinkInterface_1 = require("./CatalogDataCategoryLinkInterface");
var CatalogInventoryDataStockItemInterface_1 = require("./CatalogInventoryDataStockItemInterface");
var ConfigurableProductDataOptionInterface_1 = require("./ConfigurableProductDataOptionInterface");
var DownloadableDataLinkInterface_1 = require("./DownloadableDataLinkInterface");
var DownloadableDataSampleInterface_1 = require("./DownloadableDataSampleInterface");
var SalesRuleDataRuleDiscountInterface_1 = require("./SalesRuleDataRuleDiscountInterface");
/**
 * Check if a given object implements the CatalogDataProductExtensionInterface interface.
 */
function instanceOfCatalogDataProductExtensionInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfCatalogDataProductExtensionInterface = instanceOfCatalogDataProductExtensionInterface;
function CatalogDataProductExtensionInterfaceFromJSON(json) {
    return CatalogDataProductExtensionInterfaceFromJSONTyped(json, false);
}
exports.CatalogDataProductExtensionInterfaceFromJSON = CatalogDataProductExtensionInterfaceFromJSON;
function CatalogDataProductExtensionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'websiteIds': !(0, runtime_1.exists)(json, 'website_ids') ? undefined : json['website_ids'],
        'categoryLinks': !(0, runtime_1.exists)(json, 'category_links') ? undefined : (json['category_links'].map(CatalogDataCategoryLinkInterface_1.CatalogDataCategoryLinkInterfaceFromJSON)),
        'stockItem': !(0, runtime_1.exists)(json, 'stock_item') ? undefined : (0, CatalogInventoryDataStockItemInterface_1.CatalogInventoryDataStockItemInterfaceFromJSON)(json['stock_item']),
        'downloadableProductLinks': !(0, runtime_1.exists)(json, 'downloadable_product_links') ? undefined : (json['downloadable_product_links'].map(DownloadableDataLinkInterface_1.DownloadableDataLinkInterfaceFromJSON)),
        'downloadableProductSamples': !(0, runtime_1.exists)(json, 'downloadable_product_samples') ? undefined : (json['downloadable_product_samples'].map(DownloadableDataSampleInterface_1.DownloadableDataSampleInterfaceFromJSON)),
        'bundleProductOptions': !(0, runtime_1.exists)(json, 'bundle_product_options') ? undefined : (json['bundle_product_options'].map(BundleDataOptionInterface_1.BundleDataOptionInterfaceFromJSON)),
        'configurableProductOptions': !(0, runtime_1.exists)(json, 'configurable_product_options') ? undefined : (json['configurable_product_options'].map(ConfigurableProductDataOptionInterface_1.ConfigurableProductDataOptionInterfaceFromJSON)),
        'configurableProductLinks': !(0, runtime_1.exists)(json, 'configurable_product_links') ? undefined : json['configurable_product_links'],
        'discounts': !(0, runtime_1.exists)(json, 'discounts') ? undefined : (json['discounts'].map(SalesRuleDataRuleDiscountInterface_1.SalesRuleDataRuleDiscountInterfaceFromJSON)),
    };
}
exports.CatalogDataProductExtensionInterfaceFromJSONTyped = CatalogDataProductExtensionInterfaceFromJSONTyped;
function CatalogDataProductExtensionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'website_ids': value.websiteIds,
        'category_links': value.categoryLinks === undefined ? undefined : (value.categoryLinks.map(CatalogDataCategoryLinkInterface_1.CatalogDataCategoryLinkInterfaceToJSON)),
        'stock_item': (0, CatalogInventoryDataStockItemInterface_1.CatalogInventoryDataStockItemInterfaceToJSON)(value.stockItem),
        'downloadable_product_links': value.downloadableProductLinks === undefined ? undefined : (value.downloadableProductLinks.map(DownloadableDataLinkInterface_1.DownloadableDataLinkInterfaceToJSON)),
        'downloadable_product_samples': value.downloadableProductSamples === undefined ? undefined : (value.downloadableProductSamples.map(DownloadableDataSampleInterface_1.DownloadableDataSampleInterfaceToJSON)),
        'bundle_product_options': value.bundleProductOptions === undefined ? undefined : (value.bundleProductOptions.map(BundleDataOptionInterface_1.BundleDataOptionInterfaceToJSON)),
        'configurable_product_options': value.configurableProductOptions === undefined ? undefined : (value.configurableProductOptions.map(ConfigurableProductDataOptionInterface_1.ConfigurableProductDataOptionInterfaceToJSON)),
        'configurable_product_links': value.configurableProductLinks,
        'discounts': value.discounts === undefined ? undefined : (value.discounts.map(SalesRuleDataRuleDiscountInterface_1.SalesRuleDataRuleDiscountInterfaceToJSON)),
    };
}
exports.CatalogDataProductExtensionInterfaceToJSON = CatalogDataProductExtensionInterfaceToJSON;
//# sourceMappingURL=CatalogDataProductExtensionInterface.js.map