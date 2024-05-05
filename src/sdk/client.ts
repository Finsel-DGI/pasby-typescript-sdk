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
}
