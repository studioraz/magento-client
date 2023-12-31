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
/**
 * List of all weee attributes, their amounts, etc.., that product has
 * @export
 * @interface WeeeDataProductRenderWeeeAdjustmentAttributeInterface
 */
export interface WeeeDataProductRenderWeeeAdjustmentAttributeInterface {
    /**
     * Weee attribute amount
     * @type {string}
     * @memberof WeeeDataProductRenderWeeeAdjustmentAttributeInterface
     */
    amount: string;
    /**
     * Tax which is calculated to fixed product tax attribute
     * @type {string}
     * @memberof WeeeDataProductRenderWeeeAdjustmentAttributeInterface
     */
    taxAmount: string;
    /**
     * Tax amount of weee attribute
     * @type {string}
     * @memberof WeeeDataProductRenderWeeeAdjustmentAttributeInterface
     */
    taxAmountInclTax: string;
    /**
     * Product amount exclude tax
     * @type {string}
     * @memberof WeeeDataProductRenderWeeeAdjustmentAttributeInterface
     */
    amountExclTax: string;
    /**
     * Weee attribute code
     * @type {string}
     * @memberof WeeeDataProductRenderWeeeAdjustmentAttributeInterface
     */
    attributeCode: string;
    /**
     * ExtensionInterface class for @see \Magento\Weee\Api\Data\ProductRender\WeeeAdjustmentAttributeInterface
     * @type {object}
     * @memberof WeeeDataProductRenderWeeeAdjustmentAttributeInterface
     */
    extensionAttributes: object;
}
/**
 * Check if a given object implements the WeeeDataProductRenderWeeeAdjustmentAttributeInterface interface.
 */
export declare function instanceOfWeeeDataProductRenderWeeeAdjustmentAttributeInterface(value: object): boolean;
export declare function WeeeDataProductRenderWeeeAdjustmentAttributeInterfaceFromJSON(json: any): WeeeDataProductRenderWeeeAdjustmentAttributeInterface;
export declare function WeeeDataProductRenderWeeeAdjustmentAttributeInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): WeeeDataProductRenderWeeeAdjustmentAttributeInterface;
export declare function WeeeDataProductRenderWeeeAdjustmentAttributeInterfaceToJSON(value?: WeeeDataProductRenderWeeeAdjustmentAttributeInterface | null): any;
