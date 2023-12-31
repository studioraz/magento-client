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
import type { TaxDataTaxRuleInterface } from './TaxDataTaxRuleInterface';
/**
 *
 * @export
 * @interface PutV1TaxRulesRequest
 */
export interface PutV1TaxRulesRequest {
    /**
     *
     * @type {TaxDataTaxRuleInterface}
     * @memberof PutV1TaxRulesRequest
     */
    rule: TaxDataTaxRuleInterface;
}
/**
 * Check if a given object implements the PutV1TaxRulesRequest interface.
 */
export declare function instanceOfPutV1TaxRulesRequest(value: object): boolean;
export declare function PutV1TaxRulesRequestFromJSON(json: any): PutV1TaxRulesRequest;
export declare function PutV1TaxRulesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1TaxRulesRequest;
export declare function PutV1TaxRulesRequestToJSON(value?: PutV1TaxRulesRequest | null): any;
