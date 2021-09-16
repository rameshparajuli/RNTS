import { NativeModules } from 'react-native';

export enum IEnv {
  dev = 'dev',
  prod = 'prod',
  staging = 'staging',
}

function selectEnv(envs: any) {
  return envs[NativeModules.RNConfig.env] || envs.default;
}

export const baseUrl = selectEnv({
  dev: '',
  staging: '',
  prod: '',
});
