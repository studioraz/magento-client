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
/**
 * 
 * @export
 * @interface CatalogDataProductAttributeTypeInterface
 */
export interface CatalogDataProductAttributeTypeInterface {
    /**
     * Value
     * @type {string}
     * @memberof CatalogDataProductAttributeTypeInterface
     */
    value: string;
    /**
     * Type label
     * @type {string}
     * @memberof CatalogDataProductAttributeTypeInterface
     */
    label: string;
    /**
     * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeTypeInterface
     * @type {object}
     * @memberof CatalogDataProductAttributeTypeInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the CatalogDataProductAttributeTypeInterface interface.
 */
export function instanceOfCatalogDataProductAttributeTypeInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "label" in value;

    return isInstance;
}

export function CatalogDataProductAttributeTypeInterfaceFromJSON(json: any): CatalogDataProductAttributeTypeInterface {
    return CatalogDataProductAttributeTypeInterfaceFromJSONTyped(json, false);
}

export function CatalogDataProductAttributeTypeInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductAttributeTypeInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
        'label': json['label'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function CatalogDataProductAttributeTypeInterfaceToJSON(value?: CatalogDataProductAttributeTypeInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'label': value.label,
        'extension_attributes': value.extensionAttributes,
    };
}

