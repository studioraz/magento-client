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
import type { FrameworkSearchAggregationValueInterface } from './FrameworkSearchAggregationValueInterface';
/**
 * Interface for facet Bucket
 * @export
 * @interface FrameworkSearchBucketInterface
 */
export interface FrameworkSearchBucketInterface {
    /**
     * Field name
     * @type {string}
     * @memberof FrameworkSearchBucketInterface
     */
    name: string;
    /**
     * Field values
     * @type {Array<FrameworkSearchAggregationValueInterface>}
     * @memberof FrameworkSearchBucketInterface
     */
    values: Array<FrameworkSearchAggregationValueInterface>;
}
/**
 * Check if a given object implements the FrameworkSearchBucketInterface interface.
 */
export declare function instanceOfFrameworkSearchBucketInterface(value: object): boolean;
export declare function FrameworkSearchBucketInterfaceFromJSON(json: any): FrameworkSearchBucketInterface;
export declare function FrameworkSearchBucketInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrameworkSearchBucketInterface;
export declare function FrameworkSearchBucketInterfaceToJSON(value?: FrameworkSearchBucketInterface | null): any;