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
import type { SalesDataShipmentCommentCreationInterface } from './SalesDataShipmentCommentCreationInterface';
import type { SalesDataShipmentCreationArgumentsInterface } from './SalesDataShipmentCreationArgumentsInterface';
import type { SalesDataShipmentItemCreationInterface } from './SalesDataShipmentItemCreationInterface';
import type { SalesDataShipmentPackageCreationInterface } from './SalesDataShipmentPackageCreationInterface';
import type { SalesDataShipmentTrackCreationInterface } from './SalesDataShipmentTrackCreationInterface';
/**
 *
 * @export
 * @interface PostV1OrderOrderIdShipRequest
 */
export interface PostV1OrderOrderIdShipRequest {
    /**
     *
     * @type {Array<SalesDataShipmentItemCreationInterface>}
     * @memberof PostV1OrderOrderIdShipRequest
     */
    items?: Array<SalesDataShipmentItemCreationInterface>;
    /**
     *
     * @type {boolean}
     * @memberof PostV1OrderOrderIdShipRequest
     */
    notify?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PostV1OrderOrderIdShipRequest
     */
    appendComment?: boolean;
    /**
     *
     * @type {SalesDataShipmentCommentCreationInterface}
     * @memberof PostV1OrderOrderIdShipRequest
     */
    comment?: SalesDataShipmentCommentCreationInterface;
    /**
     *
     * @type {Array<SalesDataShipmentTrackCreationInterface>}
     * @memberof PostV1OrderOrderIdShipRequest
     */
    tracks?: Array<SalesDataShipmentTrackCreationInterface>;
    /**
     *
     * @type {Array<SalesDataShipmentPackageCreationInterface>}
     * @memberof PostV1OrderOrderIdShipRequest
     */
    packages?: Array<SalesDataShipmentPackageCreationInterface>;
    /**
     *
     * @type {SalesDataShipmentCreationArgumentsInterface}
     * @memberof PostV1OrderOrderIdShipRequest
     */
    arguments?: SalesDataShipmentCreationArgumentsInterface;
}
/**
 * Check if a given object implements the PostV1OrderOrderIdShipRequest interface.
 */
export declare function instanceOfPostV1OrderOrderIdShipRequest(value: object): boolean;
export declare function PostV1OrderOrderIdShipRequestFromJSON(json: any): PostV1OrderOrderIdShipRequest;
export declare function PostV1OrderOrderIdShipRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1OrderOrderIdShipRequest;
export declare function PostV1OrderOrderIdShipRequestToJSON(value?: PostV1OrderOrderIdShipRequest | null): any;