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
 * Shipment package interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
 * @export
 * @interface SalesDataShipmentPackageCreationInterface
 */
export interface SalesDataShipmentPackageCreationInterface {
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentPackageCreationInterface
     * @type {object}
     * @memberof SalesDataShipmentPackageCreationInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the SalesDataShipmentPackageCreationInterface interface.
 */
export function instanceOfSalesDataShipmentPackageCreationInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SalesDataShipmentPackageCreationInterfaceFromJSON(json: any): SalesDataShipmentPackageCreationInterface {
    return SalesDataShipmentPackageCreationInterfaceFromJSONTyped(json, false);
}

export function SalesDataShipmentPackageCreationInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataShipmentPackageCreationInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function SalesDataShipmentPackageCreationInterfaceToJSON(value?: SalesDataShipmentPackageCreationInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extension_attributes': value.extensionAttributes,
    };
}

