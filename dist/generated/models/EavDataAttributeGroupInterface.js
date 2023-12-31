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
exports.EavDataAttributeGroupInterfaceToJSON = exports.EavDataAttributeGroupInterfaceFromJSONTyped = exports.EavDataAttributeGroupInterfaceFromJSON = exports.instanceOfEavDataAttributeGroupInterface = void 0;
var runtime_1 = require("../runtime");
var EavDataAttributeGroupExtensionInterface_1 = require("./EavDataAttributeGroupExtensionInterface");
/**
 * Check if a given object implements the EavDataAttributeGroupInterface interface.
 */
function instanceOfEavDataAttributeGroupInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfEavDataAttributeGroupInterface = instanceOfEavDataAttributeGroupInterface;
function EavDataAttributeGroupInterfaceFromJSON(json) {
    return EavDataAttributeGroupInterfaceFromJSONTyped(json, false);
}
exports.EavDataAttributeGroupInterfaceFromJSON = EavDataAttributeGroupInterfaceFromJSON;
function EavDataAttributeGroupInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attributeGroupId': !(0, runtime_1.exists)(json, 'attribute_group_id') ? undefined : json['attribute_group_id'],
        'attributeGroupName': !(0, runtime_1.exists)(json, 'attribute_group_name') ? undefined : json['attribute_group_name'],
        'attributeSetId': !(0, runtime_1.exists)(json, 'attribute_set_id') ? undefined : json['attribute_set_id'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : (0, EavDataAttributeGroupExtensionInterface_1.EavDataAttributeGroupExtensionInterfaceFromJSON)(json['extension_attributes']),
    };
}
exports.EavDataAttributeGroupInterfaceFromJSONTyped = EavDataAttributeGroupInterfaceFromJSONTyped;
function EavDataAttributeGroupInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attribute_group_id': value.attributeGroupId,
        'attribute_group_name': value.attributeGroupName,
        'attribute_set_id': value.attributeSetId,
        'extension_attributes': (0, EavDataAttributeGroupExtensionInterface_1.EavDataAttributeGroupExtensionInterfaceToJSON)(value.extensionAttributes),
    };
}
exports.EavDataAttributeGroupInterfaceToJSON = EavDataAttributeGroupInterfaceToJSON;
//# sourceMappingURL=EavDataAttributeGroupInterface.js.map