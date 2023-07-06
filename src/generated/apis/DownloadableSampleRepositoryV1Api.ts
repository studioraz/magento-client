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
  DownloadableDataSampleInterface,
  ErrorResponse,
  PostV1ProductsSkuDownloadablelinksSamplesRequest,
} from '../models';
import {
    DownloadableDataSampleInterfaceFromJSON,
    DownloadableDataSampleInterfaceToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PostV1ProductsSkuDownloadablelinksSamplesRequestFromJSON,
    PostV1ProductsSkuDownloadablelinksSamplesRequestToJSON,
} from '../models';

export interface DeleteV1ProductsDownloadablelinksSamplesIdRequest {
    id: number;
}

export interface GetV1ProductsSkuDownloadablelinksSamplesRequest {
    sku: string;
}

export interface PostV1ProductsSkuDownloadablelinksSamplesOperationRequest {
    sku: string;
    postV1ProductsSkuDownloadablelinksSamplesRequest?: PostV1ProductsSkuDownloadablelinksSamplesRequest;
}

export interface PutV1ProductsSkuDownloadablelinksSamplesIdRequest {
    sku: string;
    id: string;
    postV1ProductsSkuDownloadablelinksSamplesRequest?: PostV1ProductsSkuDownloadablelinksSamplesRequest;
}

/**
 * 
 */
export class DownloadableSampleRepositoryV1Api extends runtime.BaseAPI {

    /**
     * Delete downloadable sample
     */
    async deleteV1ProductsDownloadablelinksSamplesIdRaw(requestParameters: DeleteV1ProductsDownloadablelinksSamplesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteV1ProductsDownloadablelinksSamplesId.');
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
            path: `/V1/products/downloadable-links/samples/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
     * Delete downloadable sample
     */
    async deleteV1ProductsDownloadablelinksSamplesId(requestParameters: DeleteV1ProductsDownloadablelinksSamplesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.deleteV1ProductsDownloadablelinksSamplesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List of samples for downloadable product
     */
    async getV1ProductsSkuDownloadablelinksSamplesRaw(requestParameters: GetV1ProductsSkuDownloadablelinksSamplesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<DownloadableDataSampleInterface>>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling getV1ProductsSkuDownloadablelinksSamples.');
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
            path: `/V1/products/{sku}/downloadable-links/samples`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DownloadableDataSampleInterfaceFromJSON));
    }

    /**
     * List of samples for downloadable product
     */
    async getV1ProductsSkuDownloadablelinksSamples(requestParameters: GetV1ProductsSkuDownloadablelinksSamplesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<DownloadableDataSampleInterface>> {
        const response = await this.getV1ProductsSkuDownloadablelinksSamplesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update downloadable sample of the given product
     */
    async postV1ProductsSkuDownloadablelinksSamplesRaw(requestParameters: PostV1ProductsSkuDownloadablelinksSamplesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling postV1ProductsSkuDownloadablelinksSamples.');
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
            path: `/V1/products/{sku}/downloadable-links/samples`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1ProductsSkuDownloadablelinksSamplesRequestToJSON(requestParameters.postV1ProductsSkuDownloadablelinksSamplesRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Update downloadable sample of the given product
     */
    async postV1ProductsSkuDownloadablelinksSamples(requestParameters: PostV1ProductsSkuDownloadablelinksSamplesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.postV1ProductsSkuDownloadablelinksSamplesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update downloadable sample of the given product
     */
    async putV1ProductsSkuDownloadablelinksSamplesIdRaw(requestParameters: PutV1ProductsSkuDownloadablelinksSamplesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters.sku === null || requestParameters.sku === undefined) {
            throw new runtime.RequiredError('sku','Required parameter requestParameters.sku was null or undefined when calling putV1ProductsSkuDownloadablelinksSamplesId.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling putV1ProductsSkuDownloadablelinksSamplesId.');
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
            path: `/V1/products/{sku}/downloadable-links/samples/{id}`.replace(`{${"sku"}}`, encodeURIComponent(String(requestParameters.sku))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PostV1ProductsSkuDownloadablelinksSamplesRequestToJSON(requestParameters.postV1ProductsSkuDownloadablelinksSamplesRequest),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<number>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Update downloadable sample of the given product
     */
    async putV1ProductsSkuDownloadablelinksSamplesId(requestParameters: PutV1ProductsSkuDownloadablelinksSamplesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.putV1ProductsSkuDownloadablelinksSamplesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
