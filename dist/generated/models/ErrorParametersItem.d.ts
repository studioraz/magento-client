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
 * Error parameters item
 * @export
 * @interface ErrorParametersItem
 */
export interface ErrorParametersItem {
    /**
     * ACL resource
     * @type {string}
     * @memberof ErrorParametersItem
     */
    resources?: string;
    /**
     * Missing or invalid field name
     * @type {string}
     * @memberof ErrorParametersItem
     */
    fieldName?: string;
    /**
     * Incorrect field value
     * @type {string}
     * @memberof ErrorParametersItem
     */
    fieldValue?: string;
}
/**
 * Check if a given object implements the ErrorParametersItem interface.
 */
export declare function instanceOfErrorParametersItem(value: object): boolean;
export declare function ErrorParametersItemFromJSON(json: any): ErrorParametersItem;
export declare function ErrorParametersItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorParametersItem;
export declare function ErrorParametersItemToJSON(value?: ErrorParametersItem | null): any;
