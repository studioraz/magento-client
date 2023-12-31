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
import type { CatalogDataCustomOptionExtensionInterface } from './CatalogDataCustomOptionExtensionInterface';
import {
    CatalogDataCustomOptionExtensionInterfaceFromJSON,
    CatalogDataCustomOptionExtensionInterfaceFromJSONTyped,
    CatalogDataCustomOptionExtensionInterfaceToJSON,
} from './CatalogDataCustomOptionExtensionInterface';

/**
 * Interface CustomOptionInterface
 * @export
 * @interface CatalogDataCustomOptionInterface
 */
export interface CatalogDataCustomOptionInterface {
    /**
     * Option id
     * @type {string}
     * @memberof CatalogDataCustomOptionInterface
     */
    optionId: string;
    /**
     * Option value
     * @type {string}
     * @memberof CatalogDataCustomOptionInterface
     */
    optionValue: string;
    /**
     * 
     * @type {CatalogDataCustomOptionExtensionInterface}
     * @memberof CatalogDataCustomOptionInterface
     */
    extensionAttributes?: CatalogDataCustomOptionExtensionInterface;
}

/**
 * Check if a given object implements the CatalogDataCustomOptionInterface interface.
 */
export function instanceOfCatalogDataCustomOptionInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "optionId" in value;
    isInstance = isInstance && "optionValue" in value;

    return isInstance;
}

export function CatalogDataCustomOptionInterfaceFromJSON(json: any): CatalogDataCustomOptionInterface {
    return CatalogDataCustomOptionInterfaceFromJSONTyped(json, false);
}

export function CatalogDataCustomOptionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataCustomOptionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'optionId': json['option_id'],
        'optionValue': json['option_value'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : CatalogDataCustomOptionExtensionInterfaceFromJSON(json['extension_attributes']),
    };
}

export function CatalogDataCustomOptionInterfaceToJSON(value?: CatalogDataCustomOptionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'option_id': value.optionId,
        'option_value': value.optionValue,
        'extension_attributes': CatalogDataCustomOptionExtensionInterfaceToJSON(value.extensionAttributes),
    };
}

