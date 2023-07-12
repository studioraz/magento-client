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
 * Product Special Price Interface is used to encapsulate data that can be processed by efficient price API.
 * @export
 * @interface CatalogDataSpecialPriceInterface
 */
export interface CatalogDataSpecialPriceInterface {
    /**
     * Product special price value.
     * @type {number}
     * @memberof CatalogDataSpecialPriceInterface
     */
    price: number;
    /**
     * ID of store, that contains special price value.
     * @type {number}
     * @memberof CatalogDataSpecialPriceInterface
     */
    storeId: number;
    /**
     * SKU of product, that contains special price value.
     * @type {string}
     * @memberof CatalogDataSpecialPriceInterface
     */
    sku: string;
    /**
     * Start date for special price in Y-m-d H:i:s format.
     * @type {string}
     * @memberof CatalogDataSpecialPriceInterface
     */
    priceFrom: string;
    /**
     * End date for special price in Y-m-d H:i:s format.
     * @type {string}
     * @memberof CatalogDataSpecialPriceInterface
     */
    priceTo: string;
    /**
     * ExtensionInterface class for @see \Magento\Catalog\Api\Data\SpecialPriceInterface
     * @type {object}
     * @memberof CatalogDataSpecialPriceInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the CatalogDataSpecialPriceInterface interface.
 */
export declare function instanceOfCatalogDataSpecialPriceInterface(value: object): boolean;
export declare function CatalogDataSpecialPriceInterfaceFromJSON(json: any): CatalogDataSpecialPriceInterface;
export declare function CatalogDataSpecialPriceInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataSpecialPriceInterface;
export declare function CatalogDataSpecialPriceInterfaceToJSON(value?: CatalogDataSpecialPriceInterface | null): any;
