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
import type { SalesDataOrderItemInterface } from './SalesDataOrderItemInterface';
import type { SalesDataShippingInterface } from './SalesDataShippingInterface';
/**
 * Interface ShippingAssignmentInterface
 * @export
 * @interface SalesDataShippingAssignmentInterface
 */
export interface SalesDataShippingAssignmentInterface {
    /**
     *
     * @type {SalesDataShippingInterface}
     * @memberof SalesDataShippingAssignmentInterface
     */
    shipping: SalesDataShippingInterface;
    /**
     * Order items of shipping assignment
     * @type {Array<SalesDataOrderItemInterface>}
     * @memberof SalesDataShippingAssignmentInterface
     */
    items: Array<SalesDataOrderItemInterface>;
    /**
     * Stock id
     * @type {number}
     * @memberof SalesDataShippingAssignmentInterface
     */
    stockId?: number;
    /**
     * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingAssignmentInterface
     * @type {object}
     * @memberof SalesDataShippingAssignmentInterface
     */
    extensionAttributes?: object;
}
/**
 * Check if a given object implements the SalesDataShippingAssignmentInterface interface.
 */
export declare function instanceOfSalesDataShippingAssignmentInterface(value: object): boolean;
export declare function SalesDataShippingAssignmentInterfaceFromJSON(json: any): SalesDataShippingAssignmentInterface;
export declare function SalesDataShippingAssignmentInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SalesDataShippingAssignmentInterface;
export declare function SalesDataShippingAssignmentInterfaceToJSON(value?: SalesDataShippingAssignmentInterface | null): any;
