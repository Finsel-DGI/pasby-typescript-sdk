

import { PasbyDocSignResponseDataRequestFile } from './pasby-doc-sign-response-data-request-file';
import { PasbyDocSignResponseDataRequestHook } from './pasby-doc-sign-response-data-request-hook';
import { PasbyDocSignResponseDataRequestRequest } from './pasby-doc-sign-response-data-request-request';

/**
 * 
 * @export
 * @interface PasbyDocSignResponseDataRequest
 */
export interface PasbyDocSignResponseDataRequest {
    /**
     * The ID of the request.
     * @type {string}
     * @memberof PasbyDocSignResponseDataRequest
     */
    'id': string;
    /**
     * An array of recipient nin(s).
     * @type {Array<string>}
     * @memberof PasbyDocSignResponseDataRequest
     */
    'to': Array<string>;
    /**
     * The user agent information.
     * @type {string}
     * @memberof PasbyDocSignResponseDataRequest
     */
    'useragent'?: string;
    /**
     * The destination information.
     * @type {string}
     * @memberof PasbyDocSignResponseDataRequest
     */
    'destination': string;
    /**
     * The timestamp for last update time.
     * @type {number}
     * @memberof PasbyDocSignResponseDataRequest
     */
    'lut'?: number;
    /**
     * The timestamp for issuance time.
     * @type {number}
     * @memberof PasbyDocSignResponseDataRequest
     */
    'iat': number;
    /**
     * The timestamp for expiration time.
     * @type {number}
     * @memberof PasbyDocSignResponseDataRequest
     */
    'exp': number;
    /**
     * A boolean indicating if the request has been handled.
     * @type {boolean}
     * @memberof PasbyDocSignResponseDataRequest
     */
    'handled': boolean;
    /**
     * An object containing the source and name of the file.
     * @type {PasbyDocSignResponseDataRequestFile}
     * @memberof PasbyDocSignResponseDataRequest
     */
    'file'?: PasbyDocSignResponseDataRequestFile;
    /**
     * An object containing the host and reference for the webhook
     * @type {PasbyDocSignResponseDataRequestHook}
     * @memberof PasbyDocSignResponseDataRequest
     */
    'hook': PasbyDocSignResponseDataRequestHook;
    /**
     * An object containing client, app, and IP details.
     * @type {PasbyDocSignResponseDataRequestRequest}
     * @memberof PasbyDocSignResponseDataRequest
     */
    'request': PasbyDocSignResponseDataRequestRequest;
}

