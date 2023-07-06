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
 * Product Render image interface. Represents physical characteristics of image, that can be used in product listing or product view
 * @export
 * @interface CatalogDataProductRenderImageInterface
 */
export interface CatalogDataProductRenderImageInterface {
    /**
     * Image url
     * @type {string}
     * @memberof CatalogDataProductRenderImageInterface
     */
    url: string;
    /**
     * Image code
     * @type {string}
     * @memberof CatalogDataProductRenderImageInterface
     */
    code: string;
    /**
     * Image height
     * @type {number}
     * @memberof CatalogDataProductRenderImageInterface
     */
    height: number;
    /**
     * Image width in px
     * @type {number}
     * @memberof CatalogDataProductRenderImageInterface
     */
    width: number;
    /**
     * Image label
     * @type {string}
     * @memberof CatalogDataProductRenderImageInterface
     */
    label: string;
    /**
     * Resize width
     * @type {number}
     * @memberof CatalogDataProductRenderImageInterface
     */
    resizedWidth: number;
    /**
     * Resize height
     * @type {number}
     * @memberof CatalogDataProductRenderImageInterface
     */
    resizedHeight: number;
    /**
     * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\ImageInterface
     * @type {object}
     * @memberof CatalogDataProductRenderImageInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the CatalogDataProductRenderImageInterface interface.
 */
export function instanceOfCatalogDataProductRenderImageInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "width" in value;
    isInstance = isInstance && "label" in value;
    isInstance = isInstance && "resizedWidth" in value;
    isInstance = isInstance && "resizedHeight" in value;

    return isInstance;
}

export function CatalogDataProductRenderImageInterfaceFromJSON(json: any): CatalogDataProductRenderImageInterface {
    return CatalogDataProductRenderImageInterfaceFromJSONTyped(json, false);
}

export function CatalogDataProductRenderImageInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductRenderImageInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
        'code': json['code'],
        'height': json['height'],
        'width': json['width'],
        'label': json['label'],
        'resizedWidth': json['resized_width'],
        'resizedHeight': json['resized_height'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function CatalogDataProductRenderImageInterfaceToJSON(value?: CatalogDataProductRenderImageInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'code': value.code,
        'height': value.height,
        'width': value.width,
        'label': value.label,
        'resized_width': value.resizedWidth,
        'resized_height': value.resizedHeight,
        'extension_attributes': value.extensionAttributes,
    };
}

