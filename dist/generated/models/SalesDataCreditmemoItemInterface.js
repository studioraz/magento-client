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
exports.SalesDataCreditmemoItemInterfaceToJSON = exports.SalesDataCreditmemoItemInterfaceFromJSONTyped = exports.SalesDataCreditmemoItemInterfaceFromJSON = exports.instanceOfSalesDataCreditmemoItemInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SalesDataCreditmemoItemInterface interface.
 */
function instanceOfSalesDataCreditmemoItemInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "baseCost" in value;
    isInstance = isInstance && "basePrice" in value;
    isInstance = isInstance && "entityId" in value;
    isInstance = isInstance && "orderItemId" in value;
    isInstance = isInstance && "qty" in value;
    return isInstance;
}
exports.instanceOfSalesDataCreditmemoItemInterface = instanceOfSalesDataCreditmemoItemInterface;
function SalesDataCreditmemoItemInterfaceFromJSON(json) {
    return SalesDataCreditmemoItemInterfaceFromJSONTyped(json, false);
}
exports.SalesDataCreditmemoItemInterfaceFromJSON = SalesDataCreditmemoItemInterfaceFromJSON;
function SalesDataCreditmemoItemInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalData': !(0, runtime_1.exists)(json, 'additional_data') ? undefined : json['additional_data'],
        'baseCost': json['base_cost'],
        'baseDiscountAmount': !(0, runtime_1.exists)(json, 'base_discount_amount') ? undefined : json['base_discount_amount'],
        'baseDiscountTaxCompensationAmount': !(0, runtime_1.exists)(json, 'base_discount_tax_compensation_amount') ? undefined : json['base_discount_tax_compensation_amount'],
        'basePrice': json['base_price'],
        'basePriceInclTax': !(0, runtime_1.exists)(json, 'base_price_incl_tax') ? undefined : json['base_price_incl_tax'],
        'baseRowTotal': !(0, runtime_1.exists)(json, 'base_row_total') ? undefined : json['base_row_total'],
        'baseRowTotalInclTax': !(0, runtime_1.exists)(json, 'base_row_total_incl_tax') ? undefined : json['base_row_total_incl_tax'],
        'baseTaxAmount': !(0, runtime_1.exists)(json, 'base_tax_amount') ? undefined : json['base_tax_amount'],
        'baseWeeeTaxAppliedAmount': !(0, runtime_1.exists)(json, 'base_weee_tax_applied_amount') ? undefined : json['base_weee_tax_applied_amount'],
        'baseWeeeTaxAppliedRowAmnt': !(0, runtime_1.exists)(json, 'base_weee_tax_applied_row_amnt') ? undefined : json['base_weee_tax_applied_row_amnt'],
        'baseWeeeTaxDisposition': !(0, runtime_1.exists)(json, 'base_weee_tax_disposition') ? undefined : json['base_weee_tax_disposition'],
        'baseWeeeTaxRowDisposition': !(0, runtime_1.exists)(json, 'base_weee_tax_row_disposition') ? undefined : json['base_weee_tax_row_disposition'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'discountAmount': !(0, runtime_1.exists)(json, 'discount_amount') ? undefined : json['discount_amount'],
        'entityId': json['entity_id'],
        'discountTaxCompensationAmount': !(0, runtime_1.exists)(json, 'discount_tax_compensation_amount') ? undefined : json['discount_tax_compensation_amount'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'orderItemId': json['order_item_id'],
        'parentId': !(0, runtime_1.exists)(json, 'parent_id') ? undefined : json['parent_id'],
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : json['price'],
        'priceInclTax': !(0, runtime_1.exists)(json, 'price_incl_tax') ? undefined : json['price_incl_tax'],
        'productId': !(0, runtime_1.exists)(json, 'product_id') ? undefined : json['product_id'],
        'qty': json['qty'],
        'rowTotal': !(0, runtime_1.exists)(json, 'row_total') ? undefined : json['row_total'],
        'rowTotalInclTax': !(0, runtime_1.exists)(json, 'row_total_incl_tax') ? undefined : json['row_total_incl_tax'],
        'sku': !(0, runtime_1.exists)(json, 'sku') ? undefined : json['sku'],
        'taxAmount': !(0, runtime_1.exists)(json, 'tax_amount') ? undefined : json['tax_amount'],
        'weeeTaxApplied': !(0, runtime_1.exists)(json, 'weee_tax_applied') ? undefined : json['weee_tax_applied'],
        'weeeTaxAppliedAmount': !(0, runtime_1.exists)(json, 'weee_tax_applied_amount') ? undefined : json['weee_tax_applied_amount'],
        'weeeTaxAppliedRowAmount': !(0, runtime_1.exists)(json, 'weee_tax_applied_row_amount') ? undefined : json['weee_tax_applied_row_amount'],
        'weeeTaxDisposition': !(0, runtime_1.exists)(json, 'weee_tax_disposition') ? undefined : json['weee_tax_disposition'],
        'weeeTaxRowDisposition': !(0, runtime_1.exists)(json, 'weee_tax_row_disposition') ? undefined : json['weee_tax_row_disposition'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.SalesDataCreditmemoItemInterfaceFromJSONTyped = SalesDataCreditmemoItemInterfaceFromJSONTyped;
function SalesDataCreditmemoItemInterfaceToJSON(value) {
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
        'base_weee_tax_applied_amount': value.baseWeeeTaxAppliedAmount,
        'base_weee_tax_applied_row_amnt': value.baseWeeeTaxAppliedRowAmnt,
        'base_weee_tax_disposition': value.baseWeeeTaxDisposition,
        'base_weee_tax_row_disposition': value.baseWeeeTaxRowDisposition,
        'description': value.description,
        'discount_amount': value.discountAmount,
        'entity_id': value.entityId,
        'discount_tax_compensation_amount': value.discountTaxCompensationAmount,
        'name': value.name,
        'order_item_id': value.orderItemId,
        'parent_id': value.parentId,
        'price': value.price,
        'price_incl_tax': value.priceInclTax,
        'product_id': value.productId,
        'qty': value.qty,
        'row_total': value.rowTotal,
        'row_total_incl_tax': value.rowTotalInclTax,
        'sku': value.sku,
        'tax_amount': value.taxAmount,
        'weee_tax_applied': value.weeeTaxApplied,
        'weee_tax_applied_amount': value.weeeTaxAppliedAmount,
        'weee_tax_applied_row_amount': value.weeeTaxAppliedRowAmount,
        'weee_tax_disposition': value.weeeTaxDisposition,
        'weee_tax_row_disposition': value.weeeTaxRowDisposition,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.SalesDataCreditmemoItemInterfaceToJSON = SalesDataCreditmemoItemInterfaceToJSON;
//# sourceMappingURL=SalesDataCreditmemoItemInterface.js.map