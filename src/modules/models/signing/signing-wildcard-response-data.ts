import { SigningResponseDataRequest } from ".";

/**
 * 
 * @export
 * @interface SigningWildcardResponseData
 */
export interface SigningWildcardResponseData {
  /**
   * 
   * @type {SigningWildcardResponseDataRequest}
   * @memberof SigningWildcardResponseData
   */
  'request': SigningResponseDataRequest;
  /**
   * You'd receive a list of pasby branded deep links flow request for your required users to scan
   * @type {Array<string>}
   * @memberof SigningWildcardResponseData
   */
  'seeds': Array<string>;
}

