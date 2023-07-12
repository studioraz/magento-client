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
 * Represents sources projection on In-Store Pickup context. Realisation must follow immutable DTO concept. Partial immutability done according to restriction of current Extension Attributes implementation.
 * @export
 * @interface InventoryInStorePickupApiDataPickupLocationInterface
 */
export interface InventoryInStorePickupApiDataPickupLocationInterface {
    /**
     * Source code of Pickup Location.
     * @type {string}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    pickupLocationCode: string;
    /**
     * Pickup Location name.
     * @type {string}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    name?: string;
    /**
     * Pickup Location contact email.
     * @type {string}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    email?: string;
    /**
     * Fax contact info.
     * @type {string}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    fax?: string;
    /**
     * Pickup Location contact name.
     * @type {string}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    contactName?: string;
    /**
     * Pickup Location description.
     * @type {string}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    description?: string;
    /**
     * Pickup Location latitude.
     * @type {number}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    latitude?: number;
    /**
     * Pickup Location longitude.
     * @type {number}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    longitude?: number;
    /**
     * Pickup Location country ID.
     * @type {string}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    countryId?: string;
    /**
     * Pickup Location region ID.
     * @type {number}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    regionId?: number;
    /**
     * Pickup Location region.
     * @type {string}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    region?: string;
    /**
     * Pickup Location city.
     * @type {string}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    city?: string;
    /**
     * Pickup Location street.
     * @type {string}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    street?: string;
    /**
     * Pickup Location postcode.
     * @type {string}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    postcode?: string;
    /**
     * Pickup Location phone.
     * @type {string}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    phone?: string;
    /**
     * ExtensionInterface class for @see \Magento\InventoryInStorePickupApi\Api\Data\PickupLocationInterface
     * @type {object}
     * @memberof InventoryInStorePickupApiDataPickupLocationInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the InventoryInStorePickupApiDataPickupLocationInterface interface.
 */
export declare function instanceOfInventoryInStorePickupApiDataPickupLocationInterface(value: object): boolean;
export declare function InventoryInStorePickupApiDataPickupLocationInterfaceFromJSON(json: any): InventoryInStorePickupApiDataPickupLocationInterface;
export declare function InventoryInStorePickupApiDataPickupLocationInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryInStorePickupApiDataPickupLocationInterface;
export declare function InventoryInStorePickupApiDataPickupLocationInterfaceToJSON(value?: InventoryInStorePickupApiDataPickupLocationInterface | null): any;