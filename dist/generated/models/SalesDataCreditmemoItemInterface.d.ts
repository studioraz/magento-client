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
export declare function instanceOfSalesDataCreditmemoItemInterface(value: object): boolean;
export declare function SalesDataCreditmemoItemInterfaceFromJSON(json: any): SalesDataCreditmemoItemInterface;
export declare function SalesDataCreditmemoItemInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataCreditmemoItemInterface;
export declare function SalesDataCreditmemoItemInterfaceToJSON(value?: SalesDataCreditmemoItemInterface | null): any;