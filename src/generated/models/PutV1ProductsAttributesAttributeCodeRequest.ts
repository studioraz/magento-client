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
import type { CatalogDataProductAttributeInterface } from './CatalogDataProductAttributeInterface';
import {
    CatalogDataProductAttributeInterfaceFromJSON,
    CatalogDataProductAttributeInterfaceFromJSONTyped,
    CatalogDataProductAttributeInterfaceToJSON,
} from './CatalogDataProductAttributeInterface';

/**
 * 
 * @export
 * @interface PutV1ProductsAttributesAttributeCodeRequest
 */
export interface PutV1ProductsAttributesAttributeCodeRequest {
    /**
     * 
     * @type {CatalogDataProductAttributeInterface}
     * @memberof PutV1ProductsAttributesAttributeCodeRequest
     */
    attribute: CatalogDataProductAttributeInterface;
}

/**
 * Check if a given object implements the PutV1ProductsAttributesAttributeCodeRequest interface.
 */
export function instanceOfPutV1ProductsAttributesAttributeCodeRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attribute" in value;

    return isInstance;
}

export function PutV1ProductsAttributesAttributeCodeRequestFromJSON(json: any): PutV1ProductsAttributesAttributeCodeRequest {
    return PutV1ProductsAttributesAttributeCodeRequestFromJSONTyped(json, false);
}

export function PutV1ProductsAttributesAttributeCodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1ProductsAttributesAttributeCodeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attribute': CatalogDataProductAttributeInterfaceFromJSON(json['attribute']),
    };
}

export function PutV1ProductsAttributesAttributeCodeRequestToJSON(value?: PutV1ProductsAttributesAttributeCodeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attribute': CatalogDataProductAttributeInterfaceToJSON(value.attribute),
    };
}

