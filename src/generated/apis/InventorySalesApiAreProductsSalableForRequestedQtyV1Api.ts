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
  InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InventorySalesApiDataIsProductSalableForRequestedQtyResultInterfaceFromJSON,
    InventorySalesApiDataIsProductSalableForRequestedQtyResultInterfaceToJSON,
} from '../models';

export interface GetV1InventoryAreproductsalableforrequestedqtyRequest {
    stockId: number;
    skuRequests0Sku?: string;
    skuRequests0Qty?: number;
}

/**
 * 
 */
export class InventorySalesApiAreProductsSalableForRequestedQtyV1Api extends runtime.BaseAPI {

    /**
     * Get whether products are salable in requested Qty for given set of SKUs in specified stock.
     */
    async getV1InventoryAreproductsalableforrequestedqtyRaw(requestParameters: GetV1InventoryAreproductsalableforrequestedqtyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface>>> {
        if (requestParameters.stockId === null || requestParameters.stockId === undefined) {
            throw new runtime.RequiredError('stockId','Required parameter requestParameters.stockId was null or undefined when calling getV1InventoryAreproductsalableforrequestedqty.');
        }

        const queryParameters: any = {};

        if (requestParameters.skuRequests0Sku !== undefined) {
            queryParameters['skuRequests[0][sku]'] = requestParameters.skuRequests0Sku;
        }

        if (requestParameters.skuRequests0Qty !== undefined) {
            queryParameters['skuRequests[0][qty]'] = requestParameters.skuRequests0Qty;
        }

        if (requestParameters.stockId !== undefined) {
            queryParameters['stockId'] = requestParameters.stockId;
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
            path: `/V1/inventory/are-product-salable-for-requested-qty/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InventorySalesApiDataIsProductSalableForRequestedQtyResultInterfaceFromJSON));
    }

    /**
     * Get whether products are salable in requested Qty for given set of SKUs in specified stock.
     */
    async getV1InventoryAreproductsalableforrequestedqty(requestParameters: GetV1InventoryAreproductsalableforrequestedqtyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InventorySalesApiDataIsProductSalableForRequestedQtyResultInterface>> {
        const response = await this.getV1InventoryAreproductsalableforrequestedqtyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
