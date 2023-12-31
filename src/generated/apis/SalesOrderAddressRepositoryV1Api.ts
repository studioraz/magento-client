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
  PutV1OrdersParentIdRequest,
  SalesDataOrderAddressInterface,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    PutV1OrdersParentIdRequestFromJSON,
    PutV1OrdersParentIdRequestToJSON,
    SalesDataOrderAddressInterfaceFromJSON,
    SalesDataOrderAddressInterfaceToJSON,
} from '../models';

export interface PutV1OrdersParentIdOperationRequest {
    parentId: string;
    putV1OrdersParentIdRequest?: PutV1OrdersParentIdRequest;
}

/**
 * 
 */
export class SalesOrderAddressRepositoryV1Api extends runtime.BaseAPI {

    /**
     * Performs persist operations for a specified order address.
     */
    async putV1OrdersParentIdRaw(requestParameters: PutV1OrdersParentIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SalesDataOrderAddressInterface>> {
        if (requestParameters.parentId === null || requestParameters.parentId === undefined) {
            throw new runtime.RequiredError('parentId','Required parameter requestParameters.parentId was null or undefined when calling putV1OrdersParentId.');
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
            path: `/V1/orders/{parent_id}`.replace(`{${"parent_id"}}`, encodeURIComponent(String(requestParameters.parentId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PutV1OrdersParentIdRequestToJSON(requestParameters.putV1OrdersParentIdRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SalesDataOrderAddressInterfaceFromJSON(jsonValue));
    }

    /**
     * Performs persist operations for a specified order address.
     */
    async putV1OrdersParentId(requestParameters: PutV1OrdersParentIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SalesDataOrderAddressInterface> {
        const response = await this.putV1OrdersParentIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
