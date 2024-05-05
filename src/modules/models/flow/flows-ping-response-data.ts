import { FlowsPingResponseDataRequest } from './flows-ping-response-data-request';

/**
 * 
 * @export
 * @interface FlowsPingResponseData
 */
export interface FlowsPingResponseData {
    /**
     * 
     * @type {FlowsPingResponseDataRequest}
     * @memberof FlowsPingResponseData
     */
    'request': FlowsPingResponseDataRequest;
    /**
     * Only applies to ActionType.confirm. Which is a signature mode
     * @type {string | undefined}
     * @memberof FlowsPingResponseData
     */
    'username'?: string 
}

