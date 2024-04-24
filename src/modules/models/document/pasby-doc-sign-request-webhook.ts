/**
 * A webhook reference is required for any signing flow request with 'sign' action.
 * @export
 * @interface PasbyDocSignRequestWebhook
 */
export interface PasbyDocSignRequestWebhook {
    /**
     * Host must be of https
     * example https://my.endpoint.com
     * @type {string}
     * @memberof PasbyDocSignRequestWebhook
     */
    'host': string;
    /**
     * Something to help you identify our response to your host
     * @type {string}
     * @memberof PasbyDocSignRequestWebhook
     */
    'reference': string;
}

