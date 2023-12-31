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
 * Interface CreditmemoItemCreationInterface
 * @export
 * @interface SalesDataCreditmemoItemCreationInterface
 */
export interface SalesDataCreditmemoItemCreationInterface {
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoItemCreationInterface
     * @type {object}
     * @memberof SalesDataCreditmemoItemCreationInterface
     */
    extensionAttributes?: object;
    /**
     * Order item ID.
     * @type {number}
     * @memberof SalesDataCreditmemoItemCreationInterface
     */
    orderItemId: number;
    /**
     * Quantity.
     * @type {number}
     * @memberof SalesDataCreditmemoItemCreationInterface
     */
    qty: number;
}

/**
 * Check if a given object implements the SalesDataCreditmemoItemCreationInterface interface.
 */
export function instanceOfSalesDataCreditmemoItemCreationInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "orderItemId" in value;
    isInstance = isInstance && "qty" in value;

    return isInstance;
}

export function SalesDataCreditmemoItemCreationInterfaceFromJSON(json: any): SalesDataCreditmemoItemCreationInterface {
    return SalesDataCreditmemoItemCreationInterfaceFromJSONTyped(json, false);
}

export function SalesDataCreditmemoItemCreationInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataCreditmemoItemCreationInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'orderItemId': json['order_item_id'],
        'qty': json['qty'],
    };
}

export function SalesDataCreditmemoItemCreationInterfaceToJSON(value?: SalesDataCreditmemoItemCreationInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extension_attributes': value.extensionAttributes,
        'order_item_id': value.orderItemId,
        'qty': value.qty,
    };
}

