

import { SigningDifferentDeviceResponseData } from './signing-different-device-response-data';

/**
 * 
 * @export
 * @interface SigningDifferentDeviceResponse
 */
export interface SigningDifferentDeviceResponse {
    /**
     * The version of the response
     * @type {string}
     * @memberof SigningDifferentDeviceResponse
     */
    'version': string;
    /**
     * The status of the response
     * @type {string}
     * @memberof SigningDifferentDeviceResponse
     */
    'status': string;
    /**
     * The reason for the response
     * @type {string}
     * @memberof SigningDifferentDeviceResponse
     */
    'reason': string;
    /**
     * An object containing the following properties
     * @type {SigningDifferentDeviceResponseData}
     * @memberof SigningDifferentDeviceResponse
     */
    'data'?: SigningDifferentDeviceResponseData;
}

