

import { PasbyDocSignRequestFile } from './pasby-doc-sign-request-file';
import { PasbyDocSignRequestWebhook } from './pasby-doc-sign-request-webhook';

/**
 * 
 * @export
 * @interface PasbyDocSignRequest
 */
export interface PasbyDocSignRequest {
    /**
     * An array of recipient nin(s)
     * @type {Array<string>}
     * @memberof PasbyDocSignRequest
     */
    'to': Array<string>;
    /**
     *  An object containing the URL and title of the file to be signed
     * @type {PasbyDocSignRequestFile}
     * @memberof PasbyDocSignRequest
     */
    'file': PasbyDocSignRequestFile;
    /**
     * An object containing the host and reference for webhook configuration
     * @type {PasbyDocSignRequestWebhook}
     * @memberof PasbyDocSignRequest
     */
    'webhook': PasbyDocSignRequestWebhook;
}

