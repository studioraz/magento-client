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
import type { CatalogDataProductRenderInterface } from './CatalogDataProductRenderInterface';
/**
 * Dto that holds render information about products
 * @export
 * @interface CatalogDataProductRenderSearchResultsInterface
 */
export interface CatalogDataProductRenderSearchResultsInterface {
    /**
     * List of products rendered information
     * @type {Array<CatalogDataProductRenderInterface>}
     * @memberof CatalogDataProductRenderSearchResultsInterface
     */
    items: Array<CatalogDataProductRenderInterface>;
}
/**
 * Check if a given object implements the CatalogDataProductRenderSearchResultsInterface interface.
 */
export declare function instanceOfCatalogDataProductRenderSearchResultsInterface(value: object): boolean;
export declare function CatalogDataProductRenderSearchResultsInterfaceFromJSON(json: any): CatalogDataProductRenderSearchResultsInterface;
export declare function CatalogDataProductRenderSearchResultsInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductRenderSearchResultsInterface;
export declare function CatalogDataProductRenderSearchResultsInterfaceToJSON(value?: CatalogDataProductRenderSearchResultsInterface | null): any;
