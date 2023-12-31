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
exports.EavDataAttributeSetInterfaceToJSON = exports.EavDataAttributeSetInterfaceFromJSONTyped = exports.EavDataAttributeSetInterfaceFromJSON = exports.instanceOfEavDataAttributeSetInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the EavDataAttributeSetInterface interface.
 */
function instanceOfEavDataAttributeSetInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "attributeSetName" in value;
    isInstance = isInstance && "sortOrder" in value;
    return isInstance;
}
exports.instanceOfEavDataAttributeSetInterface = instanceOfEavDataAttributeSetInterface;
function EavDataAttributeSetInterfaceFromJSON(json) {
    return EavDataAttributeSetInterfaceFromJSONTyped(json, false);
}
exports.EavDataAttributeSetInterfaceFromJSON = EavDataAttributeSetInterfaceFromJSON;
function EavDataAttributeSetInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attributeSetId': !(0, runtime_1.exists)(json, 'attribute_set_id') ? undefined : json['attribute_set_id'],
        'attributeSetName': json['attribute_set_name'],
        'sortOrder': json['sort_order'],
        'entityTypeId': !(0, runtime_1.exists)(json, 'entity_type_id') ? undefined : json['entity_type_id'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.EavDataAttributeSetInterfaceFromJSONTyped = EavDataAttributeSetInterfaceFromJSONTyped;
function EavDataAttributeSetInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attribute_set_id': value.attributeSetId,
        'attribute_set_name': value.attributeSetName,
        'sort_order': value.sortOrder,
        'entity_type_id': value.entityTypeId,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.EavDataAttributeSetInterfaceToJSON = EavDataAttributeSetInterfaceToJSON;
//# sourceMappingURL=EavDataAttributeSetInterface.js.map