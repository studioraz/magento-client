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
import type { PostV1InvoiceInvoiceIdRefundRequest } from '../models';
export interface PostV1InvoiceInvoiceIdRefundOperationRequest {
    invoiceId: number;
    postV1InvoiceInvoiceIdRefundRequest?: PostV1InvoiceInvoiceIdRefundRequest;
}
/**
 *
 */
export declare class SalesRefundInvoiceV1Api extends runtime.BaseAPI {
    /**
     * Create refund for invoice
     */
    postV1InvoiceInvoiceIdRefundRaw(requestParameters: PostV1InvoiceInvoiceIdRefundOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>>;
    /**
     * Create refund for invoice
     */
    postV1InvoiceInvoiceIdRefund(requestParameters: PostV1InvoiceInvoiceIdRefundOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number>;
}
