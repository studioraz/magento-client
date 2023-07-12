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
 * Shipment comment interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. A shipment document can contain comments.
 * @export
 * @interface SalesDataShipmentCommentInterface
 */
export interface SalesDataShipmentCommentInterface {
    /**
     * Is-customer-notified flag value.
     * @type {number}
     * @memberof SalesDataShipmentCommentInterface
     */
    isCustomerNotified: number;
    /**
     * Parent ID.
     * @type {number}
     * @memberof SalesDataShipmentCommentInterface
     */
    parentId: number;
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCommentInterface
     * @type {object}
     * @memberof SalesDataShipmentCommentInterface
     */
    extensionAttributes?: object;
    /**
     * Comment.
     * @type {string}
     * @memberof SalesDataShipmentCommentInterface
     */
    comment: string;
    /**
     * Is-visible-on-storefront flag value.
     * @type {number}
     * @memberof SalesDataShipmentCommentInterface
     */
    isVisibleOnFront: number;
    /**
     * Created-at timestamp.
     * @type {string}
     * @memberof SalesDataShipmentCommentInterface
     */
    createdAt?: string;
    /**
     * Invoice ID.
     * @type {number}
     * @memberof SalesDataShipmentCommentInterface
     */
    entityId?: number;
}
/**
 * Check if a given object implements the SalesDataShipmentCommentInterface interface.
 */
export declare function instanceOfSalesDataShipmentCommentInterface(value: object): boolean;
export declare function SalesDataShipmentCommentInterfaceFromJSON(json: any): SalesDataShipmentCommentInterface;
export declare function SalesDataShipmentCommentInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataShipmentCommentInterface;
export declare function SalesDataShipmentCommentInterfaceToJSON(value?: SalesDataShipmentCommentInterface | null): any;
