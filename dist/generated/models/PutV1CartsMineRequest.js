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
exports.PutV1CartsMineRequestToJSON = exports.PutV1CartsMineRequestFromJSONTyped = exports.PutV1CartsMineRequestFromJSON = exports.instanceOfPutV1CartsMineRequest = void 0;
var QuoteDataCartInterface_1 = require("./QuoteDataCartInterface");
/**
 * Check if a given object implements the PutV1CartsMineRequest interface.
 */
function instanceOfPutV1CartsMineRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "quote" in value;
    return isInstance;
}
exports.instanceOfPutV1CartsMineRequest = instanceOfPutV1CartsMineRequest;
function PutV1CartsMineRequestFromJSON(json) {
    return PutV1CartsMineRequestFromJSONTyped(json, false);
}
exports.PutV1CartsMineRequestFromJSON = PutV1CartsMineRequestFromJSON;
function PutV1CartsMineRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'quote': (0, QuoteDataCartInterface_1.QuoteDataCartInterfaceFromJSON)(json['quote']),
    };
}
exports.PutV1CartsMineRequestFromJSONTyped = PutV1CartsMineRequestFromJSONTyped;
function PutV1CartsMineRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'quote': (0, QuoteDataCartInterface_1.QuoteDataCartInterfaceToJSON)(value.quote),
    };
}
exports.PutV1CartsMineRequestToJSON = PutV1CartsMineRequestToJSON;
//# sourceMappingURL=PutV1CartsMineRequest.js.map