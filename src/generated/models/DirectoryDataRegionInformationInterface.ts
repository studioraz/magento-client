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
 * Region Information interface.
 * @export
 * @interface DirectoryDataRegionInformationInterface
 */
export interface DirectoryDataRegionInformationInterface {
    /**
     * Region id
     * @type {string}
     * @memberof DirectoryDataRegionInformationInterface
     */
    id: string;
    /**
     * Region code
     * @type {string}
     * @memberof DirectoryDataRegionInformationInterface
     */
    code: string;
    /**
     * Region name
     * @type {string}
     * @memberof DirectoryDataRegionInformationInterface
     */
    name: string;
    /**
     * ExtensionInterface class for @see \Magento\Directory\Api\Data\RegionInformationInterface
     * @type {object}
     * @memberof DirectoryDataRegionInformationInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the DirectoryDataRegionInformationInterface interface.
 */
export function instanceOfDirectoryDataRegionInformationInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function DirectoryDataRegionInformationInterfaceFromJSON(json: any): DirectoryDataRegionInformationInterface {
    return DirectoryDataRegionInformationInterfaceFromJSONTyped(json, false);
}

export function DirectoryDataRegionInformationInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectoryDataRegionInformationInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function DirectoryDataRegionInformationInterfaceToJSON(value?: DirectoryDataRegionInformationInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'code': value.code,
        'name': value.name,
        'extension_attributes': value.extensionAttributes,
    };
}

