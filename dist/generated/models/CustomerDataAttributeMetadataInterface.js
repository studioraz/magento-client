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
exports.CustomerDataAttributeMetadataInterfaceToJSON = exports.CustomerDataAttributeMetadataInterfaceFromJSONTyped = exports.CustomerDataAttributeMetadataInterfaceFromJSON = exports.instanceOfCustomerDataAttributeMetadataInterface = void 0;
var runtime_1 = require("../runtime");
var CustomerDataOptionInterface_1 = require("./CustomerDataOptionInterface");
var CustomerDataValidationRuleInterface_1 = require("./CustomerDataValidationRuleInterface");
/**
 * Check if a given object implements the CustomerDataAttributeMetadataInterface interface.
 */
function instanceOfCustomerDataAttributeMetadataInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "frontendInput" in value;
    isInstance = isInstance && "inputFilter" in value;
    isInstance = isInstance && "storeLabel" in value;
    isInstance = isInstance && "validationRules" in value;
    isInstance = isInstance && "multilineCount" in value;
    isInstance = isInstance && "visible" in value;
    isInstance = isInstance && "required" in value;
    isInstance = isInstance && "dataModel" in value;
    isInstance = isInstance && "options" in value;
    isInstance = isInstance && "frontendClass" in value;
    isInstance = isInstance && "userDefined" in value;
    isInstance = isInstance && "sortOrder" in value;
    isInstance = isInstance && "frontendLabel" in value;
    isInstance = isInstance && "note" in value;
    isInstance = isInstance && "system" in value;
    isInstance = isInstance && "backendType" in value;
    isInstance = isInstance && "attributeCode" in value;
    return isInstance;
}
exports.instanceOfCustomerDataAttributeMetadataInterface = instanceOfCustomerDataAttributeMetadataInterface;
function CustomerDataAttributeMetadataInterfaceFromJSON(json) {
    return CustomerDataAttributeMetadataInterfaceFromJSONTyped(json, false);
}
exports.CustomerDataAttributeMetadataInterfaceFromJSON = CustomerDataAttributeMetadataInterfaceFromJSON;
function CustomerDataAttributeMetadataInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'frontendInput': json['frontend_input'],
        'inputFilter': json['input_filter'],
        'storeLabel': json['store_label'],
        'validationRules': (json['validation_rules'].map(CustomerDataValidationRuleInterface_1.CustomerDataValidationRuleInterfaceFromJSON)),
        'multilineCount': json['multiline_count'],
        'visible': json['visible'],
        'required': json['required'],
        'dataModel': json['data_model'],
        'options': (json['options'].map(CustomerDataOptionInterface_1.CustomerDataOptionInterfaceFromJSON)),
        'frontendClass': json['frontend_class'],
        'userDefined': json['user_defined'],
        'sortOrder': json['sort_order'],
        'frontendLabel': json['frontend_label'],
        'note': json['note'],
        'system': json['system'],
        'backendType': json['backend_type'],
        'isUsedInGrid': !(0, runtime_1.exists)(json, 'is_used_in_grid') ? undefined : json['is_used_in_grid'],
        'isVisibleInGrid': !(0, runtime_1.exists)(json, 'is_visible_in_grid') ? undefined : json['is_visible_in_grid'],
        'isFilterableInGrid': !(0, runtime_1.exists)(json, 'is_filterable_in_grid') ? undefined : json['is_filterable_in_grid'],
        'isSearchableInGrid': !(0, runtime_1.exists)(json, 'is_searchable_in_grid') ? undefined : json['is_searchable_in_grid'],
        'attributeCode': json['attribute_code'],
    };
}
exports.CustomerDataAttributeMetadataInterfaceFromJSONTyped = CustomerDataAttributeMetadataInterfaceFromJSONTyped;
function CustomerDataAttributeMetadataInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'frontend_input': value.frontendInput,
        'input_filter': value.inputFilter,
        'store_label': value.storeLabel,
        'validation_rules': (value.validationRules.map(CustomerDataValidationRuleInterface_1.CustomerDataValidationRuleInterfaceToJSON)),
        'multiline_count': value.multilineCount,
        'visible': value.visible,
        'required': value.required,
        'data_model': value.dataModel,
        'options': (value.options.map(CustomerDataOptionInterface_1.CustomerDataOptionInterfaceToJSON)),
        'frontend_class': value.frontendClass,
        'user_defined': value.userDefined,
        'sort_order': value.sortOrder,
        'frontend_label': value.frontendLabel,
        'note': value.note,
        'system': value.system,
        'backend_type': value.backendType,
        'is_used_in_grid': value.isUsedInGrid,
        'is_visible_in_grid': value.isVisibleInGrid,
        'is_filterable_in_grid': value.isFilterableInGrid,
        'is_searchable_in_grid': value.isSearchableInGrid,
        'attribute_code': value.attributeCode,
    };
}
exports.CustomerDataAttributeMetadataInterfaceToJSON = CustomerDataAttributeMetadataInterfaceToJSON;
//# sourceMappingURL=CustomerDataAttributeMetadataInterface.js.map