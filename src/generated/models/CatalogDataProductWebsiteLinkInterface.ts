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
 * 
 * @export
 * @interface CatalogDataProductWebsiteLinkInterface
 */
export interface CatalogDataProductWebsiteLinkInterface {
    /**
     * 
     * @type {string}
     * @memberof CatalogDataProductWebsiteLinkInterface
     */
    sku: string;
    /**
     * Website ids
     * @type {number}
     * @memberof CatalogDataProductWebsiteLinkInterface
     */
    websiteId: number;
}

/**
 * Check if a given object implements the CatalogDataProductWebsiteLinkInterface interface.
 */
export function instanceOfCatalogDataProductWebsiteLinkInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sku" in value;
    isInstance = isInstance && "websiteId" in value;

    return isInstance;
}

export function CatalogDataProductWebsiteLinkInterfaceFromJSON(json: any): CatalogDataProductWebsiteLinkInterface {
    return CatalogDataProductWebsiteLinkInterfaceFromJSONTyped(json, false);
}

export function CatalogDataProductWebsiteLinkInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductWebsiteLinkInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sku': json['sku'],
        'websiteId': json['website_id'],
    };
}

export function CatalogDataProductWebsiteLinkInterfaceToJSON(value?: CatalogDataProductWebsiteLinkInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sku': value.sku,
        'website_id': value.websiteId,
    };
}

