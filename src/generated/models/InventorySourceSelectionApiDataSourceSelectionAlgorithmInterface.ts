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
 * Data Interface representing particular Source Selection Algorithm
 * @export
 * @interface InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface
 */
export interface InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface {
    /**
     * 
     * @type {string}
     * @memberof InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface
     */
    description: string;
    /**
     * ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\SourceSelectionAlgorithmInterface
     * @type {object}
     * @memberof InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface interface.
 */
export function instanceOfInventorySourceSelectionApiDataSourceSelectionAlgorithmInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function InventorySourceSelectionApiDataSourceSelectionAlgorithmInterfaceFromJSON(json: any): InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface {
    return InventorySourceSelectionApiDataSourceSelectionAlgorithmInterfaceFromJSONTyped(json, false);
}

export function InventorySourceSelectionApiDataSourceSelectionAlgorithmInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'title': json['title'],
        'description': json['description'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function InventorySourceSelectionApiDataSourceSelectionAlgorithmInterfaceToJSON(value?: InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'title': value.title,
        'description': value.description,
        'extension_attributes': value.extensionAttributes,
    };
}

