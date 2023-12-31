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
export declare function instanceOfSalesDataTransactionInterface(value: object): boolean;
export declare function SalesDataTransactionInterfaceFromJSON(json: any): SalesDataTransactionInterface;
export declare function SalesDataTransactionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataTransactionInterface;
export declare function SalesDataTransactionInterfaceToJSON(value?: SalesDataTransactionInterface | null): any;
