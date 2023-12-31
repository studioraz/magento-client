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
import type { EavDataAttributeGroupInterface } from './EavDataAttributeGroupInterface';
import type { FrameworkSearchCriteriaInterface } from './FrameworkSearchCriteriaInterface';
/**
 * Interface AttributeGroupSearchResultsInterface
 * @export
 * @interface EavDataAttributeGroupSearchResultsInterface
 */
export interface EavDataAttributeGroupSearchResultsInterface {
    /**
     * Attribute sets list.
     * @type {Array<EavDataAttributeGroupInterface>}
     * @memberof EavDataAttributeGroupSearchResultsInterface
     */
    items: Array<EavDataAttributeGroupInterface>;
    /**
     *
     * @type {FrameworkSearchCriteriaInterface}
     * @memberof EavDataAttributeGroupSearchResultsInterface
     */
    searchCriteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     * @type {number}
     * @memberof EavDataAttributeGroupSearchResultsInterface
     */
    totalCount: number;
}
/**
 * Check if a given object implements the EavDataAttributeGroupSearchResultsInterface interface.
 */
export declare function instanceOfEavDataAttributeGroupSearchResultsInterface(value: object): boolean;
export declare function EavDataAttributeGroupSearchResultsInterfaceFromJSON(json: any): EavDataAttributeGroupSearchResultsInterface;
export declare function EavDataAttributeGroupSearchResultsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): EavDataAttributeGroupSearchResultsInterface;
export declare function EavDataAttributeGroupSearchResultsInterfaceToJSON(value?: EavDataAttributeGroupSearchResultsInterface | null): any;
