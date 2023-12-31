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
exports.SalesDataShipmentCommentInterfaceToJSON = exports.SalesDataShipmentCommentInterfaceFromJSONTyped = exports.SalesDataShipmentCommentInterfaceFromJSON = exports.instanceOfSalesDataShipmentCommentInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SalesDataShipmentCommentInterface interface.
 */
function instanceOfSalesDataShipmentCommentInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "isCustomerNotified" in value;
    isInstance = isInstance && "parentId" in value;
    isInstance = isInstance && "comment" in value;
    isInstance = isInstance && "isVisibleOnFront" in value;
    return isInstance;
}
exports.instanceOfSalesDataShipmentCommentInterface = instanceOfSalesDataShipmentCommentInterface;
function SalesDataShipmentCommentInterfaceFromJSON(json) {
    return SalesDataShipmentCommentInterfaceFromJSONTyped(json, false);
}
exports.SalesDataShipmentCommentInterfaceFromJSON = SalesDataShipmentCommentInterfaceFromJSON;
function SalesDataShipmentCommentInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'isCustomerNotified': json['is_customer_notified'],
        'parentId': json['parent_id'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'comment': json['comment'],
        'isVisibleOnFront': json['is_visible_on_front'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : json['created_at'],
        'entityId': !(0, runtime_1.exists)(json, 'entity_id') ? undefined : json['entity_id'],
    };
}
exports.SalesDataShipmentCommentInterfaceFromJSONTyped = SalesDataShipmentCommentInterfaceFromJSONTyped;
function SalesDataShipmentCommentInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'is_customer_notified': value.isCustomerNotified,
        'parent_id': value.parentId,
        'extension_attributes': value.extensionAttributes,
        'comment': value.comment,
        'is_visible_on_front': value.isVisibleOnFront,
        'created_at': value.createdAt,
        'entity_id': value.entityId,
    };
}
exports.SalesDataShipmentCommentInterfaceToJSON = SalesDataShipmentCommentInterfaceToJSON;
//# sourceMappingURL=SalesDataShipmentCommentInterface.js.map