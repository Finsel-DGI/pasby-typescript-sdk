import { PasbyDocReviewResponseRequest } from './pasby-doc-review-response-request';

/**
 * Interface representing the document review response data
 * @export
 * @interface PasbyDocReviewResponseData
 */
export interface PasbyDocReviewResponseData {
    /**
     * The signing link for the document
     * @type {string}
     * @memberof PasbyDocReviewResponseData
     */
    link: string;

    /**
     * The request details
     * @type {PasbyDocReviewResponseRequest}
     * @memberof PasbyDocReviewResponseData
     */
    request: PasbyDocReviewResponseRequest;
} 