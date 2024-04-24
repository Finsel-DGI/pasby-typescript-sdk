import { Configuration, ConfigurationParameters } from "./configuration";
import { PasbyCustom } from "./client-custom";
import { DocsApi, FlowsApi, HealthApi, IdentificationApi, SigningApi } from "./api";

export class Pasby extends PasbyCustom {
  readonly docs: DocsApi;
  readonly flows: FlowsApi;
  private configuration: Configuration;
  readonly health: HealthApi;
  readonly identification: IdentificationApi;
  readonly signing: SigningApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    this.configuration = new Configuration(configurationParameters);
    this.docs = new DocsApi(this.configuration);
    this.flows = new FlowsApi(this.configuration);
    this.health = new HealthApi(this.configuration);
    this.identification = new IdentificationApi(this.configuration);
    this.signing = new SigningApi(this.configuration);
  }

  /**
   * Authorize your client.
   * @param {string} sub This can be found in your consumer service.json file with the identifier clientid.
   * @param {string} app This can be found in Console and your app's generated service.json file
   * @returns {Promise<void>} attaches your auth token
   */
  public async authorize(sub:string, app: string): Promise<void> {
    await this.flows.authorize({
      sub: sub,
      app: app,
    }).then((value) => {
      this.configuration.accessToken = value.data.data.token;
    });
  }

  /**
   * Update your authorization token. Call this only if you made calls to endpoints that return an authorization token outside the scope of [flow.authorize]
   * Example: identification.differentDevice | identification.sameDevice
   * @param {string} token jwt token received from pasby 
   */
  public updateJWTToken(token: string): void{
    this.configuration.accessToken = token;
  }
  
}
