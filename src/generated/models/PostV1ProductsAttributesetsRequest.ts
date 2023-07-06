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
import type { EavDataAttributeSetInterface } from './EavDataAttributeSetInterface';
import {
    EavDataAttributeSetInterfaceFromJSON,
    EavDataAttributeSetInterfaceFromJSONTyped,
    EavDataAttributeSetInterfaceToJSON,
} from './EavDataAttributeSetInterface';

/**
 * 
 * @export
 * @interface PostV1ProductsAttributesetsRequest
 */
export interface PostV1ProductsAttributesetsRequest {
    /**
     * 
     * @type {EavDataAttributeSetInterface}
     * @memberof PostV1ProductsAttributesetsRequest
     */
    attributeSet: EavDataAttributeSetInterface;
    /**
     * 
     * @type {number}
     * @memberof PostV1ProductsAttributesetsRequest
     */
    skeletonId: number;
}

/**
 * Check if a given object implements the PostV1ProductsAttributesetsRequest interface.
 */
export function instanceOfPostV1ProductsAttributesetsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attributeSet" in value;
    isInstance = isInstance && "skeletonId" in value;

    return isInstance;
}

export function PostV1ProductsAttributesetsRequestFromJSON(json: any): PostV1ProductsAttributesetsRequest {
    return PostV1ProductsAttributesetsRequestFromJSONTyped(json, false);
}

export function PostV1ProductsAttributesetsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1ProductsAttributesetsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributeSet': EavDataAttributeSetInterfaceFromJSON(json['attributeSet']),
        'skeletonId': json['skeletonId'],
    };
}

export function PostV1ProductsAttributesetsRequestToJSON(value?: PostV1ProductsAttributesetsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributeSet': EavDataAttributeSetInterfaceToJSON(value.attributeSet),
        'skeletonId': value.skeletonId,
    };
}

