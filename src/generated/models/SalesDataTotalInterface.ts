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
 * Interface TotalInterface
 * @export
 * @interface SalesDataTotalInterface
 */
export interface SalesDataTotalInterface {
    /**
     * Base shipping amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    baseShippingAmount?: number;
    /**
     * Base shipping canceled.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    baseShippingCanceled?: number;
    /**
     * Base shipping discount amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    baseShippingDiscountAmount?: number;
    /**
     * Base shipping discount tax compensation amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    baseShippingDiscountTaxCompensationAmnt?: number;
    /**
     * Base shipping including tax.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    baseShippingInclTax?: number;
    /**
     * Base shipping invoiced.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    baseShippingInvoiced?: number;
    /**
     * Base shipping refunded.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    baseShippingRefunded?: number;
    /**
     * Base shipping tax amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    baseShippingTaxAmount?: number;
    /**
     * Base shipping tax refunded.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    baseShippingTaxRefunded?: number;
    /**
     * Shipping amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    shippingAmount?: number;
    /**
     * Shipping canceled amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    shippingCanceled?: number;
    /**
     * Shipping discount amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    shippingDiscountAmount?: number;
    /**
     * Shipping discount tax compensation amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    shippingDiscountTaxCompensationAmount?: number;
    /**
     * Shipping including tax amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    shippingInclTax?: number;
    /**
     * Shipping invoiced amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    shippingInvoiced?: number;
    /**
     * Shipping refunded amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    shippingRefunded?: number;
    /**
     * Shipping tax amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    shippingTaxAmount?: number;
    /**
     * Shipping tax refunded amount.
     * @type {number}
     * @memberof SalesDataTotalInterface
     */
    shippingTaxRefunded?: number;
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\TotalInterface
     * @type {object}
     * @memberof SalesDataTotalInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the SalesDataTotalInterface interface.
 */
export function instanceOfSalesDataTotalInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SalesDataTotalInterfaceFromJSON(json: any): SalesDataTotalInterface {
    return SalesDataTotalInterfaceFromJSONTyped(json, false);
}

export function SalesDataTotalInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataTotalInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baseShippingAmount': !exists(json, 'base_shipping_amount') ? undefined : json['base_shipping_amount'],
        'baseShippingCanceled': !exists(json, 'base_shipping_canceled') ? undefined : json['base_shipping_canceled'],
        'baseShippingDiscountAmount': !exists(json, 'base_shipping_discount_amount') ? undefined : json['base_shipping_discount_amount'],
        'baseShippingDiscountTaxCompensationAmnt': !exists(json, 'base_shipping_discount_tax_compensation_amnt') ? undefined : json['base_shipping_discount_tax_compensation_amnt'],
        'baseShippingInclTax': !exists(json, 'base_shipping_incl_tax') ? undefined : json['base_shipping_incl_tax'],
        'baseShippingInvoiced': !exists(json, 'base_shipping_invoiced') ? undefined : json['base_shipping_invoiced'],
        'baseShippingRefunded': !exists(json, 'base_shipping_refunded') ? undefined : json['base_shipping_refunded'],
        'baseShippingTaxAmount': !exists(json, 'base_shipping_tax_amount') ? undefined : json['base_shipping_tax_amount'],
        'baseShippingTaxRefunded': !exists(json, 'base_shipping_tax_refunded') ? undefined : json['base_shipping_tax_refunded'],
        'shippingAmount': !exists(json, 'shipping_amount') ? undefined : json['shipping_amount'],
        'shippingCanceled': !exists(json, 'shipping_canceled') ? undefined : json['shipping_canceled'],
        'shippingDiscountAmount': !exists(json, 'shipping_discount_amount') ? undefined : json['shipping_discount_amount'],
        'shippingDiscountTaxCompensationAmount': !exists(json, 'shipping_discount_tax_compensation_amount') ? undefined : json['shipping_discount_tax_compensation_amount'],
        'shippingInclTax': !exists(json, 'shipping_incl_tax') ? undefined : json['shipping_incl_tax'],
        'shippingInvoiced': !exists(json, 'shipping_invoiced') ? undefined : json['shipping_invoiced'],
        'shippingRefunded': !exists(json, 'shipping_refunded') ? undefined : json['shipping_refunded'],
        'shippingTaxAmount': !exists(json, 'shipping_tax_amount') ? undefined : json['shipping_tax_amount'],
        'shippingTaxRefunded': !exists(json, 'shipping_tax_refunded') ? undefined : json['shipping_tax_refunded'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function SalesDataTotalInterfaceToJSON(value?: SalesDataTotalInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'base_shipping_amount': value.baseShippingAmount,
        'base_shipping_canceled': value.baseShippingCanceled,
        'base_shipping_discount_amount': value.baseShippingDiscountAmount,
        'base_shipping_discount_tax_compensation_amnt': value.baseShippingDiscountTaxCompensationAmnt,
        'base_shipping_incl_tax': value.baseShippingInclTax,
        'base_shipping_invoiced': value.baseShippingInvoiced,
        'base_shipping_refunded': value.baseShippingRefunded,
        'base_shipping_tax_amount': value.baseShippingTaxAmount,
        'base_shipping_tax_refunded': value.baseShippingTaxRefunded,
        'shipping_amount': value.shippingAmount,
        'shipping_canceled': value.shippingCanceled,
        'shipping_discount_amount': value.shippingDiscountAmount,
        'shipping_discount_tax_compensation_amount': value.shippingDiscountTaxCompensationAmount,
        'shipping_incl_tax': value.shippingInclTax,
        'shipping_invoiced': value.shippingInvoiced,
        'shipping_refunded': value.shippingRefunded,
        'shipping_tax_amount': value.shippingTaxAmount,
        'shipping_tax_refunded': value.shippingTaxRefunded,
        'extension_attributes': value.extensionAttributes,
    };
}

