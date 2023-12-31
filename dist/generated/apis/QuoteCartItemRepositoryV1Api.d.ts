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
import type { PostV1CartsQuoteIdItemsRequest, QuoteDataCartItemInterface } from '../models';
export interface DeleteV1CartsCartIdItemsItemIdRequest {
    cartId: number;
    itemId: number;
}
export interface DeleteV1CartsMineItemsItemIdRequest {
    itemId: number;
}
export interface GetV1CartsCartIdItemsRequest {
    cartId: number;
}
export interface PostV1CartsMineItemsRequest {
    postV1CartsQuoteIdItemsRequest?: PostV1CartsQuoteIdItemsRequest;
}
export interface PostV1CartsQuoteIdItemsOperationRequest {
    quoteId: string;
    postV1CartsQuoteIdItemsRequest?: PostV1CartsQuoteIdItemsRequest;
}
export interface PutV1CartsCartIdItemsItemIdRequest {
    cartId: string;
    itemId: string;
    postV1CartsQuoteIdItemsRequest?: PostV1CartsQuoteIdItemsRequest;
}
export interface PutV1CartsMineItemsItemIdRequest {
    itemId: string;
    postV1CartsQuoteIdItemsRequest?: PostV1CartsQuoteIdItemsRequest;
}
/**
 *
 */
export declare class QuoteCartItemRepositoryV1Api extends runtime.BaseAPI {
    /**
     * Removes the specified item from the specified cart.
     */
    deleteV1CartsCartIdItemsItemIdRaw(requestParameters: DeleteV1CartsCartIdItemsItemIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Removes the specified item from the specified cart.
     */
    deleteV1CartsCartIdItemsItemId(requestParameters: DeleteV1CartsCartIdItemsItemIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Removes the specified item from the specified cart.
     */
    deleteV1CartsMineItemsItemIdRaw(requestParameters: DeleteV1CartsMineItemsItemIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;
    /**
     * Removes the specified item from the specified cart.
     */
    deleteV1CartsMineItemsItemId(requestParameters: DeleteV1CartsMineItemsItemIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;
    /**
     * Lists items that are assigned to a specified cart.
     */
    getV1CartsCartIdItemsRaw(requestParameters: GetV1CartsCartIdItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QuoteDataCartItemInterface>>>;
    /**
     * Lists items that are assigned to a specified cart.
     */
    getV1CartsCartIdItems(requestParameters: GetV1CartsCartIdItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QuoteDataCartItemInterface>>;
    /**
     * Lists items that are assigned to a specified cart.
     */
    getV1CartsMineItemsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<QuoteDataCartItemInterface>>>;
    /**
     * Lists items that are assigned to a specified cart.
     */
    getV1CartsMineItems(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<QuoteDataCartItemInterface>>;
    /**
     * Add/update the specified cart item.
     */
    postV1CartsMineItemsRaw(requestParameters: PostV1CartsMineItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataCartItemInterface>>;
    /**
     * Add/update the specified cart item.
     */
    postV1CartsMineItems(requestParameters?: PostV1CartsMineItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataCartItemInterface>;
    /**
     * Add/update the specified cart item.
     */
    postV1CartsQuoteIdItemsRaw(requestParameters: PostV1CartsQuoteIdItemsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataCartItemInterface>>;
    /**
     * Add/update the specified cart item.
     */
    postV1CartsQuoteIdItems(requestParameters: PostV1CartsQuoteIdItemsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataCartItemInterface>;
    /**
     * Add/update the specified cart item.
     */
    putV1CartsCartIdItemsItemIdRaw(requestParameters: PutV1CartsCartIdItemsItemIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataCartItemInterface>>;
    /**
     * Add/update the specified cart item.
     */
    putV1CartsCartIdItemsItemId(requestParameters: PutV1CartsCartIdItemsItemIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataCartItemInterface>;
    /**
     * Add/update the specified cart item.
     */
    putV1CartsMineItemsItemIdRaw(requestParameters: PutV1CartsMineItemsItemIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteDataCartItemInterface>>;
    /**
     * Add/update the specified cart item.
     */
    putV1CartsMineItemsItemId(requestParameters: PutV1CartsMineItemsItemIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteDataCartItemInterface>;
}
