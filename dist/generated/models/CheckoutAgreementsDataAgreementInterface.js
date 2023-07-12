"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutAgreementsDataAgreementInterfaceToJSON = exports.CheckoutAgreementsDataAgreementInterfaceFromJSONTyped = exports.CheckoutAgreementsDataAgreementInterfaceFromJSON = exports.instanceOfCheckoutAgreementsDataAgreementInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CheckoutAgreementsDataAgreementInterface interface.
 */
function instanceOfCheckoutAgreementsDataAgreementInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "agreementId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "content" in value;
    isInstance = isInstance && "checkboxText" in value;
    isInstance = isInstance && "isActive" in value;
    isInstance = isInstance && "isHtml" in value;
    isInstance = isInstance && "mode" in value;
    return isInstance;
}
exports.instanceOfCheckoutAgreementsDataAgreementInterface = instanceOfCheckoutAgreementsDataAgreementInterface;
function CheckoutAgreementsDataAgreementInterfaceFromJSON(json) {
    return CheckoutAgreementsDataAgreementInterfaceFromJSONTyped(json, false);
}
exports.CheckoutAgreementsDataAgreementInterfaceFromJSON = CheckoutAgreementsDataAgreementInterfaceFromJSON;
function CheckoutAgreementsDataAgreementInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'agreementId': json['agreement_id'],
        'name': json['name'],
        'content': json['content'],
        'contentHeight': !(0, runtime_1.exists)(json, 'content_height') ? undefined : json['content_height'],
        'checkboxText': json['checkbox_text'],
        'isActive': json['is_active'],
        'isHtml': json['is_html'],
        'mode': json['mode'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.CheckoutAgreementsDataAgreementInterfaceFromJSONTyped = CheckoutAgreementsDataAgreementInterfaceFromJSONTyped;
function CheckoutAgreementsDataAgreementInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'agreement_id': value.agreementId,
        'name': value.name,
        'content': value.content,
        'content_height': value.contentHeight,
        'checkbox_text': value.checkboxText,
        'is_active': value.isActive,
        'is_html': value.isHtml,
        'mode': value.mode,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.CheckoutAgreementsDataAgreementInterfaceToJSON = CheckoutAgreementsDataAgreementInterfaceToJSON;
//# sourceMappingURL=CheckoutAgreementsDataAgreementInterface.js.map