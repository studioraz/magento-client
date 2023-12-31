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
exports.DownloadableDataLinkInterfaceToJSON = exports.DownloadableDataLinkInterfaceFromJSONTyped = exports.DownloadableDataLinkInterfaceFromJSON = exports.instanceOfDownloadableDataLinkInterface = void 0;
var runtime_1 = require("../runtime");
var DownloadableDataFileContentInterface_1 = require("./DownloadableDataFileContentInterface");
/**
 * Check if a given object implements the DownloadableDataLinkInterface interface.
 */
function instanceOfDownloadableDataLinkInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "sortOrder" in value;
    isInstance = isInstance && "isShareable" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "linkType" in value;
    isInstance = isInstance && "sampleType" in value;
    return isInstance;
}
exports.instanceOfDownloadableDataLinkInterface = instanceOfDownloadableDataLinkInterface;
function DownloadableDataLinkInterfaceFromJSON(json) {
    return DownloadableDataLinkInterfaceFromJSONTyped(json, false);
}
exports.DownloadableDataLinkInterfaceFromJSON = DownloadableDataLinkInterfaceFromJSON;
function DownloadableDataLinkInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'title': !(0, runtime_1.exists)(json, 'title') ? undefined : json['title'],
        'sortOrder': json['sort_order'],
        'isShareable': json['is_shareable'],
        'price': json['price'],
        'numberOfDownloads': !(0, runtime_1.exists)(json, 'number_of_downloads') ? undefined : json['number_of_downloads'],
        'linkType': json['link_type'],
        'linkFile': !(0, runtime_1.exists)(json, 'link_file') ? undefined : json['link_file'],
        'linkFileContent': !(0, runtime_1.exists)(json, 'link_file_content') ? undefined : (0, DownloadableDataFileContentInterface_1.DownloadableDataFileContentInterfaceFromJSON)(json['link_file_content']),
        'linkUrl': !(0, runtime_1.exists)(json, 'link_url') ? undefined : json['link_url'],
        'sampleType': json['sample_type'],
        'sampleFile': !(0, runtime_1.exists)(json, 'sample_file') ? undefined : json['sample_file'],
        'sampleFileContent': !(0, runtime_1.exists)(json, 'sample_file_content') ? undefined : (0, DownloadableDataFileContentInterface_1.DownloadableDataFileContentInterfaceFromJSON)(json['sample_file_content']),
        'sampleUrl': !(0, runtime_1.exists)(json, 'sample_url') ? undefined : json['sample_url'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.DownloadableDataLinkInterfaceFromJSONTyped = DownloadableDataLinkInterfaceFromJSONTyped;
function DownloadableDataLinkInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'title': value.title,
        'sort_order': value.sortOrder,
        'is_shareable': value.isShareable,
        'price': value.price,
        'number_of_downloads': value.numberOfDownloads,
        'link_type': value.linkType,
        'link_file': value.linkFile,
        'link_file_content': (0, DownloadableDataFileContentInterface_1.DownloadableDataFileContentInterfaceToJSON)(value.linkFileContent),
        'link_url': value.linkUrl,
        'sample_type': value.sampleType,
        'sample_file': value.sampleFile,
        'sample_file_content': (0, DownloadableDataFileContentInterface_1.DownloadableDataFileContentInterfaceToJSON)(value.sampleFileContent),
        'sample_url': value.sampleUrl,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.DownloadableDataLinkInterfaceToJSON = DownloadableDataLinkInterfaceToJSON;
//# sourceMappingURL=DownloadableDataLinkInterface.js.map