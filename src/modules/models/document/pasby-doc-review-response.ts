import { PasbyDocReviewResponseData } from './pasby-doc-review-response-data';

/**
 * Interface representing the document review response
 * @export
 * @interface PasbyDocReviewResponse
 */
export interface PasbyDocReviewResponse {
    /**
     * The reason for the response status
     * @type {string}
     * @memberof PasbyDocReviewResponse
     */
    reason: string;

    /**
     * The status of the response
     * @type {string}
     * @memberof PasbyDocReviewResponse
     */
    status: string;

    /**
     * The response data containing link and request details
     * @type {PasbyDocReviewResponseData}
     * @memberof PasbyDocReviewResponse
     */
    data: PasbyDocReviewResponseData;

    /**
     * The api version information
     * @type {string}
     * @memberof PasbyDocReviewResponse
     */
    version: string;
} 