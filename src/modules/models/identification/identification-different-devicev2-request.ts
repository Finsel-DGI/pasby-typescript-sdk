import { actions } from "../../shared";

/**
 * 
 * @export
 * @interface IdentificationDifferentDeviceRequestV2
 */
export interface IdentificationDifferentDeviceRequestV2 {
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceRequestV2
     */
    'user': string;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceRequestV2
     */
    'action': actions;
    /**
     * 
     * @type {Array<string>}
     * @memberof IdentificationDifferentDeviceRequestV2
     */
    'claims': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IdentificationDifferentDeviceRequestV2
     */
    'payload': string;
}

