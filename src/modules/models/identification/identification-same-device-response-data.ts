import { IdentificationSameDeviceResponseDataRequest } from './identification-same-device-response-data-request';

/**
 * 
 * @export
 * @interface IdentificationSameDeviceResponseData
 */
export interface IdentificationSameDeviceResponseData {
    /**
     * We return to you a jwt token, which can be used for further authentication or authorization purposes.
     * This token must be attached to your other requests to our servers. To prove yourself if required.
     * @type {string}
     * @memberof IdentificationSameDeviceResponseData
     */
    'token': string;
    /**
     * Call upon this link to start the identification flow on the same device
     * @type {string}
     * @memberof IdentificationSameDeviceResponseData
     */
    'link': string;
    /**
     * You'd find other details of the flow here.
     * @type {IdentificationSameDeviceResponseDataRequest}
     * @memberof IdentificationSameDeviceResponseData
     */
    'request': IdentificationSameDeviceResponseDataRequest;
}

