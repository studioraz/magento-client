/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * Adobe Stock creator data class
 * @export
 * @interface AdobeStockAssetApiDataCreatorInterface
 */
export interface AdobeStockAssetApiDataCreatorInterface {
    /**
     * The id
     * @type {number}
     * @memberof AdobeStockAssetApiDataCreatorInterface
     */
    id?: number;
    /**
     * The creator name
     * @type {string}
     * @memberof AdobeStockAssetApiDataCreatorInterface
     */
    name?: string;
    /**
     * ExtensionInterface class for @see \Magento\AdobeStockAssetApi\Api\Data\CreatorInterface
     * @type {object}
     * @memberof AdobeStockAssetApiDataCreatorInterface
     */
    extensionAttributes: object;
}

/**
 * Check if a given object implements the AdobeStockAssetApiDataCreatorInterface interface.
 */
export function instanceOfAdobeStockAssetApiDataCreatorInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "extensionAttributes" in value;

    return isInstance;
}

export function AdobeStockAssetApiDataCreatorInterfaceFromJSON(json: any): AdobeStockAssetApiDataCreatorInterface {
    return AdobeStockAssetApiDataCreatorInterfaceFromJSONTyped(json, false);
}

export function AdobeStockAssetApiDataCreatorInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdobeStockAssetApiDataCreatorInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'extensionAttributes': json['extension_attributes'],
    };
}

export function AdobeStockAssetApiDataCreatorInterfaceToJSON(value?: AdobeStockAssetApiDataCreatorInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'extension_attributes': value.extensionAttributes,
    };
}

