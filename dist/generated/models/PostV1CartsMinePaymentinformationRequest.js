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
exports.PostV1CartsMinePaymentinformationRequestToJSON = exports.PostV1CartsMinePaymentinformationRequestFromJSONTyped = exports.PostV1CartsMinePaymentinformationRequestFromJSON = exports.instanceOfPostV1CartsMinePaymentinformationRequest = void 0;
var runtime_1 = require("../runtime");
var QuoteDataAddressInterface_1 = require("./QuoteDataAddressInterface");
var QuoteDataPaymentInterface_1 = require("./QuoteDataPaymentInterface");
/**
 * Check if a given object implements the PostV1CartsMinePaymentinformationRequest interface.
 */
function instanceOfPostV1CartsMinePaymentinformationRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "paymentMethod" in value;
    return isInstance;
}
exports.instanceOfPostV1CartsMinePaymentinformationRequest = instanceOfPostV1CartsMinePaymentinformationRequest;
function PostV1CartsMinePaymentinformationRequestFromJSON(json) {
    return PostV1CartsMinePaymentinformationRequestFromJSONTyped(json, false);
}
exports.PostV1CartsMinePaymentinformationRequestFromJSON = PostV1CartsMinePaymentinformationRequestFromJSON;
function PostV1CartsMinePaymentinformationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'paymentMethod': (0, QuoteDataPaymentInterface_1.QuoteDataPaymentInterfaceFromJSON)(json['paymentMethod']),
        'billingAddress': !(0, runtime_1.exists)(json, 'billingAddress') ? undefined : (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceFromJSON)(json['billingAddress']),
    };
}
exports.PostV1CartsMinePaymentinformationRequestFromJSONTyped = PostV1CartsMinePaymentinformationRequestFromJSONTyped;
function PostV1CartsMinePaymentinformationRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'paymentMethod': (0, QuoteDataPaymentInterface_1.QuoteDataPaymentInterfaceToJSON)(value.paymentMethod),
        'billingAddress': (0, QuoteDataAddressInterface_1.QuoteDataAddressInterfaceToJSON)(value.billingAddress),
    };
}
exports.PostV1CartsMinePaymentinformationRequestToJSON = PostV1CartsMinePaymentinformationRequestToJSON;
//# sourceMappingURL=PostV1CartsMinePaymentinformationRequest.js.map