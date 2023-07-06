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
  ErrorResponse,
  InventorySalesApiDataProductSalableResultInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InventorySalesApiDataProductSalableResultInterfaceFromJSON,
    InventorySalesApiDataProductSalableResultInterfaceToJSON,
} from '../models';

export interface GetV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQtyRequest {
    sku: string;
    stockId: number;
    requestedQty: number;
}

/**
 * 
 */
export class InventorySalesApiIsProductSalableForRequestedQtyV1Api extends runtime.BaseAPI {

    /**
     * Get is product salable for given SKU in a given Stock for a certain Qty
     */
    async getV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQtyRaw(requestParameters: GetV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQtyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventorySalesApiDataProductSalableResultInterface>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling getV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQty.');
        }

        if (requestParameters.stockId === null || requestParameters.stockId === undefined) {
            throw new runtime.RequiredError('stockId','Required parameter requestParameters.stockId was null or undefined when calling getV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQty.');
        }

        if (requestParameters.requestedQty === null || requestParameters.requestedQty === undefined) {
            throw new runtime.RequiredError('requestedQty','Required parameter requestParameters.requestedQty was null or undefined when calling getV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQty.');
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
            path: `/V1/inventory/is-product-salable-for-requested-qty/{sku}/{stockId}/{requestedQty}`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))).replace(`{${"stockId"}}`, encodeURIComponent(String(requestParameters.stockId))).replace(`{${"requestedQty"}}`, encodeURIComponent(String(requestParameters.requestedQty))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InventorySalesApiDataProductSalableResultInterfaceFromJSON(jsonValue));
    }

    /**
     * Get is product salable for given SKU in a given Stock for a certain Qty
     */
    async getV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQty(requestParameters: GetV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQtyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventorySalesApiDataProductSalableResultInterface> {
        const response = await this.getV1InventoryIsproductsalableforrequestedqtySkuStockIdRequestedQtyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
