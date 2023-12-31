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
import type { SalesDataOrderPaymentExtensionInterface } from './SalesDataOrderPaymentExtensionInterface';
import {
    SalesDataOrderPaymentExtensionInterfaceFromJSON,
    SalesDataOrderPaymentExtensionInterfaceFromJSONTyped,
    SalesDataOrderPaymentExtensionInterfaceToJSON,
} from './SalesDataOrderPaymentExtensionInterface';

/**
 * Order payment interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 * @export
 * @interface SalesDataOrderPaymentInterface
 */
export interface SalesDataOrderPaymentInterface {
    /**
     * Account status.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    accountStatus: string;
    /**
     * Additional data.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    additionalData?: string;
    /**
     * Array of additional information.
     * @type {Array<string>}
     * @memberof SalesDataOrderPaymentInterface
     */
    additionalInformation: Array<string>;
    /**
     * Address status.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    addressStatus?: string;
    /**
     * Amount authorized.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    amountAuthorized?: number;
    /**
     * Amount canceled.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    amountCanceled?: number;
    /**
     * Amount ordered.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    amountOrdered?: number;
    /**
     * Amount paid.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    amountPaid?: number;
    /**
     * Amount refunded.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    amountRefunded?: number;
    /**
     * Anet transaction method.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    anetTransMethod?: string;
    /**
     * Base amount authorized.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    baseAmountAuthorized?: number;
    /**
     * Base amount canceled.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    baseAmountCanceled?: number;
    /**
     * Base amount ordered.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    baseAmountOrdered?: number;
    /**
     * Base amount paid.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    baseAmountPaid?: number;
    /**
     * Base amount paid online.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    baseAmountPaidOnline?: number;
    /**
     * Base amount refunded.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    baseAmountRefunded?: number;
    /**
     * Base amount refunded online.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    baseAmountRefundedOnline?: number;
    /**
     * Base shipping amount.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    baseShippingAmount?: number;
    /**
     * Base shipping captured amount.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    baseShippingCaptured?: number;
    /**
     * Base shipping refunded amount.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    baseShippingRefunded?: number;
    /**
     * Credit card approval.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccApproval?: string;
    /**
     * Credit card avs status.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccAvsStatus?: string;
    /**
     * Credit card CID status.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccCidStatus?: string;
    /**
     * Credit card debug request body.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccDebugRequestBody?: string;
    /**
     * Credit card debug response body.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccDebugResponseBody?: string;
    /**
     * Credit card debug response serialized.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccDebugResponseSerialized?: string;
    /**
     * Credit card expiration month.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccExpMonth?: string;
    /**
     * Credit card expiration year.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccExpYear?: string;
    /**
     * Last four digits of the credit card.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccLast4: string;
    /**
     * Encrypted credit card number.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccNumberEnc?: string;
    /**
     * Credit card number.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccOwner?: string;
    /**
     * Credit card secure verify.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccSecureVerify?: string;
    /**
     * Credit card SS issue.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccSsIssue?: string;
    /**
     * Credit card SS start month.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccSsStartMonth?: string;
    /**
     * Credit card SS start year.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccSsStartYear?: string;
    /**
     * Credit card status.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccStatus?: string;
    /**
     * Credit card status description.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccStatusDescription?: string;
    /**
     * Credit card transaction ID.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccTransId?: string;
    /**
     * Credit card type.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    ccType?: string;
    /**
     * eCheck account name.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    echeckAccountName?: string;
    /**
     * eCheck account type.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    echeckAccountType?: string;
    /**
     * eCheck bank name.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    echeckBankName?: string;
    /**
     * eCheck routing number.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    echeckRoutingNumber?: string;
    /**
     * eCheck type.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    echeckType?: string;
    /**
     * Entity ID.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    entityId?: number;
    /**
     * Last transaction ID.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    lastTransId?: string;
    /**
     * Method.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    method: string;
    /**
     * Parent ID.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    parentId?: number;
    /**
     * PO number.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    poNumber?: string;
    /**
     * Protection eligibility.
     * @type {string}
     * @memberof SalesDataOrderPaymentInterface
     */
    protectionEligibility?: string;
    /**
     * Quote payment ID.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    quotePaymentId?: number;
    /**
     * Shipping amount.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    shippingAmount?: number;
    /**
     * Shipping captured.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    shippingCaptured?: number;
    /**
     * Shipping refunded.
     * @type {number}
     * @memberof SalesDataOrderPaymentInterface
     */
    shippingRefunded?: number;
    /**
     * 
     * @type {SalesDataOrderPaymentExtensionInterface}
     * @memberof SalesDataOrderPaymentInterface
     */
    extensionAttributes?: SalesDataOrderPaymentExtensionInterface;
}

