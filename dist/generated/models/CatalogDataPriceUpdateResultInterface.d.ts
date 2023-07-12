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
 * Interface returned in case of incorrect price passed to efficient price API.
 * @export
 * @interface CatalogDataPriceUpdateResultInterface
 */
export interface CatalogDataPriceUpdateResultInterface {
    /**
     * Error message, that contains description of error occurred during price update.
     * @type {string}
     * @memberof CatalogDataPriceUpdateResultInterface
     */
    message: string;
    /**
     * Parameters, that could be displayed in error message placeholders.
     * @type {Array<string>}
     * @memberof CatalogDataPriceUpdateResultInterface
     */
    parameters: Array<string>;
    /**
     * ExtensionInterface class for @see \Magento\Catalog\Api\Data\PriceUpdateResultInterface
     * @type {object}
     * @memberof CatalogDataPriceUpdateResultInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the CatalogDataPriceUpdateResultInterface interface.
 */
export declare function instanceOfCatalogDataPriceUpdateResultInterface(value: object): boolean;
export declare function CatalogDataPriceUpdateResultInterfaceFromJSON(json: any): CatalogDataPriceUpdateResultInterface;
export declare function CatalogDataPriceUpdateResultInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataPriceUpdateResultInterface;
export declare function CatalogDataPriceUpdateResultInterfaceToJSON(value?: CatalogDataPriceUpdateResultInterface | null): any;