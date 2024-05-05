import { SigningRequestWebhook } from "./signing-request-webhook";

/**
 * 
 * @export
 * @interface SigningSameDeviceRequest
 */
export interface SigningSameDeviceRequest {
    /**
     * National Identification number of signee
     * @type {string}
     * @memberof SigningSameDeviceRequest
     */
    'nin': string;
    /**
     * What kind of signing action
     * Only accepts -- 'sign' | 'confirm'
     * @type {string}
     * @memberof SigningSameDeviceRequest
     */
    'action': 'confirm' | 'sign';
    /**
     * An object containing webhook details. ( [optional] if action is 'confirm' )
     * @type {SigningRequestWebhook}
     * @memberof SigningRequestWebhook
     */
    'webhook'?: SigningRequestWebhook;
    /**
     * Your text payload for the signing action.
     * example: Confirm your purchase of access to xyz workspace access
     * @type {string}
     * @memberof SigningSameDeviceRequest
     */
    'payload': string;
}

