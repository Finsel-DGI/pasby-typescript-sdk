import { SigningWildcardResponseData } from "./signing-wildcard-response-data";

/**
 * 
 * @export
 * @interface SigningWildcardResponse
 */
export interface SigningWildcardResponse {
  /**
   * API version
   * @type {string}
   * @memberof SigningWildcardResponse
   */
  'version': string;
  /**
   * 
   * @type {string}
   * @memberof SigningWildcardResponse
   */
  'status': string;
  /**
   * 
   * @type {string}
   * @memberof SigningWildcardResponse
   */
  'reason': string;
  /**
   * 
   * @type {SigningWildcardResponseData}
   * @memberof SigningWildcardResponse
   */
  'data'?: SigningWildcardResponseData;
}

