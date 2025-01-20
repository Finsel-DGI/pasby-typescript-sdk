/**
 * Interface representing the document file information
 * @export
 * @interface PasbyDocReviewResponseFile
 */
export interface PasbyDocReviewResponseFile {
    /**
     * The source URL of the file
     * @type {string}
     * @memberof PasbyDocReviewResponseFile
     */
    source: string;

    /**
     * The name of the file
     * @type {string}
     * @memberof PasbyDocReviewResponseFile
     */
    name: string; 
    
    /**
     * The stamped file's url
     * @type {string}
     * @memberof PasbyDocReviewResponseFile
     */
    stamped: string;
} 