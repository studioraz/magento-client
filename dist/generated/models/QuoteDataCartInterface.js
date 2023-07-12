"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteDataCartInterfaceToJSON = exports.QuoteDataCartInterfaceFromJSONTyped = exports.QuoteDataCartInterfaceFromJSON = exports.instanceOfQuoteDataCartInterface = void 0;
var runtime_1 = require("../runtime");
var CustomerDataCustomerInterface_1 = require("./CustomerDataCustomerInterface");
var QuoteDataAddressInterface_1 = require("./QuoteDataAddressInterface");
var QuoteDataCartExtensionInterface_1 = require("./QuoteDataCartExtensionInterface");
var QuoteDataCartItemInterface_1 = require("./QuoteDataCartItemInterface");
var QuoteDataCurrencyInterface_1 = require("./QuoteDataCurrencyInterface");
/**
 * Check if a given object implements the QuoteDataCartInterface interface.
 */
function instanceOfQuoteDataCartInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "customer" in value;
    isInstance = isInstance && "storeId" in value;
    return isInstance;
}
exports.instanceOfQuoteDataCartInterface = instanceOfQuoteDataCartInterface;
function QuoteDataCartInterfaceFromJSON(json) {
    return QuoteDataCartInterfaceFromJSONTyped(json, false);
}
exports.QuoteDataCartInterfaceFromJSON = QuoteDataCartInterfaceFromJSON;
function QuoteDataCartInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : json['updated_at'],
        'convertedAt': !(0, runtime_1.exists)(json, 'converted_at') ? undefined : json['converted_at'],
        'isActive': !(0, runtime_1.exists)(json, 'is_active') ? undefined : json['is_active'],
        'isVirtual': !(0, runtime_1.exists)(json, 'is_virtual') ? undefined : json['is_virtual'],
        'items': !(0, runtime_1.exists)(json, 'items') ? undefined : (json['items'].map(QuoteDataCartItemInterface_1.QuoteDataCartItemInterfaceFromJSON)),
        'itemsCount': !(0, runtime_1.exists)(json, 'items_count') ? undefined : json['items_count'],
        'itemsQty': !(0, runtime_1.exists)(json, 'items_qty') ? undefined : json['items_qty'],
        'customer': (0, CustomerDataCustomerInterface_1.CustomerDataCustomerInterfaceFromJSON)(json['customer']),
        'billingAddress': !(0, runtime_1.exists)(json, 'billing_address') ? undefined : (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceFromJSON)(json['billing_address']),
        'reservedOrderId': !(0, runtime_1.exists)(json, 'reserved_order_id') ? undefined : json['reserved_order_id'],
        'origOrderId': !(0, runtime_1.exists)(json, 'orig_order_id') ? undefined : json['orig_order_id'],
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : (0, QuoteDataCurrencyInterface_1.QuoteDataCurrencyInterfaceFromJSON)(json['currency']),
        'customerIsGuest': !(0, runtime_1.exists)(json, 'customer_is_guest') ? undefined : json['customer_is_guest'],
        'customerNote': !(0, runtime_1.exists)(json, 'customer_note') ? undefined : json['customer_note'],
        'customerNoteNotify': !(0, runtime_1.exists)(json, 'customer_note_notify') ? undefined : json['customer_note_notify'],
        'customerTaxClassId': !(0, runtime_1.exists)(json, 'customer_tax_class_id') ? undefined : json['customer_tax_class_id'],
        'storeId': json['store_id'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : (0, QuoteDataCartExtensionInterface_1.QuoteDataCartExtensionInterfaceFromJSON)(json['extension_attributes']),
    };
}
exports.QuoteDataCartInterfaceFromJSONTyped = QuoteDataCartInterfaceFromJSONTyped;
function QuoteDataCartInterfaceToJSON(value) {
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
        'items': value.items === undefined ? undefined : (value.items.map(QuoteDataCartItemInterface_1.QuoteDataCartItemInterfaceToJSON)),
        'items_count': value.itemsCount,
        'items_qty': value.itemsQty,
        'customer': (0, CustomerDataCustomerInterface_1.CustomerDataCustomerInterfaceToJSON)(value.customer),
        'billing_address': (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceToJSON)(value.billingAddress),
        'reserved_order_id': value.reservedOrderId,
        'orig_order_id': value.origOrderId,
        'currency': (0, QuoteDataCurrencyInterface_1.QuoteDataCurrencyInterfaceToJSON)(value.currency),
        'customer_is_guest': value.customerIsGuest,
        'customer_note': value.customerNote,
        'customer_note_notify': value.customerNoteNotify,
        'customer_tax_class_id': value.customerTaxClassId,
        'store_id': value.storeId,
        'extension_attributes': (0, QuoteDataCartExtensionInterface_1.QuoteDataCartExtensionInterfaceToJSON)(value.extensionAttributes),
    };
}
exports.QuoteDataCartInterfaceToJSON = QuoteDataCartInterfaceToJSON;
//# sourceMappingURL=QuoteDataCartInterface.js.map