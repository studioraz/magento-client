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
 * Cost interface.
 * @export
 * @interface CatalogDataCostInterface
 */
export interface CatalogDataCostInterface {
    /**
     * Cost value.
     * @type {number}
     * @memberof CatalogDataCostInterface
     */
    cost: number;
    /**
     * Store id.
     * @type {number}
     * @memberof CatalogDataCostInterface
     */
    storeId: number;
    /**
     * SKU.
     * @type {string}
     * @memberof CatalogDataCostInterface
     */
    sku: string;
    /**
     * ExtensionInterface class for @see \Magento\Catalog\Api\Data\CostInterface
     * @type {object}
     * @memberof CatalogDataCostInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the CatalogDataCostInterface interface.
 */
export function instanceOfCatalogDataCostInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cost" in value;
    isInstance = isInstance && "storeId" in value;
    isInstance = isInstance && "sku" in value;

    return isInstance;
}

export function CatalogDataCostInterfaceFromJSON(json: any): CatalogDataCostInterface {
    return CatalogDataCostInterfaceFromJSONTyped(json, false);
}

export function CatalogDataCostInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataCostInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cost': json['cost'],
        'storeId': json['store_id'],
        'sku': json['sku'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function CatalogDataCostInterfaceToJSON(value?: CatalogDataCostInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cost': value.cost,
        'store_id': value.storeId,
        'sku': value.sku,
        'extension_attributes': value.extensionAttributes,
    };
}

