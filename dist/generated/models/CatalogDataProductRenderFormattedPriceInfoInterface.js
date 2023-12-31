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
exports.CatalogDataProductRenderFormattedPriceInfoInterfaceToJSON = exports.CatalogDataProductRenderFormattedPriceInfoInterfaceFromJSONTyped = exports.CatalogDataProductRenderFormattedPriceInfoInterfaceFromJSON = exports.instanceOfCatalogDataProductRenderFormattedPriceInfoInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CatalogDataProductRenderFormattedPriceInfoInterface interface.
 */
function instanceOfCatalogDataProductRenderFormattedPriceInfoInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "finalPrice" in value;
    isInstance = isInstance && "maxPrice" in value;
    isInstance = isInstance && "minimalPrice" in value;
    isInstance = isInstance && "maxRegularPrice" in value;
    isInstance = isInstance && "minimalRegularPrice" in value;
    isInstance = isInstance && "specialPrice" in value;
    isInstance = isInstance && "regularPrice" in value;
    return isInstance;
}
exports.instanceOfCatalogDataProductRenderFormattedPriceInfoInterface = instanceOfCatalogDataProductRenderFormattedPriceInfoInterface;
function CatalogDataProductRenderFormattedPriceInfoInterfaceFromJSON(json) {
    return CatalogDataProductRenderFormattedPriceInfoInterfaceFromJSONTyped(json, false);
}
exports.CatalogDataProductRenderFormattedPriceInfoInterfaceFromJSON = CatalogDataProductRenderFormattedPriceInfoInterfaceFromJSON;
function CatalogDataProductRenderFormattedPriceInfoInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'finalPrice': json['final_price'],
        'maxPrice': json['max_price'],
        'minimalPrice': json['minimal_price'],
        'maxRegularPrice': json['max_regular_price'],
        'minimalRegularPrice': json['minimal_regular_price'],
        'specialPrice': json['special_price'],
        'regularPrice': json['regular_price'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.CatalogDataProductRenderFormattedPriceInfoInterfaceFromJSONTyped = CatalogDataProductRenderFormattedPriceInfoInterfaceFromJSONTyped;
function CatalogDataProductRenderFormattedPriceInfoInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'final_price': value.finalPrice,
        'max_price': value.maxPrice,
        'minimal_price': value.minimalPrice,
        'max_regular_price': value.maxRegularPrice,
        'minimal_regular_price': value.minimalRegularPrice,
        'special_price': value.specialPrice,
        'regular_price': value.regularPrice,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.CatalogDataProductRenderFormattedPriceInfoInterfaceToJSON = CatalogDataProductRenderFormattedPriceInfoInterfaceToJSON;
//# sourceMappingURL=CatalogDataProductRenderFormattedPriceInfoInterface.js.map