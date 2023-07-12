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
exports.CustomerDataCustomerInterfaceToJSON = exports.CustomerDataCustomerInterfaceFromJSONTyped = exports.CustomerDataCustomerInterfaceFromJSON = exports.instanceOfCustomerDataCustomerInterface = void 0;
var runtime_1 = require("../runtime");
var CustomerDataAddressInterface_1 = require("./CustomerDataAddressInterface");
var CustomerDataCustomerExtensionInterface_1 = require("./CustomerDataCustomerExtensionInterface");
var FrameworkAttributeInterface_1 = require("./FrameworkAttributeInterface");
/**
 * Check if a given object implements the CustomerDataCustomerInterface interface.
 */
function instanceOfCustomerDataCustomerInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "firstname" in value;
    isInstance = isInstance && "lastname" in value;
    return isInstance;
}
exports.instanceOfCustomerDataCustomerInterface = instanceOfCustomerDataCustomerInterface;
function CustomerDataCustomerInterfaceFromJSON(json) {
    return CustomerDataCustomerInterfaceFromJSONTyped(json, false);
}
exports.CustomerDataCustomerInterfaceFromJSON = CustomerDataCustomerInterfaceFromJSON;
function CustomerDataCustomerInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'groupId': !(0, runtime_1.exists)(json, 'group_id') ? undefined : json['group_id'],
        'defaultBilling': !(0, runtime_1.exists)(json, 'default_billing') ? undefined : json['default_billing'],
        'defaultShipping': !(0, runtime_1.exists)(json, 'default_shipping') ? undefined : json['default_shipping'],
        'confirmation': !(0, runtime_1.exists)(json, 'confirmation') ? undefined : json['confirmation'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : json['updated_at'],
        'createdIn': !(0, runtime_1.exists)(json, 'created_in') ? undefined : json['created_in'],
        'dob': !(0, runtime_1.exists)(json, 'dob') ? undefined : json['dob'],
        'email': json['email'],
        'firstname': json['firstname'],
        'lastname': json['lastname'],
        'middlename': !(0, runtime_1.exists)(json, 'middlename') ? undefined : json['middlename'],
        'prefix': !(0, runtime_1.exists)(json, 'prefix') ? undefined : json['prefix'],
        'suffix': !(0, runtime_1.exists)(json, 'suffix') ? undefined : json['suffix'],
        'gender': !(0, runtime_1.exists)(json, 'gender') ? undefined : json['gender'],
        'storeId': !(0, runtime_1.exists)(json, 'store_id') ? undefined : json['store_id'],
        'taxvat': !(0, runtime_1.exists)(json, 'taxvat') ? undefined : json['taxvat'],
        'websiteId': !(0, runtime_1.exists)(json, 'website_id') ? undefined : json['website_id'],
        'addresses': !(0, runtime_1.exists)(json, 'addresses') ? undefined : (json['addresses'].map(CustomerDataAddressInterface_1.CustomerDataAddressInterfaceFromJSON)),
        'disableAutoGroupChange': !(0, runtime_1.exists)(json, 'disable_auto_group_change') ? undefined : json['disable_auto_group_change'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : (0, CustomerDataCustomerExtensionInterface_1.CustomerDataCustomerExtensionInterfaceFromJSON)(json['extension_attributes']),
        'customAttributes': !(0, runtime_1.exists)(json, 'custom_attributes') ? undefined : (json['custom_attributes'].map(FrameworkAttributeInterface_1.FrameworkAttributeInterfaceFromJSON)),
    };
}
exports.CustomerDataCustomerInterfaceFromJSONTyped = CustomerDataCustomerInterfaceFromJSONTyped;
function CustomerDataCustomerInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'group_id': value.groupId,
        'default_billing': value.defaultBilling,
        'default_shipping': value.defaultShipping,
        'confirmation': value.confirmation,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'created_in': value.createdIn,
        'dob': value.dob,
        'email': value.email,
        'firstname': value.firstname,
        'lastname': value.lastname,
        'middlename': value.middlename,
        'prefix': value.prefix,
        'suffix': value.suffix,
        'gender': value.gender,
        'store_id': value.storeId,
        'taxvat': value.taxvat,
        'website_id': value.websiteId,
        'addresses': value.addresses === undefined ? undefined : (value.addresses.map(CustomerDataAddressInterface_1.CustomerDataAddressInterfaceToJSON)),
        'disable_auto_group_change': value.disableAutoGroupChange,
        'extension_attributes': (0, CustomerDataCustomerExtensionInterface_1.CustomerDataCustomerExtensionInterfaceToJSON)(value.extensionAttributes),
        'custom_attributes': value.customAttributes === undefined ? undefined : (value.customAttributes.map(FrameworkAttributeInterface_1.FrameworkAttributeInterfaceToJSON)),
    };
}
exports.CustomerDataCustomerInterfaceToJSON = CustomerDataCustomerInterfaceToJSON;
//# sourceMappingURL=CustomerDataCustomerInterface.js.map