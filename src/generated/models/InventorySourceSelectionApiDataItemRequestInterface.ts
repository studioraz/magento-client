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
 * Represents requested quantity for particular product
 * @export
 * @interface InventorySourceSelectionApiDataItemRequestInterface
 */
export interface InventorySourceSelectionApiDataItemRequestInterface {
    /**
     * SKU
     * @type {string}
     * @memberof InventorySourceSelectionApiDataItemRequestInterface
     */
    sku: string;
    /**
     * Product Quantity
     * @type {number}
     * @memberof InventorySourceSelectionApiDataItemRequestInterface
     */
    qty: number;
    /**
     * ExtensionInterface class for @see \Magento\InventorySourceSelectionApi\Api\Data\ItemRequestInterface
     * @type {object}
     * @memberof InventorySourceSelectionApiDataItemRequestInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the InventorySourceSelectionApiDataItemRequestInterface interface.
 */
export function instanceOfInventorySourceSelectionApiDataItemRequestInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sku" in value;
    isInstance = isInstance && "qty" in value;

    return isInstance;
}

export function InventorySourceSelectionApiDataItemRequestInterfaceFromJSON(json: any): InventorySourceSelectionApiDataItemRequestInterface {
    return InventorySourceSelectionApiDataItemRequestInterfaceFromJSONTyped(json, false);
}

export function InventorySourceSelectionApiDataItemRequestInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventorySourceSelectionApiDataItemRequestInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sku': json['sku'],
        'qty': json['qty'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function InventorySourceSelectionApiDataItemRequestInterfaceToJSON(value?: InventorySourceSelectionApiDataItemRequestInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sku': value.sku,
        'qty': value.qty,
        'extension_attributes': value.extensionAttributes,
    };
}

