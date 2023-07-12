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
exports.PostV1ShipmentIdCommentsRequestToJSON = exports.PostV1ShipmentIdCommentsRequestFromJSONTyped = exports.PostV1ShipmentIdCommentsRequestFromJSON = exports.instanceOfPostV1ShipmentIdCommentsRequest = void 0;
var SalesDataShipmentCommentInterface_1 = require("./SalesDataShipmentCommentInterface");
/**
 * Check if a given object implements the PostV1ShipmentIdCommentsRequest interface.
 */
function instanceOfPostV1ShipmentIdCommentsRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "entity" in value;
    return isInstance;
}
exports.instanceOfPostV1ShipmentIdCommentsRequest = instanceOfPostV1ShipmentIdCommentsRequest;
function PostV1ShipmentIdCommentsRequestFromJSON(json) {
    return PostV1ShipmentIdCommentsRequestFromJSONTyped(json, false);
}
exports.PostV1ShipmentIdCommentsRequestFromJSON = PostV1ShipmentIdCommentsRequestFromJSON;
function PostV1ShipmentIdCommentsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'entity': (0, SalesDataShipmentCommentInterface_1.SalesDataShipmentCommentInterfaceFromJSON)(json['entity']),
    };
}
exports.PostV1ShipmentIdCommentsRequestFromJSONTyped = PostV1ShipmentIdCommentsRequestFromJSONTyped;
function PostV1ShipmentIdCommentsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'entity': (0, SalesDataShipmentCommentInterface_1.SalesDataShipmentCommentInterfaceToJSON)(value.entity),
    };
}
exports.PostV1ShipmentIdCommentsRequestToJSON = PostV1ShipmentIdCommentsRequestToJSON;
//# sourceMappingURL=PostV1ShipmentIdCommentsRequest.js.map