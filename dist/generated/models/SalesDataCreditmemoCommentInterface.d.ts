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
 * Credit memo comment interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases. A credit memo usually includes comments that detail why the credit memo amount was credited to the customer.
 * @export
 * @interface SalesDataCreditmemoCommentInterface
 */
export interface SalesDataCreditmemoCommentInterface {
    /**
     * Comment.
     * @type {string}
     * @memberof SalesDataCreditmemoCommentInterface
     */
    comment: string;
    /**
     * Created-at timestamp.
     * @type {string}
     * @memberof SalesDataCreditmemoCommentInterface
     */
    createdAt?: string;
    /**
     * Credit memo ID.
     * @type {number}
     * @memberof SalesDataCreditmemoCommentInterface
     */
    entityId?: number;
    /**
     * Is-customer-notified flag value.
     * @type {number}
     * @memberof SalesDataCreditmemoCommentInterface
     */
    isCustomerNotified: number;
    /**
     * Is-visible-on-storefront flag value.
     * @type {number}
     * @memberof SalesDataCreditmemoCommentInterface
     */
    isVisibleOnFront: number;
    /**
     * Parent ID.
     * @type {number}
     * @memberof SalesDataCreditmemoCommentInterface
     */
    parentId: number;
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCommentInterface
     * @type {object}
     * @memberof SalesDataCreditmemoCommentInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the SalesDataCreditmemoCommentInterface interface.
 */
export declare function instanceOfSalesDataCreditmemoCommentInterface(value: object): boolean;
export declare function SalesDataCreditmemoCommentInterfaceFromJSON(json: any): SalesDataCreditmemoCommentInterface;
export declare function SalesDataCreditmemoCommentInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataCreditmemoCommentInterface;
export declare function SalesDataCreditmemoCommentInterfaceToJSON(value?: SalesDataCreditmemoCommentInterface | null): any;
