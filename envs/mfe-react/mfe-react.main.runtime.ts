import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { SymphonyReactAspect } from './mfe-react.aspect';

export class SymphonyReactMain {
  static runtime = MainRuntime;

  static dependencies = [ReactAspect, EnvsAspect];

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const symphonyReactEnv = envs.compose(react.reactEnv, []);
    envs.registerEnv(symphonyReactEnv);
    return new SymphonyReactMain();
  }
}

SymphonyReactAspect.addRuntime(SymphonyReactMain);
