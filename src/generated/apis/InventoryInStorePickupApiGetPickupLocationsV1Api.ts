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
  InventoryInStorePickupApiDataSearchResultInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InventoryInStorePickupApiDataSearchResultInterfaceFromJSON,
    InventoryInStorePickupApiDataSearchResultInterfaceToJSON,
} from '../models';

export interface GetV1InventoryInstorepickupPickuplocationsRequest {
    searchRequestAreaRadius?: number;
    searchRequestAreaSearchTerm?: string;
    searchRequestFiltersCountryValue?: string;
    searchRequestFiltersCountryConditionType?: string;
    searchRequestFiltersPostcodeValue?: string;
    searchRequestFiltersPostcodeConditionType?: string;
    searchRequestFiltersRegionValue?: string;
    searchRequestFiltersRegionConditionType?: string;
    searchRequestFiltersRegionIdValue?: string;
    searchRequestFiltersRegionIdConditionType?: string;
    searchRequestFiltersCityValue?: string;
    searchRequestFiltersCityConditionType?: string;
    searchRequestFiltersStreetValue?: string;
    searchRequestFiltersStreetConditionType?: string;
    searchRequestFiltersNameValue?: string;
    searchRequestFiltersNameConditionType?: string;
    searchRequestFiltersPickupLocationCodeValue?: string;
    searchRequestFiltersPickupLocationCodeConditionType?: string;
    searchRequestPageSize?: number;
    searchRequestCurrentPage?: number;
    searchRequestScopeType?: string;
    searchRequestScopeCode?: string;
    searchRequestSort0Field?: string;
    searchRequestSort0Direction?: string;
    searchRequestExtensionAttributesProductsInfo0Sku?: string;
}

/**
 * 
 */
export class InventoryInStorePickupApiGetPickupLocationsV1Api extends runtime.BaseAPI {

