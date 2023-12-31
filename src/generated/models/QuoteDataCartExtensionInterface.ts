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
import type { QuoteDataShippingAssignmentInterface } from './QuoteDataShippingAssignmentInterface';
import {
    QuoteDataShippingAssignmentInterfaceFromJSON,
    QuoteDataShippingAssignmentInterfaceFromJSONTyped,
    QuoteDataShippingAssignmentInterfaceToJSON,
} from './QuoteDataShippingAssignmentInterface';

/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\CartInterface
 * @export
 * @interface QuoteDataCartExtensionInterface
 */
export interface QuoteDataCartExtensionInterface {
    /**
     * 
     * @type {Array<QuoteDataShippingAssignmentInterface>}
     * @memberof QuoteDataCartExtensionInterface
     */
    shippingAssignments?: Array<QuoteDataShippingAssignmentInterface>;
}

/**
 * Check if a given object implements the QuoteDataCartExtensionInterface interface.
 */
export function instanceOfQuoteDataCartExtensionInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuoteDataCartExtensionInterfaceFromJSON(json: any): QuoteDataCartExtensionInterface {
    return QuoteDataCartExtensionInterfaceFromJSONTyped(json, false);
}

export function QuoteDataCartExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataCartExtensionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shippingAssignments': !exists(json, 'shipping_assignments') ? undefined : ((json['shipping_assignments'] as Array<any>).map(QuoteDataShippingAssignmentInterfaceFromJSON)),
    };
}

export function QuoteDataCartExtensionInterfaceToJSON(value?: QuoteDataCartExtensionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'shipping_assignments': value.shippingAssignments === undefined ? undefined : ((value.shippingAssignments as Array<any>).map(QuoteDataShippingAssignmentInterfaceToJSON)),
    };
}

