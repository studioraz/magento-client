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
import * as runtime from '../runtime';
import type { PostV1ShipmentTrackRequest, SalesDataShipmentTrackInterface } from '../models';
export interface DeleteV1ShipmentTrackIdRequest {
    id: number;
}
export interface PostV1ShipmentTrackOperationRequest {
    postV1ShipmentTrackRequest?: PostV1ShipmentTrackRequest;
}
/**
 *
 */
export declare class SalesShipmentTrackRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Deletes a specified shipment track by ID.
     */
    deleteV1ShipmentTrackIdRaw(requestParameters: DeleteV1ShipmentTrackIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Deletes a specified shipment track by ID.
     */
    deleteV1ShipmentTrackId(requestParameters: DeleteV1ShipmentTrackIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Performs persist operations for a specified shipment track.
     */
    postV1ShipmentTrackRaw(requestParameters: PostV1ShipmentTrackOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SalesDataShipmentTrackInterface>>;
    /**
     * Performs persist operations for a specified shipment track.
     */
    postV1ShipmentTrack(requestParameters?: PostV1ShipmentTrackOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SalesDataShipmentTrackInterface>;
}