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
exports.SalesDataCreditmemoCommentCreationInterfaceToJSON = exports.SalesDataCreditmemoCommentCreationInterfaceFromJSONTyped = exports.SalesDataCreditmemoCommentCreationInterfaceFromJSON = exports.instanceOfSalesDataCreditmemoCommentCreationInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SalesDataCreditmemoCommentCreationInterface interface.
 */
function instanceOfSalesDataCreditmemoCommentCreationInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "comment" in value;
    isInstance = isInstance && "isVisibleOnFront" in value;
    return isInstance;
}
exports.instanceOfSalesDataCreditmemoCommentCreationInterface = instanceOfSalesDataCreditmemoCommentCreationInterface;
function SalesDataCreditmemoCommentCreationInterfaceFromJSON(json) {
    return SalesDataCreditmemoCommentCreationInterfaceFromJSONTyped(json, false);
}
exports.SalesDataCreditmemoCommentCreationInterfaceFromJSON = SalesDataCreditmemoCommentCreationInterfaceFromJSON;
function SalesDataCreditmemoCommentCreationInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'comment': json['comment'],
        'isVisibleOnFront': json['is_visible_on_front'],
    };
}
exports.SalesDataCreditmemoCommentCreationInterfaceFromJSONTyped = SalesDataCreditmemoCommentCreationInterfaceFromJSONTyped;
function SalesDataCreditmemoCommentCreationInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'extension_attributes': value.extensionAttributes,
        'comment': value.comment,
        'is_visible_on_front': value.isVisibleOnFront,
    };
}
exports.SalesDataCreditmemoCommentCreationInterfaceToJSON = SalesDataCreditmemoCommentCreationInterfaceToJSON;
//# sourceMappingURL=SalesDataCreditmemoCommentCreationInterface.js.map