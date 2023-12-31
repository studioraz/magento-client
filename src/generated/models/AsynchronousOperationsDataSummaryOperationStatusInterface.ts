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
 * Getter Class OperationsStatusInterface Instead of OperationInterface this class don't provide all operation data and not responsive to set any data, just to get operation data without serialized_data and result_serialized_data
 * @export
 * @interface AsynchronousOperationsDataSummaryOperationStatusInterface
 */
export interface AsynchronousOperationsDataSummaryOperationStatusInterface {
    /**
     * Id
     * @type {number}
     * @memberof AsynchronousOperationsDataSummaryOperationStatusInterface
     */
    id: number;
    /**
     * Operation status
     * @type {number}
     * @memberof AsynchronousOperationsDataSummaryOperationStatusInterface
     */
    status: number;
    /**
     * Result message
     * @type {string}
     * @memberof AsynchronousOperationsDataSummaryOperationStatusInterface
     */
    resultMessage: string;
    /**
     * Error code
     * @type {number}
     * @memberof AsynchronousOperationsDataSummaryOperationStatusInterface
     */
    errorCode: number;
}

/**
 * Check if a given object implements the AsynchronousOperationsDataSummaryOperationStatusInterface interface.
 */
export function instanceOfAsynchronousOperationsDataSummaryOperationStatusInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "resultMessage" in value;
    isInstance = isInstance && "errorCode" in value;

    return isInstance;
}

export function AsynchronousOperationsDataSummaryOperationStatusInterfaceFromJSON(json: any): AsynchronousOperationsDataSummaryOperationStatusInterface {
    return AsynchronousOperationsDataSummaryOperationStatusInterfaceFromJSONTyped(json, false);
}

export function AsynchronousOperationsDataSummaryOperationStatusInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AsynchronousOperationsDataSummaryOperationStatusInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'status': json['status'],
        'resultMessage': json['result_message'],
        'errorCode': json['error_code'],
    };
}

export function AsynchronousOperationsDataSummaryOperationStatusInterfaceToJSON(value?: AsynchronousOperationsDataSummaryOperationStatusInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'status': value.status,
        'result_message': value.resultMessage,
        'error_code': value.errorCode,
    };
}

