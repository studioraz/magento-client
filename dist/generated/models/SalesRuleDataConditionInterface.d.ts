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
 * Interface ConditionInterface
 * @export
 * @interface SalesRuleDataConditionInterface
 */
export interface SalesRuleDataConditionInterface {
    /**
     * Condition type
     * @type {string}
     * @memberof SalesRuleDataConditionInterface
     */
    conditionType: string;
    /**
     * List of conditions
     * @type {Array<SalesRuleDataConditionInterface>}
     * @memberof SalesRuleDataConditionInterface
     */
    conditions?: Array<SalesRuleDataConditionInterface>;
    /**
     * The aggregator type
     * @type {string}
     * @memberof SalesRuleDataConditionInterface
     */
    aggregatorType?: string;
    /**
     * The operator of the condition
     * @type {string}
     * @memberof SalesRuleDataConditionInterface
     */
    operator: string;
    /**
     * The attribute name of the condition
     * @type {string}
     * @memberof SalesRuleDataConditionInterface
     */
    attributeName?: string;
    /**
     * The value of the condition
     * @type {string}
     * @memberof SalesRuleDataConditionInterface
     */
    value: string;
    /**
     * ExtensionInterface class for @see \Magento\SalesRule\Api\Data\ConditionInterface
     * @type {object}
     * @memberof SalesRuleDataConditionInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the SalesRuleDataConditionInterface interface.
 */
export declare function instanceOfSalesRuleDataConditionInterface(value: object): boolean;
export declare function SalesRuleDataConditionInterfaceFromJSON(json: any): SalesRuleDataConditionInterface;
export declare function SalesRuleDataConditionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesRuleDataConditionInterface;
export declare function SalesRuleDataConditionInterfaceToJSON(value?: SalesRuleDataConditionInterface | null): any;