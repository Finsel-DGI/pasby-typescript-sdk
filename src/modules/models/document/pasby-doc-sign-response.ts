import { PasbyDocSignResponseData } from './pasby-doc-sign-response-data';

/**
 * 
 * @export
 * @interface PasbyDocSignResponse
 */
export interface PasbyDocSignResponse {
    /**
     * The api version information.
     * @type {string}
     * @memberof PasbyDocSignResponse
     */
    'version': string;
    /**
     * The status of the response.
     * @type {string}
     * @memberof PasbyDocSignResponse
     */
    'status': string;
    /**
     * The reason for the response status.
     * @type {string}
     * @memberof PasbyDocSignResponse
     */
    'reason': string;
    /**
     * An object containing the details of the request and version information.
     * @type {PasbyDocSignResponseData}
     * @memberof PasbyDocSignResponse
     */
    'data': PasbyDocSignResponseData;
}