/**
 * Check if a given object implements the SalesDataOrderPaymentInterface interface.
 */
export function instanceOfSalesDataOrderPaymentInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountStatus" in value;
    isInstance = isInstance && "additionalInformation" in value;
    isInstance = isInstance && "ccLast4" in value;
    isInstance = isInstance && "method" in value;

    return isInstance;
}

export function SalesDataOrderPaymentInterfaceFromJSON(json: any): SalesDataOrderPaymentInterface {
    return SalesDataOrderPaymentInterfaceFromJSONTyped(json, false);
}

export function SalesDataOrderPaymentInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataOrderPaymentInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountStatus': json['account_status'],
        'additionalData': !exists(json, 'additional_data') ? undefined : json['additional_data'],
        'additionalInformation': json['additional_information'],
        'addressStatus': !exists(json, 'address_status') ? undefined : json['address_status'],
        'amountAuthorized': !exists(json, 'amount_authorized') ? undefined : json['amount_authorized'],
        'amountCanceled': !exists(json, 'amount_canceled') ? undefined : json['amount_canceled'],
        'amountOrdered': !exists(json, 'amount_ordered') ? undefined : json['amount_ordered'],
        'amountPaid': !exists(json, 'amount_paid') ? undefined : json['amount_paid'],
        'amountRefunded': !exists(json, 'amount_refunded') ? undefined : json['amount_refunded'],
        'anetTransMethod': !exists(json, 'anet_trans_method') ? undefined : json['anet_trans_method'],
        'baseAmountAuthorized': !exists(json, 'base_amount_authorized') ? undefined : json['base_amount_authorized'],
        'baseAmountCanceled': !exists(json, 'base_amount_canceled') ? undefined : json['base_amount_canceled'],
        'baseAmountOrdered': !exists(json, 'base_amount_ordered') ? undefined : json['base_amount_ordered'],
        'baseAmountPaid': !exists(json, 'base_amount_paid') ? undefined : json['base_amount_paid'],
        'baseAmountPaidOnline': !exists(json, 'base_amount_paid_online') ? undefined : json['base_amount_paid_online'],
        'baseAmountRefunded': !exists(json, 'base_amount_refunded') ? undefined : json['base_amount_refunded'],
        'baseAmountRefundedOnline': !exists(json, 'base_amount_refunded_online') ? undefined : json['base_amount_refunded_online'],
        'baseShippingAmount': !exists(json, 'base_shipping_amount') ? undefined : json['base_shipping_amount'],
        'baseShippingCaptured': !exists(json, 'base_shipping_captured') ? undefined : json['base_shipping_captured'],
        'baseShippingRefunded': !exists(json, 'base_shipping_refunded') ? undefined : json['base_shipping_refunded'],
        'ccApproval': !exists(json, 'cc_approval') ? undefined : json['cc_approval'],
        'ccAvsStatus': !exists(json, 'cc_avs_status') ? undefined : json['cc_avs_status'],
        'ccCidStatus': !exists(json, 'cc_cid_status') ? undefined : json['cc_cid_status'],
        'ccDebugRequestBody': !exists(json, 'cc_debug_request_body') ? undefined : json['cc_debug_request_body'],
        'ccDebugResponseBody': !exists(json, 'cc_debug_response_body') ? undefined : json['cc_debug_response_body'],
        'ccDebugResponseSerialized': !exists(json, 'cc_debug_response_serialized') ? undefined : json['cc_debug_response_serialized'],
        'ccExpMonth': !exists(json, 'cc_exp_month') ? undefined : json['cc_exp_month'],
        'ccExpYear': !exists(json, 'cc_exp_year') ? undefined : json['cc_exp_year'],
        'ccLast4': json['cc_last4'],
        'ccNumberEnc': !exists(json, 'cc_number_enc') ? undefined : json['cc_number_enc'],
        'ccOwner': !exists(json, 'cc_owner') ? undefined : json['cc_owner'],
        'ccSecureVerify': !exists(json, 'cc_secure_verify') ? undefined : json['cc_secure_verify'],
        'ccSsIssue': !exists(json, 'cc_ss_issue') ? undefined : json['cc_ss_issue'],
        'ccSsStartMonth': !exists(json, 'cc_ss_start_month') ? undefined : json['cc_ss_start_month'],
        'ccSsStartYear': !exists(json, 'cc_ss_start_year') ? undefined : json['cc_ss_start_year'],
        'ccStatus': !exists(json, 'cc_status') ? undefined : json['cc_status'],
        'ccStatusDescription': !exists(json, 'cc_status_description') ? undefined : json['cc_status_description'],
        'ccTransId': !exists(json, 'cc_trans_id') ? undefined : json['cc_trans_id'],
        'ccType': !exists(json, 'cc_type') ? undefined : json['cc_type'],
        'echeckAccountName': !exists(json, 'echeck_account_name') ? undefined : json['echeck_account_name'],
        'echeckAccountType': !exists(json, 'echeck_account_type') ? undefined : json['echeck_account_type'],
        'echeckBankName': !exists(json, 'echeck_bank_name') ? undefined : json['echeck_bank_name'],
        'echeckRoutingNumber': !exists(json, 'echeck_routing_number') ? undefined : json['echeck_routing_number'],
        'echeckType': !exists(json, 'echeck_type') ? undefined : json['echeck_type'],
        'entityId': !exists(json, 'entity_id') ? undefined : json['entity_id'],
        'lastTransId': !exists(json, 'last_trans_id') ? undefined : json['last_trans_id'],
        'method': json['method'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        'poNumber': !exists(json, 'po_number') ? undefined : json['po_number'],
        'protectionEligibility': !exists(json, 'protection_eligibility') ? undefined : json['protection_eligibility'],
        'quotePaymentId': !exists(json, 'quote_payment_id') ? undefined : json['quote_payment_id'],
        'shippingAmount': !exists(json, 'shipping_amount') ? undefined : json['shipping_amount'],
        'shippingCaptured': !exists(json, 'shipping_captured') ? undefined : json['shipping_captured'],
        'shippingRefunded': !exists(json, 'shipping_refunded') ? undefined : json['shipping_refunded'],
        'extensionAttributes': !exists(json, 'extension_attributes') ? undefined : SalesDataOrderPaymentExtensionInterfaceFromJSON(json['extension_attributes']),
    };
}

