## Node.js pasby™ library<a id="pasby-node.js-library"></a>
---
[![npm](https://img.shields.io/badge/npm-v0.0.3-blue)](https://www.npmjs.com/package/pasby-typescript-sdk/v/1.0.0)


The pasby™ node library provides convenient access to the pasby API from applications written in Typescript/Javascript. 

Our integrations supercharge your digital services and drastically improves your user experience flows.


## Requirements<a id="requirement"></a>
---

Node 10 or higher.


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

---
## Usage<a id="usage"></a>
---

The package needs to be configured with your account's secret key, which is retrievable from the developer [Console](https://console.pasby.africa). Provide it with your organisations api key.


```typescript
import { Pasby } from "@finsel-dgi/pasby";

const pasby = new Pasby({
  apikeyAuth: 'bk-test_',
  appSecretKey: 'snb_',
  basePath: "https://s.pasby.africa"
});

await pasby.flows.ping('req_')
.then((value) => {
  console.log(`${JSON.stringify(value)}`);
});

```

or using production access:


```typescript
import { Pasby } from "@finsel-dgi/pasby";

const pasby = new Pasby({
  apikeyAuth: 'bk-live_',
  appSecretKey: 'prd_',
  basePath: "https://l.pasby.africa"
});

await pasby.flows.ping('req_')
.then((value) => {
  console.log(`${JSON.stringify(value)}`);
});

```

## Documentation<a id="documentation"></a>
---
See our [REST API docs](https://docs.pasby.africa)

See integrations [guide documentation](https://dev.pasby.africa) covering how to use the library and pasby in general.

Start integrating today at no costs and only begin to pay once you cross 100 requests monthly. We look forward to see what you build with on pasby™. 

Learn how to integrate pasby™ through this [demo application](https://demo.pasby.africa) with open source code. 