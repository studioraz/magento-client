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
  PostV1InventorySourceitemsRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PostV1InventorySourceitemsRequestFromJSON,
    PostV1InventorySourceitemsRequestToJSON,
} from '../models';

export interface PostV1InventorySourceitemsdeleteRequest {
    postV1InventorySourceitemsRequest?: PostV1InventorySourceitemsRequest;
}

/**
 * 
 */
export class InventoryApiSourceItemsDeleteV1Api extends runtime.BaseAPI {

    /**
     * Delete Multiple Source item data
     */
    async postV1InventorySourceitemsdeleteRaw(requestParameters: PostV1InventorySourceitemsdeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ErrorResponse>> {
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
            path: `/V1/inventory/source-items-delete`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1InventorySourceitemsRequestToJSON(requestParameters.postV1InventorySourceitemsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ErrorResponseFromJSON(jsonValue));
    }

    /**
     * Delete Multiple Source item data
     */
    async postV1InventorySourceitemsdelete(requestParameters: PostV1InventorySourceitemsdeleteRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ErrorResponse> {
        const response = await this.postV1InventorySourceitemsdeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
