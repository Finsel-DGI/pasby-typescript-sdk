/**
 * A signee reference is required for any signing flow request with 'sign' action.
 * @export
 * @interface PasbyDocSignRequestSignee
 */
export interface PasbyDocSignRequestSignee {
  /**
   * Host must be of https
   * example Mr. 
   * [[Optional]]
   * @type {string}
   * @memberof PasbyDocSignRequestSignee
   */
  "title"?: string;
  /**
   * Name of the signer
   * @type {string}
   * @memberof PasbyDocSignRequestSignee
   */
  "name": string;
  /**
   * Signer type 
   * @type {"business" | "person"}
   * @memberof PasbyDocSignRequestSignee
   */
  "type": "business" | "person";
  /**
   * Signer's email address
   * @type {string}
   * @memberof PasbyDocSignRequestSignee
   */
  "email": string;
  /**
   * Signer's national identification number
   * @type {string}
   * @memberof PasbyDocSignRequestSignee
   */
  "nin": string;
  /**
   * Whom is signer representing
   * @type {string}
   * @memberof PasbyDocSignRequestSignee
   */
  "representing": string;
}

