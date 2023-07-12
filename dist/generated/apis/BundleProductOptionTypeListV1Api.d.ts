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
import type { BundleDataOptionTypeInterface } from '../models';
/**
 *
 */
export declare class BundleProductOptionTypeListV1Api extends runtime.BaseAPI {
    /**
     * Get all types for options for bundle products
     */
    getV1BundleproductsOptionsTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BundleDataOptionTypeInterface>>>;
    /**
     * Get all types for options for bundle products
     */
    getV1BundleproductsOptionsTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BundleDataOptionTypeInterface>>;
}
