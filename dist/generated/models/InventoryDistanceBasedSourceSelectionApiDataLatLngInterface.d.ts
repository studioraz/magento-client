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
 * DTO for latitude and longitude request
 * @export
 * @interface InventoryDistanceBasedSourceSelectionApiDataLatLngInterface
 */
export interface InventoryDistanceBasedSourceSelectionApiDataLatLngInterface {
    /**
     * Latitude
     * @type {number}
     * @memberof InventoryDistanceBasedSourceSelectionApiDataLatLngInterface
     */
    lat: number;
    /**
     * Longitude
     * @type {number}
     * @memberof InventoryDistanceBasedSourceSelectionApiDataLatLngInterface
     */
    lng: number;
}
/**
 * Check if a given object implements the InventoryDistanceBasedSourceSelectionApiDataLatLngInterface interface.
 */
export declare function instanceOfInventoryDistanceBasedSourceSelectionApiDataLatLngInterface(value: object): boolean;
export declare function InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSON(json: any): InventoryDistanceBasedSourceSelectionApiDataLatLngInterface;
export declare function InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryDistanceBasedSourceSelectionApiDataLatLngInterface;
export declare function InventoryDistanceBasedSourceSelectionApiDataLatLngInterfaceToJSON(value?: InventoryDistanceBasedSourceSelectionApiDataLatLngInterface | null): any;
