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
  SalesDataShipmentCommentSearchResultInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    SalesDataShipmentCommentSearchResultInterfaceFromJSON,
    SalesDataShipmentCommentSearchResultInterfaceToJSON,
} from '../models';

export interface GetV1ShipmentIdCommentsRequest {
    id: number;
}

export interface GetV1ShipmentIdLabelRequest {
    id: number;
}

export interface PostV1ShipmentIdEmailsRequest {
    id: number;
}

/**
 * 
 */
export class SalesShipmentManagementV1Api extends runtime.BaseAPI {

    /**
     * Lists comments for a specified shipment.
     */
    async getV1ShipmentIdCommentsRaw(requestParameters: GetV1ShipmentIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SalesDataShipmentCommentSearchResultInterface>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getV1ShipmentIdComments.');
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
            path: `/V1/shipment/{id}/comments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SalesDataShipmentCommentSearchResultInterfaceFromJSON(jsonValue));
    }

    /**
     * Lists comments for a specified shipment.
     */
    async getV1ShipmentIdComments(requestParameters: GetV1ShipmentIdCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SalesDataShipmentCommentSearchResultInterface> {
        const response = await this.getV1ShipmentIdCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a specified shipment label.
     */
    async getV1ShipmentIdLabelRaw(requestParameters: GetV1ShipmentIdLabelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getV1ShipmentIdLabel.');
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
            path: `/V1/shipment/{id}/label`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Gets a specified shipment label.
     */
    async getV1ShipmentIdLabel(requestParameters: GetV1ShipmentIdLabelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getV1ShipmentIdLabelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Emails user a specified shipment.
     */
    async postV1ShipmentIdEmailsRaw(requestParameters: PostV1ShipmentIdEmailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling postV1ShipmentIdEmails.');
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
            path: `/V1/shipment/{id}/emails`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
     * Emails user a specified shipment.
     */
    async postV1ShipmentIdEmails(requestParameters: PostV1ShipmentIdEmailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.postV1ShipmentIdEmailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
