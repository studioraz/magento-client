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
import type { InventorySourceSelectionApiDataAddressInterface } from './InventorySourceSelectionApiDataAddressInterface';
import {
    InventorySourceSelectionApiDataAddressInterfaceFromJSON,
    InventorySourceSelectionApiDataAddressInterfaceFromJSONTyped,
    InventorySourceSelectionApiDataAddressInterfaceToJSON,
} from './InventorySourceSelectionApiDataAddressInterface';

/**
 * ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\InventoryRequestInterface
 * @export
 * @interface InventorySourceSelectionApiDataInventoryRequestExtensionInterface
 */
export interface InventorySourceSelectionApiDataInventoryRequestExtensionInterface {
    /**
     * 
     * @type {InventorySourceSelectionApiDataAddressInterface}
     * @memberof InventorySourceSelectionApiDataInventoryRequestExtensionInterface
     */
    destinationAddress?: InventorySourceSelectionApiDataAddressInterface;
}

/**
 * Check if a given object implements the InventorySourceSelectionApiDataInventoryRequestExtensionInterface interface.
 */
export function instanceOfInventorySourceSelectionApiDataInventoryRequestExtensionInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InventorySourceSelectionApiDataInventoryRequestExtensionInterfaceFromJSON(json: any): InventorySourceSelectionApiDataInventoryRequestExtensionInterface {
    return InventorySourceSelectionApiDataInventoryRequestExtensionInterfaceFromJSONTyped(json, false);
}

export function InventorySourceSelectionApiDataInventoryRequestExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventorySourceSelectionApiDataInventoryRequestExtensionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'destinationAddress': !exists(json, 'destination_address') ? undefined : InventorySourceSelectionApiDataAddressInterfaceFromJSON(json['destination_address']),
    };
}

export function InventorySourceSelectionApiDataInventoryRequestExtensionInterfaceToJSON(value?: InventorySourceSelectionApiDataInventoryRequestExtensionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'destination_address': InventorySourceSelectionApiDataAddressInterfaceToJSON(value.destinationAddress),
    };
}

