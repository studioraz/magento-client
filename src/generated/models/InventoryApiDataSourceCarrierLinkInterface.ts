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
 * Represents relation between some physical storage and shipping method Used fully qualified namespaces in annotations for proper work of WebApi request parser
 * @export
 * @interface InventoryApiDataSourceCarrierLinkInterface
 */
export interface InventoryApiDataSourceCarrierLinkInterface {
    /**
     * Carrier code
     * @type {string}
     * @memberof InventoryApiDataSourceCarrierLinkInterface
     */
    carrierCode?: string;
    /**
     * Position
     * @type {number}
     * @memberof InventoryApiDataSourceCarrierLinkInterface
     */
    position?: number;
    /**
     * ExtensionInterface class for @see \Magento\InventoryApi\Api\Data\SourceCarrierLinkInterface
     * @type {object}
     * @memberof InventoryApiDataSourceCarrierLinkInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the InventoryApiDataSourceCarrierLinkInterface interface.
 */
export function instanceOfInventoryApiDataSourceCarrierLinkInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InventoryApiDataSourceCarrierLinkInterfaceFromJSON(json: any): InventoryApiDataSourceCarrierLinkInterface {
    return InventoryApiDataSourceCarrierLinkInterfaceFromJSONTyped(json, false);
}

export function InventoryApiDataSourceCarrierLinkInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryApiDataSourceCarrierLinkInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'carrierCode': !exists(json, 'carrier_code') ? undefined : json['carrier_code'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function InventoryApiDataSourceCarrierLinkInterfaceToJSON(value?: InventoryApiDataSourceCarrierLinkInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'carrier_code': value.carrierCode,
        'position': value.position,
        'extension_attributes': value.extensionAttributes,
    };
}

