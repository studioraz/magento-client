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
exports.PostV1GuestcartsCartIdPaymentinformationRequestToJSON = exports.PostV1GuestcartsCartIdPaymentinformationRequestFromJSONTyped = exports.PostV1GuestcartsCartIdPaymentinformationRequestFromJSON = exports.instanceOfPostV1GuestcartsCartIdPaymentinformationRequest = void 0;
var runtime_1 = require("../runtime");
var QuoteDataAddressInterface_1 = require("./QuoteDataAddressInterface");
var QuoteDataPaymentInterface_1 = require("./QuoteDataPaymentInterface");
/**
 * Check if a given object implements the PostV1GuestcartsCartIdPaymentinformationRequest interface.
 */
function instanceOfPostV1GuestcartsCartIdPaymentinformationRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "paymentMethod" in value;
    return isInstance;
}
exports.instanceOfPostV1GuestcartsCartIdPaymentinformationRequest = instanceOfPostV1GuestcartsCartIdPaymentinformationRequest;
function PostV1GuestcartsCartIdPaymentinformationRequestFromJSON(json) {
    return PostV1GuestcartsCartIdPaymentinformationRequestFromJSONTyped(json, false);
}
exports.PostV1GuestcartsCartIdPaymentinformationRequestFromJSON = PostV1GuestcartsCartIdPaymentinformationRequestFromJSON;
function PostV1GuestcartsCartIdPaymentinformationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': json['email'],
        'paymentMethod': (0, QuoteDataPaymentInterface_1.QuoteDataPaymentInterfaceFromJSON)(json['paymentMethod']),
        'billingAddress': !(0, runtime_1.exists)(json, 'billingAddress') ? undefined : (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceFromJSON)(json['billingAddress']),
    };
}
exports.PostV1GuestcartsCartIdPaymentinformationRequestFromJSONTyped = PostV1GuestcartsCartIdPaymentinformationRequestFromJSONTyped;
function PostV1GuestcartsCartIdPaymentinformationRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'paymentMethod': (0, QuoteDataPaymentInterface_1.QuoteDataPaymentInterfaceToJSON)(value.paymentMethod),
        'billingAddress': (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceToJSON)(value.billingAddress),
    };
}
exports.PostV1GuestcartsCartIdPaymentinformationRequestToJSON = PostV1GuestcartsCartIdPaymentinformationRequestToJSON;
//# sourceMappingURL=PostV1GuestcartsCartIdPaymentinformationRequest.js.map