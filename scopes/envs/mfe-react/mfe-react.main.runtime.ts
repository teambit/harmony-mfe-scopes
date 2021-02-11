import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { SymphonyReactAspect } from './mfe-react.aspect';

export class SymphonyReactMain {
  constructor(private react: ReactMain) {}

  /**
   * override the tsconfig.
   */
  overrideTsConfig(tsconfig: any) {
    this.react.overrideTsConfig(tsconfig);
  }

  static runtime = MainRuntime;

  static dependencies = [ReactAspect, EnvsAspect];

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const symphonyReactEnv = envs.compose(react.reactEnv, [
      react.overrideDependencies({
        dependencies: {
          '@teambit/base-ui.hooks.use-graphql-light': {
            version: '0.0.4',
            resolveFromEnv: true,
          },
        },
      }),
    ]);
    envs.registerEnv(symphonyReactEnv);
    return new SymphonyReactMain(react);
  }
}

SymphonyReactAspect.addRuntime(SymphonyReactMain);
