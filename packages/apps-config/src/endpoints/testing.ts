// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { chainsSelendraLogoTestnetPNG } from '../ui/logos/chains/index.js';

// The available endpoints that will show in the dropdown.
export const testChains: Omit<EndpointOption, 'teleport'>[] = [
  {
    genesisHash: '0xbb2eeb5b516eb8354e526b9d929307a5a0a2d853bc56f827cc4e3485ff32f04b',
    info: 'selendra-testnet',
    providers: {
      'Selendra Testnet': 'wss://rpc-testnet.selendra.org'
    },
    text: 'Selendra Testnet',
    ui: {
      color: '#014766',
      logo: chainsSelendraLogoTestnetPNG
    }
  }
];
