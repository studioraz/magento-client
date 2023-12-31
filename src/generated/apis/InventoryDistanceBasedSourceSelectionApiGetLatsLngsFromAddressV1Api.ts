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
  InventoryDistanceBasedSourceSelectionApiDataLatLngInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSON,
    InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceToJSON,
} from '../models';

export interface GetV1InventoryGetlatslngsfromaddressRequest {
    addressCountry?: string;
    addressPostcode?: string;
    addressStreet?: string;
    addressRegion?: string;
    addressCity?: string;
}

/**
 * 
 */
export class InventoryDistanceBasedSourceSelectionApiGetLatsLngsFromAddressV1Api extends runtime.BaseAPI {

    /**
     * Get all available latitude and longitude objects from address.
     */
    async getV1InventoryGetlatslngsfromaddressRaw(requestParameters: GetV1InventoryGetlatslngsfromaddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InventoryDistanceBasedSourceSelectionApiDataLatLngInterface>>> {
        const queryParameters: any = {};

        if (requestParameters.addressCountry !== undefined) {
            queryParameters['address[country]'] = requestParameters.addressCountry;
        }

        if (requestParameters.addressPostcode !== undefined) {
            queryParameters['address[postcode]'] = requestParameters.addressPostcode;
        }

        if (requestParameters.addressStreet !== undefined) {
            queryParameters['address[street]'] = requestParameters.addressStreet;
        }

        if (requestParameters.addressRegion !== undefined) {
            queryParameters['address[region]'] = requestParameters.addressRegion;
        }

        if (requestParameters.addressCity !== undefined) {
            queryParameters['address[city]'] = requestParameters.addressCity;
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
            path: `/V1/inventory/get-latslngs-from-address`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSON));
    }

    /**
     * Get all available latitude and longitude objects from address.
     */
    async getV1InventoryGetlatslngsfromaddress(requestParameters: GetV1InventoryGetlatslngsfromaddressRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InventoryDistanceBasedSourceSelectionApiDataLatLngInterface>> {
        const response = await this.getV1InventoryGetlatslngsfromaddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
