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
import type { FrameworkAttributeInterface } from './FrameworkAttributeInterface';
import {
    FrameworkAttributeInterfaceFromJSON,
    FrameworkAttributeInterfaceFromJSONTyped,
    FrameworkAttributeInterfaceToJSON,
} from './FrameworkAttributeInterface';
import type { QuoteDataAddressInterface } from './QuoteDataAddressInterface';
import {
    QuoteDataAddressInterfaceFromJSON,
    QuoteDataAddressInterfaceFromJSONTyped,
    QuoteDataAddressInterfaceToJSON,
} from './QuoteDataAddressInterface';

/**
 * Interface ShippingInformationInterface
 * @export
 * @interface CheckoutDataShippingInformationInterface
 */
export interface CheckoutDataShippingInformationInterface {
    /**
     * 
     * @type {QuoteDataAddressInterface}
     * @memberof CheckoutDataShippingInformationInterface
     */
    shippingAddress: QuoteDataAddressInterface;
    /**
     * 
     * @type {QuoteDataAddressInterface}
     * @memberof CheckoutDataShippingInformationInterface
     */
    billingAddress?: QuoteDataAddressInterface;
    /**
     * Shipping method code
     * @type {string}
     * @memberof CheckoutDataShippingInformationInterface
     */
    shippingMethodCode: string;
    /**
     * Carrier code
     * @type {string}
     * @memberof CheckoutDataShippingInformationInterface
     */
    shippingCarrierCode: string;
    /**
     * ExtensionInterface class for @see \Magento\Checkout\Api\Data\ShippingInformationInterface
     * @type {object}
     * @memberof CheckoutDataShippingInformationInterface
     */
    extensionAttributes?: object;
    /**
     * Custom attributes values.
     * @type {Array<FrameworkAttributeInterface>}
     * @memberof CheckoutDataShippingInformationInterface
     */
    customAttributes?: Array<FrameworkAttributeInterface>;
}

/**
 * Check if a given object implements the CheckoutDataShippingInformationInterface interface.
 */
export function instanceOfCheckoutDataShippingInformationInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "shippingAddress" in value;
    isInstance = isInstance && "shippingMethodCode" in value;
    isInstance = isInstance && "shippingCarrierCode" in value;

    return isInstance;
}

export function CheckoutDataShippingInformationInterfaceFromJSON(json: any): CheckoutDataShippingInformationInterface {
    return CheckoutDataShippingInformationInterfaceFromJSONTyped(json, false);
}

export function CheckoutDataShippingInformationInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckoutDataShippingInformationInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shippingAddress': QuoteDataAddressInterfaceFromJSON(json['shipping_address']),
        'billingAddress': !exists(json, 'billing_address') ? undefined : QuoteDataAddressInterfaceFromJSON(json['billing_address']),
        'shippingMethodCode': json['shipping_method_code'],
        'shippingCarrierCode': json['shipping_carrier_code'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'customAttributes': !exists(json, 'custom_attributes') ? undefined : ((json['custom_attributes'] as Array<any>).map(FrameworkAttributeInterfaceFromJSON)),
    };
}

export function CheckoutDataShippingInformationInterfaceToJSON(value?: CheckoutDataShippingInformationInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'shipping_address': QuoteDataAddressInterfaceToJSON(value.shippingAddress),
        'billing_address': QuoteDataAddressInterfaceToJSON(value.billingAddress),
        'shipping_method_code': value.shippingMethodCode,
        'shipping_carrier_code': value.shippingCarrierCode,
        'extension_attributes': value.extensionAttributes,
        'custom_attributes': value.customAttributes === undefined ? undefined : ((value.customAttributes as Array<any>).map(FrameworkAttributeInterfaceToJSON)),
    };
}

