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
exports.InventoryInStorePickupApiDataPickupLocationInterfaceToJSON = exports.InventoryInStorePickupApiDataPickupLocationInterfaceFromJSONTyped = exports.InventoryInStorePickupApiDataPickupLocationInterfaceFromJSON = exports.instanceOfInventoryInStorePickupApiDataPickupLocationInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the InventoryInStorePickupApiDataPickupLocationInterface interface.
 */
function instanceOfInventoryInStorePickupApiDataPickupLocationInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "pickupLocationCode" in value;
    return isInstance;
}
exports.instanceOfInventoryInStorePickupApiDataPickupLocationInterface = instanceOfInventoryInStorePickupApiDataPickupLocationInterface;
function InventoryInStorePickupApiDataPickupLocationInterfaceFromJSON(json) {
    return InventoryInStorePickupApiDataPickupLocationInterfaceFromJSONTyped(json, false);
}
exports.InventoryInStorePickupApiDataPickupLocationInterfaceFromJSON = InventoryInStorePickupApiDataPickupLocationInterfaceFromJSON;
function InventoryInStorePickupApiDataPickupLocationInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pickupLocationCode': json['pickup_location_code'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'fax': !(0, runtime_1.exists)(json, 'fax') ? undefined : json['fax'],
        'contactName': !(0, runtime_1.exists)(json, 'contact_name') ? undefined : json['contact_name'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'latitude': !(0, runtime_1.exists)(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !(0, runtime_1.exists)(json, 'longitude') ? undefined : json['longitude'],
        'countryId': !(0, runtime_1.exists)(json, 'country_id') ? undefined : json['country_id'],
        'regionId': !(0, runtime_1.exists)(json, 'region_id') ? undefined : json['region_id'],
        'region': !(0, runtime_1.exists)(json, 'region') ? undefined : json['region'],
        'city': !(0, runtime_1.exists)(json, 'city') ? undefined : json['city'],
        'street': !(0, runtime_1.exists)(json, 'street') ? undefined : json['street'],
        'postcode': !(0, runtime_1.exists)(json, 'postcode') ? undefined : json['postcode'],
        'phone': !(0, runtime_1.exists)(json, 'phone') ? undefined : json['phone'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.InventoryInStorePickupApiDataPickupLocationInterfaceFromJSONTyped = InventoryInStorePickupApiDataPickupLocationInterfaceFromJSONTyped;
function InventoryInStorePickupApiDataPickupLocationInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pickup_location_code': value.pickupLocationCode,
        'name': value.name,
        'email': value.email,
        'fax': value.fax,
        'contact_name': value.contactName,
        'description': value.description,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'country_id': value.countryId,
        'region_id': value.regionId,
        'region': value.region,
        'city': value.city,
        'street': value.street,
        'postcode': value.postcode,
        'phone': value.phone,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.InventoryInStorePickupApiDataPickupLocationInterfaceToJSON = InventoryInStorePickupApiDataPickupLocationInterfaceToJSON;
//# sourceMappingURL=InventoryInStorePickupApiDataPickupLocationInterface.js.map