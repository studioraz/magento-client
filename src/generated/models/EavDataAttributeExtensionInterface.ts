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
 * ExtensionInterface class for @see \Magento\Eav\Api\Data\AttributeInterface
 * @export
 * @interface EavDataAttributeExtensionInterface
 */
export interface EavDataAttributeExtensionInterface {
    /**
     * 
     * @type {boolean}
     * @memberof EavDataAttributeExtensionInterface
     */
    isPagebuilderEnabled?: boolean;
}

/**
 * Check if a given object implements the EavDataAttributeExtensionInterface interface.
 */
export function instanceOfEavDataAttributeExtensionInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EavDataAttributeExtensionInterfaceFromJSON(json: any): EavDataAttributeExtensionInterface {
    return EavDataAttributeExtensionInterfaceFromJSONTyped(json, false);
}

export function EavDataAttributeExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): EavDataAttributeExtensionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isPagebuilderEnabled': !exists(json, 'is_pagebuilder_enabled') ? undefined : json['is_pagebuilder_enabled'],
    };
}

export function EavDataAttributeExtensionInterfaceToJSON(value?: EavDataAttributeExtensionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_pagebuilder_enabled': value.isPagebuilderEnabled,
    };
}