    /**
     * Get Pickup Locations according to the results of filtration by Search Request.
     */
    async getV1InventoryInstorepickupPickuplocationsRaw(requestParameters: GetV1InventoryInstorepickupPickuplocationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryInStorePickupApiDataSearchResultInterface>> {
        const queryParameters: any = {};

        if (requestParameters.searchRequestAreaRadius !== undefined) {
            queryParameters['searchRequest[area][radius]'] = requestParameters.searchRequestAreaRadius;
        }

        if (requestParameters.searchRequestAreaSearchTerm !== undefined) {
            queryParameters['searchRequest[area][searchTerm]'] = requestParameters.searchRequestAreaSearchTerm;
        }

        if (requestParameters.searchRequestFiltersCountryValue !== undefined) {
            queryParameters['searchRequest[filters][country][value]'] = requestParameters.searchRequestFiltersCountryValue;
        }

        if (requestParameters.searchRequestFiltersCountryConditionType !== undefined) {
            queryParameters['searchRequest[filters][country][conditionType]'] = requestParameters.searchRequestFiltersCountryConditionType;
        }

        if (requestParameters.searchRequestFiltersPostcodeValue !== undefined) {
            queryParameters['searchRequest[filters][postcode][value]'] = requestParameters.searchRequestFiltersPostcodeValue;
        }

        if (requestParameters.searchRequestFiltersPostcodeConditionType !== undefined) {
            queryParameters['searchRequest[filters][postcode][conditionType]'] = requestParameters.searchRequestFiltersPostcodeConditionType;
        }

        if (requestParameters.searchRequestFiltersRegionValue !== undefined) {
            queryParameters['searchRequest[filters][region][value]'] = requestParameters.searchRequestFiltersRegionValue;
        }

        if (requestParameters.searchRequestFiltersRegionConditionType !== undefined) {
            queryParameters['searchRequest[filters][region][conditionType]'] = requestParameters.searchRequestFiltersRegionConditionType;
        }

        if (requestParameters.searchRequestFiltersRegionIdValue !== undefined) {
            queryParameters['searchRequest[filters][regionId][value]'] = requestParameters.searchRequestFiltersRegionIdValue;
        }

        if (requestParameters.searchRequestFiltersRegionIdConditionType !== undefined) {
            queryParameters['searchRequest[filters][regionId][conditionType]'] = requestParameters.searchRequestFiltersRegionIdConditionType;
        }

        if (requestParameters.searchRequestFiltersCityValue !== undefined) {
            queryParameters['searchRequest[filters][city][value]'] = requestParameters.searchRequestFiltersCityValue;
        }

        if (requestParameters.searchRequestFiltersCityConditionType !== undefined) {
            queryParameters['searchRequest[filters][city][conditionType]'] = requestParameters.searchRequestFiltersCityConditionType;
        }

        if (requestParameters.searchRequestFiltersStreetValue !== undefined) {
            queryParameters['searchRequest[filters][street][value]'] = requestParameters.searchRequestFiltersStreetValue;
        }

        if (requestParameters.searchRequestFiltersStreetConditionType !== undefined) {
            queryParameters['searchRequest[filters][street][conditionType]'] = requestParameters.searchRequestFiltersStreetConditionType;
        }

        if (requestParameters.searchRequestFiltersNameValue !== undefined) {
            queryParameters['searchRequest[filters][name][value]'] = requestParameters.searchRequestFiltersNameValue;
        }

        if (requestParameters.searchRequestFiltersNameConditionType !== undefined) {
            queryParameters['searchRequest[filters][name][conditionType]'] = requestParameters.searchRequestFiltersNameConditionType;
        }

        if (requestParameters.searchRequestFiltersPickupLocationCodeValue !== undefined) {
            queryParameters['searchRequest[filters][pickupLocationCode][value]'] = requestParameters.searchRequestFiltersPickupLocationCodeValue;
        }

        if (requestParameters.searchRequestFiltersPickupLocationCodeConditionType !== undefined) {
            queryParameters['searchRequest[filters][pickupLocationCode][conditionType]'] = requestParameters.searchRequestFiltersPickupLocationCodeConditionType;
        }

        if (requestParameters.searchRequestPageSize !== undefined) {
            queryParameters['searchRequest[pageSize]'] = requestParameters.searchRequestPageSize;
        }

        if (requestParameters.searchRequestCurrentPage !== undefined) {
            queryParameters['searchRequest[currentPage]'] = requestParameters.searchRequestCurrentPage;
        }

        if (requestParameters.searchRequestScopeType !== undefined) {
            queryParameters['searchRequest[scopeType]'] = requestParameters.searchRequestScopeType;
        }

        if (requestParameters.searchRequestScopeCode !== undefined) {
            queryParameters['searchRequest[scopeCode]'] = requestParameters.searchRequestScopeCode;
        }

        if (requestParameters.searchRequestSort0Field !== undefined) {
            queryParameters['searchRequest[sort][0][field]'] = requestParameters.searchRequestSort0Field;
        }

        if (requestParameters.searchRequestSort0Direction !== undefined) {
            queryParameters['searchRequest[sort][0][direction]'] = requestParameters.searchRequestSort0Direction;
        }

        if (requestParameters.searchRequestExtensionAttributesProductsInfo0Sku !== undefined) {
            queryParameters['searchRequest[extensionAttributes][productsInfo][0][sku]'] = requestParameters.searchRequestExtensionAttributesProductsInfo0Sku;
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
            path: `/V1/inventory/in-store-pickup/pickup-locations/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InventoryInStorePickupApiDataSearchResultInterfaceFromJSON(jsonValue));
    }

    /**
     * Get Pickup Locations according to the results of filtration by Search Request.
     */
    async getV1InventoryInstorepickupPickuplocations(requestParameters: GetV1InventoryInstorepickupPickuplocationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryInStorePickupApiDataSearchResultInterface> {
        const response = await this.getV1InventoryInstorepickupPickuplocationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
