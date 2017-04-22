/**
 * File: /Users/David/Development/psioniq/vscode-extensions/psi-header/src/constants.ts
 * Project: /Users/David/Development/psioniq/vscode-extensions/psi-header
 * Created Date: Sun Jan 01 2017
 * Author: David Quinn (david@eternia.net)
 * 
 * License: MIT License (SPDX = 'MIT')
 * License URL: http://www.opensource.org/licenses/MIT
 * 
 * MIT License
 * 
 * Copyright (c) 2017 psioniq
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Settings Section names
 */
export const BASE_SETTINGS: string = 'psi-header';
export const VARIABLE_SETTINGS: string = 'variables';
export const CONFIG_SETTINGS: string = 'config';
export const LANG_CONFIG_SETTINGS: string = 'lang-config';
export const TEMPLATE_SETTINGS: string = 'templates';
export const LICENSE_SETTINGS: string = 'license-text';
export const TRACKING_SETTINGS: string = 'changes-tracking';

/**
 * System Variable names
 */
export const VAR_DATE: string = 'date';
export const VAR_TIME: string = 'time';
export const VAR_YEAR: string = 'year';
export const VAR_FILE_PATH: string = 'filepath';
export const VAR_FILE_NAME: string = 'filename';
export const VAR_PROJECT_PATH: string = 'projectpath';
export const VAR_PROJECT_NAME: string = 'projectname';
export const VAR_COMPANY: string = 'company';
export const VAR_AUTHOR: string = 'author';
export const VAR_AUTHOR_EMAIL: string = 'authoremail';
export const VAR_LICENSE_TEXT: string = 'licensetext';
export const VAR_COPYRIGHT_HOLDER: string = 'copyrightholder';
export const VAR_LICENSE_NAME: string = 'licensename';
export const VAR_LICENSE_URL: string = 'licenseurl';
export const VAR_SPDX_ID: string = 'spdxid';

/**
 * System functions
 */
export const FUNC_DATE_FMT: string = 'dateformat';


/**
 * The variable placeholder prefix.
 */
export const VAR_PREFIX: string = '<<';

/**
 * The variable placeholder suffix.
 */
export const VAR_SUFFIX: string = '>>';

/**
 * The key text for a default language config or template.
 */
export const DEFAULT: string = '*';


/**
 * The default template where none is provided in the user settings.
 */
export const DEFAULT_TEMPLATE: Array<string> = [
    `Filename: ${VAR_PREFIX}${VAR_FILE_PATH}${VAR_SUFFIX}`,
    `Path: ${VAR_PREFIX}${VAR_PROJECT_PATH}${VAR_SUFFIX}`,
    `Created Date: ${VAR_PREFIX}${VAR_DATE}${VAR_SUFFIX}`,
    `Author: ${VAR_PREFIX}${VAR_AUTHOR}${VAR_SUFFIX}`,
    "",
    `Copyright (c) ${VAR_PREFIX}${VAR_YEAR}${VAR_SUFFIX} ${VAR_PREFIX}${VAR_COPYRIGHT_HOLDER}${VAR_SUFFIX}`
];