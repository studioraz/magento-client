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
 * Discount Data Interface
 * @export
 * @interface SalesRuleDataDiscountDataInterface
 */
export interface SalesRuleDataDiscountDataInterface {
    /**
     * Amount
     * @type {number}
     * @memberof SalesRuleDataDiscountDataInterface
     */
    amount: number;
    /**
     * Base Amount
     * @type {number}
     * @memberof SalesRuleDataDiscountDataInterface
     */
    baseAmount: number;
    /**
     * Original Amount
     * @type {number}
     * @memberof SalesRuleDataDiscountDataInterface
     */
    originalAmount: number;
    /**
     * Base Original Amount
     * @type {number}
     * @memberof SalesRuleDataDiscountDataInterface
     */
    baseOriginalAmount: number;
}
/**
 * Check if a given object implements the SalesRuleDataDiscountDataInterface interface.
 */
export declare function instanceOfSalesRuleDataDiscountDataInterface(value: object): boolean;
export declare function SalesRuleDataDiscountDataInterfaceFromJSON(json: any): SalesRuleDataDiscountDataInterface;
export declare function SalesRuleDataDiscountDataInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesRuleDataDiscountDataInterface;
export declare function SalesRuleDataDiscountDataInterfaceToJSON(value?: SalesRuleDataDiscountDataInterface | null): any;
