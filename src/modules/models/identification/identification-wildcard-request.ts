import { actions, claims } from "../../shared";

/**
 * 
 * @export
 * @interface IdentificationWildcardRequest
 */
export interface IdentificationWildcardRequest {
    /**
     * 'login' | 'signup' | 'link'
     * @type {actions}
     * @memberof IdentificationWildcardRequest
     */
    'action': actions;
    /**
     * 
     * @type {Array<string>}
     * @memberof IdentificationWildcardRequest
     */
    'claims': Array<claims>;
    /**
     * Number of unique requests ids to be generated
     * You are to present these as a running qr code.
     * @type {number}
     * @memberof IdentificationWildcardRequest
     */
    'seeds': number;
    /**
     * Payload data
     * @type {string}
     * @memberof IdentificationWildcardRequest
     */
    'payload': string;
}

