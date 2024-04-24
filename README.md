# pasby-typescript-sdk<a id="pasby-typescript-sdk"></a>

Welcome! You have discovered pasby™ APIs documentation. Our integrations supercharge your digital services and drastically improves your user experience flows.

> With pasby™, African nationals use a single identifier to access various online platforms and services. We at pasby™ strive to make your integration with our API solutions simple and easy to understand. 
  

# Getting started<a id="getting-started"></a>

Head over to the [Console](https://console.pasby.africa/) to get started with your integration. _Console_ is a medium to connect your applications which intend to use pasby™ API Integrations and any other of our products intensively. On _Console_ you can create and register apps for your organisations, plug and play with your generated pasby™ credentials. Once you are ready to go live. Simply request for production access.

# Domains<a id="domains"></a>

pasby™ integrations can either be created for production or sandbox use. Each environment has it's consequences.

All production apps make calls to --- [https://l.pasby.africa](https://l.pasby.africa)

All sandbox apps make calls to --- [https://s.pasby.africa](https://s.pasby.africa)

# How does it work?<a id="how-does-it-work"></a>

There is a structure to which pasby™ integrations work. Here are the keys words to note: _scopes_, _actions_, and _claims_.

#### Scopes<a id="scopes"></a>

Access to pasby™ is divided into scopes that grant access to different API endpoints. Every API customer has access to a set of scopes that control data access.

A subset of scopes can be requested for each access token. For example, a full set of scopes could be `accounts:read,accounts:update`, but for a specific access token, it's possible to only request `accounts:read`. This way, you can request the right set of permissions dependant on your use case.

The available scopes for pasby™'s API are:

| **Scope**                 | **Endpoint**                                                              |
| ------------------------- | ------------------------------------------------------------------------- |
| `flow:authorization`      | [/flow/authorize](#)                  |
| `flow:poll`               | [/flow/poll](#)                       |
| `flow:ping`               | [/flow/ping](#)                       |
| `flow:cancel`             | [/flow/cancel](#)                     |
| `identification:same`     | [/identification/same-device](#)      |
| `identification:another`  | [/identification/different-device](#) |
| `identification:wildcard` | [/identification/wildcard](#)         |
| `signing:same`            | [/signing/same-device](#)             |
| `signing:another`         | [/signing/different-device](#)        |
| `document:sign`           | [/document/signing](#)                |

#### Actions<a id="actions"></a>

pasby™ is a flow. Every action is smooth, simple and recognizable. Flows with pasby™ are instructed using actions. This actions are attached in the body of any requests that require user activity. See more about actions in use below.

The available actions for pasby™'s APIs are:

| **Action** | **Scopes**                                                                  |
| ---------- | --------------------------------------------------------------------------- |
| `login`    | `identification:same identification:another`  <br>`identification:wildcard` |
| `signup`   | `identification:same identification:another`  <br>`identification:wildcard` |
| `link`     | `identification:same identification:another`  <br>`identification:wildcard` |
| `sign`     | `signing:same`  <br>`signing:another`  <br>`document:sign`                  |
| `confirm`  | `signing:same`  <br>`signing:another`                                       |

#### Claims<a id="claims"></a>

The data of African nationals connected to pasby™ are firewalled behind _claims_. We provide our consumers access to approved identification information through this claims.

Find a list of supported claims available today:

###### Bio data<a id="bio-data"></a>

- bio.birthplace
- bio.birthdate
- bio.gender
- bio.maritalstatus
- bio.birthnumber
    

###### Contact data<a id="contact-data"></a>

- contact.email
- contact.emailverified
- contact.phone
- contact.phoneverified
    

###### Address data<a id="address-data"></a>

- address.city
- address.postcode
- address.country
- address.place
- address.formatted
- address.longitude
- address.latitude
    

###### Naming data<a id="naming-data"></a>

- naming.family
- naming.given
- naming.title
- naming.name
- naming.titlePrefix
- naming.titleSuffix
- naming.nickname
    

###### Nationality data<a id="nationality-data"></a>

- nationality.nationalities
- nationality.pep
- nationality.primary
- nationality.residence
- nationality.watchListed
    

###### ID data<a id="id-data"></a>

- idcards.passport
    

###### Financial data<a id="financial-data"></a>

- financial.bvn
- financial.bvnBank
- finalcial.bvnLevel
- financial.bvnIAT
    

More claims are currently being worked on i.e Medical

Download the pasby™ app from your respective stores.

Find out more on our web page [pasby.africa](https://pasby.africa).

Start integrating today at no costs at all and only begin to pay once you cross 100 requests monthly. We look forward to see what you build with on pasby™.

[![npm](https://img.shields.io/badge/npm-{version}.0.0-blue)](https://www.npmjs.com/package/pasby-typescript-sdk/v/1.0.0)

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

  * [Installation](#installation)
  * [Getting Started](#getting-started)
  * [Reference](#reference)
    + [`pasby.docs.docSign`](#pasbydocsdocsign)
    + [API Request Description](#api-request-description)
    + [API Response](#api-response)
    + [`pasby.flows.authorize`](#pasbyflowsauthorize)
    + [`pasby.flows.cancel`](#pasbyflowscancel)
    + [Flow Cancel](#flow-cancel)
    + [`pasby.flows.longPolling`](#pasbyflowslongpolling)
  * [Flow Polling](#flow-polling)
    + [Request](#request)
    + [Response](#response-1)
    + [`pasby.flows.ping`](#pasbyflowsping)
- [Flow Ping](#flow-ping)
  * [Request Body](#request-body-1)
  * [Response](#response-2)
    + [Response Body](#response-body)
    + [`pasby.Health.healthCheck`](#pasbyHealthhealthcheck)
    + [`pasby.identification.differentDevice`](#pasbyidentificationdifferentdevice)
    + [Endpoint Description](#endpoint-description)
    + [Request Body](#request-body-2)
    + [Response](#response-3)
    + [`pasby.identification.differentDevicev2`](#pasbyidentificationdifferentdevicev2)
    + [API Request Description](#api-request-description-1)
    + [API Response](#api-response-1)
    + [Additional Notes](#additional-notes)
    + [`pasby.identification.sameDevice`](#pasbyidentificationsamedevice)
- [Same Device Identification](#same-device-identification)
  * [Request Payload](#request-payload-1)
  * [Response](#response-4)
    + [Response Body](#response-body-1)
  * [Example](#example)
    + [`pasby.identification.wildcard`](#pasbyidentificationwildcard)
- [Identification Wildcard](#identification-wildcard)
  * [Request](#request-1)
    + [Request Body](#request-body-3)
  * [Response](#response-5)
    + [Response Body](#response-body-2)
    + [`pasby.signing.differentDevice`](#pasbysigningdifferentdevice)
    + [Request Body](#request-body-4)
    + [Response](#response-6)
    + [`pasby.signing.sameDevice`](#pasbysigningsamedevice)

<!-- tocstop -->

## Installation<a id="installation"></a>

<table>
<tr>
<th width="292px"><code>npm</code></th>
<th width="293px"><code>pnpm</code></th>
<th width="292px"><code>yarn</code></th>
</tr>
<tr>
<td>

```bash
npm i @finsel-dgi/pasby
```

</td>
<td>

```bash
pnpm i @finsel-dgi/pasby
```

</td>
<td>

```bash
yarn add @finsel-dgi/pasby
```

</td>
</tr>
</table>

## Getting Started<a id="getting-started"></a>

```typescript
import { Pasby } from "@finsel-dgi/pasby";

const pasby = new Pasby({
  // Defining the base path is optional and defaults to https://l.pasby.africa
  basePath: "https://l.pasby.africa" | "https://s.pasby.africa",
  apikeyAuth: "API_KEY",
  appSecretKey: "API_KEY",
  version: <api version> defaults to '{version}',
});

const docSignResponse = await pasby.docs.docSign({});

console.log(docSignResponse);
```

## Reference<a id="reference"></a>


### `pasby.docs.docSign`<a id="pasbydocsdocsign"></a>

### API Request Description<a id="api-request-description"></a>

This HTTP POST request is used to initiate the signing of a document. The request should be sent to the endpoint `https://{base_url}/api/{version}/{version}/document/signing` with a JSON payload in the raw request body type. The payload should include the recipient information, file details, and webhook configuration.

#### Request Payload<a id="request-payload"></a>

- `to` (array): An array of recipient nin(s).
    
- `file` (object): An object containing the URL and title of the file to be signed.
    - `url`: The URL of the file to be signed.
    - `title`: The title or name of the file.
- `webhook` (object): An object containing the host and reference for webhook configuration.
    - `host`: The host for the webhook.
    - `reference`: The reference for the webhook.

### API Response<a id="api-response"></a>

Upon successful execution, the API returns a status code of 201 and a JSON response with the following structure:

- `status`: The status of the response.
- `reason`: The reason for the response status.
- `data` (object): An object containing the details of the request and version information.
    
    - `request` (object): An object containing the details of the request.
        
        - `id`: The ID of the request.
        - `to`: An array of recipient nin(s).
            
        - `useragent`: The user agent information.
        - `destination`: The destination information.
        - `lut`: The timestamp for last update time.
        - `iat`: The timestamp for issuance time.
        - `exp`: The timestamp for expiration time.
        - `handled`: A boolean indicating if the request has been handled.
        - `file` (object): An object containing the source and name of the file.
            - `source`: The source of the file.
            - `name`: The name of the file.
        - `hook` (object): An object containing the host and reference for the webhook.
            - `host`: The host for the webhook.
            - `reference`: The reference for the webhook.
        - `request` (object): An object containing client, app, and IP details.
            - `client`: The client information.
            - `app`: The app information.
            - `ip`: The IP address.
    - `version`: The version information.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const docSignResponse = await pasby.docs.docSign({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### to: `string`[]<a id="to-string"></a>

##### file: [`PasbyDocSignRequestFile`](./src/modules/models/document/pasby-doc-sign-request-file.ts)<a id="file-pasbydocsignrequestfilemodelspasby-doc-sign-request-filets"></a>

##### webhook: [`PasbyDocSignRequestWebhook`](./src/modules/models/document/pasby-doc-sign-request-webhook.ts)<a id="webhook-pasbydocsignrequestwebhookmodelspasby-doc-sign-request-webhookts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PasbyDocSignResponse](./src/modules/models/document/pasby-doc-sign-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/{version}/document/signing` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pasby.flows.authorize`<a id="pasbyflowsauthorize"></a>


This endpoint sends an HTTP GET request to retrieve authorization for a specific flow. The request should include the 'sub' parameter for the organization and the 'app' parameter for the app ID. Upon a successful execution, the response will have a status code of 200 and a JSON body with the keys 'status', 'reason', and 'data'. The 'data' object contains a 'token' which can be used for further authentication or authorization purposes.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const authorizeResponse = await pasby.flows.authorize({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sub: `string`<a id="sub-string"></a>

This can be found in your consumer service.json file with the identifier clientid.

##### app: `string`<a id="app-string"></a>

This can be found in Console and your app\'s generated service.json file

#### 🔄 Return<a id="🔄-return"></a>

[FlowsAuthorizeResponse](./src/modules/models/flows/flows-authorize-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/{version}/flow/authorize` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pasby.flows.cancel`<a id="pasbyflowscancel"></a>

### Flow Cancel<a id="flow-cancel"></a>

This endpoint is used to cancel a flow using an HTTP POST request.

#### Request Body<a id="request-body"></a>

- The request body should be in raw format with a JSON object.
    - `request`: (string) The request to cancel.

#### Response<a id="response"></a>

- Status: 201
- Content-Type: application/json
- `status`: (string) The status of the cancellation.
- `reason`: (string) The reason for the cancellation.
- `data`: (object) The data object containing model details.
    
    - `id`: (string) The ID of the model.
    - `consumer`: (string) The consumer of the model.
    - `app`: (string) The app related to the model.
    - `mode`: (string) The mode of the model.
    - `action`: (string) The action related to the model.
    - `payload`: (string) The payload of the model.
    - `iat`: (integer) The issued at timestamp.
    - `exp`: (integer) The expiration timestamp.
    - `user`: (string) The user related to the model.
    - `ip`: (string) The IP address related to the model.
    - `useragent`: (string) The user agent related to the model.
    - `name`: (string) App name.
        
    - `acquireClaims`: (array) Array of acquire claims related to this flow.

        
- `version`: (string) The version of the response.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelResponse = await pasby.flows.cancel({
  request: "{{request-id}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### request: `string`<a id="request-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FlowsCancelResponse](./src/modules/models/flow/flows-cancel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/{version}/flow/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pasby.flows.longPolling`<a id="pasbyflowslongpolling"></a>

## Flow Polling<a id="flow-polling"></a>

This endpoint allows you to poll for flow status.

### Request<a id="request"></a>

- Method: POST
- URL: `https://{base_url}/api/{version}/flow/polling`
- Headers:
    - Content-Type: application/json
- Body:
    
    ``` json
      {
          "request": ""
      }
    
     ```
    

### Response<a id="response"></a>

- Status: 200
- Content-Type: application/json
- Body:
    
    ``` json
      {
          "status": "",
          "reason": "",
          "data": {
              "request": {
                  "reference": "",
                  "requester": "",
                  "requestee": "",
                  "mode": "",
                  "data": "",
                  "cancelled": true,
                  "onsession": true,
                  "iat": 0,
                  "claims": {},
                  "signature": "",
                  "signedAt": 0
              }
          }
      }
    
     ```

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const longPollingResponse = await pasby.flows.longPolling({
  request: "{{request-id}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### request: `string`<a id="request-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/{version}/flow/polling` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pasby.flows.ping`<a id="pasbyflowsping"></a>


# Flow Ping<a id="flow-ping"></a>

This endpoint allows you to ping the flow and retrieve the status of the request.

## Request Body<a id="request-body"></a>
- The request body should be in raw format.
- The request body should contain a JSON object with a key "request".

## Response<a id="response"></a>
- Status: 200
- Content-Type: application/json

### Response Body<a id="response-body"></a>
The response contains a JSON object with the following keys:
- status (string): The status of the request.
- reason (string): The reason for the status.
- data (object): An object containing details of the request, including reference, requester, requestee, mode, data, cancelled, onsession, iat, claims, signature, and signedAt.
- version (string): The version of the response.

#### Example Response<a id="example-response"></a>
```json
{
    "status": "",
    "reason": "",
    "data": {
        "request": {
            "reference": "",
            "requester": "",
            "requestee": "",
            "mode": "",
            "data": "",
            "cancelled": true,
            "onsession": true,
            "iat": 0,
            "claims": {}
        }
    },
    "version": ""
}
```


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pingResponse = await pasby.flows.ping({
  request: "{{request-id}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### request: `string`<a id="request-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FlowsPingResponse](./src/modules/models/flow/flows-ping-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/{version}/flow/ping` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pasby.health.healthCheck`<a id="pasbyHealthhealthcheck"></a>

Simply returns status code 200 if online.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const healthCheckResponse = await pasby.health.healthCheck();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/health/check` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pasby.identification.differentDevice`<a id="pasbyidentificationdifferentdevice"></a>

### Endpoint Description<a id="endpoint-description"></a>

This endpoint allows users to make an HTTP POST request to `https://{base_url}/api/{version}/identification/different-device` in order to perform an action related to identification on a different device.

### Request Body<a id="request-body"></a>

- `user` (string): Represents the **nin** for the identification action.
    
- `action` (string): Specifies the action to be performed.
- `claims` (array of strings): Contains the claims associated with the identification.
- `payload` (string): Represents the payload for the identification action.
    

### Response<a id="response"></a>

Upon successful execution, the API returns a status code of 201 and a JSON response with the following structure:

``` json
{
    "status": "",
    "reason": "",
    "data": {
        "request": {
            "id": "",
            "consumer": "",
            "app": "",
            "mode": "",
            "action": "",
            "payload": "",
            "iat": 0,
            "exp": 0,
            "user": "",
            "ip": "",
            "useragent": "",
            "name": "",
            "acquireClaims": [""],
            "signature": ""
        },
        "version": ""
    }
}

 ```

The response includes the status, reason, data object containing request details, and the version information.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const differentDeviceResponse = await pasby.identification.differentDevice({
  user: "{{nin}}",
  action: "login" | "signup" | "link", either one of these actions
  payload:
    "A simple payload used during pasby™ on another device identification flow",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user: `string`<a id="user-string"></a>

##### action: `string`<a id="action-string"></a>

##### claims: `string`[] [`see usable-claims`](./src/modules/shared.ts)<a id="claims-string"></a>

##### payload: `string`<a id="payload-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IdentificationDifferentDeviceResponse](./src/modules/models/identification/identification-different-devicev2-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/{version}/identification/different-device` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pasby.identification.sameDevice`<a id="pasbyidentificationsamedevice"></a>

# Same Device Identification<a id="same-device-identification"></a>

This endpoint allows you to perform same device identification by making an HTTP POST request to `https://{base_url}/api/{version}/identification/same-device`.

## Request Payload<a id="request-payload"></a>

- `action` (string): Specifies the action to be performed.
- `claims` (array of strings): Contains the claims for identification.
- `payload` (string): Specifies the payload for identification.
    

## Response<a id="response"></a>

- Status: 201
- Content-Type: application/json
    

### Response Body<a id="response-body"></a>

``` json
{
    "status": "",
    "reason": "",
    "data": {
        "token": "",
        "link": "",
        "request": {
            "id": "",
            "consumer": "",
            "app": "",
            "mode": "",
            "action": "",
            "payload": "",
            "iat": 0,
            "exp": 0,
            "user": "",
            "ip": "",
            "useragent": "",
            "name": "",
            "acquireClaims": [""],
            "signature": ""
        },
        "version": ""
    }
}

 ```

## Example<a id="example"></a>

``` json
{
    "action": "login" | "signup" | "link",
    "claims": ["naming.given", "contact.email"],
    "payload": "payloadData"
}

 ```

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sameDeviceResponse = await pasby.identification.sameDevice({
  action: "signup",
  payload:
    "A simple payload used during pasby™ same-device authentication flow",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### action: `string`<a id="action-string"></a>

##### claims: `string`[]<a id="claims-string"></a>

##### payload: `string`<a id="payload-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IdentificationSameDeviceResponse](./src/modules/models/identification/identification-same-device-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/{version}/identification/same-device` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pasby.identification.wildcard`<a id="pasbyidentificationwildcard"></a>

# Identification Wildcard<a id="identification-wildcard"></a>

This endpoint allows you to make an HTTP POST request to identify a user without any nin entry.

Wildcards are used with QR codes to create an authentication flow that relies on an unknown user authenticating through a scan only. This scope does not need a nin identifier. Thus the reason it is a wildcard.

## Request<a id="request"></a>

- Method: POST
- URL: `https://{base_url}/api/{version}/identification/wildcard`
- Payload Type: JSON
    

### Request Body<a id="request-body"></a>

| Key     | Type   | Description                            |
| ------- | ------ | -------------------------------------- |
| action  | text   | Action to be performed                 |
| claims  | array  | Array of claims                        |
| seeds   | number | Number of requests ids to be generated |
| payload | text   | Payload data                           |

## Response<a id="response"></a>

- Status: 201
- Content-Type: application/json
    

### Response Body<a id="response-body"></a>

``` json
{
    "status": "",
    "reason": "",
    "data": {
        "request": {
            "id": "",
            "consumer": "",
            "app": "",
            "mode": "",
            "action": "",
            "payload": "",
            "iat": 0,
            "exp": 0,
            "user": "",
            "ip": "",
            "useragent": "",
            "name": "",
            "acquireClaims": [""],
            "signature": ""
        },
        "seeds": [""]
    },
    "version": ""
}

 ```

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const wildcardResponse = await pasby.identification.wildcard({
  action: "login",
  seeds: 4,
  payload: "A simple payload used during pasby wildcard flow",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### action: `string`<a id="action-string"></a>

##### claims: `string`[]<a id="claims-string"></a>

##### seeds: `number`<a id="seeds-number"></a>

##### payload: `string`<a id="payload-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IdentificationWildcardResponse](./src/modules/models/identification/identification-wildcard-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/{version}/identification/wildcard` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pasby.signing.differentDevice`<a id="pasbysigningdifferentdevice"></a>

This endpoint allows you to initiate a signing action on a different device by sending a POST request to https://{base_url}/api/{version}/signing/different-device.

### Request Body<a id="request-body"></a>

- `nin` (string, required): The National Identification Number.
- `action` (string, required): The action to be performed.
- `webhook` (object, required): An object containing webhook details.
    - `host` (string, required): The host for the webhook.
    - `reference` (string, required): The reference for the webhook.
- `payload` (string, required): The payload for the signing action.
    

### Response<a id="response"></a>

- Status: 201
- Content-Type: application/json
    

#### Response Body<a id="response-body"></a>

``` json
{
  "status": "",
  "reason": "",
  "data": {
    "request": {
      "id": "",
      "consumer": "",
      "app": "",
      "mode": "",
      "action": "",
      "payload": "",
      "iat": 0,
      "exp": 0,
      "user": "",
      "ip": "",
      "useragent": "",
      "name": "",
      "signature": ""
    },
    "version": ""
  }
}

 ```

The response contains the status, reason, data, and version information related to the signing action request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const differentDeviceResponse = await pasby.signing.differentDevice({
  nin: "{{nin}}",
  action: "confirm",
  payload: "Confirm your purchase of access to xyz workspace access",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### nin: `string`<a id="nin-string"></a>

##### action: `string`<a id="action-string"></a>

##### webhook: [`SigningRequestWebhook`](./src/modules/models/signing/signing-request-webhook.ts)<a id="webhook-signingdifferentdevicerequestwebhookmodelssigning-different-device-request-webhookts"></a>

##### payload: `string`<a id="payload-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SigningDifferentDeviceResponse](./src/modules/models/signing/signing-different-device-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/{version}/signing/different-device` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `pasby.signing.sameDevice`<a id="pasbysigningsamedevice"></a>

This endpoint allows you to make an HTTP POST request to https://{base_url}/api/{version}/signing/same-device in order to perform a specific action. The request should include a payload with the following parameters in raw JSON format:

- "nin": (string) National Identification number of signee
    
- "action": (string) What kind of signing action
    
- "webhook": (object) An object containing the following properties:
    
    - "host": (string) Host url
        
    - "reference": (string) Something to help you identify our response

        
- "payload": (string) information to be presented during signing
    

Upon successful execution, the API will return a response with status code 201 and content type application/json. The response body will contain the following properties:

- "status": (string) The status of the response
- "reason": (string) The reason for the response
- "data": (object) An object containing the following properties:
    
    - "link": (string) You use this link to open up the pasby™ mobile app automatically
        
    - "request": (object) An object containing details about the request, including:
        
        - "id": (string) Reference ID
            
        - "consumer": (string) Organisation of app which created the flow
            
        - "app": (string) The app id requesting for a signing flow
            
        - "mode": (string) \[Would always be signature for this kind of flows\]
            
        - "action": (string) Action stipulated for this flow, during creation
            
        - "payload": (string)
            
        - "iat": (number) Time created
            
        - "exp": (number) When request expires
            
        - "user": (string) pasby™ user by nin
            
        - "ip": (string) where this flow was generated from
            
        - "useragent": (string)
            
        - "name": (string) app name
            
        - "signature": (string) This serves to verify that this response came from pasby™

            
- "version": (string) The version of the response

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sameDeviceResponse = await pasby.signing.sameDevice({
  nin: "{{nin}}",
  action: "confirm",
  payload: "Confirm your purchase for access to xyz workspace",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### nin: `string`<a id="nin-string"></a>

##### action: `string`<a id="action-string"></a>

##### webhook: [`SigningRequestWebhook`](./src/modules/models/signing/signing-request-webhook.ts)<a id="webhook-signingsamedevicerequestwebhookmodelssigning-same-device-request-webhookts"></a>

##### payload: `string`<a id="payload-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SigningSameDeviceResponse](./src/modules/models/signing/signing-same-device-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/{version}/signing/same-device` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package was curated by [Jackmay Confidence](https://www.linkedin.com/in/iamjackmay)
