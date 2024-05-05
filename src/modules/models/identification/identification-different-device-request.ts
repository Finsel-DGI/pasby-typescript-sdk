import { FlowActionType, claims } from "../../shared";

/**
 * 
 * @export
 * @interface IdentificationDifferentDeviceRequest
 */
export interface IdentificationDifferentDeviceRequest {
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceRequest
     */
    'user': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceRequest
     */
    'action': 'login' | 'signup' | 'link';
    /**
     * 
     * @type {Array<claims>}
     * @memberof IdentificationDifferentDeviceRequest
     */
    'claims': Array<claims>;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceRequest
     */
    'payload': string;
}

