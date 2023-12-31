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
 * Credit memo item interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases. A credit memo item is an invoiced item for which a merchant creates a credit memo.
 * @export
 * @interface SalesDataCreditmemoItemInterface
 */
export interface SalesDataCreditmemoItemInterface {
    /**
     * Additional data.
     * @type {string}
     * @memberof SalesDataCreditmemoItemInterface
     */
    additionalData?: string;
    /**
     * The base cost for a credit memo item.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    baseCost: number;
    /**
     * The base discount amount for a credit memo item.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    baseDiscountAmount?: number;
    /**
     * The base discount tax compensation amount for a credit memo item.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    baseDiscountTaxCompensationAmount?: number;
    /**
     * The base price for a credit memo item.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    basePrice: number;
    /**
     * Base price including tax.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    basePriceInclTax?: number;
    /**
     * Base row total.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    baseRowTotal?: number;
    /**
     * Base row total including tax.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    baseRowTotalInclTax?: number;
    /**
     * Base tax amount.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    baseTaxAmount?: number;
    /**
     * Base WEEE tax applied amount.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    baseWeeeTaxAppliedAmount?: number;
    /**
     * Base WEEE tax applied row amount.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    baseWeeeTaxAppliedRowAmnt?: number;
    /**
     * Base WEEE tax disposition.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    baseWeeeTaxDisposition?: number;
    /**
     * Base WEEE tax row disposition.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    baseWeeeTaxRowDisposition?: number;
    /**
     * Description.
     * @type {string}
     * @memberof SalesDataCreditmemoItemInterface
     */
    description?: string;
    /**
     * Discount amount.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    discountAmount?: number;
    /**
     * Credit memo item ID.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    entityId: number;
    /**
     * Discount tax compensation amount.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    discountTaxCompensationAmount?: number;
    /**
     * Name.
     * @type {string}
     * @memberof SalesDataCreditmemoItemInterface
     */
    name?: string;
    /**
     * Order item ID.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    orderItemId: number;
    /**
     * Parent ID.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    parentId?: number;
    /**
     * Price.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    price?: number;
    /**
     * Price including tax.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    priceInclTax?: number;
    /**
     * Product ID.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    productId?: number;
    /**
     * Quantity.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    qty: number;
    /**
     * Row total.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    rowTotal?: number;
    /**
     * Row total including tax.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    rowTotalInclTax?: number;
    /**
     * SKU.
     * @type {string}
     * @memberof SalesDataCreditmemoItemInterface
     */
    sku?: string;
    /**
     * Tax amount.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    taxAmount?: number;
    /**
     * WEEE tax applied.
     * @type {string}
     * @memberof SalesDataCreditmemoItemInterface
     */
    weeeTaxApplied?: string;
    /**
     * WEEE tax applied amount.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    weeeTaxAppliedAmount?: number;
    /**
     * WEEE tax applied row amount.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    weeeTaxAppliedRowAmount?: number;
    /**
     * WEEE tax disposition.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    weeeTaxDisposition?: number;
    /**
     * WEEE tax row disposition.
     * @type {number}
     * @memberof SalesDataCreditmemoItemInterface
     */
    weeeTaxRowDisposition?: number;
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoItemInterface
     * @type {object}
     * @memberof SalesDataCreditmemoItemInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the SalesDataCreditmemoItemInterface interface.
 */
export function instanceOfSalesDataCreditmemoItemInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "baseCost" in value;
    isInstance = isInstance && "basePrice" in value;
    isInstance = isInstance && "entityId" in value;
    isInstance = isInstance && "orderItemId" in value;
    isInstance = isInstance && "qty" in value;

    return isInstance;
}

export function SalesDataCreditmemoItemInterfaceFromJSON(json: any): SalesDataCreditmemoItemInterface {
    return SalesDataCreditmemoItemInterfaceFromJSONTyped(json, false);
}

export function SalesDataCreditmemoItemInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataCreditmemoItemInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalData': !exists(json, 'additional_data') ? undefined : json['additional_data'],
        'baseCost': json['base_cost'],
        'baseDiscountAmount': !exists(json, 'base_discount_amount') ? undefined : json['base_discount_amount'],
        'baseDiscountTaxCompensationAmount': !exists(json, 'base_discount_tax_compensation_amount') ? undefined : json['base_discount_tax_compensation_amount'],
        'basePrice': json['base_price'],
        'basePriceInclTax': !exists(json, 'base_price_incl_tax') ? undefined : json['base_price_incl_tax'],
        'baseRowTotal': !exists(json, 'base_row_total') ? undefined : json['base_row_total'],
        'baseRowTotalInclTax': !exists(json, 'base_row_total_incl_tax') ? undefined : json['base_row_total_incl_tax'],
        'baseTaxAmount': !exists(json, 'base_tax_amount') ? undefined : json['base_tax_amount'],
        'baseWeeeTaxAppliedAmount': !exists(json, 'base_weee_tax_applied_amount') ? undefined : json['base_weee_tax_applied_amount'],
        'baseWeeeTaxAppliedRowAmnt': !exists(json, 'base_weee_tax_applied_row_amnt') ? undefined : json['base_weee_tax_applied_row_amnt'],
        'baseWeeeTaxDisposition': !exists(json, 'base_weee_tax_disposition') ? undefined : json['base_weee_tax_disposition'],
        'baseWeeeTaxRowDisposition': !exists(json, 'base_weee_tax_row_disposition') ? undefined : json['base_weee_tax_row_disposition'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'discountAmount': !exists(json, 'discount_amount') ? undefined : json['discount_amount'],
        'entityId': json['entity_id'],
        'discountTaxCompensationAmount': !exists(json, 'discount_tax_compensation_amount') ? undefined : json['discount_tax_compensation_amount'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'orderItemId': json['order_item_id'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'priceInclTax': !exists(json, 'price_incl_tax') ? undefined : json['price_incl_tax'],
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
        'qty': json['qty'],
        'rowTotal': !exists(json, 'row_total') ? undefined : json['row_total'],
        'rowTotalInclTax': !exists(json, 'row_total_incl_tax') ? undefined : json['row_total_incl_tax'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'taxAmount': !exists(json, 'tax_amount') ? undefined : json['tax_amount'],
        'weeeTaxApplied': !exists(json, 'weee_tax_applied') ? undefined : json['weee_tax_applied'],
        'weeeTaxAppliedAmount': !exists(json, 'weee_tax_applied_amount') ? undefined : json['weee_tax_applied_amount'],
        'weeeTaxAppliedRowAmount': !exists(json, 'weee_tax_applied_row_amount') ? undefined : json['weee_tax_applied_row_amount'],
        'weeeTaxDisposition': !exists(json, 'weee_tax_disposition') ? undefined : json['weee_tax_disposition'],
        'weeeTaxRowDisposition': !exists(json, 'weee_tax_row_disposition') ? undefined : json['weee_tax_row_disposition'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function SalesDataCreditmemoItemInterfaceToJSON(value?: SalesDataCreditmemoItemInterface | null): any {
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

