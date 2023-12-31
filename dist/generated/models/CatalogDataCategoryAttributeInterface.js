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
exports.CatalogDataCategoryAttributeInterfaceToJSON = exports.CatalogDataCategoryAttributeInterfaceFromJSONTyped = exports.CatalogDataCategoryAttributeInterfaceFromJSON = exports.instanceOfCatalogDataCategoryAttributeInterface = void 0;
var runtime_1 = require("../runtime");
var EavDataAttributeFrontendLabelInterface_1 = require("./EavDataAttributeFrontendLabelInterface");
var EavDataAttributeOptionInterface_1 = require("./EavDataAttributeOptionInterface");
var EavDataAttributeValidationRuleInterface_1 = require("./EavDataAttributeValidationRuleInterface");
var FrameworkAttributeInterface_1 = require("./FrameworkAttributeInterface");
/**
 * Check if a given object implements the CatalogDataCategoryAttributeInterface interface.
 */
function instanceOfCatalogDataCategoryAttributeInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "attributeCode" in value;
    isInstance = isInstance && "frontendInput" in value;
    isInstance = isInstance && "entityTypeId" in value;
    isInstance = isInstance && "isRequired" in value;
    isInstance = isInstance && "frontendLabels" in value;
    return isInstance;
}
exports.instanceOfCatalogDataCategoryAttributeInterface = instanceOfCatalogDataCategoryAttributeInterface;
function CatalogDataCategoryAttributeInterfaceFromJSON(json) {
    return CatalogDataCategoryAttributeInterfaceFromJSONTyped(json, false);
}
exports.CatalogDataCategoryAttributeInterfaceFromJSON = CatalogDataCategoryAttributeInterfaceFromJSON;
function CatalogDataCategoryAttributeInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'isWysiwygEnabled': !(0, runtime_1.exists)(json, 'is_wysiwyg_enabled') ? undefined : json['is_wysiwyg_enabled'],
        'isHtmlAllowedOnFront': !(0, runtime_1.exists)(json, 'is_html_allowed_on_front') ? undefined : json['is_html_allowed_on_front'],
        'usedForSortBy': !(0, runtime_1.exists)(json, 'used_for_sort_by') ? undefined : json['used_for_sort_by'],
        'isFilterable': !(0, runtime_1.exists)(json, 'is_filterable') ? undefined : json['is_filterable'],
        'isFilterableInSearch': !(0, runtime_1.exists)(json, 'is_filterable_in_search') ? undefined : json['is_filterable_in_search'],
        'isUsedInGrid': !(0, runtime_1.exists)(json, 'is_used_in_grid') ? undefined : json['is_used_in_grid'],
        'isVisibleInGrid': !(0, runtime_1.exists)(json, 'is_visible_in_grid') ? undefined : json['is_visible_in_grid'],
        'isFilterableInGrid': !(0, runtime_1.exists)(json, 'is_filterable_in_grid') ? undefined : json['is_filterable_in_grid'],
        'position': !(0, runtime_1.exists)(json, 'position') ? undefined : json['position'],
        'applyTo': !(0, runtime_1.exists)(json, 'apply_to') ? undefined : json['apply_to'],
        'isSearchable': !(0, runtime_1.exists)(json, 'is_searchable') ? undefined : json['is_searchable'],
        'isVisibleInAdvancedSearch': !(0, runtime_1.exists)(json, 'is_visible_in_advanced_search') ? undefined : json['is_visible_in_advanced_search'],
        'isComparable': !(0, runtime_1.exists)(json, 'is_comparable') ? undefined : json['is_comparable'],
        'isUsedForPromoRules': !(0, runtime_1.exists)(json, 'is_used_for_promo_rules') ? undefined : json['is_used_for_promo_rules'],
        'isVisibleOnFront': !(0, runtime_1.exists)(json, 'is_visible_on_front') ? undefined : json['is_visible_on_front'],
        'usedInProductListing': !(0, runtime_1.exists)(json, 'used_in_product_listing') ? undefined : json['used_in_product_listing'],
        'isVisible': !(0, runtime_1.exists)(json, 'is_visible') ? undefined : json['is_visible'],
        'scope': !(0, runtime_1.exists)(json, 'scope') ? undefined : json['scope'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'attributeId': !(0, runtime_1.exists)(json, 'attribute_id') ? undefined : json['attribute_id'],
        'attributeCode': json['attribute_code'],
        'frontendInput': json['frontend_input'],
        'entityTypeId': json['entity_type_id'],
        'isRequired': json['is_required'],
        'options': !(0, runtime_1.exists)(json, 'options') ? undefined : (json['options'].map(EavDataAttributeOptionInterface_1.EavDataAttributeOptionInterfaceFromJSON)),
        'isUserDefined': !(0, runtime_1.exists)(json, 'is_user_defined') ? undefined : json['is_user_defined'],
        'defaultFrontendLabel': !(0, runtime_1.exists)(json, 'default_frontend_label') ? undefined : json['default_frontend_label'],
        'frontendLabels': (json['frontend_labels'].map(EavDataAttributeFrontendLabelInterface_1.EavDataAttributeFrontendLabelInterfaceFromJSON)),
        'note': !(0, runtime_1.exists)(json, 'note') ? undefined : json['note'],
        'backendType': !(0, runtime_1.exists)(json, 'backend_type') ? undefined : json['backend_type'],
        'backendModel': !(0, runtime_1.exists)(json, 'backend_model') ? undefined : json['backend_model'],
        'sourceModel': !(0, runtime_1.exists)(json, 'source_model') ? undefined : json['source_model'],
        'defaultValue': !(0, runtime_1.exists)(json, 'default_value') ? undefined : json['default_value'],
        'isUnique': !(0, runtime_1.exists)(json, 'is_unique') ? undefined : json['is_unique'],
        'frontendClass': !(0, runtime_1.exists)(json, 'frontend_class') ? undefined : json['frontend_class'],
        'validationRules': !(0, runtime_1.exists)(json, 'validation_rules') ? undefined : (json['validation_rules'].map(EavDataAttributeValidationRuleInterface_1.EavDataAttributeValidationRuleInterfaceFromJSON)),
        'customAttributes': !(0, runtime_1.exists)(json, 'custom_attributes') ? undefined : (json['custom_attributes'].map(FrameworkAttributeInterface_1.FrameworkAttributeInterfaceFromJSON)),
    };
}
exports.CatalogDataCategoryAttributeInterfaceFromJSONTyped = CatalogDataCategoryAttributeInterfaceFromJSONTyped;
function CatalogDataCategoryAttributeInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'is_wysiwyg_enabled': value.isWysiwygEnabled,
        'is_html_allowed_on_front': value.isHtmlAllowedOnFront,
        'used_for_sort_by': value.usedForSortBy,
        'is_filterable': value.isFilterable,
        'is_filterable_in_search': value.isFilterableInSearch,
        'is_used_in_grid': value.isUsedInGrid,
        'is_visible_in_grid': value.isVisibleInGrid,
        'is_filterable_in_grid': value.isFilterableInGrid,
        'position': value.position,
        'apply_to': value.applyTo,
        'is_searchable': value.isSearchable,
        'is_visible_in_advanced_search': value.isVisibleInAdvancedSearch,
        'is_comparable': value.isComparable,
        'is_used_for_promo_rules': value.isUsedForPromoRules,
        'is_visible_on_front': value.isVisibleOnFront,
        'used_in_product_listing': value.usedInProductListing,
        'is_visible': value.isVisible,
        'scope': value.scope,
        'extension_attributes': value.extensionAttributes,
        'attribute_id': value.attributeId,
        'attribute_code': value.attributeCode,
        'frontend_input': value.frontendInput,
        'entity_type_id': value.entityTypeId,
        'is_required': value.isRequired,
        'options': value.options === undefined ? undefined : (value.options.map(EavDataAttributeOptionInterface_1.EavDataAttributeOptionInterfaceToJSON)),
        'is_user_defined': value.isUserDefined,
        'default_frontend_label': value.defaultFrontendLabel,
        'frontend_labels': (value.frontendLabels.map(EavDataAttributeFrontendLabelInterface_1.EavDataAttributeFrontendLabelInterfaceToJSON)),
        'note': value.note,
        'backend_type': value.backendType,
        'backend_model': value.backendModel,
        'source_model': value.sourceModel,
        'default_value': value.defaultValue,
        'is_unique': value.isUnique,
        'frontend_class': value.frontendClass,
        'validation_rules': value.validationRules === undefined ? undefined : (value.validationRules.map(EavDataAttributeValidationRuleInterface_1.EavDataAttributeValidationRuleInterfaceToJSON)),
        'custom_attributes': value.customAttributes === undefined ? undefined : (value.customAttributes.map(FrameworkAttributeInterface_1.FrameworkAttributeInterfaceToJSON)),
    };
}
exports.CatalogDataCategoryAttributeInterfaceToJSON = CatalogDataCategoryAttributeInterfaceToJSON;
//# sourceMappingURL=CatalogDataCategoryAttributeInterface.js.map