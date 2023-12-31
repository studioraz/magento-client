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
import type { SalesDataInvoiceCommentCreationInterface } from './SalesDataInvoiceCommentCreationInterface';
import {
    SalesDataInvoiceCommentCreationInterfaceFromJSON,
    SalesDataInvoiceCommentCreationInterfaceFromJSONTyped,
    SalesDataInvoiceCommentCreationInterfaceToJSON,
} from './SalesDataInvoiceCommentCreationInterface';
import type { SalesDataInvoiceCreationArgumentsInterface } from './SalesDataInvoiceCreationArgumentsInterface';
import {
    SalesDataInvoiceCreationArgumentsInterfaceFromJSON,
    SalesDataInvoiceCreationArgumentsInterfaceFromJSONTyped,
    SalesDataInvoiceCreationArgumentsInterfaceToJSON,
} from './SalesDataInvoiceCreationArgumentsInterface';
import type { SalesDataInvoiceItemCreationInterface } from './SalesDataInvoiceItemCreationInterface';
import {
    SalesDataInvoiceItemCreationInterfaceFromJSON,
    SalesDataInvoiceItemCreationInterfaceFromJSONTyped,
    SalesDataInvoiceItemCreationInterfaceToJSON,
} from './SalesDataInvoiceItemCreationInterface';

/**
 * 
 * @export
 * @interface PostV1OrderOrderIdInvoiceRequest
 */
export interface PostV1OrderOrderIdInvoiceRequest {
    /**
     * 
     * @type {boolean}
     * @memberof PostV1OrderOrderIdInvoiceRequest
     */
    capture?: boolean;
    /**
     * 
     * @type {Array<SalesDataInvoiceItemCreationInterface>}
     * @memberof PostV1OrderOrderIdInvoiceRequest
     */
    items?: Array<SalesDataInvoiceItemCreationInterface>;
    /**
     * 
     * @type {boolean}
     * @memberof PostV1OrderOrderIdInvoiceRequest
     */
    notify?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostV1OrderOrderIdInvoiceRequest
     */
    appendComment?: boolean;
    /**
     * 
     * @type {SalesDataInvoiceCommentCreationInterface}
     * @memberof PostV1OrderOrderIdInvoiceRequest
     */
    comment?: SalesDataInvoiceCommentCreationInterface;
    /**
     * 
     * @type {SalesDataInvoiceCreationArgumentsInterface}
     * @memberof PostV1OrderOrderIdInvoiceRequest
     */
    arguments?: SalesDataInvoiceCreationArgumentsInterface;
}

/**
 * Check if a given object implements the PostV1OrderOrderIdInvoiceRequest interface.
 */
export function instanceOfPostV1OrderOrderIdInvoiceRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostV1OrderOrderIdInvoiceRequestFromJSON(json: any): PostV1OrderOrderIdInvoiceRequest {
    return PostV1OrderOrderIdInvoiceRequestFromJSONTyped(json, false);
}

export function PostV1OrderOrderIdInvoiceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostV1OrderOrderIdInvoiceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'capture': !exists(json, 'capture') ? undefined : json['capture'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(SalesDataInvoiceItemCreationInterfaceFromJSON)),
        'notify': !exists(json, 'notify') ? undefined : json['notify'],
        'appendComment': !exists(json, 'appendComment') ? undefined : json['appendComment'],
        'comment': !exists(json, 'comment') ? undefined : SalesDataInvoiceCommentCreationInterfaceFromJSON(json['comment']),
        'arguments': !exists(json, 'arguments') ? undefined : SalesDataInvoiceCreationArgumentsInterfaceFromJSON(json['arguments']),
    };
}

export function PostV1OrderOrderIdInvoiceRequestToJSON(value?: PostV1OrderOrderIdInvoiceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'capture': value.capture,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(SalesDataInvoiceItemCreationInterfaceToJSON)),
        'notify': value.notify,
        'appendComment': value.appendComment,
        'comment': SalesDataInvoiceCommentCreationInterfaceToJSON(value.comment),
        'arguments': SalesDataInvoiceCreationArgumentsInterfaceToJSON(value.arguments),
    };
}

