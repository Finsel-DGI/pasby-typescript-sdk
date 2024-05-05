import { SigningRequestWebhook } from './signing-request-webhook';

/**
 * 
 * @export
 * @interface WildcardSigningRequest
 */
export interface WildcardSigningRequest {
  /**
   * The action to be performed.
   * 'confirm' | 'sign'
   * @type {string}
   * @memberof WildcardSigningRequest
   */
  'action': 'confirm' | 'sign';
  /**
   * An object containing webhook details. ( [optional] if action is 'confirm' )
   * @type {SigningRequestWebhook}
   * @memberof WildcardSigningRequest
   */
  'webhook'?: SigningRequestWebhook;
  /**
   * Your text payload for the signing action.
   * example: Confirm your purchase of access to xyz workspace access
   * @type {string}
   * @memberof WildcardSigningRequest
   */
  'payload': string;
  /**
     * Number of unique requests ids to be generated
     * You are to present these as a running qr code.
     * @type {number}
     * @memberof WildcardSigningRequest
     */
  'seeds': number; 
}

