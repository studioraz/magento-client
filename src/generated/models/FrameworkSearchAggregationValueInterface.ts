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
 * Interface Aggregation Value
 * @export
 * @interface FrameworkSearchAggregationValueInterface
 */
export interface FrameworkSearchAggregationValueInterface {
    /**
     * Aggregation
     * @type {string}
     * @memberof FrameworkSearchAggregationValueInterface
     */
    value: string;
    /**
     * Metrics
     * @type {Array<string>}
     * @memberof FrameworkSearchAggregationValueInterface
     */
    metrics: Array<string>;
}

/**
 * Check if a given object implements the FrameworkSearchAggregationValueInterface interface.
 */
export function instanceOfFrameworkSearchAggregationValueInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "metrics" in value;

    return isInstance;
}

export function FrameworkSearchAggregationValueInterfaceFromJSON(json: any): FrameworkSearchAggregationValueInterface {
    return FrameworkSearchAggregationValueInterfaceFromJSONTyped(json, false);
}

export function FrameworkSearchAggregationValueInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): FrameworkSearchAggregationValueInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
        'metrics': json['metrics'],
    };
}

export function FrameworkSearchAggregationValueInterfaceToJSON(value?: FrameworkSearchAggregationValueInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'metrics': value.metrics,
    };
}

