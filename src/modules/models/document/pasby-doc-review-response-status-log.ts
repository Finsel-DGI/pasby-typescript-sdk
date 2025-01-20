/**
 * Interface representing a status log entry
 * @export
 * @interface PasbyDocReviewResponseStatusLog
 */
export interface PasbyDocReviewResponseStatusLog {
    /**
     * The NIN associated with the status
     * @type {string}
     * @memberof PasbyDocReviewResponseStatusLog
     */
    nin: string;

    /**
     * The status value
     * @type {string}
     * @memberof PasbyDocReviewResponseStatusLog
     */
    status: string;

    /**
     * The last update timestamp
     * @type {number}
     * @memberof PasbyDocReviewResponseStatusLog
     */
    lut: number;
} 