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
import type { CatalogDataProductRenderPriceInfoInterface } from './CatalogDataProductRenderPriceInfoInterface';
import type { MsrpDataProductRenderMsrpPriceInfoInterface } from './MsrpDataProductRenderMsrpPriceInfoInterface';
import type { WeeeDataProductRenderWeeeAdjustmentAttributeInterface } from './WeeeDataProductRenderWeeeAdjustmentAttributeInterface';
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\PriceInfoInterface
 * @export
 * @interface CatalogDataProductRenderPriceInfoExtensionInterface
 */
export interface CatalogDataProductRenderPriceInfoExtensionInterface {
    /**
     *
     * @type {MsrpDataProductRenderMsrpPriceInfoInterface}
     * @memberof CatalogDataProductRenderPriceInfoExtensionInterface
     */
    msrp?: MsrpDataProductRenderMsrpPriceInfoInterface;
    /**
     *
     * @type {CatalogDataProductRenderPriceInfoInterface}
     * @memberof CatalogDataProductRenderPriceInfoExtensionInterface
     */
    taxAdjustments?: CatalogDataProductRenderPriceInfoInterface;
    /**
     *
     * @type {Array<WeeeDataProductRenderWeeeAdjustmentAttributeInterface>}
     * @memberof CatalogDataProductRenderPriceInfoExtensionInterface
     */
    weeeAttributes?: Array<WeeeDataProductRenderWeeeAdjustmentAttributeInterface>;
    /**
     *
     * @type {string}
     * @memberof CatalogDataProductRenderPriceInfoExtensionInterface
     */
    weeeAdjustment?: string;
}
/**
 * Check if a given object implements the CatalogDataProductRenderPriceInfoExtensionInterface interface.
 */
export declare function instanceOfCatalogDataProductRenderPriceInfoExtensionInterface(value: object): boolean;
export declare function CatalogDataProductRenderPriceInfoExtensionInterfaceFromJSON(json: any): CatalogDataProductRenderPriceInfoExtensionInterface;
export declare function CatalogDataProductRenderPriceInfoExtensionInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogDataProductRenderPriceInfoExtensionInterface;
export declare function CatalogDataProductRenderPriceInfoExtensionInterfaceToJSON(value?: CatalogDataProductRenderPriceInfoExtensionInterface | null): any;
