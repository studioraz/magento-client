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
 * Interface for creation arguments for Invoice.
 * @export
 * @interface SalesDataInvoiceCreationArgumentsInterface
 */
export interface SalesDataInvoiceCreationArgumentsInterface {
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCreationArgumentsInterface
     * @type {object}
     * @memberof SalesDataInvoiceCreationArgumentsInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the SalesDataInvoiceCreationArgumentsInterface interface.
 */
export function instanceOfSalesDataInvoiceCreationArgumentsInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SalesDataInvoiceCreationArgumentsInterfaceFromJSON(json: any): SalesDataInvoiceCreationArgumentsInterface {
    return SalesDataInvoiceCreationArgumentsInterfaceFromJSONTyped(json, false);
}

export function SalesDataInvoiceCreationArgumentsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataInvoiceCreationArgumentsInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function SalesDataInvoiceCreationArgumentsInterfaceToJSON(value?: SalesDataInvoiceCreationArgumentsInterface | null): any {
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

