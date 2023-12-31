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
import type { SalesDataOrderStatusHistoryInterface } from './SalesDataOrderStatusHistoryInterface';
import {
    SalesDataOrderStatusHistoryInterfaceFromJSON,
    SalesDataOrderStatusHistoryInterfaceFromJSONTyped,
    SalesDataOrderStatusHistoryInterfaceToJSON,
} from './SalesDataOrderStatusHistoryInterface';

/**
 * 
 * @export
 * @interface PostV1OrdersIdCommentsRequest
 */
export interface PostV1OrdersIdCommentsRequest {
    /**
     * 
     * @type {SalesDataOrderStatusHistoryInterface}
     * @memberof PostV1OrdersIdCommentsRequest
     */
    statusHistory: SalesDataOrderStatusHistoryInterface;
}

/**
 * Check if a given object implements the PostV1OrdersIdCommentsRequest interface.
 */
export function instanceOfPostV1OrdersIdCommentsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "statusHistory" in value;

    return isInstance;
}

export function PostV1OrdersIdCommentsRequestFromJSON(json: any): PostV1OrdersIdCommentsRequest {
    return PostV1OrdersIdCommentsRequestFromJSONTyped(json, false);
}

export function PostV1OrdersIdCommentsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1OrdersIdCommentsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusHistory': SalesDataOrderStatusHistoryInterfaceFromJSON(json['statusHistory']),
    };
}

export function PostV1OrdersIdCommentsRequestToJSON(value?: PostV1OrdersIdCommentsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statusHistory': SalesDataOrderStatusHistoryInterfaceToJSON(value.statusHistory),
    };
}

