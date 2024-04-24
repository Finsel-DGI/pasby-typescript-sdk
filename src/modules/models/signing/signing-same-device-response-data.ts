import { SigningResponseDataRequest } from "./signing-response-data-request";

/**
 * 
 * @export
 * @interface SigningSameDeviceResponseData
 */
export interface SigningSameDeviceResponseData {
    /**
     * You use this link to open up the pasby™ mobile app automatically
     * @type {string}
     * @memberof SigningSameDeviceResponseData
     */
    'link': string;
    /**
     * An object containing details about the request, including
     * @type {SigningSameDeviceResponseDataRequest}
     * @memberof SigningSameDeviceResponseData
     */
    'request': SigningResponseDataRequest;
}

