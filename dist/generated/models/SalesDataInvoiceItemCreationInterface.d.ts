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
 * Input argument for invoice creation Interface InvoiceItemCreationInterface
 * @export
 * @interface SalesDataInvoiceItemCreationInterface
 */
export interface SalesDataInvoiceItemCreationInterface {
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceItemCreationInterface
     * @type {object}
     * @memberof SalesDataInvoiceItemCreationInterface
     */
    extensionAttributes?: object;
    /**
     * Order item ID.
     * @type {number}
     * @memberof SalesDataInvoiceItemCreationInterface
     */
    orderItemId: number;
    /**
     * Quantity.
     * @type {number}
     * @memberof SalesDataInvoiceItemCreationInterface
     */
    qty: number;
}
/**
 * Check if a given object implements the SalesDataInvoiceItemCreationInterface interface.
 */
export declare function instanceOfSalesDataInvoiceItemCreationInterface(value: object): boolean;
export declare function SalesDataInvoiceItemCreationInterfaceFromJSON(json: any): SalesDataInvoiceItemCreationInterface;
export declare function SalesDataInvoiceItemCreationInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataInvoiceItemCreationInterface;
export declare function SalesDataInvoiceItemCreationInterfaceToJSON(value?: SalesDataInvoiceItemCreationInterface | null): any;