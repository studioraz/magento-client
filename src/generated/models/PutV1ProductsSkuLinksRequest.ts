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
import type { CatalogDataProductLinkInterface } from './CatalogDataProductLinkInterface';
import {
    CatalogDataProductLinkInterfaceFromJSON,
    CatalogDataProductLinkInterfaceFromJSONTyped,
    CatalogDataProductLinkInterfaceToJSON,
} from './CatalogDataProductLinkInterface';

/**
 * 
 * @export
 * @interface PutV1ProductsSkuLinksRequest
 */
export interface PutV1ProductsSkuLinksRequest {
    /**
     * 
     * @type {CatalogDataProductLinkInterface}
     * @memberof PutV1ProductsSkuLinksRequest
     */
    entity: CatalogDataProductLinkInterface;
}

/**
 * Check if a given object implements the PutV1ProductsSkuLinksRequest interface.
 */
export function instanceOfPutV1ProductsSkuLinksRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "entity" in value;

    return isInstance;
}

export function PutV1ProductsSkuLinksRequestFromJSON(json: any): PutV1ProductsSkuLinksRequest {
    return PutV1ProductsSkuLinksRequestFromJSONTyped(json, false);
}

export function PutV1ProductsSkuLinksRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1ProductsSkuLinksRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entity': CatalogDataProductLinkInterfaceFromJSON(json['entity']),
    };
}

export function PutV1ProductsSkuLinksRequestToJSON(value?: PutV1ProductsSkuLinksRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entity': CatalogDataProductLinkInterfaceToJSON(value.entity),
    };
}

