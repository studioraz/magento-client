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
import type { CustomerDataCustomerInterface } from './CustomerDataCustomerInterface';
import {
    CustomerDataCustomerInterfaceFromJSON,
    CustomerDataCustomerInterfaceFromJSONTyped,
    CustomerDataCustomerInterfaceToJSON,
} from './CustomerDataCustomerInterface';
import type { QuoteDataAddressInterface } from './QuoteDataAddressInterface';
import {
    QuoteDataAddressInterfaceFromJSON,
    QuoteDataAddressInterfaceFromJSONTyped,
    QuoteDataAddressInterfaceToJSON,
} from './QuoteDataAddressInterface';
import type { QuoteDataCartExtensionInterface } from './QuoteDataCartExtensionInterface';
import {
    QuoteDataCartExtensionInterfaceFromJSON,
    QuoteDataCartExtensionInterfaceFromJSONTyped,
    QuoteDataCartExtensionInterfaceToJSON,
} from './QuoteDataCartExtensionInterface';
import type { QuoteDataCartItemInterface } from './QuoteDataCartItemInterface';
import {
    QuoteDataCartItemInterfaceFromJSON,
    QuoteDataCartItemInterfaceFromJSONTyped,
    QuoteDataCartItemInterfaceToJSON,
} from './QuoteDataCartItemInterface';
import type { QuoteDataCurrencyInterface } from './QuoteDataCurrencyInterface';
import {
    QuoteDataCurrencyInterfaceFromJSON,
    QuoteDataCurrencyInterfaceFromJSONTyped,
    QuoteDataCurrencyInterfaceToJSON,
} from './QuoteDataCurrencyInterface';

/**
 * Interface CartInterface
 * @export
 * @interface QuoteDataCartInterface
 */
export interface QuoteDataCartInterface {
    /**
     * Cart/quote ID.
     * @type {number}
     * @memberof QuoteDataCartInterface
     */
    id: number;
    /**
     * Cart creation date and time. Otherwise, null.
     * @type {string}
     * @memberof QuoteDataCartInterface
     */
    createdAt?: string;
    /**
     * Cart last update date and time. Otherwise, null.
     * @type {string}
     * @memberof QuoteDataCartInterface
     */
    updatedAt?: string;
    /**
     * Cart conversion date and time. Otherwise, null.
     * @type {string}
     * @memberof QuoteDataCartInterface
     */
    convertedAt?: string;
    /**
     * Active status flag value. Otherwise, null.
     * @type {boolean}
     * @memberof QuoteDataCartInterface
     */
    isActive?: boolean;
    /**
     * Virtual flag value. Otherwise, null.
     * @type {boolean}
     * @memberof QuoteDataCartInterface
     */
    isVirtual?: boolean;
    /**
     * Array of items. Otherwise, null.
     * @type {Array<QuoteDataCartItemInterface>}
     * @memberof QuoteDataCartInterface
     */
    items?: Array<QuoteDataCartItemInterface>;
    /**
     * Number of different items or products in the cart. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataCartInterface
     */
    itemsCount?: number;
    /**
     * Total quantity of all cart items. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataCartInterface
     */
    itemsQty?: number;
    /**
     * 
     * @type {CustomerDataCustomerInterface}
     * @memberof QuoteDataCartInterface
     */
    customer: CustomerDataCustomerInterface;
    /**
     * 
     * @type {QuoteDataAddressInterface}
     * @memberof QuoteDataCartInterface
     */
    billingAddress?: QuoteDataAddressInterface;
    /**
     * Reserved order ID. Otherwise, null.
     * @type {string}
     * @memberof QuoteDataCartInterface
     */
    reservedOrderId?: string;
    /**
     * Original order ID. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataCartInterface
     */
    origOrderId?: number;
    /**
     * 
     * @type {QuoteDataCurrencyInterface}
     * @memberof QuoteDataCartInterface
     */
    currency?: QuoteDataCurrencyInterface;
    /**
     * For guest customers, false for logged in customers
     * @type {boolean}
     * @memberof QuoteDataCartInterface
     */
    customerIsGuest?: boolean;
    /**
     * Notice text
     * @type {string}
     * @memberof QuoteDataCartInterface
     */
    customerNote?: string;
    /**
     * Customer notification flag
     * @type {boolean}
     * @memberof QuoteDataCartInterface
     */
    customerNoteNotify?: boolean;
    /**
     * Customer tax class ID.
     * @type {number}
     * @memberof QuoteDataCartInterface
     */
    customerTaxClassId?: number;
    /**
     * Store identifier
     * @type {number}
     * @memberof QuoteDataCartInterface
     */
    storeId: number;
    /**
     * 
     * @type {QuoteDataCartExtensionInterface}
     * @memberof QuoteDataCartInterface
     */
    extensionAttributes?: QuoteDataCartExtensionInterface;
}

