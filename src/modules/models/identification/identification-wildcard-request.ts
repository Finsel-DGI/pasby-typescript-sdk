import {claims } from "../../..";

/**
 * 
 * @export
 * @interface IdentificationWildcardRequest
 */
export interface IdentificationWildcardRequest {
    /**
     * 'login' | 'signup' | 'link'
     * @type {string}
     * @memberof IdentificationWildcardRequest
     */
    'action': 'login' | 'signup' | 'link';
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

