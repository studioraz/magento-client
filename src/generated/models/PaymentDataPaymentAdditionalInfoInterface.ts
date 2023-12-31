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
 * Payment additional info interface.
 * @export
 * @interface PaymentDataPaymentAdditionalInfoInterface
 */
export interface PaymentDataPaymentAdditionalInfoInterface {
    /**
     * Object key
     * @type {string}
     * @memberof PaymentDataPaymentAdditionalInfoInterface
     */
    key: string;
    /**
     * Object value
     * @type {string}
     * @memberof PaymentDataPaymentAdditionalInfoInterface
     */
    value: string;
}

/**
 * Check if a given object implements the PaymentDataPaymentAdditionalInfoInterface interface.
 */
export function instanceOfPaymentDataPaymentAdditionalInfoInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function PaymentDataPaymentAdditionalInfoInterfaceFromJSON(json: any): PaymentDataPaymentAdditionalInfoInterface {
    return PaymentDataPaymentAdditionalInfoInterfaceFromJSONTyped(json, false);
}

export function PaymentDataPaymentAdditionalInfoInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentDataPaymentAdditionalInfoInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': json['value'],
    };
}

export function PaymentDataPaymentAdditionalInfoInterfaceToJSON(value?: PaymentDataPaymentAdditionalInfoInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'value': value.value,
    };
}

