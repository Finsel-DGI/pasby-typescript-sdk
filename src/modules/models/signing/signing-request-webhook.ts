/**
 * A webhook reference is required for any signing flow request with 'sign' action.
 * @export
 * @interface SigningRequestWebhook
 */
export interface SigningRequestWebhook {
    /**
     * Host must be of https
     * example https://my.endpoint.com
     * @type {string}
     * @memberof SigningDifferentDeviceRequestWebhook
     */
    'host': string;
    /**
     * Something to help you identify our response to your host
     * @type {string}
     * @memberof SigningDifferentDeviceRequestWebhook
     */
    'reference': string;
}

