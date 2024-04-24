

import { FlowsPingResponseDataRequestClaimsBio } from './flows-ping-response-data-request-claims-bio';
import { FlowsPingResponseDataRequestClaimsContact } from './flows-ping-response-data-request-claims-contact';
import { FlowsPingResponseDataRequestClaimsNaming } from './flows-ping-response-data-request-claims-naming';
import { FlowsPingResponseDataRequestClaimsNationality } from './flows-ping-response-data-request-claims-nationality';

/**
 * 
 * @export
 * @interface FlowsPingResponseDataRequestClaims
 */
export interface FlowsPingResponseDataRequestClaims {
    /**
     * 
     * @type {FlowsPingResponseDataRequestClaimsBio}
     * @memberof FlowsPingResponseDataRequestClaims
     */
    'bio'?: FlowsPingResponseDataRequestClaimsBio;
    /**
     * 
     * @type {FlowsPingResponseDataRequestClaimsContact}
     * @memberof FlowsPingResponseDataRequestClaims
     */
    'contact'?: FlowsPingResponseDataRequestClaimsContact;
    /**
     * 
     * @type {FlowsPingResponseDataRequestClaimsNaming}
     * @memberof FlowsPingResponseDataRequestClaims
     */
    'naming'?: FlowsPingResponseDataRequestClaimsNaming;
    /**
     * 
     * @type {FlowsPingResponseDataRequestClaimsNationality}
     * @memberof FlowsPingResponseDataRequestClaims
     */
    'nationality'?: FlowsPingResponseDataRequestClaimsNationality;
}

