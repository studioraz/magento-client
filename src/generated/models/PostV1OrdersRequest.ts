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
import type { SalesDataOrderInterface } from './SalesDataOrderInterface';
import {
    SalesDataOrderInterfaceFromJSON,
    SalesDataOrderInterfaceFromJSONTyped,
    SalesDataOrderInterfaceToJSON,
} from './SalesDataOrderInterface';

/**
 * 
 * @export
 * @interface PostV1OrdersRequest
 */
export interface PostV1OrdersRequest {
    /**
     * 
     * @type {SalesDataOrderInterface}
     * @memberof PostV1OrdersRequest
     */
    entity: SalesDataOrderInterface;
}

/**
 * Check if a given object implements the PostV1OrdersRequest interface.
 */
export function instanceOfPostV1OrdersRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "entity" in value;

    return isInstance;
}

export function PostV1OrdersRequestFromJSON(json: any): PostV1OrdersRequest {
    return PostV1OrdersRequestFromJSONTyped(json, false);
}

export function PostV1OrdersRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1OrdersRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entity': SalesDataOrderInterfaceFromJSON(json['entity']),
    };
}

export function PostV1OrdersRequestToJSON(value?: PostV1OrdersRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entity': SalesDataOrderInterfaceToJSON(value.entity),
    };
}

