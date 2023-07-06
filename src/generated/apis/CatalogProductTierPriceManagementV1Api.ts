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
  CatalogDataProductTierPriceInterface,
  ErrorResponse,
} from '../models';
import {
    CatalogDataProductTierPriceInterfaceFromJSON,
    CatalogDataProductTierPriceInterfaceToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface DeleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyRequest {
    sku: string;
    customerGroupId: string;
    qty: number;
}

export interface GetV1ProductsSkuGrouppricesCustomerGroupIdTiersRequest {
    sku: string;
    customerGroupId: string;
}

export interface PostV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePriceRequest {
    sku: string;
    customerGroupId: string;
    price: number;
    qty: number;
}

/**
 * 
 */
export class CatalogProductTierPriceManagementV1Api extends runtime.BaseAPI {

    /**
     * Remove tier price from product
     */
    async deleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyRaw(requestParameters: DeleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling deleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQty.');
        }

        if (requestParameters.customerGroupId === null || requestParameters.customerGroupId === undefined) {
            throw new runtime.RequiredError('customerGroupId','Required parameter requestParameters.customerGroupId was null or undefined when calling deleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQty.');
        }

        if (requestParameters.qty === null || requestParameters.qty === undefined) {
            throw new runtime.RequiredError('qty','Required parameter requestParameters.qty was null or undefined when calling deleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQty.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/products/{sku}/group-prices/{customerGroupId}/tiers/{qty}`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))).replace(`{${"customerGroupId"}}`, encodeURIComponent(String(requestParameters.customerGroupId))).replace(`{${"qty"}}`, encodeURIComponent(String(requestParameters.qty))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<boolean>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Remove tier price from product
     */
    async deleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQty(requestParameters: DeleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.deleteV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get tier price of product
     */
    async getV1ProductsSkuGrouppricesCustomerGroupIdTiersRaw(requestParameters: GetV1ProductsSkuGrouppricesCustomerGroupIdTiersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CatalogDataProductTierPriceInterface>>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling getV1ProductsSkuGrouppricesCustomerGroupIdTiers.');
        }

        if (requestParameters.customerGroupId === null || requestParameters.customerGroupId === undefined) {
            throw new runtime.RequiredError('customerGroupId','Required parameter requestParameters.customerGroupId was null or undefined when calling getV1ProductsSkuGrouppricesCustomerGroupIdTiers.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/products/{sku}/group-prices/{customerGroupId}/tiers`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))).replace(`{${"customerGroupId"}}`, encodeURIComponent(String(requestParameters.customerGroupId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CatalogDataProductTierPriceInterfaceFromJSON));
    }

    /**
     * Get tier price of product
     */
    async getV1ProductsSkuGrouppricesCustomerGroupIdTiers(requestParameters: GetV1ProductsSkuGrouppricesCustomerGroupIdTiersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CatalogDataProductTierPriceInterface>> {
        const response = await this.getV1ProductsSkuGrouppricesCustomerGroupIdTiersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create tier price for product
     */
    async postV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePriceRaw(requestParameters: PostV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling postV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePrice.');
        }

        if (requestParameters.customerGroupId === null || requestParameters.customerGroupId === undefined) {
            throw new runtime.RequiredError('customerGroupId','Required parameter requestParameters.customerGroupId was null or undefined when calling postV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePrice.');
        }

        if (requestParameters.price === null || requestParameters.price === undefined) {
            throw new runtime.RequiredError('price','Required parameter requestParameters.price was null or undefined when calling postV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePrice.');
        }

        if (requestParameters.qty === null || requestParameters.qty === undefined) {
            throw new runtime.RequiredError('qty','Required parameter requestParameters.qty was null or undefined when calling postV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePrice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/V1/products/{sku}/group-prices/{customerGroupId}/tiers/{qty}/price/{price}`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))).replace(`{${"customerGroupId"}}`, encodeURIComponent(String(requestParameters.customerGroupId))).replace(`{${"price"}}`, encodeURIComponent(String(requestParameters.price))).replace(`{${"qty"}}`, encodeURIComponent(String(requestParameters.qty))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<boolean>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Create tier price for product
     */
    async postV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePrice(requestParameters: PostV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.postV1ProductsSkuGrouppricesCustomerGroupIdTiersQtyPricePriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
