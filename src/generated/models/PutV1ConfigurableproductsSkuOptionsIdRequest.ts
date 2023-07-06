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
import type { ConfigurableProductDataOptionInterface } from './ConfigurableProductDataOptionInterface';
import {
    ConfigurableProductDataOptionInterfaceFromJSON,
    ConfigurableProductDataOptionInterfaceFromJSONTyped,
    ConfigurableProductDataOptionInterfaceToJSON,
} from './ConfigurableProductDataOptionInterface';

/**
 * 
 * @export
 * @interface PutV1ConfigurableproductsSkuOptionsIdRequest
 */
export interface PutV1ConfigurableproductsSkuOptionsIdRequest {
    /**
     * 
     * @type {ConfigurableProductDataOptionInterface}
     * @memberof PutV1ConfigurableproductsSkuOptionsIdRequest
     */
    option: ConfigurableProductDataOptionInterface;
}

/**
 * Check if a given object implements the PutV1ConfigurableproductsSkuOptionsIdRequest interface.
 */
export function instanceOfPutV1ConfigurableproductsSkuOptionsIdRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "option" in value;

    return isInstance;
}

export function PutV1ConfigurableproductsSkuOptionsIdRequestFromJSON(json: any): PutV1ConfigurableproductsSkuOptionsIdRequest {
    return PutV1ConfigurableproductsSkuOptionsIdRequestFromJSONTyped(json, false);
}

export function PutV1ConfigurableproductsSkuOptionsIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1ConfigurableproductsSkuOptionsIdRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'option': ConfigurableProductDataOptionInterfaceFromJSON(json['option']),
    };
}

export function PutV1ConfigurableproductsSkuOptionsIdRequestToJSON(value?: PutV1ConfigurableproductsSkuOptionsIdRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'option': ConfigurableProductDataOptionInterfaceToJSON(value.option),
    };
}

