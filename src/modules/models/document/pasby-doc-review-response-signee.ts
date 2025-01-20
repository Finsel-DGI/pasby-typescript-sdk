/**
 * Interface representing a document signee
 * @export
 * @interface PasbyDocReviewResponseSignee
 */
export interface PasbyDocReviewResponseSignee {
    /**
     * The name of the signee
     * @type {string}
     * @memberof PasbyDocReviewResponseSignee
     */
    name: string;

    /**
     * Who the signee is representing
     * @type {string}
     * @memberof PasbyDocReviewResponseSignee
     */
    representing: string;

    /**
     * The title of the signee
     * @type {string}
     * @memberof PasbyDocReviewResponseSignee
     */
    title: string;

    /**
     * The type of signee
     * @type {string}
     * @memberof PasbyDocReviewResponseSignee
     */
    type: string;

    /**
     * The email of the signee
     * @type {string}
     * @memberof PasbyDocReviewResponseSignee
     */
    email: string;

    /**
     * The NIN of the signee
     * @type {string}
     * @memberof PasbyDocReviewResponseSignee
     */
    nin: string;
} 