export function SalesDataOrderPaymentInterfaceToJSON(value?: SalesDataOrderPaymentInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_status': value.accountStatus,
        'additional_data': value.additionalData,
        'additional_information': value.additionalInformation,
        'address_status': value.addressStatus,
        'amount_authorized': value.amountAuthorized,
        'amount_canceled': value.amountCanceled,
        'amount_ordered': value.amountOrdered,
        'amount_paid': value.amountPaid,
        'amount_refunded': value.amountRefunded,
        'anet_trans_method': value.anetTransMethod,
        'base_amount_authorized': value.baseAmountAuthorized,
        'base_amount_canceled': value.baseAmountCanceled,
        'base_amount_ordered': value.baseAmountOrdered,
        'base_amount_paid': value.baseAmountPaid,
        'base_amount_paid_online': value.baseAmountPaidOnline,
        'base_amount_refunded': value.baseAmountRefunded,
        'base_amount_refunded_online': value.baseAmountRefundedOnline,
        'base_shipping_amount': value.baseShippingAmount,
        'base_shipping_captured': value.baseShippingCaptured,
        'base_shipping_refunded': value.baseShippingRefunded,
        'cc_approval': value.ccApproval,
        'cc_avs_status': value.ccAvsStatus,
        'cc_cid_status': value.ccCidStatus,
        'cc_debug_request_body': value.ccDebugRequestBody,
        'cc_debug_response_body': value.ccDebugResponseBody,
        'cc_debug_response_serialized': value.ccDebugResponseSerialized,
        'cc_exp_month': value.ccExpMonth,
        'cc_exp_year': value.ccExpYear,
        'cc_last4': value.ccLast4,
        'cc_number_enc': value.ccNumberEnc,
        'cc_owner': value.ccOwner,
        'cc_secure_verify': value.ccSecureVerify,
        'cc_ss_issue': value.ccSsIssue,
        'cc_ss_start_month': value.ccSsStartMonth,
        'cc_ss_start_year': value.ccSsStartYear,
        'cc_status': value.ccStatus,
        'cc_status_description': value.ccStatusDescription,
        'cc_trans_id': value.ccTransId,
        'cc_type': value.ccType,
        'echeck_account_name': value.echeckAccountName,
        'echeck_account_type': value.echeckAccountType,
        'echeck_bank_name': value.echeckBankName,
        'echeck_routing_number': value.echeckRoutingNumber,
        'echeck_type': value.echeckType,
        'entity_id': value.entityId,
        'last_trans_id': value.lastTransId,
        'method': value.method,
        'parent_id': value.parentId,
        'po_number': value.poNumber,
        'protection_eligibility': value.protectionEligibility,
        'quote_payment_id': value.quotePaymentId,
        'shipping_amount': value.shippingAmount,
        'shipping_captured': value.shippingCaptured,
        'shipping_refunded': value.shippingRefunded,
        'extension_attributes': SalesDataOrderPaymentExtensionInterfaceToJSON(value.extensionAttributes),
    };
}

