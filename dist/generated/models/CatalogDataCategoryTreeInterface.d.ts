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
/**
 *
 * @export
 * @interface CatalogDataCategoryTreeInterface
 */
export interface CatalogDataCategoryTreeInterface {
    /**
     *
     * @type {number}
     * @memberof CatalogDataCategoryTreeInterface
     */
    id?: number;
    /**
     * Parent category ID
     * @type {number}
     * @memberof CatalogDataCategoryTreeInterface
     */
    parentId: number;
    /**
     * Category name
     * @type {string}
     * @memberof CatalogDataCategoryTreeInterface
     */
    name: string;
    /**
     * Whether category is active
     * @type {boolean}
     * @memberof CatalogDataCategoryTreeInterface
     */
    isActive: boolean;
    /**
     * Category position
     * @type {number}
     * @memberof CatalogDataCategoryTreeInterface
     */
    position: number;
    /**
     * Category level
     * @type {number}
     * @memberof CatalogDataCategoryTreeInterface
     */
    level: number;
    /**
     * Product count
     * @type {number}
     * @memberof CatalogDataCategoryTreeInterface
     */
    productCount: number;
    /**
     *
     * @type {Array<CatalogDataCategoryTreeInterface>}
     * @memberof CatalogDataCategoryTreeInterface
     */
    childrenData: Array<CatalogDataCategoryTreeInterface>;
}
/**
 * Check if a given object implements the CatalogDataCategoryTreeInterface interface.
 */
export declare function instanceOfCatalogDataCategoryTreeInterface(value: object): boolean;
export declare function CatalogDataCategoryTreeInterfaceFromJSON(json: any): CatalogDataCategoryTreeInterface;
export declare function CatalogDataCategoryTreeInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataCategoryTreeInterface;
export declare function CatalogDataCategoryTreeInterfaceToJSON(value?: CatalogDataCategoryTreeInterface | null): any;
