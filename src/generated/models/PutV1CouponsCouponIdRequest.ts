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
import type { SalesRuleDataCouponInterface } from './SalesRuleDataCouponInterface';
import {
    SalesRuleDataCouponInterfaceFromJSON,
    SalesRuleDataCouponInterfaceFromJSONTyped,
    SalesRuleDataCouponInterfaceToJSON,
} from './SalesRuleDataCouponInterface';

/**
 * 
 * @export
 * @interface PutV1CouponsCouponIdRequest
 */
export interface PutV1CouponsCouponIdRequest {
    /**
     * 
     * @type {SalesRuleDataCouponInterface}
     * @memberof PutV1CouponsCouponIdRequest
     */
    coupon: SalesRuleDataCouponInterface;
}

/**
 * Check if a given object implements the PutV1CouponsCouponIdRequest interface.
 */
export function instanceOfPutV1CouponsCouponIdRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "coupon" in value;

    return isInstance;
}

export function PutV1CouponsCouponIdRequestFromJSON(json: any): PutV1CouponsCouponIdRequest {
    return PutV1CouponsCouponIdRequestFromJSONTyped(json, false);
}

export function PutV1CouponsCouponIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1CouponsCouponIdRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coupon': SalesRuleDataCouponInterfaceFromJSON(json['coupon']),
    };
}

export function PutV1CouponsCouponIdRequestToJSON(value?: PutV1CouponsCouponIdRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coupon': SalesRuleDataCouponInterfaceToJSON(value.coupon),
    };
}

