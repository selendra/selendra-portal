// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { chainsSelendraLogoPNG } from '../ui/logos/chains/index.js';

// The available endpoints that will show in the dropdown.
export const prodChains: Omit<EndpointOption, 'teleport'>[] = [
  {
    genesisHash: '0x536274806b33f992898c98f2ad4fe6e190057900fcd8505083e3b765790b4bed',
    info: 'selendra',
    providers: {
      'Selendra Mainnet': 'wss://rpc.selendra.org',
      'Selendra by StadiumX': 'wss://rpcx.selendra.org'
    },
    text: 'Selendra',
    ui: {
      color: '#0db0a4',
      logo: chainsSelendraLogoPNG
    }
  }
];
