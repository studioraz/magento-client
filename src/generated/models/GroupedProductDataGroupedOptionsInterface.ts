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
 * Represents `product item id with qty` of a grouped product.
 * @export
 * @interface GroupedProductDataGroupedOptionsInterface
 */
export interface GroupedProductDataGroupedOptionsInterface {
    /**
     * Associated product id
     * @type {number}
     * @memberof GroupedProductDataGroupedOptionsInterface
     */
    id?: number;
    /**
     * Associated product qty
     * @type {number}
     * @memberof GroupedProductDataGroupedOptionsInterface
     */
    qty?: number;
    /**
     * ExtensionInterface class for @see \Magento\GroupedProduct\Api\Data\GroupedOptionsInterface
     * @type {object}
     * @memberof GroupedProductDataGroupedOptionsInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the GroupedProductDataGroupedOptionsInterface interface.
 */
export function instanceOfGroupedProductDataGroupedOptionsInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GroupedProductDataGroupedOptionsInterfaceFromJSON(json: any): GroupedProductDataGroupedOptionsInterface {
    return GroupedProductDataGroupedOptionsInterfaceFromJSONTyped(json, false);
}

export function GroupedProductDataGroupedOptionsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupedProductDataGroupedOptionsInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'qty': !exists(json, 'qty') ? undefined : json['qty'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function GroupedProductDataGroupedOptionsInterfaceToJSON(value?: GroupedProductDataGroupedOptionsInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'qty': value.qty,
        'extension_attributes': value.extensionAttributes,
    };
}

