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
 * Data interface for shipping source or shipping destination
 * @export
 * @interface InventorySourceSelectionApiDataAddressInterface
 */
export interface InventorySourceSelectionApiDataAddressInterface {
    /**
     * Shipping country
     * @type {string}
     * @memberof InventorySourceSelectionApiDataAddressInterface
     */
    country: string;
    /**
     * Shipping postcode
     * @type {string}
     * @memberof InventorySourceSelectionApiDataAddressInterface
     */
    postcode: string;
    /**
     * Shipping street address
     * @type {string}
     * @memberof InventorySourceSelectionApiDataAddressInterface
     */
    street: string;
    /**
     * Shipping region
     * @type {string}
     * @memberof InventorySourceSelectionApiDataAddressInterface
     */
    region: string;
    /**
     * Shipping city
     * @type {string}
     * @memberof InventorySourceSelectionApiDataAddressInterface
     */
    city: string;
}
/**
 * Check if a given object implements the InventorySourceSelectionApiDataAddressInterface interface.
 */
export declare function instanceOfInventorySourceSelectionApiDataAddressInterface(value: object): boolean;
export declare function InventorySourceSelectionApiDataAddressInterfaceFromJSON(json: any): InventorySourceSelectionApiDataAddressInterface;
export declare function InventorySourceSelectionApiDataAddressInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventorySourceSelectionApiDataAddressInterface;
export declare function InventorySourceSelectionApiDataAddressInterfaceToJSON(value?: InventorySourceSelectionApiDataAddressInterface | null): any;
