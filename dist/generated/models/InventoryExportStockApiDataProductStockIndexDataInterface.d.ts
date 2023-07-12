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
 * Class ExportStockIndexDataResultInterface for result Inventory stock index dump export
 * @export
 * @interface InventoryExportStockApiDataProductStockIndexDataInterface
 */
export interface InventoryExportStockApiDataProductStockIndexDataInterface {
    /**
     * Product SKU
     * @type {string}
     * @memberof InventoryExportStockApiDataProductStockIndexDataInterface
     */
    sku: string;
    /**
     * Product QTY
     * @type {number}
     * @memberof InventoryExportStockApiDataProductStockIndexDataInterface
     */
    qty: number;
    /**
     * Product is salable flag
     * @type {boolean}
     * @memberof InventoryExportStockApiDataProductStockIndexDataInterface
     */
    isSalable: boolean;
}
/**
 * Check if a given object implements the InventoryExportStockApiDataProductStockIndexDataInterface interface.
 */
export declare function instanceOfInventoryExportStockApiDataProductStockIndexDataInterface(value: object): boolean;
export declare function InventoryExportStockApiDataProductStockIndexDataInterfaceFromJSON(json: any): InventoryExportStockApiDataProductStockIndexDataInterface;
export declare function InventoryExportStockApiDataProductStockIndexDataInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryExportStockApiDataProductStockIndexDataInterface;
export declare function InventoryExportStockApiDataProductStockIndexDataInterfaceToJSON(value?: InventoryExportStockApiDataProductStockIndexDataInterface | null): any;
