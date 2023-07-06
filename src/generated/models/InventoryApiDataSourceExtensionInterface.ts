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
 * ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\SourceInterface
 * @export
 * @interface InventoryApiDataSourceExtensionInterface
 */
export interface InventoryApiDataSourceExtensionInterface {
    /**
     * 
     * @type {boolean}
     * @memberof InventoryApiDataSourceExtensionInterface
     */
    isPickupLocationActive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof InventoryApiDataSourceExtensionInterface
     */
    frontendName?: string;
    /**
     * 
     * @type {string}
     * @memberof InventoryApiDataSourceExtensionInterface
     */
    frontendDescription?: string;
}

/**
 * Check if a given object implements the InventoryApiDataSourceExtensionInterface interface.
 */
export function instanceOfInventoryApiDataSourceExtensionInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InventoryApiDataSourceExtensionInterfaceFromJSON(json: any): InventoryApiDataSourceExtensionInterface {
    return InventoryApiDataSourceExtensionInterfaceFromJSONTyped(json, false);
}

export function InventoryApiDataSourceExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryApiDataSourceExtensionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isPickupLocationActive': !exists(json, 'is_pickup_location_active') ? undefined : json['is_pickup_location_active'],
        'frontendName': !exists(json, 'frontend_name') ? undefined : json['frontend_name'],
        'frontendDescription': !exists(json, 'frontend_description') ? undefined : json['frontend_description'],
    };
}

export function InventoryApiDataSourceExtensionInterfaceToJSON(value?: InventoryApiDataSourceExtensionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_pickup_location_active': value.isPickupLocationActive,
        'frontend_name': value.frontendName,
        'frontend_description': value.frontendDescription,
    };
}

