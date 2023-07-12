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
 * Shipment Track Creation interface.
 * @export
 * @interface SalesDataShipmentTrackCreationInterface
 */
export interface SalesDataShipmentTrackCreationInterface {
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentTrackCreationInterface
     * @type {object}
     * @memberof SalesDataShipmentTrackCreationInterface
     */
    extensionAttributes?: object;
    /**
     * Track number.
     * @type {string}
     * @memberof SalesDataShipmentTrackCreationInterface
     */
    trackNumber: string;
    /**
     * Title.
     * @type {string}
     * @memberof SalesDataShipmentTrackCreationInterface
     */
    title: string;
    /**
     * Carrier code.
     * @type {string}
     * @memberof SalesDataShipmentTrackCreationInterface
     */
    carrierCode: string;
}
/**
 * Check if a given object implements the SalesDataShipmentTrackCreationInterface interface.
 */
export declare function instanceOfSalesDataShipmentTrackCreationInterface(value: object): boolean;
export declare function SalesDataShipmentTrackCreationInterfaceFromJSON(json: any): SalesDataShipmentTrackCreationInterface;
export declare function SalesDataShipmentTrackCreationInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataShipmentTrackCreationInterface;
export declare function SalesDataShipmentTrackCreationInterfaceToJSON(value?: SalesDataShipmentTrackCreationInterface | null): any;
