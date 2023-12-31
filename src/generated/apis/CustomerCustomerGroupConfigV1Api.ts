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

export interface PutV1CustomerGroupsDefaultIdRequest {
    id: number;
}

/**
 * 
 */
export class CustomerCustomerGroupConfigV1Api extends runtime.BaseAPI {

    /**
     * Set system default customer group.
     */
    async putV1CustomerGroupsDefaultIdRaw(requestParameters: PutV1CustomerGroupsDefaultIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<number>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling putV1CustomerGroupsDefaultId.');
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
            path: `/V1/customerGroups/default/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
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
     * Set system default customer group.
     */
    async putV1CustomerGroupsDefaultId(requestParameters: PutV1CustomerGroupsDefaultIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<number> {
        const response = await this.putV1CustomerGroupsDefaultIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
