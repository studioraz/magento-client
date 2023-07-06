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
import type { EavDataAttributeOptionLabelInterface } from './EavDataAttributeOptionLabelInterface';
import {
    EavDataAttributeOptionLabelInterfaceFromJSON,
    EavDataAttributeOptionLabelInterfaceFromJSONTyped,
    EavDataAttributeOptionLabelInterfaceToJSON,
} from './EavDataAttributeOptionLabelInterface';

/**
 * Created from:
 * @export
 * @interface EavDataAttributeOptionInterface
 */
export interface EavDataAttributeOptionInterface {
    /**
     * Option label
     * @type {string}
     * @memberof EavDataAttributeOptionInterface
     */
    label: string;
    /**
     * Option value
     * @type {string}
     * @memberof EavDataAttributeOptionInterface
     */
    value: string;
    /**
     * Option order
     * @type {number}
     * @memberof EavDataAttributeOptionInterface
     */
    sortOrder?: number;
    /**
     * Default
     * @type {boolean}
     * @memberof EavDataAttributeOptionInterface
     */
    isDefault?: boolean;
    /**
     * Option label for store scopes
     * @type {Array<EavDataAttributeOptionLabelInterface>}
     * @memberof EavDataAttributeOptionInterface
     */
    storeLabels?: Array<EavDataAttributeOptionLabelInterface>;
}

/**
 * Check if a given object implements the EavDataAttributeOptionInterface interface.
 */
export function instanceOfEavDataAttributeOptionInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "label" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function EavDataAttributeOptionInterfaceFromJSON(json: any): EavDataAttributeOptionInterface {
    return EavDataAttributeOptionInterfaceFromJSONTyped(json, false);
}

export function EavDataAttributeOptionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): EavDataAttributeOptionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': json['label'],
        'value': json['value'],
        'sortOrder': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'isDefault': !exists(json, 'is_default') ? undefined : json['is_default'],
        'storeLabels': !exists(json, 'store_labels') ? undefined : ((json['store_labels'] as Array<any>).map(EavDataAttributeOptionLabelInterfaceFromJSON)),
    };
}

export function EavDataAttributeOptionInterfaceToJSON(value?: EavDataAttributeOptionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'value': value.value,
        'sort_order': value.sortOrder,
        'is_default': value.isDefault,
        'store_labels': value.storeLabels === undefined ? undefined : ((value.storeLabels as Array<any>).map(EavDataAttributeOptionLabelInterfaceToJSON)),
    };
}

