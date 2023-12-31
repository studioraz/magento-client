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


import * as runtime from '../runtime';
import type {
  CatalogInventoryDataStockItemCollectionInterface,
  CatalogInventoryDataStockItemInterface,
  CatalogInventoryDataStockStatusInterface,
  ErrorResponse,
  PutV1ProductsProductSkuStockItemsItemIdRequest,
} from '../models';
import {
    CatalogInventoryDataStockItemCollectionInterfaceFromJSON,
    CatalogInventoryDataStockItemCollectionInterfaceToJSON,
    CatalogInventoryDataStockItemInterfaceFromJSON,
    CatalogInventoryDataStockItemInterfaceToJSON,
    CatalogInventoryDataStockStatusInterfaceFromJSON,
    CatalogInventoryDataStockStatusInterfaceToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PutV1ProductsProductSkuStockItemsItemIdRequestFromJSON,
    PutV1ProductsProductSkuStockItemsItemIdRequestToJSON,
} from '../models';

export interface GetV1StockItemsLowStockRequest {
    scopeId: number;
    qty: number;
    currentPage?: number;
    pageSize?: number;
}

export interface GetV1StockItemsProductSkuRequest {
    productSku: string;
    scopeId?: number;
}

export interface GetV1StockStatusesProductSkuRequest {
    productSku: string;
    scopeId?: number;
}

export interface PutV1ProductsProductSkuStockItemsItemIdOperationRequest {
    productSku: string;
    itemId: string;
    putV1ProductsProductSkuStockItemsItemIdRequest?: PutV1ProductsProductSkuStockItemsItemIdRequest;
}

/**
 * 
 */
export class CatalogInventoryStockRegistryV1Api extends runtime.BaseAPI {

    /**
     * Retrieves a list of SKU\'s with low inventory qty
     */
    async getV1StockItemsLowStockRaw(requestParameters: GetV1StockItemsLowStockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogInventoryDataStockItemCollectionInterface>> {
        if (requestParameters.scopeId === null || requestParameters.scopeId === undefined) {
            throw new runtime.RequiredError('scopeId','Required parameter requestParameters.scopeId was null or undefined when calling getV1StockItemsLowStock.');
        }

        if (requestParameters.qty === null || requestParameters.qty === undefined) {
            throw new runtime.RequiredError('qty','Required parameter requestParameters.qty was null or undefined when calling getV1StockItemsLowStock.');
        }

        const queryParameters: any = {};

        if (requestParameters.scopeId !== undefined) {
            queryParameters['scopeId'] = requestParameters.scopeId;
        }

        if (requestParameters.qty !== undefined) {
            queryParameters['qty'] = requestParameters.qty;
        }

        if (requestParameters.currentPage !== undefined) {
            queryParameters['currentPage'] = requestParameters.currentPage;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/stockItems/lowStock/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogInventoryDataStockItemCollectionInterfaceFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of SKU\'s with low inventory qty
     */
    async getV1StockItemsLowStock(requestParameters: GetV1StockItemsLowStockRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogInventoryDataStockItemCollectionInterface> {
        const response = await this.getV1StockItemsLowStockRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async getV1StockItemsProductSkuRaw(requestParameters: GetV1StockItemsProductSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogInventoryDataStockItemInterface>> {
        if (requestParameters.productSku === null || requestParameters.productSku === undefined) {
            throw new runtime.RequiredError('productSku','Required parameter requestParameters.productSku was null or undefined when calling getV1StockItemsProductSku.');
        }

        const queryParameters: any = {};

        if (requestParameters.scopeId !== undefined) {
            queryParameters['scopeId'] = requestParameters.scopeId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/stockItems/{productSku}`.replace(`{${"productSku"}}`, encodeURIComponent(String(requestParameters.productSku))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogInventoryDataStockItemInterfaceFromJSON(jsonValue));
    }

    /**
     * 
     */
    async getV1StockItemsProductSku(requestParameters: GetV1StockItemsProductSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogInventoryDataStockItemInterface> {
        const response = await this.getV1StockItemsProductSkuRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async getV1StockStatusesProductSkuRaw(requestParameters: GetV1StockStatusesProductSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogInventoryDataStockStatusInterface>> {
        if (requestParameters.productSku === null || requestParameters.productSku === undefined) {
            throw new runtime.RequiredError('productSku','Required parameter requestParameters.productSku was null or undefined when calling getV1StockStatusesProductSku.');
        }

        const queryParameters: any = {};

        if (requestParameters.scopeId !== undefined) {
            queryParameters['scopeId'] = requestParameters.scopeId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/stockStatuses/{productSku}`.replace(`{${"productSku"}}`, encodeURIComponent(String(requestParameters.productSku))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogInventoryDataStockStatusInterfaceFromJSON(jsonValue));
    }

    /**
     * 
     */
    async getV1StockStatusesProductSku(requestParameters: GetV1StockStatusesProductSkuRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogInventoryDataStockStatusInterface> {
        const response = await this.getV1StockStatusesProductSkuRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async putV1ProductsProductSkuStockItemsItemIdRaw(requestParameters: PutV1ProductsProductSkuStockItemsItemIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters.productSku === null || requestParameters.productSku === undefined) {
            throw new runtime.RequiredError('productSku','Required parameter requestParameters.productSku was null or undefined when calling putV1ProductsProductSkuStockItemsItemId.');
        }

        if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
            throw new runtime.RequiredError('itemId','Required parameter requestParameters.itemId was null or undefined when calling putV1ProductsProductSkuStockItemsItemId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/products/{productSku}/stockItems/{itemId}`.replace(`{${"productSku"}}`, encodeURIComponent(String(requestParameters.productSku))).replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PutV1ProductsProductSkuStockItemsItemIdRequestToJSON(requestParameters.putV1ProductsProductSkuStockItemsItemIdRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * 
     */
    async putV1ProductsProductSkuStockItemsItemId(requestParameters: PutV1ProductsProductSkuStockItemsItemIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.putV1ProductsProductSkuStockItemsItemIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
