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
export function instanceOfFrameworkCriteriaInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mapperInterfaceName" in value;
    isInstance = isInstance && "criteriaList" in value;
    isInstance = isInstance && "filters" in value;
    isInstance = isInstance && "orders" in value;
    isInstance = isInstance && "limit" in value;

    return isInstance;
}

export function FrameworkCriteriaInterfaceFromJSON(json: any): FrameworkCriteriaInterface {
    return FrameworkCriteriaInterfaceFromJSONTyped(json, false);
}

export function FrameworkCriteriaInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrameworkCriteriaInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mapperInterfaceName': json['mapper_interface_name'],
        'criteriaList': ((json['criteria_list'] as Array<any>).map(FrameworkCriteriaInterfaceFromJSON)),
        'filters': json['filters'],
        'orders': json['orders'],
        'limit': json['limit'],
    };
}

export function FrameworkCriteriaInterfaceToJSON(value?: FrameworkCriteriaInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mapper_interface_name': value.mapperInterfaceName,
        'criteria_list': ((value.criteriaList as Array<any>).map(FrameworkCriteriaInterfaceToJSON)),
        'filters': value.filters,
        'orders': value.orders,
        'limit': value.limit,
    };
}

