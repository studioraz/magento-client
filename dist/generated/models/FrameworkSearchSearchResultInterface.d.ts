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
import type { FrameworkSearchAggregationInterface } from './FrameworkSearchAggregationInterface';
import type { FrameworkSearchDocumentInterface } from './FrameworkSearchDocumentInterface';
import type { FrameworkSearchSearchCriteriaInterface } from './FrameworkSearchSearchCriteriaInterface';
/**
 * Interface SearchResultInterface
 * @export
 * @interface FrameworkSearchSearchResultInterface
 */
export interface FrameworkSearchSearchResultInterface {
    /**
     *
     * @type {Array<FrameworkSearchDocumentInterface>}
     * @memberof FrameworkSearchSearchResultInterface
     */
    items: Array<FrameworkSearchDocumentInterface>;
    /**
     *
     * @type {FrameworkSearchAggregationInterface}
     * @memberof FrameworkSearchSearchResultInterface
     */
    aggregations: FrameworkSearchAggregationInterface;
    /**
     *
     * @type {FrameworkSearchSearchCriteriaInterface}
     * @memberof FrameworkSearchSearchResultInterface
     */
    searchCriteria: FrameworkSearchSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof FrameworkSearchSearchResultInterface
     */
    totalCount: number;
}
/**
 * Check if a given object implements the FrameworkSearchSearchResultInterface interface.
 */
export declare function instanceOfFrameworkSearchSearchResultInterface(value: object): boolean;
export declare function FrameworkSearchSearchResultInterfaceFromJSON(json: any): FrameworkSearchSearchResultInterface;
export declare function FrameworkSearchSearchResultInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrameworkSearchSearchResultInterface;
export declare function FrameworkSearchSearchResultInterfaceToJSON(value?: FrameworkSearchSearchResultInterface | null): any;
