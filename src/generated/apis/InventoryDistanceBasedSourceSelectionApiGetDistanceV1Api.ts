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
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface GetV1InventoryGetdistanceRequest {
    sourceLat?: number;
    sourceLng?: number;
    destinationLat?: number;
    destinationLng?: number;
}

/**
 * 
 */
export class InventoryDistanceBasedSourceSelectionApiGetDistanceV1Api extends runtime.BaseAPI {

    /**
     * Get distance between two points
     */
    async getV1InventoryGetdistanceRaw(requestParameters: GetV1InventoryGetdistanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        const queryParameters: any = {};

        if (requestParameters.sourceLat !== undefined) {
            queryParameters['source[lat]'] = requestParameters.sourceLat;
        }

        if (requestParameters.sourceLng !== undefined) {
            queryParameters['source[lng]'] = requestParameters.sourceLng;
        }

        if (requestParameters.destinationLat !== undefined) {
            queryParameters['destination[lat]'] = requestParameters.destinationLat;
        }

        if (requestParameters.destinationLng !== undefined) {
            queryParameters['destination[lng]'] = requestParameters.destinationLng;
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
            path: `/V1/inventory/get-distance`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Get distance between two points
     */
    async getV1InventoryGetdistance(requestParameters: GetV1InventoryGetdistanceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.getV1InventoryGetdistanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
