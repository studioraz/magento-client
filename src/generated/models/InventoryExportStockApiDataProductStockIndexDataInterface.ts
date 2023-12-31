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
 * Class ExportStockIndexDataResultInterface for result Inventory stock index dump export
 * @export
 * @interface InventoryExportStockApiDataProductStockIndexDataInterface
 */
export interface InventoryExportStockApiDataProductStockIndexDataInterface {
    /**
     * Product SKU
     * @type {string}
     * @memberof InventoryExportStockApiDataProductStockIndexDataInterface
     */
    sku: string;
    /**
     * Product QTY
     * @type {number}
     * @memberof InventoryExportStockApiDataProductStockIndexDataInterface
     */
    qty: number;
    /**
     * Product is salable flag
     * @type {boolean}
     * @memberof InventoryExportStockApiDataProductStockIndexDataInterface
     */
    isSalable: boolean;
}

/**
 * Check if a given object implements the InventoryExportStockApiDataProductStockIndexDataInterface interface.
 */
export function instanceOfInventoryExportStockApiDataProductStockIndexDataInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sku" in value;
    isInstance = isInstance && "qty" in value;
    isInstance = isInstance && "isSalable" in value;

    return isInstance;
}

export function InventoryExportStockApiDataProductStockIndexDataInterfaceFromJSON(json: any): InventoryExportStockApiDataProductStockIndexDataInterface {
    return InventoryExportStockApiDataProductStockIndexDataInterfaceFromJSONTyped(json, false);
}

export function InventoryExportStockApiDataProductStockIndexDataInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryExportStockApiDataProductStockIndexDataInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sku': json['sku'],
        'qty': json['qty'],
        'isSalable': json['is_salable'],
    };
}

export function InventoryExportStockApiDataProductStockIndexDataInterfaceToJSON(value?: InventoryExportStockApiDataProductStockIndexDataInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sku': value.sku,
        'qty': value.qty,
        'is_salable': value.isSalable,
    };
}

