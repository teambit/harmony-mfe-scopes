import { Aspect } from '@teambit/harmony';

export type SymphonyReactConfig = {
  /**
   * host to the symphony gateway.
   */
  symphonyGatewayUrl: string;
};

export const SymphonyReactAspect = Aspect.create({
  id: 'mfe.envs/mfe-react',
  defaultConfig: {
    symphonyGatewayUrl: 'symphony.bit.dev',
  },
});
