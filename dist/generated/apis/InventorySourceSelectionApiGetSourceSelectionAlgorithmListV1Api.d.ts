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
import type { InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface } from '../models';
/**
 *
 */
export declare class InventorySourceSelectionApiGetSourceSelectionAlgorithmListV1Api extends runtime.BaseAPI {
    /**
     *
     */
    getV1InventorySourceselectionalgorithmlistRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface>>>;
    /**
     *
     */
    getV1InventorySourceselectionalgorithmlist(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InventorySourceSelectionApiDataSourceSelectionAlgorithmInterface>>;
}
