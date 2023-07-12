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
exports.StoreDataGroupInterfaceToJSON = exports.StoreDataGroupInterfaceFromJSONTyped = exports.StoreDataGroupInterfaceFromJSON = exports.instanceOfStoreDataGroupInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the StoreDataGroupInterface interface.
 */
function instanceOfStoreDataGroupInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "websiteId" in value;
    isInstance = isInstance && "rootCategoryId" in value;
    isInstance = isInstance && "defaultStoreId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "code" in value;
    return isInstance;
}
exports.instanceOfStoreDataGroupInterface = instanceOfStoreDataGroupInterface;
function StoreDataGroupInterfaceFromJSON(json) {
    return StoreDataGroupInterfaceFromJSONTyped(json, false);
}
exports.StoreDataGroupInterfaceFromJSON = StoreDataGroupInterfaceFromJSON;
function StoreDataGroupInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'websiteId': json['website_id'],
        'rootCategoryId': json['root_category_id'],
        'defaultStoreId': json['default_store_id'],
        'name': json['name'],
        'code': json['code'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.StoreDataGroupInterfaceFromJSONTyped = StoreDataGroupInterfaceFromJSONTyped;
function StoreDataGroupInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'website_id': value.websiteId,
        'root_category_id': value.rootCategoryId,
        'default_store_id': value.defaultStoreId,
        'name': value.name,
        'code': value.code,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.StoreDataGroupInterfaceToJSON = StoreDataGroupInterfaceToJSON;
//# sourceMappingURL=StoreDataGroupInterface.js.map