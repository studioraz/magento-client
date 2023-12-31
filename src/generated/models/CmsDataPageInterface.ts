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

import { exists, mapValues } from '../runtime';
/**
 * CMS page interface.
 * @export
 * @interface CmsDataPageInterface
 */
export interface CmsDataPageInterface {
    /**
     * ID
     * @type {number}
     * @memberof CmsDataPageInterface
     */
    id?: number;
    /**
     * Identifier
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    identifier: string;
    /**
     * Title
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    title?: string;
    /**
     * Page layout
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    pageLayout?: string;
    /**
     * Meta title
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    metaTitle?: string;
    /**
     * Meta keywords
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    metaKeywords?: string;
    /**
     * Meta description
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    metaDescription?: string;
    /**
     * Content heading
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    contentHeading?: string;
    /**
     * Content
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    content?: string;
    /**
     * Creation time
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    creationTime?: string;
    /**
     * Update time
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    updateTime?: string;
    /**
     * Sort order
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    sortOrder?: string;
    /**
     * Layout update xml
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    layoutUpdateXml?: string;
    /**
     * Custom theme
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    customTheme?: string;
    /**
     * Custom root template
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    customRootTemplate?: string;
    /**
     * Custom layout update xml
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    customLayoutUpdateXml?: string;
    /**
     * Custom theme from
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    customThemeFrom?: string;
    /**
     * Custom theme to
     * @type {string}
     * @memberof CmsDataPageInterface
     */
    customThemeTo?: string;
    /**
     * Active
     * @type {boolean}
     * @memberof CmsDataPageInterface
     */
    active?: boolean;
}

/**
 * Check if a given object implements the CmsDataPageInterface interface.
 */
export function instanceOfCmsDataPageInterface(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "identifier" in value;

    return isInstance;
}

export function CmsDataPageInterfaceFromJSON(json: any): CmsDataPageInterface {
    return CmsDataPageInterfaceFromJSONTyped(json, false);
}

export function CmsDataPageInterfaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CmsDataPageInterface {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'identifier': json['identifier'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'pageLayout': !exists(json, 'page_layout') ? undefined : json['page_layout'],
        'metaTitle': !exists(json, 'meta_title') ? undefined : json['meta_title'],
        'metaKeywords': !exists(json, 'meta_keywords') ? undefined : json['meta_keywords'],
        'metaDescription': !exists(json, 'meta_description') ? undefined : json['meta_description'],
        'contentHeading': !exists(json, 'content_heading') ? undefined : json['content_heading'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'creationTime': !exists(json, 'creation_time') ? undefined : json['creation_time'],
        'updateTime': !exists(json, 'update_time') ? undefined : json['update_time'],
        'sortOrder': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'layoutUpdateXml': !exists(json, 'layout_update_xml') ? undefined : json['layout_update_xml'],
        'customTheme': !exists(json, 'custom_theme') ? undefined : json['custom_theme'],
        'customRootTemplate': !exists(json, 'custom_root_template') ? undefined : json['custom_root_template'],
        'customLayoutUpdateXml': !exists(json, 'custom_layout_update_xml') ? undefined : json['custom_layout_update_xml'],
        'customThemeFrom': !exists(json, 'custom_theme_from') ? undefined : json['custom_theme_from'],
        'customThemeTo': !exists(json, 'custom_theme_to') ? undefined : json['custom_theme_to'],
        'active': !exists(json, 'active') ? undefined : json['active'],
    };
}

export function CmsDataPageInterfaceToJSON(value?: CmsDataPageInterface | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'identifier': value.identifier,
        'title': value.title,
        'page_layout': value.pageLayout,
        'meta_title': value.metaTitle,
        'meta_keywords': value.metaKeywords,
        'meta_description': value.metaDescription,
        'content_heading': value.contentHeading,
        'content': value.content,
        'creation_time': value.creationTime,
        'update_time': value.updateTime,
        'sort_order': value.sortOrder,
        'layout_update_xml': value.layoutUpdateXml,
        'custom_theme': value.customTheme,
        'custom_root_template': value.customRootTemplate,
        'custom_layout_update_xml': value.customLayoutUpdateXml,
        'custom_theme_from': value.customThemeFrom,
        'custom_theme_to': value.customThemeTo,
        'active': value.active,
    };
}

