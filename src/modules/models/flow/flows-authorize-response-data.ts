/*
Flows govern how you communicate as a software/business with your end user.

pasby™ is a flow. Every action is smooth, simple and recognizable. Endpoints underneath this scope helper play a vital role in managing any pasby™ flow.
*/

/**
 * Expected response data you'd receive from our servers after an authorization call
 * @export
 * @interface FlowsAuthorizeResponseData
 */
export interface FlowsAuthorizeResponseData {
    /**
     * We return to you a jwt token, which can be used for further authentication or authorization purposes.
     * This token must be attached to your other requests to our servers. To prove yourself if required.
     * @type {string}
     * @memberof FlowsAuthorizeResponseData
     */
    'token': string;
}

