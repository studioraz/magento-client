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
 * Specifies item and quantity for partial inventory transfer.
 * @export
 * @interface InventoryCatalogApiDataPartialInventoryTransferItemInterface
 */
export interface InventoryCatalogApiDataPartialInventoryTransferItemInterface {
    /**
     * 
     * @type {string}
     * @memberof InventoryCatalogApiDataPartialInventoryTransferItemInterface
     */
    sku: string;
    /**
     * 
     * @type {number}
     * @memberof InventoryCatalogApiDataPartialInventoryTransferItemInterface
     */
    qty: number;
}

/**
 * Check if a given object implements the InventoryCatalogApiDataPartialInventoryTransferItemInterface interface.
 */
export function instanceOfInventoryCatalogApiDataPartialInventoryTransferItemInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sku" in value;
    isInstance = isInstance && "qty" in value;

    return isInstance;
}

export function InventoryCatalogApiDataPartialInventoryTransferItemInterfaceFromJSON(json: any): InventoryCatalogApiDataPartialInventoryTransferItemInterface {
    return InventoryCatalogApiDataPartialInventoryTransferItemInterfaceFromJSONTyped(json, false);
}

export function InventoryCatalogApiDataPartialInventoryTransferItemInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryCatalogApiDataPartialInventoryTransferItemInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sku': json['sku'],
        'qty': json['qty'],
    };
}

export function InventoryCatalogApiDataPartialInventoryTransferItemInterfaceToJSON(value?: InventoryCatalogApiDataPartialInventoryTransferItemInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sku': value.sku,
        'qty': value.qty,
    };
}

