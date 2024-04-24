
import { IdentificationDifferentDeviceResponseDataRequest } from './identification-different-device-response-data-request';

/**
 * 
 * @export
 * @interface IdentificationDifferentDeviceResponseData
 */
export interface IdentificationDifferentDeviceResponseData {
    /**
     * We return to you a jwt token, which can be used for further authentication or authorization purposes.
     * This token must be attached to your other requests to our servers. To prove yourself if required.
     * @type {IdentificationDifferentDeviceResponseDataRequest}
     * @memberof IdentificationDifferentDeviceResponseData
     */
    'request': IdentificationDifferentDeviceResponseDataRequest;
}

