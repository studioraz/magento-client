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
import type { SalesDataOrderAddressInterface } from './SalesDataOrderAddressInterface';
import {
    SalesDataOrderAddressInterfaceFromJSON,
    SalesDataOrderAddressInterfaceFromJSONTyped,
    SalesDataOrderAddressInterfaceToJSON,
} from './SalesDataOrderAddressInterface';

/**
 * 
 * @export
 * @interface PutV1OrdersParentIdRequest
 */
export interface PutV1OrdersParentIdRequest {
    /**
     * 
     * @type {SalesDataOrderAddressInterface}
     * @memberof PutV1OrdersParentIdRequest
     */
    entity: SalesDataOrderAddressInterface;
}

/**
 * Check if a given object implements the PutV1OrdersParentIdRequest interface.
 */
export function instanceOfPutV1OrdersParentIdRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "entity" in value;

    return isInstance;
}

export function PutV1OrdersParentIdRequestFromJSON(json: any): PutV1OrdersParentIdRequest {
    return PutV1OrdersParentIdRequestFromJSONTyped(json, false);
}

export function PutV1OrdersParentIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1OrdersParentIdRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entity': SalesDataOrderAddressInterfaceFromJSON(json['entity']),
    };
}

export function PutV1OrdersParentIdRequestToJSON(value?: PutV1OrdersParentIdRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entity': SalesDataOrderAddressInterfaceToJSON(value.entity),
    };
}

