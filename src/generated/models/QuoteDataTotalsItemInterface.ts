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
 * Interface TotalsItemInterface
 * @export
 * @interface QuoteDataTotalsItemInterface
 */
export interface QuoteDataTotalsItemInterface {
    /**
     * Item id
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    itemId: number;
    /**
     * Item price in quote currency.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    price: number;
    /**
     * Item price in base currency.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    basePrice: number;
    /**
     * Item quantity.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    qty: number;
    /**
     * Row total in quote currency.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    rowTotal: number;
    /**
     * Row total in base currency.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    baseRowTotal: number;
    /**
     * Row total with discount in quote currency. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    rowTotalWithDiscount?: number;
    /**
     * Tax amount in quote currency. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    taxAmount?: number;
    /**
     * Tax amount in base currency. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    baseTaxAmount?: number;
    /**
     * Tax percent. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    taxPercent?: number;
    /**
     * Discount amount in quote currency. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    discountAmount?: number;
    /**
     * Discount amount in base currency. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    baseDiscountAmount?: number;
    /**
     * Discount percent. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    discountPercent?: number;
    /**
     * Price including tax in quote currency. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    priceInclTax?: number;
    /**
     * Price including tax in base currency. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    basePriceInclTax?: number;
    /**
     * Row total including tax in quote currency. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    rowTotalInclTax?: number;
    /**
     * Row total including tax in base currency. Otherwise, null.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    baseRowTotalInclTax?: number;
    /**
     * Item price in quote currency.
     * @type {string}
     * @memberof QuoteDataTotalsItemInterface
     */
    options: string;
    /**
     * Item weee tax applied amount in quote currency.
     * @type {number}
     * @memberof QuoteDataTotalsItemInterface
     */
    weeeTaxAppliedAmount: number;
    /**
     * Item weee tax applied in quote currency.
     * @type {string}
     * @memberof QuoteDataTotalsItemInterface
     */
    weeeTaxApplied: string;
    /**
     * ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsItemInterface
     * @type {object}
     * @memberof QuoteDataTotalsItemInterface
     */
    extensionAttributes?: object;
    /**
     * Product name. Otherwise, null.
     * @type {string}
     * @memberof QuoteDataTotalsItemInterface
     */
    name?: string;
}

/**
 * Check if a given object implements the QuoteDataTotalsItemInterface interface.
 */
export function instanceOfQuoteDataTotalsItemInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "itemId" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "basePrice" in value;
    isInstance = isInstance && "qty" in value;
    isInstance = isInstance && "rowTotal" in value;
    isInstance = isInstance && "baseRowTotal" in value;
    isInstance = isInstance && "options" in value;
    isInstance = isInstance && "weeeTaxAppliedAmount" in value;
    isInstance = isInstance && "weeeTaxApplied" in value;

    return isInstance;
}

export function QuoteDataTotalsItemInterfaceFromJSON(json: any): QuoteDataTotalsItemInterface {
    return QuoteDataTotalsItemInterfaceFromJSONTyped(json, false);
}

export function QuoteDataTotalsItemInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataTotalsItemInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemId': json['item_id'],
        'price': json['price'],
        'basePrice': json['base_price'],
        'qty': json['qty'],
        'rowTotal': json['row_total'],
        'baseRowTotal': json['base_row_total'],
        'rowTotalWithDiscount': !exists(json, 'row_total_with_discount') ? undefined : json['row_total_with_discount'],
        'taxAmount': !exists(json, 'tax_amount') ? undefined : json['tax_amount'],
        'baseTaxAmount': !exists(json, 'base_tax_amount') ? undefined : json['base_tax_amount'],
        'taxPercent': !exists(json, 'tax_percent') ? undefined : json['tax_percent'],
        'discountAmount': !exists(json, 'discount_amount') ? undefined : json['discount_amount'],
        'baseDiscountAmount': !exists(json, 'base_discount_amount') ? undefined : json['base_discount_amount'],
        'discountPercent': !exists(json, 'discount_percent') ? undefined : json['discount_percent'],
        'priceInclTax': !exists(json, 'price_incl_tax') ? undefined : json['price_incl_tax'],
        'basePriceInclTax': !exists(json, 'base_price_incl_tax') ? undefined : json['base_price_incl_tax'],
        'rowTotalInclTax': !exists(json, 'row_total_incl_tax') ? undefined : json['row_total_incl_tax'],
        'baseRowTotalInclTax': !exists(json, 'base_row_total_incl_tax') ? undefined : json['base_row_total_incl_tax'],
        'options': json['options'],
        'weeeTaxAppliedAmount': json['weee_tax_applied_amount'],
        'weeeTaxApplied': json['weee_tax_applied'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function QuoteDataTotalsItemInterfaceToJSON(value?: QuoteDataTotalsItemInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'item_id': value.itemId,
        'price': value.price,
        'base_price': value.basePrice,
        'qty': value.qty,
        'row_total': value.rowTotal,
        'base_row_total': value.baseRowTotal,
        'row_total_with_discount': value.rowTotalWithDiscount,
        'tax_amount': value.taxAmount,
        'base_tax_amount': value.baseTaxAmount,
        'tax_percent': value.taxPercent,
        'discount_amount': value.discountAmount,
        'base_discount_amount': value.baseDiscountAmount,
        'discount_percent': value.discountPercent,
        'price_incl_tax': value.priceInclTax,
        'base_price_incl_tax': value.basePriceInclTax,
        'row_total_incl_tax': value.rowTotalInclTax,
        'base_row_total_incl_tax': value.baseRowTotalInclTax,
        'options': value.options,
        'weee_tax_applied_amount': value.weeeTaxAppliedAmount,
        'weee_tax_applied': value.weeeTaxApplied,
        'extension_attributes': value.extensionAttributes,
        'name': value.name,
    };
}

