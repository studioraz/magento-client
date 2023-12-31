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
import type { SalesDataShipmentTrackInterface } from './SalesDataShipmentTrackInterface';
import {
    SalesDataShipmentTrackInterfaceFromJSON,
    SalesDataShipmentTrackInterfaceFromJSONTyped,
    SalesDataShipmentTrackInterfaceToJSON,
} from './SalesDataShipmentTrackInterface';

/**
 * 
 * @export
 * @interface PostV1ShipmentTrackRequest
 */
export interface PostV1ShipmentTrackRequest {
    /**
     * 
     * @type {SalesDataShipmentTrackInterface}
     * @memberof PostV1ShipmentTrackRequest
     */
    entity: SalesDataShipmentTrackInterface;
}

/**
 * Check if a given object implements the PostV1ShipmentTrackRequest interface.
 */
export function instanceOfPostV1ShipmentTrackRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "entity" in value;

    return isInstance;
}

export function PostV1ShipmentTrackRequestFromJSON(json: any): PostV1ShipmentTrackRequest {
    return PostV1ShipmentTrackRequestFromJSONTyped(json, false);
}

export function PostV1ShipmentTrackRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1ShipmentTrackRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entity': SalesDataShipmentTrackInterfaceFromJSON(json['entity']),
    };
}

export function PostV1ShipmentTrackRequestToJSON(value?: PostV1ShipmentTrackRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entity': SalesDataShipmentTrackInterfaceToJSON(value.entity),
    };
}

