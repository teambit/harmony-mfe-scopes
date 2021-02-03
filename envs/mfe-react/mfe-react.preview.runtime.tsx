import { ReactNode } from 'react';
import { GraphqlUI, GraphqlAspect } from '@teambit/graphql';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { SymphonyReactConfig, SymphonyReactAspect } from './mfe-react.aspect';
import { Theme } from '@teambit/base-ui.theme.theme-provider';

export class SymphonyReactPreview {
  constructor(private config: SymphonyReactConfig) {}

  /**
   * this is how other aspects can now access the configured port.
   */
  getSymphonyGatewayUrl() {
    return this.config.symphonyGatewayUrl;
  }

  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect, GraphqlAspect];

  static async provider(
    [react, graphql]: [ReactPreview, GraphqlUI],
    config: SymphonyReactConfig,
    slots,
    harmony
  ) {
    const symphonyReactPreview = new SymphonyReactPreview(config);
    // register a new provider to wrap all compositions in the symphony-react environment.
    react.registerProvider([
      ({ children }: { children?: ReactNode }) => {
        const client = graphql.createClient(config.symphonyGatewayUrl);
        // creating a new instance of the Bit graphQL provider with my URL.
        return graphql.getProvider({ client, children });
      },
    ]);

    return symphonyReactPreview;
  }
}

SymphonyReactAspect.addRuntime(SymphonyReactPreview);
