import { SigningRequestWebhook } from './signing-request-webhook';

/**
 * 
 * @export
 * @interface SigningDifferentDeviceRequest
 */
export interface SigningDifferentDeviceRequest {
    /**
     * The National Identification Number.
     * @type {string}
     * @memberof SigningDifferentDeviceRequest
     */
    'nin': string;
    /**
     * The action to be performed.
     * 'confirm' | 'sign'
     * @type {string}
     * @memberof SigningDifferentDeviceRequest
     */
    'action': 'confirm' | 'sign';
    /**
     * An object containing webhook details. ( [optional] if action is 'confirm' )
     * @type {SigningRequestWebhook}
     * @memberof SigningDifferentDeviceRequest
     */
    'webhook'?: SigningRequestWebhook;
    /**
     * Your text payload for the signing action.
     * example: Confirm your purchase of access to xyz workspace access
     * @type {string}
     * @memberof SigningDifferentDeviceRequest
     */
    'payload': string;
}

