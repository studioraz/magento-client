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

import { exists, mapValues } from '../runtime';
import type { EavDataAttributeFrontendLabelInterface } from './EavDataAttributeFrontendLabelInterface';
import {
    EavDataAttributeFrontendLabelInterfaceFromJSON,
    EavDataAttributeFrontendLabelInterfaceFromJSONTyped,
    EavDataAttributeFrontendLabelInterfaceToJSON,
} from './EavDataAttributeFrontendLabelInterface';
import type { EavDataAttributeOptionInterface } from './EavDataAttributeOptionInterface';
import {
    EavDataAttributeOptionInterfaceFromJSON,
    EavDataAttributeOptionInterfaceFromJSONTyped,
    EavDataAttributeOptionInterfaceToJSON,
} from './EavDataAttributeOptionInterface';
import type { EavDataAttributeValidationRuleInterface } from './EavDataAttributeValidationRuleInterface';
import {
    EavDataAttributeValidationRuleInterfaceFromJSON,
    EavDataAttributeValidationRuleInterfaceFromJSONTyped,
    EavDataAttributeValidationRuleInterfaceToJSON,
} from './EavDataAttributeValidationRuleInterface';
import type { FrameworkAttributeInterface } from './FrameworkAttributeInterface';
import {
    FrameworkAttributeInterfaceFromJSON,
    FrameworkAttributeInterfaceFromJSONTyped,
    FrameworkAttributeInterfaceToJSON,
} from './FrameworkAttributeInterface';

/**
 * 
 * @export
 * @interface CatalogDataCategoryAttributeInterface
 */
export interface CatalogDataCategoryAttributeInterface {
    /**
     * WYSIWYG flag
     * @type {boolean}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isWysiwygEnabled?: boolean;
    /**
     * The HTML tags are allowed on the frontend
     * @type {boolean}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isHtmlAllowedOnFront?: boolean;
    /**
     * It is used for sorting in product listing
     * @type {boolean}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    usedForSortBy?: boolean;
    /**
     * It used in layered navigation
     * @type {boolean}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isFilterable?: boolean;
    /**
     * It is used in search results layered navigation
     * @type {boolean}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isFilterableInSearch?: boolean;
    /**
     * It is used in catalog product grid
     * @type {boolean}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isUsedInGrid?: boolean;
    /**
     * It is visible in catalog product grid
     * @type {boolean}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isVisibleInGrid?: boolean;
    /**
     * It is filterable in catalog product grid
     * @type {boolean}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isFilterableInGrid?: boolean;
    /**
     * Position
     * @type {number}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    position?: number;
    /**
     * Apply to value for the element
     * @type {Array<string>}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    applyTo?: Array<string>;
    /**
     * The attribute can be used in Quick Search
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isSearchable?: string;
    /**
     * The attribute can be used in Advanced Search
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isVisibleInAdvancedSearch?: string;
    /**
     * The attribute can be compared on the frontend
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isComparable?: string;
    /**
     * The attribute can be used for promo rules
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isUsedForPromoRules?: string;
    /**
     * The attribute is visible on the frontend
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isVisibleOnFront?: string;
    /**
     * The attribute can be used in product listing
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    usedInProductListing?: string;
    /**
     * Attribute is visible on frontend.
     * @type {boolean}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isVisible?: boolean;
    /**
     * Attribute scope
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    scope?: string;
    /**
     * ExtensionInterface class for @see \Magento\Catalog\Api\Data\EavAttributeInterface
     * @type {object}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    extensionAttributes?: object;
    /**
     * Id of the attribute.
     * @type {number}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    attributeId?: number;
    /**
     * Code of the attribute.
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    attributeCode: string;
    /**
     * HTML for input element.
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    frontendInput: string;
    /**
     * Entity type id
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    entityTypeId: string;
    /**
     * Attribute is required.
     * @type {boolean}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isRequired: boolean;
    /**
     * Options of the attribute (key => value pairs for select)
     * @type {Array<EavDataAttributeOptionInterface>}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    options?: Array<EavDataAttributeOptionInterface>;
    /**
     * Current attribute has been defined by a user.
     * @type {boolean}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isUserDefined?: boolean;
    /**
     * Frontend label for default store
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    defaultFrontendLabel?: string;
    /**
     * Frontend label for each store
     * @type {Array<EavDataAttributeFrontendLabelInterface>}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    frontendLabels: Array<EavDataAttributeFrontendLabelInterface>;
    /**
     * The note attribute for the element.
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    note?: string;
    /**
     * Backend type.
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    backendType?: string;
    /**
     * Backend model
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    backendModel?: string;
    /**
     * Source model
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    sourceModel?: string;
    /**
     * Default value for the element.
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    defaultValue?: string;
    /**
     * This is a unique attribute
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    isUnique?: string;
    /**
     * Frontend class of attribute
     * @type {string}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    frontendClass?: string;
    /**
     * Validation rules.
     * @type {Array<EavDataAttributeValidationRuleInterface>}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    validationRules?: Array<EavDataAttributeValidationRuleInterface>;
    /**
     * Custom attributes values.
     * @type {Array<FrameworkAttributeInterface>}
     * @memberof CatalogDataCategoryAttributeInterface
     */
    customAttributes?: Array<FrameworkAttributeInterface>;
}

