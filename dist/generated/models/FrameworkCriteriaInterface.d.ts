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
 * Interface CriteriaInterface
 * @export
 * @interface FrameworkCriteriaInterface
 */
export interface FrameworkCriteriaInterface {
    /**
     * Associated Mapper Interface name
     * @type {string}
     * @memberof FrameworkCriteriaInterface
     */
    mapperInterfaceName: string;
    /**
     * Criteria objects added to current Composite Criteria
     * @type {Array<FrameworkCriteriaInterface>}
     * @memberof FrameworkCriteriaInterface
     */
    criteriaList: Array<FrameworkCriteriaInterface>;
    /**
     * List of filters
     * @type {Array<string>}
     * @memberof FrameworkCriteriaInterface
     */
    filters: Array<string>;
    /**
     * Ordering criteria
     * @type {Array<string>}
     * @memberof FrameworkCriteriaInterface
     */
    orders: Array<string>;
    /**
     * Limit
     * @type {Array<string>}
     * @memberof FrameworkCriteriaInterface
     */
    limit: Array<string>;
}
/**
 * Check if a given object implements the FrameworkCriteriaInterface interface.
 */
export declare function instanceOfFrameworkCriteriaInterface(value: object): boolean;
export declare function FrameworkCriteriaInterfaceFromJSON(json: any): FrameworkCriteriaInterface;
export declare function FrameworkCriteriaInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrameworkCriteriaInterface;
export declare function FrameworkCriteriaInterfaceToJSON(value?: FrameworkCriteriaInterface | null): any;