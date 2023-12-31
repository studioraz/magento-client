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
import type { FrameworkAttributeInterface } from './FrameworkAttributeInterface';
import type { QuoteDataAddressInterface } from './QuoteDataAddressInterface';
/**
 * Interface TotalsInformationInterface
 * @export
 * @interface CheckoutDataTotalsInformationInterface
 */
export interface CheckoutDataTotalsInformationInterface {
    /**
     *
     * @type {QuoteDataAddressInterface}
     * @memberof CheckoutDataTotalsInformationInterface
     */
    address: QuoteDataAddressInterface;
    /**
     * Shipping method code
     * @type {string}
     * @memberof CheckoutDataTotalsInformationInterface
     */
    shippingMethodCode?: string;
    /**
     * Carrier code
     * @type {string}
     * @memberof CheckoutDataTotalsInformationInterface
     */
    shippingCarrierCode?: string;
    /**
     * ExtensionInterface class for @see \Magento\Checkout\Api\Data\TotalsInformationInterface
     * @type {object}
     * @memberof CheckoutDataTotalsInformationInterface
     */
    extensionAttributes?: object;
    /**
     * Custom attributes values.
     * @type {Array<FrameworkAttributeInterface>}
     * @memberof CheckoutDataTotalsInformationInterface
     */
    customAttributes?: Array<FrameworkAttributeInterface>;
}
/**
 * Check if a given object implements the CheckoutDataTotalsInformationInterface interface.
 */
export declare function instanceOfCheckoutDataTotalsInformationInterface(value: object): boolean;
export declare function CheckoutDataTotalsInformationInterfaceFromJSON(json: any): CheckoutDataTotalsInformationInterface;
export declare function CheckoutDataTotalsInformationInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckoutDataTotalsInformationInterface;
export declare function CheckoutDataTotalsInformationInterfaceToJSON(value?: CheckoutDataTotalsInformationInterface | null): any;
