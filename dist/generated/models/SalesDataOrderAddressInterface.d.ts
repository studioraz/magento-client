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
/**
 * Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 * @export
 * @interface SalesDataOrderAddressInterface
 */
export interface SalesDataOrderAddressInterface {
    /**
     * Address type.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    addressType: string;
    /**
     * City.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    city: string;
    /**
     * Company.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    company?: string;
    /**
     * Country ID.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    countryId: string;
    /**
     * Country address ID.
     * @type {number}
     * @memberof SalesDataOrderAddressInterface
     */
    customerAddressId?: number;
    /**
     * Customer ID.
     * @type {number}
     * @memberof SalesDataOrderAddressInterface
     */
    customerId?: number;
    /**
     * Email address.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    email?: string;
    /**
     * Order address ID.
     * @type {number}
     * @memberof SalesDataOrderAddressInterface
     */
    entityId?: number;
    /**
     * Fax number.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    fax?: string;
    /**
     * First name.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    firstname: string;
    /**
     * Last name.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    lastname: string;
    /**
     * Middle name.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    middlename?: string;
    /**
     * Parent ID.
     * @type {number}
     * @memberof SalesDataOrderAddressInterface
     */
    parentId?: number;
    /**
     * Postal code.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    postcode: string;
    /**
     * Prefix.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    prefix?: string;
    /**
     * Region.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    region?: string;
    /**
     * Region code.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    regionCode?: string;
    /**
     * Region ID.
     * @type {number}
     * @memberof SalesDataOrderAddressInterface
     */
    regionId?: number;
    /**
     * Array of any street values. Otherwise, null.
     * @type {Array<string>}
     * @memberof SalesDataOrderAddressInterface
     */
    street?: Array<string>;
    /**
     * Suffix.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    suffix?: string;
    /**
     * Telephone number.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    telephone: string;
    /**
     * VAT ID.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    vatId?: string;
    /**
     * VAT-is-valid flag value.
     * @type {number}
     * @memberof SalesDataOrderAddressInterface
     */
    vatIsValid?: number;
    /**
     * VAT request date.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    vatRequestDate?: string;
    /**
     * VAT request ID.
     * @type {string}
     * @memberof SalesDataOrderAddressInterface
     */
    vatRequestId?: string;
    /**
     * VAT-request-success flag value.
     * @type {number}
     * @memberof SalesDataOrderAddressInterface
     */
    vatRequestSuccess?: number;
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderAddressInterface
     * @type {object}
     * @memberof SalesDataOrderAddressInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the SalesDataOrderAddressInterface interface.
 */
export declare function instanceOfSalesDataOrderAddressInterface(value: object): boolean;
export declare function SalesDataOrderAddressInterfaceFromJSON(json: any): SalesDataOrderAddressInterface;
export declare function SalesDataOrderAddressInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataOrderAddressInterface;
export declare function SalesDataOrderAddressInterfaceToJSON(value?: SalesDataOrderAddressInterface | null): any;