/**
 * Check if a given object implements the CatalogDataCategoryAttributeInterface interface.
 */
export function instanceOfCatalogDataCategoryAttributeInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attributeCode" in value;
    isInstance = isInstance && "frontendInput" in value;
    isInstance = isInstance && "entityTypeId" in value;
    isInstance = isInstance && "isRequired" in value;
    isInstance = isInstance && "frontendLabels" in value;

    return isInstance;
}

export function CatalogDataCategoryAttributeInterfaceFromJSON(json: any): CatalogDataCategoryAttributeInterface {
    return CatalogDataCategoryAttributeInterfaceFromJSONTyped(json, false);
}

export function CatalogDataCategoryAttributeInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataCategoryAttributeInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isWysiwygEnabled': !exists(json, 'is_wysiwyg_enabled') ? undefined : json['is_wysiwyg_enabled'],
        'isHtmlAllowedOnFront': !exists(json, 'is_html_allowed_on_front') ? undefined : json['is_html_allowed_on_front'],
        'usedForSortBy': !exists(json, 'used_for_sort_by') ? undefined : json['used_for_sort_by'],
        'isFilterable': !exists(json, 'is_filterable') ? undefined : json['is_filterable'],
        'isFilterableInSearch': !exists(json, 'is_filterable_in_search') ? undefined : json['is_filterable_in_search'],
        'isUsedInGrid': !exists(json, 'is_used_in_grid') ? undefined : json['is_used_in_grid'],
        'isVisibleInGrid': !exists(json, 'is_visible_in_grid') ? undefined : json['is_visible_in_grid'],
        'isFilterableInGrid': !exists(json, 'is_filterable_in_grid') ? undefined : json['is_filterable_in_grid'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'applyTo': !exists(json, 'apply_to') ? undefined : json['apply_to'],
        'isSearchable': !exists(json, 'is_searchable') ? undefined : json['is_searchable'],
        'isVisibleInAdvancedSearch': !exists(json, 'is_visible_in_advanced_search') ? undefined : json['is_visible_in_advanced_search'],
        'isComparable': !exists(json, 'is_comparable') ? undefined : json['is_comparable'],
        'isUsedForPromoRules': !exists(json, 'is_used_for_promo_rules') ? undefined : json['is_used_for_promo_rules'],
        'isVisibleOnFront': !exists(json, 'is_visible_on_front') ? undefined : json['is_visible_on_front'],
        'usedInProductListing': !exists(json, 'used_in_product_listing') ? undefined : json['used_in_product_listing'],
        'isVisible': !exists(json, 'is_visible') ? undefined : json['is_visible'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'attributeId': !exists(json, 'attribute_id') ? undefined : json['attribute_id'],
        'attributeCode': json['attribute_code'],
        'frontendInput': json['frontend_input'],
        'entityTypeId': json['entity_type_id'],
        'isRequired': json['is_required'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(EavDataAttributeOptionInterfaceFromJSON)),
        'isUserDefined': !exists(json, 'is_user_defined') ? undefined : json['is_user_defined'],
        'defaultFrontendLabel': !exists(json, 'default_frontend_label') ? undefined : json['default_frontend_label'],
        'frontendLabels': ((json['frontend_labels'] as Array<any>).map(EavDataAttributeFrontendLabelInterfaceFromJSON)),
        'note': !exists(json, 'note') ? undefined : json['note'],
        'backendType': !exists(json, 'backend_type') ? undefined : json['backend_type'],
        'backendModel': !exists(json, 'backend_model') ? undefined : json['backend_model'],
        'sourceModel': !exists(json, 'source_model') ? undefined : json['source_model'],
        'defaultValue': !exists(json, 'default_value') ? undefined : json['default_value'],
        'isUnique': !exists(json, 'is_unique') ? undefined : json['is_unique'],
        'frontendClass': !exists(json, 'frontend_class') ? undefined : json['frontend_class'],
        'validationRules': !exists(json, 'validation_rules') ? undefined : ((json['validation_rules'] as Array<any>).map(EavDataAttributeValidationRuleInterfaceFromJSON)),
        'customAttributes': !exists(json, 'custom_attributes') ? undefined : ((json['custom_attributes'] as Array<any>).map(FrameworkAttributeInterfaceFromJSON)),
    };
}

export function CatalogDataCategoryAttributeInterfaceToJSON(value?: CatalogDataCategoryAttributeInterface | null): any {
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
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(EavDataAttributeOptionInterfaceToJSON)),
        'is_user_defined': value.isUserDefined,
        'default_frontend_label': value.defaultFrontendLabel,
        'frontend_labels': ((value.frontendLabels as Array<any>).map(EavDataAttributeFrontendLabelInterfaceToJSON)),
        'note': value.note,
        'backend_type': value.backendType,
        'backend_model': value.backendModel,
        'source_model': value.sourceModel,
        'default_value': value.defaultValue,
        'is_unique': value.isUnique,
        'frontend_class': value.frontendClass,
        'validation_rules': value.validationRules === undefined ? undefined : ((value.validationRules as Array<any>).map(EavDataAttributeValidationRuleInterfaceToJSON)),
        'custom_attributes': value.customAttributes === undefined ? undefined : ((value.customAttributes as Array<any>).map(FrameworkAttributeInterfaceToJSON)),
    };
}

