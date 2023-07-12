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
exports.SalesDataInvoiceItemInterfaceToJSON = exports.SalesDataInvoiceItemInterfaceFromJSONTyped = exports.SalesDataInvoiceItemInterfaceFromJSON = exports.instanceOfSalesDataInvoiceItemInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SalesDataInvoiceItemInterface interface.
 */
function instanceOfSalesDataInvoiceItemInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "sku" in value;
    isInstance = isInstance && "orderItemId" in value;
    isInstance = isInstance && "qty" in value;
    return isInstance;
}
exports.instanceOfSalesDataInvoiceItemInterface = instanceOfSalesDataInvoiceItemInterface;
function SalesDataInvoiceItemInterfaceFromJSON(json) {
    return SalesDataInvoiceItemInterfaceFromJSONTyped(json, false);
}
exports.SalesDataInvoiceItemInterfaceFromJSON = SalesDataInvoiceItemInterfaceFromJSON;
function SalesDataInvoiceItemInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalData': !(0, runtime_1.exists)(json, 'additional_data') ? undefined : json['additional_data'],
        'baseCost': !(0, runtime_1.exists)(json, 'base_cost') ? undefined : json['base_cost'],
        'baseDiscountAmount': !(0, runtime_1.exists)(json, 'base_discount_amount') ? undefined : json['base_discount_amount'],
        'baseDiscountTaxCompensationAmount': !(0, runtime_1.exists)(json, 'base_discount_tax_compensation_amount') ? undefined : json['base_discount_tax_compensation_amount'],
        'basePrice': !(0, runtime_1.exists)(json, 'base_price') ? undefined : json['base_price'],
        'basePriceInclTax': !(0, runtime_1.exists)(json, 'base_price_incl_tax') ? undefined : json['base_price_incl_tax'],
        'baseRowTotal': !(0, runtime_1.exists)(json, 'base_row_total') ? undefined : json['base_row_total'],
        'baseRowTotalInclTax': !(0, runtime_1.exists)(json, 'base_row_total_incl_tax') ? undefined : json['base_row_total_incl_tax'],
        'baseTaxAmount': !(0, runtime_1.exists)(json, 'base_tax_amount') ? undefined : json['base_tax_amount'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'discountAmount': !(0, runtime_1.exists)(json, 'discount_amount') ? undefined : json['discount_amount'],
        'entityId': !(0, runtime_1.exists)(json, 'entity_id') ? undefined : json['entity_id'],
        'discountTaxCompensationAmount': !(0, runtime_1.exists)(json, 'discount_tax_compensation_amount') ? undefined : json['discount_tax_compensation_amount'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'parentId': !(0, runtime_1.exists)(json, 'parent_id') ? undefined : json['parent_id'],
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : json['price'],
        'priceInclTax': !(0, runtime_1.exists)(json, 'price_incl_tax') ? undefined : json['price_incl_tax'],
        'productId': !(0, runtime_1.exists)(json, 'product_id') ? undefined : json['product_id'],
        'rowTotal': !(0, runtime_1.exists)(json, 'row_total') ? undefined : json['row_total'],
        'rowTotalInclTax': !(0, runtime_1.exists)(json, 'row_total_incl_tax') ? undefined : json['row_total_incl_tax'],
        'sku': json['sku'],
        'taxAmount': !(0, runtime_1.exists)(json, 'tax_amount') ? undefined : json['tax_amount'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'orderItemId': json['order_item_id'],
        'qty': json['qty'],
    };
}
exports.SalesDataInvoiceItemInterfaceFromJSONTyped = SalesDataInvoiceItemInterfaceFromJSONTyped;
function SalesDataInvoiceItemInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'additional_data': value.additionalData,
        'base_cost': value.baseCost,
        'base_discount_amount': value.baseDiscountAmount,
        'base_discount_tax_compensation_amount': value.baseDiscountTaxCompensationAmount,
        'base_price': value.basePrice,
        'base_price_incl_tax': value.basePriceInclTax,
        'base_row_total': value.baseRowTotal,
        'base_row_total_incl_tax': value.baseRowTotalInclTax,
        'base_tax_amount': value.baseTaxAmount,
        'description': value.description,
        'discount_amount': value.discountAmount,
        'entity_id': value.entityId,
        'discount_tax_compensation_amount': value.discountTaxCompensationAmount,
        'name': value.name,
        'parent_id': value.parentId,
        'price': value.price,
        'price_incl_tax': value.priceInclTax,
        'product_id': value.productId,
        'row_total': value.rowTotal,
        'row_total_incl_tax': value.rowTotalInclTax,
        'sku': value.sku,
        'tax_amount': value.taxAmount,
        'extension_attributes': value.extensionAttributes,
        'order_item_id': value.orderItemId,
        'qty': value.qty,
    };
}
exports.SalesDataInvoiceItemInterfaceToJSON = SalesDataInvoiceItemInterfaceToJSON;
//# sourceMappingURL=SalesDataInvoiceItemInterface.js.map