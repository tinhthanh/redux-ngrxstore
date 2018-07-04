import { Blockchain } from './../models/blockchain';

export interface AppState {
  readonly blockchain: Blockchain[];
}