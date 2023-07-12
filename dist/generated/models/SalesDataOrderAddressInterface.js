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
exports.SalesDataOrderAddressInterfaceToJSON = exports.SalesDataOrderAddressInterfaceFromJSONTyped = exports.SalesDataOrderAddressInterfaceFromJSON = exports.instanceOfSalesDataOrderAddressInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SalesDataOrderAddressInterface interface.
 */
function instanceOfSalesDataOrderAddressInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "addressType" in value;
    isInstance = isInstance && "city" in value;
    isInstance = isInstance && "countryId" in value;
    isInstance = isInstance && "firstname" in value;
    isInstance = isInstance && "lastname" in value;
    isInstance = isInstance && "postcode" in value;
    isInstance = isInstance && "telephone" in value;
    return isInstance;
}
exports.instanceOfSalesDataOrderAddressInterface = instanceOfSalesDataOrderAddressInterface;
function SalesDataOrderAddressInterfaceFromJSON(json) {
    return SalesDataOrderAddressInterfaceFromJSONTyped(json, false);
}
exports.SalesDataOrderAddressInterfaceFromJSON = SalesDataOrderAddressInterfaceFromJSON;
function SalesDataOrderAddressInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addressType': json['address_type'],
        'city': json['city'],
        'company': !(0, runtime_1.exists)(json, 'company') ? undefined : json['company'],
        'countryId': json['country_id'],
        'customerAddressId': !(0, runtime_1.exists)(json, 'customer_address_id') ? undefined : json['customer_address_id'],
        'customerId': !(0, runtime_1.exists)(json, 'customer_id') ? undefined : json['customer_id'],
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'entityId': !(0, runtime_1.exists)(json, 'entity_id') ? undefined : json['entity_id'],
        'fax': !(0, runtime_1.exists)(json, 'fax') ? undefined : json['fax'],
        'firstname': json['firstname'],
        'lastname': json['lastname'],
        'middlename': !(0, runtime_1.exists)(json, 'middlename') ? undefined : json['middlename'],
        'parentId': !(0, runtime_1.exists)(json, 'parent_id') ? undefined : json['parent_id'],
        'postcode': json['postcode'],
        'prefix': !(0, runtime_1.exists)(json, 'prefix') ? undefined : json['prefix'],
        'region': !(0, runtime_1.exists)(json, 'region') ? undefined : json['region'],
        'regionCode': !(0, runtime_1.exists)(json, 'region_code') ? undefined : json['region_code'],
        'regionId': !(0, runtime_1.exists)(json, 'region_id') ? undefined : json['region_id'],
        'street': !(0, runtime_1.exists)(json, 'street') ? undefined : json['street'],
        'suffix': !(0, runtime_1.exists)(json, 'suffix') ? undefined : json['suffix'],
        'telephone': json['telephone'],
        'vatId': !(0, runtime_1.exists)(json, 'vat_id') ? undefined : json['vat_id'],
        'vatIsValid': !(0, runtime_1.exists)(json, 'vat_is_valid') ? undefined : json['vat_is_valid'],
        'vatRequestDate': !(0, runtime_1.exists)(json, 'vat_request_date') ? undefined : json['vat_request_date'],
        'vatRequestId': !(0, runtime_1.exists)(json, 'vat_request_id') ? undefined : json['vat_request_id'],
        'vatRequestSuccess': !(0, runtime_1.exists)(json, 'vat_request_success') ? undefined : json['vat_request_success'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.SalesDataOrderAddressInterfaceFromJSONTyped = SalesDataOrderAddressInterfaceFromJSONTyped;
function SalesDataOrderAddressInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address_type': value.addressType,
        'city': value.city,
        'company': value.company,
        'country_id': value.countryId,
        'customer_address_id': value.customerAddressId,
        'customer_id': value.customerId,
        'email': value.email,
        'entity_id': value.entityId,
        'fax': value.fax,
        'firstname': value.firstname,
        'lastname': value.lastname,
        'middlename': value.middlename,
        'parent_id': value.parentId,
        'postcode': value.postcode,
        'prefix': value.prefix,
        'region': value.region,
        'region_code': value.regionCode,
        'region_id': value.regionId,
        'street': value.street,
        'suffix': value.suffix,
        'telephone': value.telephone,
        'vat_id': value.vatId,
        'vat_is_valid': value.vatIsValid,
        'vat_request_date': value.vatRequestDate,
        'vat_request_id': value.vatRequestId,
        'vat_request_success': value.vatRequestSuccess,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.SalesDataOrderAddressInterfaceToJSON = SalesDataOrderAddressInterfaceToJSON;
//# sourceMappingURL=SalesDataOrderAddressInterface.js.map