import { actions, claims } from "../../shared";

/**
 * 
 * @export
 * @interface IdentificationDifferentDeviceRequest
 */
export interface IdentificationDifferentDeviceRequest {
    /**
     * National id number of individual
     * @type {string}
     * @memberof IdentificationDifferentDeviceRequest
     */
    'user': string;
    /**
     * pasby action type to govern this flow
     * @type {string}
     * @memberof IdentificationDifferentDeviceRequest
     */
    'action': actions;
    /**
     * What sort of claims would you like to retrieve from the user?
     * @type {Array<claims>}
     * @memberof IdentificationDifferentDeviceRequest
     */
    'claims': Array<claims>;
    /**
     * Add text payload to notifier user of what this action entails. We do have support for markdown texts.
     * @type {string}
     * @memberof IdentificationDifferentDeviceRequest
     */
    'payload': string;
}

