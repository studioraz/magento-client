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
exports.InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceToJSON = exports.InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSONTyped = exports.InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSON = exports.instanceOfInventoryDistanceBasedSourceSelectionApiDataLatLngInterface = void 0;
/**
 * Check if a given object implements the InventoryDistanceBasedSourceSelectionApiDataLatLngInterface interface.
 */
function instanceOfInventoryDistanceBasedSourceSelectionApiDataLatLngInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "lat" in value;
    isInstance = isInstance && "lng" in value;
    return isInstance;
}
exports.instanceOfInventoryDistanceBasedSourceSelectionApiDataLatLngInterface = instanceOfInventoryDistanceBasedSourceSelectionApiDataLatLngInterface;
function InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSON(json) {
    return InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSONTyped(json, false);
}
exports.InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSON = InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSON;
function InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lat': json['lat'],
        'lng': json['lng'],
    };
}
exports.InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSONTyped = InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSONTyped;
function InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lat': value.lat,
        'lng': value.lng,
    };
}
exports.InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceToJSON = InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceToJSON;
//# sourceMappingURL=InventoryDistanceBasedSourceSelectionApiDataLatLngInterface.js.map