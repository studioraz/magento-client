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
import type { CmsDataPageInterface } from './CmsDataPageInterface';
import {
    CmsDataPageInterfaceFromJSON,
    CmsDataPageInterfaceFromJSONTyped,
    CmsDataPageInterfaceToJSON,
} from './CmsDataPageInterface';

/**
 * 
 * @export
 * @interface PostV1CmsPageRequest
 */
export interface PostV1CmsPageRequest {
    /**
     * 
     * @type {CmsDataPageInterface}
     * @memberof PostV1CmsPageRequest
     */
    page: CmsDataPageInterface;
}

/**
 * Check if a given object implements the PostV1CmsPageRequest interface.
 */
export function instanceOfPostV1CmsPageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "page" in value;

    return isInstance;
}

export function PostV1CmsPageRequestFromJSON(json: any): PostV1CmsPageRequest {
    return PostV1CmsPageRequestFromJSONTyped(json, false);
}

export function PostV1CmsPageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1CmsPageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': CmsDataPageInterfaceFromJSON(json['page']),
    };
}

export function PostV1CmsPageRequestToJSON(value?: PostV1CmsPageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'page': CmsDataPageInterfaceToJSON(value.page),
    };
}

