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
import type { CustomerDataAddressInterface } from './CustomerDataAddressInterface';
import type { CustomerDataCustomerExtensionInterface } from './CustomerDataCustomerExtensionInterface';
import type { FrameworkAttributeInterface } from './FrameworkAttributeInterface';
/**
 * Customer entity interface for API handling.
 * @export
 * @interface CustomerDataCustomerInterface
 */
export interface CustomerDataCustomerInterface {
    /**
     * Customer id
     * @type {number}
     * @memberof CustomerDataCustomerInterface
     */
    id?: number;
    /**
     * Group id
     * @type {number}
     * @memberof CustomerDataCustomerInterface
     */
    groupId?: number;
    /**
     * Default billing address id
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    defaultBilling?: string;
    /**
     * Default shipping address id
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    defaultShipping?: string;
    /**
     * Confirmation
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    confirmation?: string;
    /**
     * Created at time
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    createdAt?: string;
    /**
     * Updated at time
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    updatedAt?: string;
    /**
     * Created in area
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    createdIn?: string;
    /**
     * In keeping with current security and privacy best practices, be sure you are aware of any potential legal and security risks associated with the storage of customers’ full date of birth (month, day, year) along with other personal identifiers (e.g., full name) before collecting or processing such data.
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    dob?: string;
    /**
     * Email address
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    email: string;
    /**
     * First name
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    firstname: string;
    /**
     * Last name
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    lastname: string;
    /**
     * Middle name
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    middlename?: string;
    /**
     * Prefix
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    prefix?: string;
    /**
     * Suffix
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    suffix?: string;
    /**
     * Gender
     * @type {number}
     * @memberof CustomerDataCustomerInterface
     */
    gender?: number;
    /**
     * Store id
     * @type {number}
     * @memberof CustomerDataCustomerInterface
     */
    storeId?: number;
    /**
     * Tax Vat
     * @type {string}
     * @memberof CustomerDataCustomerInterface
     */
    taxvat?: string;
    /**
     * Website id
     * @type {number}
     * @memberof CustomerDataCustomerInterface
     */
    websiteId?: number;
    /**
     * Customer addresses.
     * @type {Array<CustomerDataAddressInterface>}
     * @memberof CustomerDataCustomerInterface
     */
    addresses?: Array<CustomerDataAddressInterface>;
    /**
     * Disable auto group change flag.
     * @type {number}
     * @memberof CustomerDataCustomerInterface
     */
    disableAutoGroupChange?: number;
    /**
     *
     * @type {CustomerDataCustomerExtensionInterface}
     * @memberof CustomerDataCustomerInterface
     */
    extensionAttributes?: CustomerDataCustomerExtensionInterface;
    /**
     * Custom attributes values.
     * @type {Array<FrameworkAttributeInterface>}
     * @memberof CustomerDataCustomerInterface
     */
    customAttributes?: Array<FrameworkAttributeInterface>;
}
/**
 * Check if a given object implements the CustomerDataCustomerInterface interface.
 */
export declare function instanceOfCustomerDataCustomerInterface(value: object): boolean;
export declare function CustomerDataCustomerInterfaceFromJSON(json: any): CustomerDataCustomerInterface;
export declare function CustomerDataCustomerInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerDataCustomerInterface;
export declare function CustomerDataCustomerInterfaceToJSON(value?: CustomerDataCustomerInterface | null): any;
