import {claims } from "../../shared";

/**
 * 
 * @export
 * @interface IdentificationSameDeviceRequest
 */
export interface IdentificationSameDeviceRequest {
    /**
     * 'login' | 'signup' | 'link'
     * @type {string}
     * @memberof IdentificationSameDeviceRequest
     */
    'action': 'login' | 'signup' | 'link';
    /**
     * 
     * @type {Array<string>}
     * @memberof IdentificationSameDeviceRequest
     */
    'claims': Array<claims>;
    /**
     * Add a text payload for the user to read about this event.
     * @type {string}
     * @memberof IdentificationSameDeviceRequest
     */
    'payload': string;
}

