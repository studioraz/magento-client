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
 * Transaction interface. A transaction is an interaction between a merchant and a customer such as a purchase, a credit, a refund, and so on.
 * @export
 * @interface SalesDataTransactionInterface
 */
export interface SalesDataTransactionInterface {
    /**
     * Transaction ID.
     * @type {number}
     * @memberof SalesDataTransactionInterface
     */
    transactionId: number;
    /**
     * The parent ID for the transaction. Otherwise, null.
     * @type {number}
     * @memberof SalesDataTransactionInterface
     */
    parentId?: number;
    /**
     * Order ID.
     * @type {number}
     * @memberof SalesDataTransactionInterface
     */
    orderId: number;
    /**
     * Payment ID.
     * @type {number}
     * @memberof SalesDataTransactionInterface
     */
    paymentId: number;
    /**
     * Transaction business ID.
     * @type {string}
     * @memberof SalesDataTransactionInterface
     */
    txnId: string;
    /**
     * Parent transaction business ID.
     * @type {string}
     * @memberof SalesDataTransactionInterface
     */
    parentTxnId: string;
    /**
     * Transaction type.
     * @type {string}
     * @memberof SalesDataTransactionInterface
     */
    txnType: string;
    /**
     * Is-closed flag value.
     * @type {number}
     * @memberof SalesDataTransactionInterface
     */
    isClosed: number;
    /**
     * Array of additional information. Otherwise, null.
     * @type {Array<string>}
     * @memberof SalesDataTransactionInterface
     */
    additionalInformation?: Array<string>;
    /**
     * Created-at timestamp.
     * @type {string}
     * @memberof SalesDataTransactionInterface
     */
    createdAt: string;
    /**
     * Array of child transactions.
     * @type {Array<SalesDataTransactionInterface>}
     * @memberof SalesDataTransactionInterface
     */
    childTransactions: Array<SalesDataTransactionInterface>;
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\TransactionInterface
     * @type {object}
     * @memberof SalesDataTransactionInterface
     */
    extensionAttributes?: object;
}

/**
 * Check if a given object implements the SalesDataTransactionInterface interface.
 */
export function instanceOfSalesDataTransactionInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transactionId" in value;
    isInstance = isInstance && "orderId" in value;
    isInstance = isInstance && "paymentId" in value;
    isInstance = isInstance && "txnId" in value;
    isInstance = isInstance && "parentTxnId" in value;
    isInstance = isInstance && "txnType" in value;
    isInstance = isInstance && "isClosed" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "childTransactions" in value;

    return isInstance;
}

export function SalesDataTransactionInterfaceFromJSON(json: any): SalesDataTransactionInterface {
    return SalesDataTransactionInterfaceFromJSONTyped(json, false);
}

export function SalesDataTransactionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataTransactionInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionId': json['transaction_id'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'orderId': json['order_id'],
        'paymentId': json['payment_id'],
        'txnId': json['txn_id'],
        'parentTxnId': json['parent_txn_id'],
        'txnType': json['txn_type'],
        'isClosed': json['is_closed'],
        'additionalInformation': !exists(json, 'additional_information') ? undefined : json['additional_information'],
        'createdAt': json['created_at'],
        'childTransactions': ((json['child_transactions'] as Array<any>).map(SalesDataTransactionInterfaceFromJSON)),
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}

export function SalesDataTransactionInterfaceToJSON(value?: SalesDataTransactionInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transaction_id': value.transactionId,
        'parent_id': value.parentId,
        'order_id': value.orderId,
        'payment_id': value.paymentId,
        'txn_id': value.txnId,
        'parent_txn_id': value.parentTxnId,
        'txn_type': value.txnType,
        'is_closed': value.isClosed,
        'additional_information': value.additionalInformation,
        'created_at': value.createdAt,
        'child_transactions': ((value.childTransactions as Array<any>).map(SalesDataTransactionInterfaceToJSON)),
        'extension_attributes': value.extensionAttributes,
    };
}

