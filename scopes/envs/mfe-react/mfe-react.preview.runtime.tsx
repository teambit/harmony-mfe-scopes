import React, { ReactNode } from 'react';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { GqlServerProvider } from '@teambit/base-ui.hooks.use-graphql-light';
import { ThemeContext } from '@harmony-mfe/design.theme-context';
import { SymphonyReactConfig, SymphonyReactAspect } from './mfe-react.aspect';

export class SymphonyReactPreview {
  constructor(private config: SymphonyReactConfig) {}

  /**
   * this is how other aspects can now access the configured port.
   */
  getSymphonyGatewayUrl() {
    return this.config.symphonyGatewayUrl;
  }

  static runtime: any = PreviewRuntime;

  static dependencies: any = [ReactAspect];

  static async provider([react]: [ReactPreview], config: SymphonyReactConfig) {
    const symphonyReactPreview = new SymphonyReactPreview(config);
    // register a new provider to wrap all compositions in the symphony-react environment.
    react.registerProvider([
      ({ children }: { children?: ReactNode }) => {
        // creating a new instance of the Bit graphQL provider with my URL.
        return (
          <GqlServerProvider value={config.symphonyGatewayUrl}>
            {children}
          </GqlServerProvider>
        );
      },
      ThemeContext,
    ]);

    return symphonyReactPreview;
  }
}

SymphonyReactAspect.addRuntime(SymphonyReactPreview);
