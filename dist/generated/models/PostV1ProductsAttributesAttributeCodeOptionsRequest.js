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
exports.PostV1ProductsAttributesAttributeCodeOptionsRequestToJSON = exports.PostV1ProductsAttributesAttributeCodeOptionsRequestFromJSONTyped = exports.PostV1ProductsAttributesAttributeCodeOptionsRequestFromJSON = exports.instanceOfPostV1ProductsAttributesAttributeCodeOptionsRequest = void 0;
var EavDataAttributeOptionInterface_1 = require("./EavDataAttributeOptionInterface");
/**
 * Check if a given object implements the PostV1ProductsAttributesAttributeCodeOptionsRequest interface.
 */
function instanceOfPostV1ProductsAttributesAttributeCodeOptionsRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "option" in value;
    return isInstance;
}
exports.instanceOfPostV1ProductsAttributesAttributeCodeOptionsRequest = instanceOfPostV1ProductsAttributesAttributeCodeOptionsRequest;
function PostV1ProductsAttributesAttributeCodeOptionsRequestFromJSON(json) {
    return PostV1ProductsAttributesAttributeCodeOptionsRequestFromJSONTyped(json, false);
}
exports.PostV1ProductsAttributesAttributeCodeOptionsRequestFromJSON = PostV1ProductsAttributesAttributeCodeOptionsRequestFromJSON;
function PostV1ProductsAttributesAttributeCodeOptionsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'option': (0, EavDataAttributeOptionInterface_1.EavDataAttributeOptionInterfaceFromJSON)(json['option']),
    };
}
exports.PostV1ProductsAttributesAttributeCodeOptionsRequestFromJSONTyped = PostV1ProductsAttributesAttributeCodeOptionsRequestFromJSONTyped;
function PostV1ProductsAttributesAttributeCodeOptionsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'option': (0, EavDataAttributeOptionInterface_1.EavDataAttributeOptionInterfaceToJSON)(value.option),
    };
}
exports.PostV1ProductsAttributesAttributeCodeOptionsRequestToJSON = PostV1ProductsAttributesAttributeCodeOptionsRequestToJSON;
//# sourceMappingURL=PostV1ProductsAttributesAttributeCodeOptionsRequest.js.map