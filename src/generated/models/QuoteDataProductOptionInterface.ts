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
import type { QuoteDataProductOptionExtensionInterface } from './QuoteDataProductOptionExtensionInterface';
import {
    QuoteDataProductOptionExtensionInterfaceFromJSON,
    QuoteDataProductOptionExtensionInterfaceFromJSONTyped,
    QuoteDataProductOptionExtensionInterfaceToJSON,
} from './QuoteDataProductOptionExtensionInterface';

/**
 * Product option interface
 * @export
 * @interface QuoteDataProductOptionInterface
 */
export interface QuoteDataProductOptionInterface {
    /**
     * 
     * @type {QuoteDataProductOptionExtensionInterface}
     * @memberof QuoteDataProductOptionInterface
     */
    extensionAttributes?: QuoteDataProductOptionExtensionInterface;
}

/**
 * Check if a given object implements the QuoteDataProductOptionInterface interface.
 */
export function instanceOfQuoteDataProductOptionInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuoteDataProductOptionInterfaceFromJSON(json: any): QuoteDataProductOptionInterface {
    return QuoteDataProductOptionInterfaceFromJSONTyped(json, false);
}

export function QuoteDataProductOptionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataProductOptionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : QuoteDataProductOptionExtensionInterfaceFromJSON(json['extension_attributes']),
    };
}

export function QuoteDataProductOptionInterfaceToJSON(value?: QuoteDataProductOptionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extension_attributes': QuoteDataProductOptionExtensionInterfaceToJSON(value.extensionAttributes),
    };
}

