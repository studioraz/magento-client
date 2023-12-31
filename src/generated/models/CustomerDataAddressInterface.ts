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
import type { CustomerDataRegionInterface } from './CustomerDataRegionInterface';
import {
    CustomerDataRegionInterfaceFromJSON,
    CustomerDataRegionInterfaceFromJSONTyped,
    CustomerDataRegionInterfaceToJSON,
} from './CustomerDataRegionInterface';
import type { FrameworkAttributeInterface } from './FrameworkAttributeInterface';
import {
    FrameworkAttributeInterfaceFromJSON,
    FrameworkAttributeInterfaceFromJSONTyped,
    FrameworkAttributeInterfaceToJSON,
} from './FrameworkAttributeInterface';

/**
 * Customer address interface.
 * @export
 * @interface CustomerDataAddressInterface
 */
export interface CustomerDataAddressInterface {
    /**
     * ID
     * @type {number}
     * @memberof CustomerDataAddressInterface
     */
    id?: number;
    /**
     * Customer ID
     * @type {number}
     * @memberof CustomerDataAddressInterface
     */
    customerId?: number;
    /**
     * 
     * @type {CustomerDataRegionInterface}
     * @memberof CustomerDataAddressInterface
     */
    region?: CustomerDataRegionInterface;
    /**
     * Region ID
     * @type {number}
     * @memberof CustomerDataAddressInterface
     */
    regionId?: number;
    /**
     * Country code in ISO_3166-2 format
     * @type {string}
     * @memberof CustomerDataAddressInterface
     */
    countryId?: string;
    /**
     * Street
     * @type {Array<string>}
     * @memberof CustomerDataAddressInterface
     */
    street?: Array<string>;
    /**
     * Company
     * @type {string}
     * @memberof CustomerDataAddressInterface
     */
    company?: string;
    /**
     * Telephone number
     * @type {string}
     * @memberof CustomerDataAddressInterface
     */
    telephone?: string;
    /**
     * Fax number
     * @type {string}
     * @memberof CustomerDataAddressInterface
     */
    fax?: string;
    /**
     * Postcode
     * @type {string}
     * @memberof CustomerDataAddressInterface
     */
    postcode?: string;
    /**
     * City name
     * @type {string}
     * @memberof CustomerDataAddressInterface
     */
    city?: string;
    /**
     * First name
     * @type {string}
     * @memberof CustomerDataAddressInterface
     */
    firstname?: string;
    /**
     * Last name
     * @type {string}
     * @memberof CustomerDataAddressInterface
     */
    lastname?: string;
    /**
     * Middle name
     * @type {string}
     * @memberof CustomerDataAddressInterface
     */
    middlename?: string;
    /**
     * Prefix
     * @type {string}
     * @memberof CustomerDataAddressInterface
     */
    prefix?: string;
    /**
     * Suffix
     * @type {string}
     * @memberof CustomerDataAddressInterface
     */
    suffix?: string;
    /**
     * Vat id
     * @type {string}
     * @memberof CustomerDataAddressInterface
     */
    vatId?: string;
    /**
     * If this address is default shipping address.
     * @type {boolean}
     * @memberof CustomerDataAddressInterface
     */
    defaultShipping?: boolean;
    /**
     * If this address is default billing address
     * @type {boolean}
     * @memberof CustomerDataAddressInterface
     */
    defaultBilling?: boolean;
    /**
     * ExtensionInterface class for @see \Magento\Customer\Api\Data\AddressInterface
     * @type {object}
     * @memberof CustomerDataAddressInterface
     */
    extensionAttributes?: object;
    /**
     * Custom attributes values.
     * @type {Array<FrameworkAttributeInterface>}
     * @memberof CustomerDataAddressInterface
     */
    customAttributes?: Array<FrameworkAttributeInterface>;
}

/**
 * Check if a given object implements the CustomerDataAddressInterface interface.
 */
export function instanceOfCustomerDataAddressInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerDataAddressInterfaceFromJSON(json: any): CustomerDataAddressInterface {
    return CustomerDataAddressInterfaceFromJSONTyped(json, false);
}

export function CustomerDataAddressInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerDataAddressInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'customerId': !exists(json, 'customer_id') ? undefined : json['customer_id'],
        'region': !exists(json, 'region') ? undefined : CustomerDataRegionInterfaceFromJSON(json['region']),
        'regionId': !exists(json, 'region_id') ? undefined : json['region_id'],
        'countryId': !exists(json, 'country_id') ? undefined : json['country_id'],
        'street': !exists(json, 'street') ? undefined : json['street'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'telephone': !exists(json, 'telephone') ? undefined : json['telephone'],
        'fax': !exists(json, 'fax') ? undefined : json['fax'],
        'postcode': !exists(json, 'postcode') ? undefined : json['postcode'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'firstname': !exists(json, 'firstname') ? undefined : json['firstname'],
        'lastname': !exists(json, 'lastname') ? undefined : json['lastname'],
        'middlename': !exists(json, 'middlename') ? undefined : json['middlename'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'suffix': !exists(json, 'suffix') ? undefined : json['suffix'],
        'vatId': !exists(json, 'vat_id') ? undefined : json['vat_id'],
        'defaultShipping': !exists(json, 'default_shipping') ? undefined : json['default_shipping'],
        'defaultBilling': !exists(json, 'default_billing') ? undefined : json['default_billing'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'customAttributes': !exists(json, 'custom_attributes') ? undefined : ((json['custom_attributes'] as Array<any>).map(FrameworkAttributeInterfaceFromJSON)),
    };
}

export function CustomerDataAddressInterfaceToJSON(value?: CustomerDataAddressInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'customer_id': value.customerId,
        'region': CustomerDataRegionInterfaceToJSON(value.region),
        'region_id': value.regionId,
        'country_id': value.countryId,
        'street': value.street,
        'company': value.company,
        'telephone': value.telephone,
        'fax': value.fax,
        'postcode': value.postcode,
        'city': value.city,
        'firstname': value.firstname,
        'lastname': value.lastname,
        'middlename': value.middlename,
        'prefix': value.prefix,
        'suffix': value.suffix,
        'vat_id': value.vatId,
        'default_shipping': value.defaultShipping,
        'default_billing': value.defaultBilling,
        'extension_attributes': value.extensionAttributes,
        'custom_attributes': value.customAttributes === undefined ? undefined : ((value.customAttributes as Array<any>).map(FrameworkAttributeInterfaceToJSON)),
    };
}

