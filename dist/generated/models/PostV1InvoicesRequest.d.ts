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
import type { SalesDataInvoiceInterface } from './SalesDataInvoiceInterface';
/**
 *
 * @export
 * @interface PostV1InvoicesRequest
 */
export interface PostV1InvoicesRequest {
    /**
     *
     * @type {SalesDataInvoiceInterface}
     * @memberof PostV1InvoicesRequest
     */
    entity: SalesDataInvoiceInterface;
}
/**
 * Check if a given object implements the PostV1InvoicesRequest interface.
 */
export declare function instanceOfPostV1InvoicesRequest(value: object): boolean;
export declare function PostV1InvoicesRequestFromJSON(json: any): PostV1InvoicesRequest;
export declare function PostV1InvoicesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1InvoicesRequest;
export declare function PostV1InvoicesRequestToJSON(value?: PostV1InvoicesRequest | null): any;