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
exports.PostV1ProductsSkuDownloadablelinksRequestToJSON = exports.PostV1ProductsSkuDownloadablelinksRequestFromJSONTyped = exports.PostV1ProductsSkuDownloadablelinksRequestFromJSON = exports.instanceOfPostV1ProductsSkuDownloadablelinksRequest = void 0;
var runtime_1 = require("../runtime");
var DownloadableDataLinkInterface_1 = require("./DownloadableDataLinkInterface");
/**
 * Check if a given object implements the PostV1ProductsSkuDownloadablelinksRequest interface.
 */
function instanceOfPostV1ProductsSkuDownloadablelinksRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "link" in value;
    return isInstance;
}
exports.instanceOfPostV1ProductsSkuDownloadablelinksRequest = instanceOfPostV1ProductsSkuDownloadablelinksRequest;
function PostV1ProductsSkuDownloadablelinksRequestFromJSON(json) {
    return PostV1ProductsSkuDownloadablelinksRequestFromJSONTyped(json, false);
}
exports.PostV1ProductsSkuDownloadablelinksRequestFromJSON = PostV1ProductsSkuDownloadablelinksRequestFromJSON;
function PostV1ProductsSkuDownloadablelinksRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'link': (0, DownloadableDataLinkInterface_1.DownloadableDataLinkInterfaceFromJSON)(json['link']),
        'isGlobalScopeContent': !(0, runtime_1.exists)(json, 'isGlobalScopeContent') ? undefined : json['isGlobalScopeContent'],
    };
}
exports.PostV1ProductsSkuDownloadablelinksRequestFromJSONTyped = PostV1ProductsSkuDownloadablelinksRequestFromJSONTyped;
function PostV1ProductsSkuDownloadablelinksRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'link': (0, DownloadableDataLinkInterface_1.DownloadableDataLinkInterfaceToJSON)(value.link),
        'isGlobalScopeContent': value.isGlobalScopeContent,
    };
}
exports.PostV1ProductsSkuDownloadablelinksRequestToJSON = PostV1ProductsSkuDownloadablelinksRequestToJSON;
//# sourceMappingURL=PostV1ProductsSkuDownloadablelinksRequest.js.map