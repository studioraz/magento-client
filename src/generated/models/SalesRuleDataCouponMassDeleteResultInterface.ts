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
/**
 * Coupon mass delete results interface.
 * @export
 * @interface SalesRuleDataCouponMassDeleteResultInterface
 */
export interface SalesRuleDataCouponMassDeleteResultInterface {
    /**
     * List of failed items.
     * @type {Array<string>}
     * @memberof SalesRuleDataCouponMassDeleteResultInterface
     */
    failedItems: Array<string>;
    /**
     * List of missing items.
     * @type {Array<string>}
     * @memberof SalesRuleDataCouponMassDeleteResultInterface
     */
    missingItems: Array<string>;
}

/**
 * Check if a given object implements the SalesRuleDataCouponMassDeleteResultInterface interface.
 */
export function instanceOfSalesRuleDataCouponMassDeleteResultInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "failedItems" in value;
    isInstance = isInstance && "missingItems" in value;

    return isInstance;
}

export function SalesRuleDataCouponMassDeleteResultInterfaceFromJSON(json: any): SalesRuleDataCouponMassDeleteResultInterface {
    return SalesRuleDataCouponMassDeleteResultInterfaceFromJSONTyped(json, false);
}

export function SalesRuleDataCouponMassDeleteResultInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesRuleDataCouponMassDeleteResultInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'failedItems': json['failed_items'],
        'missingItems': json['missing_items'],
    };
}

export function SalesRuleDataCouponMassDeleteResultInterfaceToJSON(value?: SalesRuleDataCouponMassDeleteResultInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'failed_items': value.failedItems,
        'missing_items': value.missingItems,
    };
}

