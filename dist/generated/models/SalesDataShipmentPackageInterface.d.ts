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
 * Shipment package interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
 * @export
 * @interface SalesDataShipmentPackageInterface
 */
export interface SalesDataShipmentPackageInterface {
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentPackageInterface
     * @type {object}
     * @memberof SalesDataShipmentPackageInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the SalesDataShipmentPackageInterface interface.
 */
export declare function instanceOfSalesDataShipmentPackageInterface(value: object): boolean;
export declare function SalesDataShipmentPackageInterfaceFromJSON(json: any): SalesDataShipmentPackageInterface;
export declare function SalesDataShipmentPackageInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataShipmentPackageInterface;
export declare function SalesDataShipmentPackageInterfaceToJSON(value?: SalesDataShipmentPackageInterface | null): any;
