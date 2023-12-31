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
exports.EavDataAttributeOptionInterfaceToJSON = exports.EavDataAttributeOptionInterfaceFromJSONTyped = exports.EavDataAttributeOptionInterfaceFromJSON = exports.instanceOfEavDataAttributeOptionInterface = void 0;
var runtime_1 = require("../runtime");
var EavDataAttributeOptionLabelInterface_1 = require("./EavDataAttributeOptionLabelInterface");
/**
 * Check if a given object implements the EavDataAttributeOptionInterface interface.
 */
function instanceOfEavDataAttributeOptionInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "label" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfEavDataAttributeOptionInterface = instanceOfEavDataAttributeOptionInterface;
function EavDataAttributeOptionInterfaceFromJSON(json) {
    return EavDataAttributeOptionInterfaceFromJSONTyped(json, false);
}
exports.EavDataAttributeOptionInterfaceFromJSON = EavDataAttributeOptionInterfaceFromJSON;
function EavDataAttributeOptionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'label': json['label'],
        'value': json['value'],
        'sortOrder': !(0, runtime_1.exists)(json, 'sort_order') ? undefined : json['sort_order'],
        'isDefault': !(0, runtime_1.exists)(json, 'is_default') ? undefined : json['is_default'],
        'storeLabels': !(0, runtime_1.exists)(json, 'store_labels') ? undefined : (json['store_labels'].map(EavDataAttributeOptionLabelInterface_1.EavDataAttributeOptionLabelInterfaceFromJSON)),
    };
}
exports.EavDataAttributeOptionInterfaceFromJSONTyped = EavDataAttributeOptionInterfaceFromJSONTyped;
function EavDataAttributeOptionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'label': value.label,
        'value': value.value,
        'sort_order': value.sortOrder,
        'is_default': value.isDefault,
        'store_labels': value.storeLabels === undefined ? undefined : (value.storeLabels.map(EavDataAttributeOptionLabelInterface_1.EavDataAttributeOptionLabelInterfaceToJSON)),
    };
}
exports.EavDataAttributeOptionInterfaceToJSON = EavDataAttributeOptionInterfaceToJSON;
//# sourceMappingURL=EavDataAttributeOptionInterface.js.map