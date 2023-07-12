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
 * Interface LinkInterface
 * @export
 * @interface BundleDataLinkInterface
 */
export interface BundleDataLinkInterface {
    /**
     * The identifier
     * @type {string}
     * @memberof BundleDataLinkInterface
     */
    id?: string;
    /**
     * Linked product sku
     * @type {string}
     * @memberof BundleDataLinkInterface
     */
    sku?: string;
    /**
     * Option id
     * @type {number}
     * @memberof BundleDataLinkInterface
     */
    optionId?: number;
    /**
     * Qty
     * @type {number}
     * @memberof BundleDataLinkInterface
     */
    qty?: number;
    /**
     * Position
     * @type {number}
     * @memberof BundleDataLinkInterface
     */
    position?: number;
    /**
     * Is default
     * @type {boolean}
     * @memberof BundleDataLinkInterface
     */
    isDefault: boolean;
    /**
     * Price
     * @type {number}
     * @memberof BundleDataLinkInterface
     */
    price: number;
    /**
     * Price type
     * @type {number}
     * @memberof BundleDataLinkInterface
     */
    priceType: number;
    /**
     * Whether quantity could be changed
     * @type {number}
     * @memberof BundleDataLinkInterface
     */
    canChangeQuantity?: number;
    /**
     * ExtensionInterface class for @see \Magento\Bundle\Api\Data\LinkInterface
     * @type {object}
     * @memberof BundleDataLinkInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the BundleDataLinkInterface interface.
 */
export declare function instanceOfBundleDataLinkInterface(value: object): boolean;
export declare function BundleDataLinkInterfaceFromJSON(json: any): BundleDataLinkInterface;
export declare function BundleDataLinkInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleDataLinkInterface;
export declare function BundleDataLinkInterfaceToJSON(value?: BundleDataLinkInterface | null): any;
