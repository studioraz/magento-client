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
exports.PostV1GuestcartsCartIdShippinginformationRequestToJSON = exports.PostV1GuestcartsCartIdShippinginformationRequestFromJSONTyped = exports.PostV1GuestcartsCartIdShippinginformationRequestFromJSON = exports.instanceOfPostV1GuestcartsCartIdShippinginformationRequest = void 0;
var CheckoutDataShippingInformationInterface_1 = require("./CheckoutDataShippingInformationInterface");
/**
 * Check if a given object implements the PostV1GuestcartsCartIdShippinginformationRequest interface.
 */
function instanceOfPostV1GuestcartsCartIdShippinginformationRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "addressInformation" in value;
    return isInstance;
}
exports.instanceOfPostV1GuestcartsCartIdShippinginformationRequest = instanceOfPostV1GuestcartsCartIdShippinginformationRequest;
function PostV1GuestcartsCartIdShippinginformationRequestFromJSON(json) {
    return PostV1GuestcartsCartIdShippinginformationRequestFromJSONTyped(json, false);
}
exports.PostV1GuestcartsCartIdShippinginformationRequestFromJSON = PostV1GuestcartsCartIdShippinginformationRequestFromJSON;
function PostV1GuestcartsCartIdShippinginformationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressInformation': (0, CheckoutDataShippingInformationInterface_1.CheckoutDataShippingInformationInterfaceFromJSON)(json['addressInformation']),
    };
}
exports.PostV1GuestcartsCartIdShippinginformationRequestFromJSONTyped = PostV1GuestcartsCartIdShippinginformationRequestFromJSONTyped;
function PostV1GuestcartsCartIdShippinginformationRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addressInformation': (0, CheckoutDataShippingInformationInterface_1.CheckoutDataShippingInformationInterfaceToJSON)(value.addressInformation),
    };
}
exports.PostV1GuestcartsCartIdShippinginformationRequestToJSON = PostV1GuestcartsCartIdShippinginformationRequestToJSON;
//# sourceMappingURL=PostV1GuestcartsCartIdShippinginformationRequest.js.map