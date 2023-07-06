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
import type { CatalogDataProductCustomOptionValuesInterface } from './CatalogDataProductCustomOptionValuesInterface';
import {
    CatalogDataProductCustomOptionValuesInterfaceFromJSON,
    CatalogDataProductCustomOptionValuesInterfaceFromJSONTyped,
    CatalogDataProductCustomOptionValuesInterfaceToJSON,
} from './CatalogDataProductCustomOptionValuesInterface';

/**
 * 
 * @export
 * @interface CatalogDataProductCustomOptionInterface
 */
export interface CatalogDataProductCustomOptionInterface {
    /**
     * Product SKU
     * @type {string}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    productSku: string;
    /**
     * Option id
     * @type {number}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    optionId?: number;
    /**
     * Option title
     * @type {string}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    title: string;
    /**
     * Option type
     * @type {string}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    type: string;
    /**
     * Sort order
     * @type {number}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    sortOrder: number;
    /**
     * Is require
     * @type {boolean}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    isRequire: boolean;
    /**
     * Price
     * @type {number}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    price?: number;
    /**
     * Price type
     * @type {string}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    priceType?: string;
    /**
     * Sku
     * @type {string}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    sku?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    fileExtension?: string;
    /**
     * 
     * @type {number}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    maxCharacters?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    imageSizeX?: number;
    /**
     * 
     * @type {number}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    imageSizeY?: number;
    /**
     * 
     * @type {Array<CatalogDataProductCustomOptionValuesInterface>}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    values?: Array<CatalogDataProductCustomOptionValuesInterface>;
    /**
     * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionInterface
     * @type {object}
     * @memberof CatalogDataProductCustomOptionInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the CatalogDataProductCustomOptionInterface interface.
 */
export function instanceOfCatalogDataProductCustomOptionInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "productSku" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "sortOrder" in value;
    isInstance = isInstance && "isRequire" in value;

    return isInstance;
}

export function CatalogDataProductCustomOptionInterfaceFromJSON(json: any): CatalogDataProductCustomOptionInterface {
    return CatalogDataProductCustomOptionInterfaceFromJSONTyped(json, false);
}

export function CatalogDataProductCustomOptionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductCustomOptionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productSku': json['product_sku'],
        'optionId': !exists(json, 'option_id') ? undefined : json['option_id'],
        'title': json['title'],
        'type': json['type'],
        'sortOrder': json['sort_order'],
        'isRequire': json['is_require'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'priceType': !exists(json, 'price_type') ? undefined : json['price_type'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'fileExtension': !exists(json, 'file_extension') ? undefined : json['file_extension'],
        'maxCharacters': !exists(json, 'max_characters') ? undefined : json['max_characters'],
        'imageSizeX': !exists(json, 'image_size_x') ? undefined : json['image_size_x'],
        'imageSizeY': !exists(json, 'image_size_y') ? undefined : json['image_size_y'],
        'values': !exists(json, 'values') ? undefined : ((json['values'] as Array<any>).map(CatalogDataProductCustomOptionValuesInterfaceFromJSON)),
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function CatalogDataProductCustomOptionInterfaceToJSON(value?: CatalogDataProductCustomOptionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'product_sku': value.productSku,
        'option_id': value.optionId,
        'title': value.title,
        'type': value.type,
        'sort_order': value.sortOrder,
        'is_require': value.isRequire,
        'price': value.price,
        'price_type': value.priceType,
        'sku': value.sku,
        'file_extension': value.fileExtension,
        'max_characters': value.maxCharacters,
        'image_size_x': value.imageSizeX,
        'image_size_y': value.imageSizeY,
        'values': value.values === undefined ? undefined : ((value.values as Array<any>).map(CatalogDataProductCustomOptionValuesInterfaceToJSON)),
        'extension_attributes': value.extensionAttributes,
    };
}

