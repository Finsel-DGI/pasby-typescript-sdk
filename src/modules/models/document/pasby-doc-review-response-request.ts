import { PasbyDocReviewResponseSignee } from './pasby-doc-review-response-signee';
import { PasbyDocReviewResponseStatusLog } from './pasby-doc-review-response-status-log';
import { PasbyDocReviewResponseFile } from './pasby-doc-review-response-file';
import { PasbyDocReviewResponseHook } from './pasby-doc-review-response-hook';
import { PasbyDocReviewResponseRequestInfo } from './pasby-doc-review-response-request-info';

/**
 * Interface representing the document review request details
 * @export
 * @interface PasbyDocReviewResponseRequest
 */
export interface PasbyDocReviewResponseRequest {
    /**
     * The document ID
     * @type {string}
     * @memberof PasbyDocReviewResponseRequest
     */
    id: string;

    /**
     * Array of recipient identifiers
     * @type {string[]}
     * @memberof PasbyDocReviewResponseRequest
     */
    to: string[];

    /**
     * The user agent information
     * @type {string}
     * @memberof PasbyDocReviewResponseRequest
     */
    useragent: string;

    /**
     * The destination platform
     * @type {string}
     * @memberof PasbyDocReviewResponseRequest
     */
    destination: string;

    /**
     * Last update timestamp
     * @type {number}
     * @memberof PasbyDocReviewResponseRequest
     */
    lut: number;

    /**
     * Issued at timestamp
     * @type {number}
     * @memberof PasbyDocReviewResponseRequest
     */
    iat: number;

    /**
     * Expiration timestamp
     * @type {number}
     * @memberof PasbyDocReviewResponseRequest
     */
    exp: number;

    /**
     * Whether the request has been handled
     * @type {boolean}
     * @memberof PasbyDocReviewResponseRequest
     */
    handled: boolean;

    /**
     * The file information
     * @type {PasbyDocReviewResponseFile}
     * @memberof PasbyDocReviewResponseRequest
     */
    file: PasbyDocReviewResponseFile;

    /**
     * The webhook information
     * @type {PasbyDocReviewResponseHook}
     * @memberof PasbyDocReviewResponseRequest
     */
    hook: PasbyDocReviewResponseHook;

    /**
     * The domain information
     * @type {string}
     * @memberof PasbyDocReviewResponseRequest
     */
    domain: string;

    /**
     * The request information
     * @type {PasbyDocReviewResponseRequestInfo}
     * @memberof PasbyDocReviewResponseRequest
     */
    request: PasbyDocReviewResponseRequestInfo;

    /**
     * The mode of the request
     * @type {string}
     * @memberof PasbyDocReviewResponseRequest
     */
    mode: string;

    /**
     * Array of signees
     * @type {PasbyDocReviewResponseSignee[]}
     * @memberof PasbyDocReviewResponseRequest
     */
    signee: PasbyDocReviewResponseSignee[];

    /**
     * Array of status logs
     * @type {PasbyDocReviewResponseStatusLog[]}
     * @memberof PasbyDocReviewResponseRequest
     */
    statusLog: PasbyDocReviewResponseStatusLog[];
} 