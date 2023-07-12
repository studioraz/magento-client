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
exports.CatalogInventoryDataStockItemInterfaceToJSON = exports.CatalogInventoryDataStockItemInterfaceFromJSONTyped = exports.CatalogInventoryDataStockItemInterfaceFromJSON = exports.instanceOfCatalogInventoryDataStockItemInterface = void 0;
var runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CatalogInventoryDataStockItemInterface interface.
 */
function instanceOfCatalogInventoryDataStockItemInterface(value) {
    var isInstance = true;
    isInstance = isInstance && "qty" in value;
    isInstance = isInstance && "isInStock" in value;
    isInstance = isInstance && "isQtyDecimal" in value;
    isInstance = isInstance && "showDefaultNotificationMessage" in value;
    isInstance = isInstance && "useConfigMinQty" in value;
    isInstance = isInstance && "minQty" in value;
    isInstance = isInstance && "useConfigMinSaleQty" in value;
    isInstance = isInstance && "minSaleQty" in value;
    isInstance = isInstance && "useConfigMaxSaleQty" in value;
    isInstance = isInstance && "maxSaleQty" in value;
    isInstance = isInstance && "useConfigBackorders" in value;
    isInstance = isInstance && "backorders" in value;
    isInstance = isInstance && "useConfigNotifyStockQty" in value;
    isInstance = isInstance && "notifyStockQty" in value;
    isInstance = isInstance && "useConfigQtyIncrements" in value;
    isInstance = isInstance && "qtyIncrements" in value;
    isInstance = isInstance && "useConfigEnableQtyInc" in value;
    isInstance = isInstance && "enableQtyIncrements" in value;
    isInstance = isInstance && "useConfigManageStock" in value;
    isInstance = isInstance && "manageStock" in value;
    isInstance = isInstance && "lowStockDate" in value;
    isInstance = isInstance && "isDecimalDivided" in value;
    isInstance = isInstance && "stockStatusChangedAuto" in value;
    return isInstance;
}
exports.instanceOfCatalogInventoryDataStockItemInterface = instanceOfCatalogInventoryDataStockItemInterface;
function CatalogInventoryDataStockItemInterfaceFromJSON(json) {
    return CatalogInventoryDataStockItemInterfaceFromJSONTyped(json, false);
}
exports.CatalogInventoryDataStockItemInterfaceFromJSON = CatalogInventoryDataStockItemInterfaceFromJSON;
function CatalogInventoryDataStockItemInterfaceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'itemId': !(0, runtime_1.exists)(json, 'item_id') ? undefined : json['item_id'],
        'productId': !(0, runtime_1.exists)(json, 'product_id') ? undefined : json['product_id'],
        'stockId': !(0, runtime_1.exists)(json, 'stock_id') ? undefined : json['stock_id'],
        'qty': json['qty'],
        'isInStock': json['is_in_stock'],
        'isQtyDecimal': json['is_qty_decimal'],
        'showDefaultNotificationMessage': json['show_default_notification_message'],
        'useConfigMinQty': json['use_config_min_qty'],
        'minQty': json['min_qty'],
        'useConfigMinSaleQty': json['use_config_min_sale_qty'],
        'minSaleQty': json['min_sale_qty'],
        'useConfigMaxSaleQty': json['use_config_max_sale_qty'],
        'maxSaleQty': json['max_sale_qty'],
        'useConfigBackorders': json['use_config_backorders'],
        'backorders': json['backorders'],
        'useConfigNotifyStockQty': json['use_config_notify_stock_qty'],
        'notifyStockQty': json['notify_stock_qty'],
        'useConfigQtyIncrements': json['use_config_qty_increments'],
        'qtyIncrements': json['qty_increments'],
        'useConfigEnableQtyInc': json['use_config_enable_qty_inc'],
        'enableQtyIncrements': json['enable_qty_increments'],
        'useConfigManageStock': json['use_config_manage_stock'],
        'manageStock': json['manage_stock'],
        'lowStockDate': json['low_stock_date'],
        'isDecimalDivided': json['is_decimal_divided'],
        'stockStatusChangedAuto': json['stock_status_changed_auto'],
        'extensionAttributes': !(0, runtime_1.exists)(json, 'extension_attributes') ? undefined : json['extension_attributes'],
    };
}
exports.CatalogInventoryDataStockItemInterfaceFromJSONTyped = CatalogInventoryDataStockItemInterfaceFromJSONTyped;
function CatalogInventoryDataStockItemInterfaceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'item_id': value.itemId,
        'product_id': value.productId,
        'stock_id': value.stockId,
        'qty': value.qty,
        'is_in_stock': value.isInStock,
        'is_qty_decimal': value.isQtyDecimal,
        'show_default_notification_message': value.showDefaultNotificationMessage,
        'use_config_min_qty': value.useConfigMinQty,
        'min_qty': value.minQty,
        'use_config_min_sale_qty': value.useConfigMinSaleQty,
        'min_sale_qty': value.minSaleQty,
        'use_config_max_sale_qty': value.useConfigMaxSaleQty,
        'max_sale_qty': value.maxSaleQty,
        'use_config_backorders': value.useConfigBackorders,
        'backorders': value.backorders,
        'use_config_notify_stock_qty': value.useConfigNotifyStockQty,
        'notify_stock_qty': value.notifyStockQty,
        'use_config_qty_increments': value.useConfigQtyIncrements,
        'qty_increments': value.qtyIncrements,
        'use_config_enable_qty_inc': value.useConfigEnableQtyInc,
        'enable_qty_increments': value.enableQtyIncrements,
        'use_config_manage_stock': value.useConfigManageStock,
        'manage_stock': value.manageStock,
        'low_stock_date': value.lowStockDate,
        'is_decimal_divided': value.isDecimalDivided,
        'stock_status_changed_auto': value.stockStatusChangedAuto,
        'extension_attributes': value.extensionAttributes,
    };
}
exports.CatalogInventoryDataStockItemInterfaceToJSON = CatalogInventoryDataStockItemInterfaceToJSON;
//# sourceMappingURL=CatalogInventoryDataStockItemInterface.js.map