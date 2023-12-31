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
 * Customer address region interface.
 * @export
 * @interface CustomerDataRegionInterface
 */
export interface CustomerDataRegionInterface {
    /**
     * Region code
     * @type {string}
     * @memberof CustomerDataRegionInterface
     */
    regionCode: string;
    /**
     * Region
     * @type {string}
     * @memberof CustomerDataRegionInterface
     */
    region: string;
    /**
     * Region id
     * @type {number}
     * @memberof CustomerDataRegionInterface
     */
    regionId: number;
    /**
     * ExtensionInterface class for @see \Magento\Customer\Api\Data\RegionInterface
     * @type {object}
     * @memberof CustomerDataRegionInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the CustomerDataRegionInterface interface.
 */
export declare function instanceOfCustomerDataRegionInterface(value: object): boolean;
export declare function CustomerDataRegionInterfaceFromJSON(json: any): CustomerDataRegionInterface;
export declare function CustomerDataRegionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerDataRegionInterface;
export declare function CustomerDataRegionInterfaceToJSON(value?: CustomerDataRegionInterface | null): any;