/**
 * Check if a given object implements the QuoteDataCartInterface interface.
 */
export function instanceOfQuoteDataCartInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "customer" in value;
    isInstance = isInstance && "storeId" in value;

    return isInstance;
}

export function QuoteDataCartInterfaceFromJSON(json: any): QuoteDataCartInterface {
    return QuoteDataCartInterfaceFromJSONTyped(json, false);
}

export function QuoteDataCartInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataCartInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'convertedAt': !exists(json, 'converted_at') ? undefined : json['converted_at'],
        'isActive': !exists(json, 'is_active') ? undefined : json['is_active'],
        'isVirtual': !exists(json, 'is_virtual') ? undefined : json['is_virtual'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(QuoteDataCartItemInterfaceFromJSON)),
        'itemsCount': !exists(json, 'items_count') ? undefined : json['items_count'],
        'itemsQty': !exists(json, 'items_qty') ? undefined : json['items_qty'],
        'customer': CustomerDataCustomerInterfaceFromJSON(json['customer']),
        'billingAddress': !exists(json, 'billing_address') ? undefined : QuoteDataAddressInterfaceFromJSON(json['billing_address']),
        'reservedOrderId': !exists(json, 'reserved_order_id') ? undefined : json['reserved_order_id'],
        'origOrderId': !exists(json, 'orig_order_id') ? undefined : json['orig_order_id'],
        'currency': !exists(json, 'currency') ? undefined : QuoteDataCurrencyInterfaceFromJSON(json['currency']),
        'customerIsGuest': !exists(json, 'customer_is_guest') ? undefined : json['customer_is_guest'],
        'customerNote': !exists(json, 'customer_note') ? undefined : json['customer_note'],
        'customerNoteNotify': !exists(json, 'customer_note_notify') ? undefined : json['customer_note_notify'],
        'customerTaxClassId': !exists(json, 'customer_tax_class_id') ? undefined : json['customer_tax_class_id'],
        'storeId': json['store_id'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : QuoteDataCartExtensionInterfaceFromJSON(json['extension_attributes']),
    };
}

export function QuoteDataCartInterfaceToJSON(value?: QuoteDataCartInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'converted_at': value.convertedAt,
        'is_active': value.isActive,
        'is_virtual': value.isVirtual,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(QuoteDataCartItemInterfaceToJSON)),
        'items_count': value.itemsCount,
        'items_qty': value.itemsQty,
        'customer': CustomerDataCustomerInterfaceToJSON(value.customer),
        'billing_address': QuoteDataAddressInterfaceToJSON(value.billingAddress),
        'reserved_order_id': value.reservedOrderId,
        'orig_order_id': value.origOrderId,
        'currency': QuoteDataCurrencyInterfaceToJSON(value.currency),
        'customer_is_guest': value.customerIsGuest,
        'customer_note': value.customerNote,
        'customer_note_notify': value.customerNoteNotify,
        'customer_tax_class_id': value.customerTaxClassId,
        'store_id': value.storeId,
        'extension_attributes': QuoteDataCartExtensionInterfaceToJSON(value.extensionAttributes),
    };
}

