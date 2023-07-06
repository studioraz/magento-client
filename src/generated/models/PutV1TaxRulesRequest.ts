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
import type { TaxDataTaxRuleInterface } from './TaxDataTaxRuleInterface';
import {
    TaxDataTaxRuleInterfaceFromJSON,
    TaxDataTaxRuleInterfaceFromJSONTyped,
    TaxDataTaxRuleInterfaceToJSON,
} from './TaxDataTaxRuleInterface';

/**
 * 
 * @export
 * @interface PutV1TaxRulesRequest
 */
export interface PutV1TaxRulesRequest {
    /**
     * 
     * @type {TaxDataTaxRuleInterface}
     * @memberof PutV1TaxRulesRequest
     */
    rule: TaxDataTaxRuleInterface;
}

/**
 * Check if a given object implements the PutV1TaxRulesRequest interface.
 */
export function instanceOfPutV1TaxRulesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rule" in value;

    return isInstance;
}

export function PutV1TaxRulesRequestFromJSON(json: any): PutV1TaxRulesRequest {
    return PutV1TaxRulesRequestFromJSONTyped(json, false);
}

export function PutV1TaxRulesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1TaxRulesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rule': TaxDataTaxRuleInterfaceFromJSON(json['rule']),
    };
}

export function PutV1TaxRulesRequestToJSON(value?: PutV1TaxRulesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rule': TaxDataTaxRuleInterfaceToJSON(value.rule),
    };
}

