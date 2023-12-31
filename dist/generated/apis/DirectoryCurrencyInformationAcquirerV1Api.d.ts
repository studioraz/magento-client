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
import type { DirectoryDataCurrencyInformationInterface } from '../models';
/**
 *
 */
export declare class DirectoryCurrencyInformationAcquirerV1Api extends runtime.BaseAPI {
    /**
     * Get currency information for the store.
     */
    getV1DirectoryCurrencyRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DirectoryDataCurrencyInformationInterface>>;
    /**
     * Get currency information for the store.
     */
    getV1DirectoryCurrency(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DirectoryDataCurrencyInformationInterface>;
}
