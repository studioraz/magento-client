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
import type { SalesDataCreditmemoCommentInterface } from './SalesDataCreditmemoCommentInterface';
/**
 *
 * @export
 * @interface PostV1CreditmemoIdCommentsRequest
 */
export interface PostV1CreditmemoIdCommentsRequest {
    /**
     *
     * @type {SalesDataCreditmemoCommentInterface}
     * @memberof PostV1CreditmemoIdCommentsRequest
     */
    entity: SalesDataCreditmemoCommentInterface;
}
/**
 * Check if a given object implements the PostV1CreditmemoIdCommentsRequest interface.
 */
export declare function instanceOfPostV1CreditmemoIdCommentsRequest(value: object): boolean;
export declare function PostV1CreditmemoIdCommentsRequestFromJSON(json: any): PostV1CreditmemoIdCommentsRequest;
export declare function PostV1CreditmemoIdCommentsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1CreditmemoIdCommentsRequest;
export declare function PostV1CreditmemoIdCommentsRequestToJSON(value?: PostV1CreditmemoIdCommentsRequest | null): any;
