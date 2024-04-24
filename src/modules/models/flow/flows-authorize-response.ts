/*
Flows govern how you communicate as a software/business with your end user.

pasby™ is a flow. Every action is smooth, simple and recognizable. Endpoints underneath this scope helper play a vital role in managing any pasby™ flow.
*/


import { FlowsAuthorizeResponseData } from './flows-authorize-response-data';

/**
 * complete response of the authorization request 
 * @export
 * @interface FlowsAuthorizeResponse
 */
export interface FlowsAuthorizeResponse {
    /**
     * Status code i.e 200, 400, etc
     * @type {string}
     * @memberof FlowsAuthorizeResponse
     */
    'status': number;
    /**
     * A simple text description of the event
     * @type {string}
     * @memberof FlowsAuthorizeResponse
     */
    'reason': string;
    /**
     * Information to be used in your next interactions
     * @type {FlowsAuthorizeResponseData}
     * @memberof FlowsAuthorizeResponse
     */
    'data': FlowsAuthorizeResponseData;
}

