import { PasbyDocSignRequestFile } from './pasby-doc-sign-request-file';
import { PasbyDocSignRequestSignee } from './pasby-doc-review-request-signees';
import { PasbyDocSignRequestWebhook } from './pasby-doc-sign-request-webhook';

/**
 * 
 * @export
 * @interface PasbyDocReviewRequest
 */
export interface PasbyDocReviewRequest {
  /**
   * An array of signees bare details
   * @type {Array<PasbyDocSignRequestSignee>}
   * @memberof PasbyDocReviewRequest
   */
  'signee': Array<PasbyDocSignRequestSignee>;
  /**
   *  An object containing the URL and title of the file to be signed
   * @type {PasbyDocSignRequestFile}
   * @memberof PasbyDocReviewRequest
   */
  'file': PasbyDocSignRequestFile;
  /**
   * An object containing the host and reference for webhook configuration
   * @type {PasbyDocSignRequestWebhook}
   * @memberof PasbyDocReviewRequest
   */
  'webhook': PasbyDocSignRequestWebhook;
}

