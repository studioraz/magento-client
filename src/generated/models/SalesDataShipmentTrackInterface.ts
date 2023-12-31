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
/**
 * Shipment track interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. Merchants and customers can track shipments.
 * @export
 * @interface SalesDataShipmentTrackInterface
 */
export interface SalesDataShipmentTrackInterface {
    /**
     * The order_id for the shipment package.
     * @type {number}
     * @memberof SalesDataShipmentTrackInterface
     */
    orderId: number;
    /**
     * Created-at timestamp.
     * @type {string}
     * @memberof SalesDataShipmentTrackInterface
     */
    createdAt?: string;
    /**
     * Shipment package ID.
     * @type {number}
     * @memberof SalesDataShipmentTrackInterface
     */
    entityId?: number;
    /**
     * Parent ID.
     * @type {number}
     * @memberof SalesDataShipmentTrackInterface
     */
    parentId: number;
    /**
     * Updated-at timestamp.
     * @type {string}
     * @memberof SalesDataShipmentTrackInterface
     */
    updatedAt?: string;
    /**
     * Weight.
     * @type {number}
     * @memberof SalesDataShipmentTrackInterface
     */
    weight: number;
    /**
     * Quantity.
     * @type {number}
     * @memberof SalesDataShipmentTrackInterface
     */
    qty: number;
    /**
     * Description.
     * @type {string}
     * @memberof SalesDataShipmentTrackInterface
     */
    description: string;
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentTrackInterface
     * @type {object}
     * @memberof SalesDataShipmentTrackInterface
     */
    extensionAttributes?: object;
    /**
     * Track number.
     * @type {string}
     * @memberof SalesDataShipmentTrackInterface
     */
    trackNumber: string;
    /**
     * Title.
     * @type {string}
     * @memberof SalesDataShipmentTrackInterface
     */
    title: string;
    /**
     * Carrier code.
     * @type {string}
     * @memberof SalesDataShipmentTrackInterface
     */
    carrierCode: string;
}

/**
 * Check if a given object implements the SalesDataShipmentTrackInterface interface.
 */
export function instanceOfSalesDataShipmentTrackInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "orderId" in value;
    isInstance = isInstance && "parentId" in value;
    isInstance = isInstance && "weight" in value;
    isInstance = isInstance && "qty" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "trackNumber" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "carrierCode" in value;

    return isInstance;
}

export function SalesDataShipmentTrackInterfaceFromJSON(json: any): SalesDataShipmentTrackInterface {
    return SalesDataShipmentTrackInterfaceFromJSONTyped(json, false);
}

export function SalesDataShipmentTrackInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataShipmentTrackInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderId': json['order_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'entityId': !exists(json, 'entity_id') ? undefined : json['entity_id'],
        'parentId': json['parent_id'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'weight': json['weight'],
        'qty': json['qty'],
        'description': json['description'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'trackNumber': json['track_number'],
        'title': json['title'],
        'carrierCode': json['carrier_code'],
    };
}

export function SalesDataShipmentTrackInterfaceToJSON(value?: SalesDataShipmentTrackInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'order_id': value.orderId,
        'created_at': value.createdAt,
        'entity_id': value.entityId,
        'parent_id': value.parentId,
        'updated_at': value.updatedAt,
        'weight': value.weight,
        'qty': value.qty,
        'description': value.description,
        'extension_attributes': value.extensionAttributes,
        'track_number': value.trackNumber,
        'title': value.title,
        'carrier_code': value.carrierCode,
    };
}

