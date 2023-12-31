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
import type { InventorySalesApiDataProductSalabilityErrorInterface } from './InventorySalesApiDataProductSalabilityErrorInterface';
import {
    InventorySalesApiDataProductSalabilityErrorInterfaceFromJSON,
    InventorySalesApiDataProductSalabilityErrorInterfaceFromJSONTyped,
    InventorySalesApiDataProductSalabilityErrorInterfaceToJSON,
} from './InventorySalesApiDataProductSalabilityErrorInterface';

/**
 * Represents result of service Magento\InventorySalesApi\Api\IsProductSalableForRequestedQtyInterface::execute
 * @export
 * @interface InventorySalesApiDataProductSalableResultInterface
 */
export interface InventorySalesApiDataProductSalableResultInterface {
    /**
     * 
     * @type {boolean}
     * @memberof InventorySalesApiDataProductSalableResultInterface
     */
    salable: boolean;
    /**
     * 
     * @type {Array<InventorySalesApiDataProductSalabilityErrorInterface>}
     * @memberof InventorySalesApiDataProductSalableResultInterface
     */
    errors: Array<InventorySalesApiDataProductSalabilityErrorInterface>;
    /**
     * ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\ProductSalableResultInterface
     * @type {object}
     * @memberof InventorySalesApiDataProductSalableResultInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the InventorySalesApiDataProductSalableResultInterface interface.
 */
export function instanceOfInventorySalesApiDataProductSalableResultInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "salable" in value;
    isInstance = isInstance && "errors" in value;

    return isInstance;
}

export function InventorySalesApiDataProductSalableResultInterfaceFromJSON(json: any): InventorySalesApiDataProductSalableResultInterface {
    return InventorySalesApiDataProductSalableResultInterfaceFromJSONTyped(json, false);
}

export function InventorySalesApiDataProductSalableResultInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventorySalesApiDataProductSalableResultInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'salable': json['salable'],
        'errors': ((json['errors'] as Array<any>).map(InventorySalesApiDataProductSalabilityErrorInterfaceFromJSON)),
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function InventorySalesApiDataProductSalableResultInterfaceToJSON(value?: InventorySalesApiDataProductSalableResultInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'salable': value.salable,
        'errors': ((value.errors as Array<any>).map(InventorySalesApiDataProductSalabilityErrorInterfaceToJSON)),
        'extension_attributes': value.extensionAttributes,
    };
}

