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
exports.CatalogDataProductOptionExtensionInterfaceToJSON = exports.CatalogDataProductOptionExtensionInterfaceFromJSONTyped = exports.CatalogDataProductOptionExtensionInterfaceFromJSON = exports.instanceOfCatalogDataProductOptionExtensionInterface = void 0;
var runtime_1 = require("../runtime");
var BundleDataBundleOptionInterface_1 = require("./BundleDataBundleOptionInterface");
var CatalogDataCustomOptionInterface_1 = require("./CatalogDataCustomOptionInterface");
var ConfigurableProductDataConfigurableItemOptionValueInterface_1 = require("./ConfigurableProductDataConfigurableItemOptionValueInterface");
var DownloadableDataDownloadableOptionInterface_1 = require("./DownloadableDataDownloadableOptionInterface");
/**
 * Check if a given object implements the CatalogDataProductOptionExtensionInterface interface.
 */
function instanceOfCatalogDataProductOptionExtensionInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfCatalogDataProductOptionExtensionInterface = instanceOfCatalogDataProductOptionExtensionInterface;
function CatalogDataProductOptionExtensionInterfaceFromJSON(json) {
    return CatalogDataProductOptionExtensionInterfaceFromJSONTyped(json, false);
}
exports.CatalogDataProductOptionExtensionInterfaceFromJSON = CatalogDataProductOptionExtensionInterfaceFromJSON;
function CatalogDataProductOptionExtensionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customOptions': !(0, runtime_1.exists)(json, 'custom_options') ? undefined : (json['custom_options'].map(CatalogDataCustomOptionInterface_1.CatalogDataCustomOptionInterfaceFromJSON)),
        'downloadableOption': !(0, runtime_1.exists)(json, 'downloadable_option') ? undefined : (0, DownloadableDataDownloadableOptionInterface_1.DownloadableDataDownloadableOptionInterfaceFromJSON)(json['downloadable_option']),
        'bundleOptions': !(0, runtime_1.exists)(json, 'bundle_options') ? undefined : (json['bundle_options'].map(BundleDataBundleOptionInterface_1.BundleDataBundleOptionInterfaceFromJSON)),
        'configurableItemOptions': !(0, runtime_1.exists)(json, 'configurable_item_options') ? undefined : (json['configurable_item_options'].map(ConfigurableProductDataConfigurableItemOptionValueInterface_1.ConfigurableProductDataConfigurableItemOptionValueInterfaceFromJSON)),
    };
}
exports.CatalogDataProductOptionExtensionInterfaceFromJSONTyped = CatalogDataProductOptionExtensionInterfaceFromJSONTyped;
function CatalogDataProductOptionExtensionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'custom_options': value.customOptions === undefined ? undefined : (value.customOptions.map(CatalogDataCustomOptionInterface_1.CatalogDataCustomOptionInterfaceToJSON)),
        'downloadable_option': (0, DownloadableDataDownloadableOptionInterface_1.DownloadableDataDownloadableOptionInterfaceToJSON)(value.downloadableOption),
        'bundle_options': value.bundleOptions === undefined ? undefined : (value.bundleOptions.map(BundleDataBundleOptionInterface_1.BundleDataBundleOptionInterfaceToJSON)),
        'configurable_item_options': value.configurableItemOptions === undefined ? undefined : (value.configurableItemOptions.map(ConfigurableProductDataConfigurableItemOptionValueInterface_1.ConfigurableProductDataConfigurableItemOptionValueInterfaceToJSON)),
    };
}
exports.CatalogDataProductOptionExtensionInterfaceToJSON = CatalogDataProductOptionExtensionInterfaceToJSON;
//# sourceMappingURL=CatalogDataProductOptionExtensionInterface.js.map