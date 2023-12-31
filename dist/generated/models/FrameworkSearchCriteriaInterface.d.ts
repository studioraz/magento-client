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
import type { FrameworkSearchFilterGroup } from './FrameworkSearchFilterGroup';
import type { FrameworkSortOrder } from './FrameworkSortOrder';
/**
 * Search criteria interface.
 * @export
 * @interface FrameworkSearchCriteriaInterface
 */
export interface FrameworkSearchCriteriaInterface {
    /**
     * A list of filter groups.
     * @type {Array<FrameworkSearchFilterGroup>}
     * @memberof FrameworkSearchCriteriaInterface
     */
    filterGroups: Array<FrameworkSearchFilterGroup>;
    /**
     * Sort order.
     * @type {Array<FrameworkSortOrder>}
     * @memberof FrameworkSearchCriteriaInterface
     */
    sortOrders?: Array<FrameworkSortOrder>;
    /**
     * Page size.
     * @type {number}
     * @memberof FrameworkSearchCriteriaInterface
     */
    pageSize?: number;
    /**
     * Current page.
     * @type {number}
     * @memberof FrameworkSearchCriteriaInterface
     */
    currentPage?: number;
}
/**
 * Check if a given object implements the FrameworkSearchCriteriaInterface interface.
 */
export declare function instanceOfFrameworkSearchCriteriaInterface(value: object): boolean;
export declare function FrameworkSearchCriteriaInterfaceFromJSON(json: any): FrameworkSearchCriteriaInterface;
export declare function FrameworkSearchCriteriaInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrameworkSearchCriteriaInterface;
export declare function FrameworkSearchCriteriaInterfaceToJSON(value?: FrameworkSearchCriteriaInterface | null): any;
