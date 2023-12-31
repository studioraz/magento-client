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
exports.ConfigurableProductDataOptionInterfaceToJSON = exports.ConfigurableProductDataOptionInterfaceFromJSONTyped = exports.ConfigurableProductDataOptionInterfaceFromJSON = exports.instanceOfConfigurableProductDataOptionInterface = void 0;
var runtime_1 = require("../runtime");
var ConfigurableProductDataOptionValueInterface_1 = require("./ConfigurableProductDataOptionValueInterface");
/**
 * Check if a given object implements the ConfigurableProductDataOptionInterface interface.
 */
function instanceOfConfigurableProductDataOptionInterface(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfConfigurableProductDataOptionInterface = instanceOfConfigurableProductDataOptionInterface;
function ConfigurableProductDataOptionInterfaceFromJSON(json) {
    return ConfigurableProductDataOptionInterfaceFromJSONTyped(json, false);
}
exports.ConfigurableProductDataOptionInterfaceFromJSON = ConfigurableProductDataOptionInterfaceFromJSON;
function ConfigurableProductDataOptionInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'attributeId': !(0, runtime_1.exists)(json, 'attribute_id') ? undefined : json['attribute_id'],
        'label': !(0, runtime_1.exists)(json, 'label') ? undefined : json['label'],
        'position': !(0, runtime_1.exists)(json, 'position') ? undefined : json['position'],
        'isUseDefault': !(0, runtime_1.exists)(json, 'is_use_default') ? undefined : json['is_use_default'],
        'values': !(0, runtime_1.exists)(json, 'values') ? undefined : (json['values'].map(ConfigurableProductDataOptionValueInterface_1.ConfigurableProductDataOptionValueInterfaceFromJSON)),
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
        'productId': !(0, runtime_1.exists)(json, 'product_id') ? undefined : json['product_id'],
    };
}
exports.ConfigurableProductDataOptionInterfaceFromJSONTyped = ConfigurableProductDataOptionInterfaceFromJSONTyped;
function ConfigurableProductDataOptionInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'attribute_id': value.attributeId,
        'label': value.label,
        'position': value.position,
        'is_use_default': value.isUseDefault,
        'values': value.values === undefined ? undefined : (value.values.map(ConfigurableProductDataOptionValueInterface_1.ConfigurableProductDataOptionValueInterfaceToJSON)),
        'extension_attributes': value.extensionAttributes,
        'product_id': value.productId,
    };
}
exports.ConfigurableProductDataOptionInterfaceToJSON = ConfigurableProductDataOptionInterfaceToJSON;
//# sourceMappingURL=ConfigurableProductDataOptionInterface.js.map