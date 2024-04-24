/**
 * Provide meaningful information about the document you want to be signed by the
 * @export
 * @interface PasbyDocSignRequestFile
 */
export interface PasbyDocSignRequestFile {
    /**
     * Name of the document to be reviewed and signed
     * @type {string}
     * @memberof PasbyDocSignRequestFile
     */
    'title': string;
    /**
     * The URL of the file to be signed.
     * Provide a direct url to the document. This url enables our servers extract a pdf file directly. So document type must be pdf
     * @type {string}
     * @memberof PasbyDocSignRequestFile
     */
    'url': string;
}

