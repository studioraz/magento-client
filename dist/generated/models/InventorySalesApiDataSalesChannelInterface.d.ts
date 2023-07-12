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
 * Represents sales channels (which are a linkage between stocks and websites, customer groups, etc.) Used fully qualified namespaces in annotations for proper work of WebApi request parser
 * @export
 * @interface InventorySalesApiDataSalesChannelInterface
 */
export interface InventorySalesApiDataSalesChannelInterface {
    /**
     * Sales channel type
     * @type {string}
     * @memberof InventorySalesApiDataSalesChannelInterface
     */
    type?: string;
    /**
     * Sales channel code
     * @type {string}
     * @memberof InventorySalesApiDataSalesChannelInterface
     */
    code?: string;
    /**
     * ExtensionInterface class for @see \Magento\InventorySalesApi\Api\Data\SalesChannelInterface
     * @type {object}
     * @memberof InventorySalesApiDataSalesChannelInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the InventorySalesApiDataSalesChannelInterface interface.
 */
export declare function instanceOfInventorySalesApiDataSalesChannelInterface(value: object): boolean;
export declare function InventorySalesApiDataSalesChannelInterfaceFromJSON(json: any): InventorySalesApiDataSalesChannelInterface;
export declare function InventorySalesApiDataSalesChannelInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventorySalesApiDataSalesChannelInterface;
export declare function InventorySalesApiDataSalesChannelInterfaceToJSON(value?: InventorySalesApiDataSalesChannelInterface | null): any;