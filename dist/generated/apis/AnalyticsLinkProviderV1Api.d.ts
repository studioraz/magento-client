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
import type { AnalyticsDataLinkInterface } from '../models';
/**
 *
 */
export declare class AnalyticsLinkProviderV1Api extends runtime.BaseAPI {
    /**
     *
     */
    getV1AnalyticsLinkRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnalyticsDataLinkInterface>>;
    /**
     *
     */
    getV1AnalyticsLink(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnalyticsDataLinkInterface>;
}
