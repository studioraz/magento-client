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
import type { CatalogDataProductOptionExtensionInterface } from './CatalogDataProductOptionExtensionInterface';
import {
    CatalogDataProductOptionExtensionInterfaceFromJSON,
    CatalogDataProductOptionExtensionInterfaceFromJSONTyped,
    CatalogDataProductOptionExtensionInterfaceToJSON,
} from './CatalogDataProductOptionExtensionInterface';

/**
 * Product option interface
 * @export
 * @interface CatalogDataProductOptionInterface
 */
export interface CatalogDataProductOptionInterface {
    /**
     * 
     * @type {CatalogDataProductOptionExtensionInterface}
     * @memberof CatalogDataProductOptionInterface
     */
    extensionAttributes?: CatalogDataProductOptionExtensionInterface;
}

/**
 * Check if a given object implements the CatalogDataProductOptionInterface interface.
 */
export function instanceOfCatalogDataProductOptionInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogDataProductOptionInterfaceFromJSON(json: any): CatalogDataProductOptionInterface {
    return CatalogDataProductOptionInterfaceFromJSONTyped(json, false);
}

export function CatalogDataProductOptionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductOptionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : CatalogDataProductOptionExtensionInterfaceFromJSON(json['extension_attributes']),
    };
}

export function CatalogDataProductOptionInterfaceToJSON(value?: CatalogDataProductOptionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extension_attributes': CatalogDataProductOptionExtensionInterfaceToJSON(value.extensionAttributes),
    };
}

