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
import type { QuoteDataCartItemInterface } from './QuoteDataCartItemInterface';
import {
    QuoteDataCartItemInterfaceFromJSON,
    QuoteDataCartItemInterfaceFromJSONTyped,
    QuoteDataCartItemInterfaceToJSON,
} from './QuoteDataCartItemInterface';

/**
 * 
 * @export
 * @interface PostV1CartsQuoteIdItemsRequest
 */
export interface PostV1CartsQuoteIdItemsRequest {
    /**
     * 
     * @type {QuoteDataCartItemInterface}
     * @memberof PostV1CartsQuoteIdItemsRequest
     */
    cartItem: QuoteDataCartItemInterface;
}

/**
 * Check if a given object implements the PostV1CartsQuoteIdItemsRequest interface.
 */
export function instanceOfPostV1CartsQuoteIdItemsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cartItem" in value;

    return isInstance;
}

export function PostV1CartsQuoteIdItemsRequestFromJSON(json: any): PostV1CartsQuoteIdItemsRequest {
    return PostV1CartsQuoteIdItemsRequestFromJSONTyped(json, false);
}

export function PostV1CartsQuoteIdItemsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1CartsQuoteIdItemsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cartItem': QuoteDataCartItemInterfaceFromJSON(json['cartItem']),
    };
}

export function PostV1CartsQuoteIdItemsRequestToJSON(value?: PostV1CartsQuoteIdItemsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cartItem': QuoteDataCartItemInterfaceToJSON(value.cartItem),
    };
}

