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
import type { CatalogDataProductInterface } from './CatalogDataProductInterface';
import type { ConfigurableProductDataOptionInterface } from './ConfigurableProductDataOptionInterface';
/**
 *
 * @export
 * @interface PutV1ConfigurableproductsVariationRequest
 */
export interface PutV1ConfigurableproductsVariationRequest {
    /**
     *
     * @type {CatalogDataProductInterface}
     * @memberof PutV1ConfigurableproductsVariationRequest
     */
    product: CatalogDataProductInterface;
    /**
     *
     * @type {Array<ConfigurableProductDataOptionInterface>}
     * @memberof PutV1ConfigurableproductsVariationRequest
     */
    options: Array<ConfigurableProductDataOptionInterface>;
}
/**
 * Check if a given object implements the PutV1ConfigurableproductsVariationRequest interface.
 */
export declare function instanceOfPutV1ConfigurableproductsVariationRequest(value: object): boolean;
export declare function PutV1ConfigurableproductsVariationRequestFromJSON(json: any): PutV1ConfigurableproductsVariationRequest;
export declare function PutV1ConfigurableproductsVariationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutV1ConfigurableproductsVariationRequest;
export declare function PutV1ConfigurableproductsVariationRequestToJSON(value?: PutV1ConfigurableproductsVariationRequest | null): any;