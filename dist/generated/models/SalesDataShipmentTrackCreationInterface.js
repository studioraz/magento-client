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
exports.SalesDataShipmentTrackCreationInterfaceToJSON = exports.SalesDataShipmentTrackCreationInterfaceFromJSONTyped = exports.SalesDataShipmentTrackCreationInterfaceFromJSON = exports.instanceOfSalesDataShipmentTrackCreationInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SalesDataShipmentTrackCreationInterface interface.
 */
function instanceOfSalesDataShipmentTrackCreationInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "trackNumber" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "carrierCode" in value;
    return isInstance;
}
exports.instanceOfSalesDataShipmentTrackCreationInterface = instanceOfSalesDataShipmentTrackCreationInterface;
function SalesDataShipmentTrackCreationInterfaceFromJSON(json) {
    return SalesDataShipmentTrackCreationInterfaceFromJSONTyped(json, false);
}
exports.SalesDataShipmentTrackCreationInterfaceFromJSON = SalesDataShipmentTrackCreationInterfaceFromJSON;
function SalesDataShipmentTrackCreationInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'trackNumber': json['track_number'],
        'title': json['title'],
        'carrierCode': json['carrier_code'],
    };
}
exports.SalesDataShipmentTrackCreationInterfaceFromJSONTyped = SalesDataShipmentTrackCreationInterfaceFromJSONTyped;
function SalesDataShipmentTrackCreationInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'extension_attributes': value.extensionAttributes,
        'track_number': value.trackNumber,
        'title': value.title,
        'carrier_code': value.carrierCode,
    };
}
exports.SalesDataShipmentTrackCreationInterfaceToJSON = SalesDataShipmentTrackCreationInterfaceToJSON;
//# sourceMappingURL=SalesDataShipmentTrackCreationInterface.js.map