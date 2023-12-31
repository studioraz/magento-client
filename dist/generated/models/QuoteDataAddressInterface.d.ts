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
import type { FrameworkAttributeInterface } from './FrameworkAttributeInterface';
import type { QuoteDataAddressExtensionInterface } from './QuoteDataAddressExtensionInterface';
/**
 * Interface AddressInterface
 * @export
 * @interface QuoteDataAddressInterface
 */
export interface QuoteDataAddressInterface {
    /**
     * Id
     * @type {number}
     * @memberof QuoteDataAddressInterface
     */
    id?: number;
    /**
     * Region name
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    region: string;
    /**
     * Region id
     * @type {number}
     * @memberof QuoteDataAddressInterface
     */
    regionId: number;
    /**
     * Region code
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    regionCode: string;
    /**
     * Country id
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    countryId: string;
    /**
     * Street
     * @type {Array<string>}
     * @memberof QuoteDataAddressInterface
     */
    street: Array<string>;
    /**
     * Company
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    company?: string;
    /**
     * Telephone number
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    telephone: string;
    /**
     * Fax number
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    fax?: string;
    /**
     * Postcode
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    postcode: string;
    /**
     * City name
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    city: string;
    /**
     * First name
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    firstname: string;
    /**
     * Last name
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    lastname: string;
    /**
     * Middle name
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    middlename?: string;
    /**
     * Prefix
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    prefix?: string;
    /**
     * Suffix
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    suffix?: string;
    /**
     * Vat id
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    vatId?: string;
    /**
     * Customer id
     * @type {number}
     * @memberof QuoteDataAddressInterface
     */
    customerId?: number;
    /**
     * Billing/shipping email
     * @type {string}
     * @memberof QuoteDataAddressInterface
     */
    email: string;
    /**
     * Same as billing flag
     * @type {number}
     * @memberof QuoteDataAddressInterface
     */
    sameAsBilling?: number;
    /**
     * Customer address id
     * @type {number}
     * @memberof QuoteDataAddressInterface
     */
    customerAddressId?: number;
    /**
     * Save in address book flag
     * @type {number}
     * @memberof QuoteDataAddressInterface
     */
    saveInAddressBook?: number;
    /**
     *
     * @type {QuoteDataAddressExtensionInterface}
     * @memberof QuoteDataAddressInterface
     */
    extensionAttributes?: QuoteDataAddressExtensionInterface;
    /**
     * Custom attributes values.
     * @type {Array<FrameworkAttributeInterface>}
     * @memberof QuoteDataAddressInterface
     */
    customAttributes?: Array<FrameworkAttributeInterface>;
}
/**
 * Check if a given object implements the QuoteDataAddressInterface interface.
 */
export declare function instanceOfQuoteDataAddressInterface(value: object): boolean;
export declare function QuoteDataAddressInterfaceFromJSON(json: any): QuoteDataAddressInterface;
export declare function QuoteDataAddressInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuoteDataAddressInterface;
export declare function QuoteDataAddressInterfaceToJSON(value?: QuoteDataAddressInterface | null): any;
