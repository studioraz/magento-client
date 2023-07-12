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
exports.CustomerDataAddressInterfaceToJSON = exports.CustomerDataAddressInterfaceFromJSONTyped = exports.CustomerDataAddressInterfaceFromJSON = exports.instanceOfCustomerDataAddressInterface = void 0;
var runtime_1 = require("../runtime");
var CustomerDataRegionInterface_1 = require("./CustomerDataRegionInterface");
var FrameworkAttributeInterface_1 = require("./FrameworkAttributeInterface");
/**
 * Check if a given object implements the CustomerDataAddressInterface interface.
 */
function instanceOfCustomerDataAddressInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfCustomerDataAddressInterface = instanceOfCustomerDataAddressInterface;
function CustomerDataAddressInterfaceFromJSON(json) {
    return CustomerDataAddressInterfaceFromJSONTyped(json, false);
}
exports.CustomerDataAddressInterfaceFromJSON = CustomerDataAddressInterfaceFromJSON;
function CustomerDataAddressInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'customerId': !(0, runtime_1.exists)(json, 'customer_id') ? undefined : json['customer_id'],
        'region': !(0, runtime_1.exists)(json, 'region') ? undefined : (0, CustomerDataRegionInterface_1.CustomerDataRegionInterfaceFromJSON)(json['region']),
        'regionId': !(0, runtime_1.exists)(json, 'region_id') ? undefined : json['region_id'],
        'countryId': !(0, runtime_1.exists)(json, 'country_id') ? undefined : json['country_id'],
        'street': !(0, runtime_1.exists)(json, 'street') ? undefined : json['street'],
        'company': !(0, runtime_1.exists)(json, 'company') ? undefined : json['company'],
        'telephone': !(0, runtime_1.exists)(json, 'telephone') ? undefined : json['telephone'],
        'fax': !(0, runtime_1.exists)(json, 'fax') ? undefined : json['fax'],
        'postcode': !(0, runtime_1.exists)(json, 'postcode') ? undefined : json['postcode'],
        'city': !(0, runtime_1.exists)(json, 'city') ? undefined : json['city'],
        'firstname': !(0, runtime_1.exists)(json, 'firstname') ? undefined : json['firstname'],
        'lastname': !(0, runtime_1.exists)(json, 'lastname') ? undefined : json['lastname'],
        'middlename': !(0, runtime_1.exists)(json, 'middlename') ? undefined : json['middlename'],
        'prefix': !(0, runtime_1.exists)(json, 'prefix') ? undefined : json['prefix'],
        'suffix': !(0, runtime_1.exists)(json, 'suffix') ? undefined : json['suffix'],
        'vatId': !(0, runtime_1.exists)(json, 'vat_id') ? undefined : json['vat_id'],
        'defaultShipping': !(0, runtime_1.exists)(json, 'default_shipping') ? undefined : json['default_shipping'],
        'defaultBilling': !(0, runtime_1.exists)(json, 'default_billing') ? undefined : json['default_billing'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'customAttributes': !(0, runtime_1.exists)(json, 'custom_attributes') ? undefined : (json['custom_attributes'].map(FrameworkAttributeInterface_1.FrameworkAttributeInterfaceFromJSON)),
    };
}
exports.CustomerDataAddressInterfaceFromJSONTyped = CustomerDataAddressInterfaceFromJSONTyped;
function CustomerDataAddressInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'customer_id': value.customerId,
        'region': (0, CustomerDataRegionInterface_1.CustomerDataRegionInterfaceToJSON)(value.region),
        'region_id': value.regionId,
        'country_id': value.countryId,
        'street': value.street,
        'company': value.company,
        'telephone': value.telephone,
        'fax': value.fax,
        'postcode': value.postcode,
        'city': value.city,
        'firstname': value.firstname,
        'lastname': value.lastname,
        'middlename': value.middlename,
        'prefix': value.prefix,
        'suffix': value.suffix,
        'vat_id': value.vatId,
        'default_shipping': value.defaultShipping,
        'default_billing': value.defaultBilling,
        'extension_attributes': value.extensionAttributes,
        'custom_attributes': value.customAttributes === undefined ? undefined : (value.customAttributes.map(FrameworkAttributeInterface_1.FrameworkAttributeInterfaceToJSON)),
    };
}
exports.CustomerDataAddressInterfaceToJSON = CustomerDataAddressInterfaceToJSON;
//# sourceMappingURL=CustomerDataAddressInterface.js.map