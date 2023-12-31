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
import type { FrameworkDataVideoContentInterface } from './FrameworkDataVideoContentInterface';
import {
    FrameworkDataVideoContentInterfaceFromJSON,
    FrameworkDataVideoContentInterfaceFromJSONTyped,
    FrameworkDataVideoContentInterfaceToJSON,
} from './FrameworkDataVideoContentInterface';

/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeMediaGalleryEntryInterface
 * @export
 * @interface CatalogDataProductAttributeMediaGalleryEntryExtensionInterface
 */
export interface CatalogDataProductAttributeMediaGalleryEntryExtensionInterface {
    /**
     * 
     * @type {FrameworkDataVideoContentInterface}
     * @memberof CatalogDataProductAttributeMediaGalleryEntryExtensionInterface
     */
    videoContent?: FrameworkDataVideoContentInterface;
}

/**
 * Check if a given object implements the CatalogDataProductAttributeMediaGalleryEntryExtensionInterface interface.
 */
export function instanceOfCatalogDataProductAttributeMediaGalleryEntryExtensionInterface(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogDataProductAttributeMediaGalleryEntryExtensionInterfaceFromJSON(json: any): CatalogDataProductAttributeMediaGalleryEntryExtensionInterface {
    return CatalogDataProductAttributeMediaGalleryEntryExtensionInterfaceFromJSONTyped(json, false);
}

export function CatalogDataProductAttributeMediaGalleryEntryExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductAttributeMediaGalleryEntryExtensionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'videoContent': !exists(json, 'video_content') ? undefined : FrameworkDataVideoContentInterfaceFromJSON(json['video_content']),
    };
}

export function CatalogDataProductAttributeMediaGalleryEntryExtensionInterfaceToJSON(value?: CatalogDataProductAttributeMediaGalleryEntryExtensionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'video_content': FrameworkDataVideoContentInterfaceToJSON(value.videoContent),
    };
}

