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
import type { TaxDataOrderTaxDetailsAppliedTaxInterface } from './TaxDataOrderTaxDetailsAppliedTaxInterface';
import {
    TaxDataOrderTaxDetailsAppliedTaxInterfaceFromJSON,
    TaxDataOrderTaxDetailsAppliedTaxInterfaceFromJSONTyped,
    TaxDataOrderTaxDetailsAppliedTaxInterfaceToJSON,
} from './TaxDataOrderTaxDetailsAppliedTaxInterface';

/**
 * Interface OrderTaxDetailsItemInterface
 * @export
 * @interface TaxDataOrderTaxDetailsItemInterface
 */
export interface TaxDataOrderTaxDetailsItemInterface {
    /**
     * Type (shipping, product, weee, gift wrapping, etc)
     * @type {string}
     * @memberof TaxDataOrderTaxDetailsItemInterface
     */
    type?: string;
    /**
     * Item id if this item is a product
     * @type {number}
     * @memberof TaxDataOrderTaxDetailsItemInterface
     */
    itemId?: number;
    /**
     * Associated item id if this item is associated with another item, null otherwise
     * @type {number}
     * @memberof TaxDataOrderTaxDetailsItemInterface
     */
    associatedItemId?: number;
    /**
     * Applied taxes
     * @type {Array<TaxDataOrderTaxDetailsAppliedTaxInterface>}
     * @memberof TaxDataOrderTaxDetailsItemInterface
     */
    appliedTaxes?: Array<TaxDataOrderTaxDetailsAppliedTaxInterface>;
    /**
     * ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsItemInterface
     * @type {object}
     * @memberof TaxDataOrderTaxDetailsItemInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the TaxDataOrderTaxDetailsItemInterface interface.
 */
export function instanceOfTaxDataOrderTaxDetailsItemInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaxDataOrderTaxDetailsItemInterfaceFromJSON(json: any): TaxDataOrderTaxDetailsItemInterface {
    return TaxDataOrderTaxDetailsItemInterfaceFromJSONTyped(json, false);
}

export function TaxDataOrderTaxDetailsItemInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxDataOrderTaxDetailsItemInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'itemId': !exists(json, 'item_id') ? undefined : json['item_id'],
        'associatedItemId': !exists(json, 'associated_item_id') ? undefined : json['associated_item_id'],
        'appliedTaxes': !exists(json, 'applied_taxes') ? undefined : ((json['applied_taxes'] as Array<any>).map(TaxDataOrderTaxDetailsAppliedTaxInterfaceFromJSON)),
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function TaxDataOrderTaxDetailsItemInterfaceToJSON(value?: TaxDataOrderTaxDetailsItemInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'item_id': value.itemId,
        'associated_item_id': value.associatedItemId,
        'applied_taxes': value.appliedTaxes === undefined ? undefined : ((value.appliedTaxes as Array<any>).map(TaxDataOrderTaxDetailsAppliedTaxInterfaceToJSON)),
        'extension_attributes': value.extensionAttributes,
    };
}

