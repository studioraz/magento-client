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
exports.PostV1OrderOrderIdInvoiceRequestToJSON = exports.PostV1OrderOrderIdInvoiceRequestFromJSONTyped = exports.PostV1OrderOrderIdInvoiceRequestFromJSON = exports.instanceOfPostV1OrderOrderIdInvoiceRequest = void 0;
var runtime_1 = require("../runtime");
var SalesDataInvoiceCommentCreationInterface_1 = require("./SalesDataInvoiceCommentCreationInterface");
var SalesDataInvoiceCreationArgumentsInterface_1 = require("./SalesDataInvoiceCreationArgumentsInterface");
var SalesDataInvoiceItemCreationInterface_1 = require("./SalesDataInvoiceItemCreationInterface");
/**
 * Check if a given object implements the PostV1OrderOrderIdInvoiceRequest interface.
 */
function instanceOfPostV1OrderOrderIdInvoiceRequest(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfPostV1OrderOrderIdInvoiceRequest = instanceOfPostV1OrderOrderIdInvoiceRequest;
function PostV1OrderOrderIdInvoiceRequestFromJSON(json) {
    return PostV1OrderOrderIdInvoiceRequestFromJSONTyped(json, false);
}
exports.PostV1OrderOrderIdInvoiceRequestFromJSON = PostV1OrderOrderIdInvoiceRequestFromJSON;
function PostV1OrderOrderIdInvoiceRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'capture': !(0, runtime_1.exists)(json, 'capture') ? undefined : json['capture'],
        'items': !(0, runtime_1.exists)(json, 'items') ? undefined : (json['items'].map(SalesDataInvoiceItemCreationInterface_1.SalesDataInvoiceItemCreationInterfaceFromJSON)),
        'notify': !(0, runtime_1.exists)(json, 'notify') ? undefined : json['notify'],
        'appendComment': !(0, runtime_1.exists)(json, 'appendComment') ? undefined : json['appendComment'],
        'comment': !(0, runtime_1.exists)(json, 'comment') ? undefined : (0, SalesDataInvoiceCommentCreationInterface_1.SalesDataInvoiceCommentCreationInterfaceFromJSON)(json['comment']),
        'arguments': !(0, runtime_1.exists)(json, 'arguments') ? undefined : (0, SalesDataInvoiceCreationArgumentsInterface_1.SalesDataInvoiceCreationArgumentsInterfaceFromJSON)(json['arguments']),
    };
}
exports.PostV1OrderOrderIdInvoiceRequestFromJSONTyped = PostV1OrderOrderIdInvoiceRequestFromJSONTyped;
function PostV1OrderOrderIdInvoiceRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'capture': value.capture,
        'items': value.items === undefined ? undefined : (value.items.map(SalesDataInvoiceItemCreationInterface_1.SalesDataInvoiceItemCreationInterfaceToJSON)),
        'notify': value.notify,
        'appendComment': value.appendComment,
        'comment': (0, SalesDataInvoiceCommentCreationInterface_1.SalesDataInvoiceCommentCreationInterfaceToJSON)(value.comment),
        'arguments': (0, SalesDataInvoiceCreationArgumentsInterface_1.SalesDataInvoiceCreationArgumentsInterfaceToJSON)(value.arguments),
    };
}
exports.PostV1OrderOrderIdInvoiceRequestToJSON = PostV1OrderOrderIdInvoiceRequestToJSON;
//# sourceMappingURL=PostV1OrderOrderIdInvoiceRequest.js.map