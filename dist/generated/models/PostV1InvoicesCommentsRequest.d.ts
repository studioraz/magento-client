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
import type { SalesDataInvoiceCommentInterface } from './SalesDataInvoiceCommentInterface';
/**
 *
 * @export
 * @interface PostV1InvoicesCommentsRequest
 */
export interface PostV1InvoicesCommentsRequest {
    /**
     *
     * @type {SalesDataInvoiceCommentInterface}
     * @memberof PostV1InvoicesCommentsRequest
     */
    entity: SalesDataInvoiceCommentInterface;
}
/**
 * Check if a given object implements the PostV1InvoicesCommentsRequest interface.
 */
export declare function instanceOfPostV1InvoicesCommentsRequest(value: object): boolean;
export declare function PostV1InvoicesCommentsRequestFromJSON(json: any): PostV1InvoicesCommentsRequest;
export declare function PostV1InvoicesCommentsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1InvoicesCommentsRequest;
export declare function PostV1InvoicesCommentsRequestToJSON(value?: PostV1InvoicesCommentsRequest | null): any;
