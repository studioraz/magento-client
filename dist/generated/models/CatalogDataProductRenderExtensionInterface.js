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
exports.CatalogDataProductRenderExtensionInterfaceToJSON = exports.CatalogDataProductRenderExtensionInterfaceFromJSONTyped = exports.CatalogDataProductRenderExtensionInterfaceFromJSON = exports.instanceOfCatalogDataProductRenderExtensionInterface = void 0;
var runtime_1 = require("../runtime");
var CatalogDataProductRenderButtonInterface_1 = require("./CatalogDataProductRenderButtonInterface");
/**
 * Check if a given object implements the CatalogDataProductRenderExtensionInterface interface.
 */
function instanceOfCatalogDataProductRenderExtensionInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfCatalogDataProductRenderExtensionInterface = instanceOfCatalogDataProductRenderExtensionInterface;
function CatalogDataProductRenderExtensionInterfaceFromJSON(json) {
    return CatalogDataProductRenderExtensionInterfaceFromJSONTyped(json, false);
}
exports.CatalogDataProductRenderExtensionInterfaceFromJSON = CatalogDataProductRenderExtensionInterfaceFromJSON;
function CatalogDataProductRenderExtensionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'reviewHtml': !(0, runtime_1.exists)(json, 'review_html') ? undefined : json['review_html'],
        'wishlistButton': !(0, runtime_1.exists)(json, 'wishlist_button') ? undefined : (0, CatalogDataProductRenderButtonInterface_1.CatalogDataProductRenderButtonInterfaceFromJSON)(json['wishlist_button']),
    };
}
exports.CatalogDataProductRenderExtensionInterfaceFromJSONTyped = CatalogDataProductRenderExtensionInterfaceFromJSONTyped;
function CatalogDataProductRenderExtensionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'review_html': value.reviewHtml,
        'wishlist_button': (0, CatalogDataProductRenderButtonInterface_1.CatalogDataProductRenderButtonInterfaceToJSON)(value.wishlistButton),
    };
}
exports.CatalogDataProductRenderExtensionInterfaceToJSON = CatalogDataProductRenderExtensionInterfaceToJSON;
//# sourceMappingURL=CatalogDataProductRenderExtensionInterface.js.map