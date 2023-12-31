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
export declare function instanceOfSalesDataTotalInterface(value: object): boolean;
export declare function SalesDataTotalInterfaceFromJSON(json: any): SalesDataTotalInterface;
export declare function SalesDataTotalInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataTotalInterface;
export declare function SalesDataTotalInterfaceToJSON(value?: SalesDataTotalInterface | null): any;
