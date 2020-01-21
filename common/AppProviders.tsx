import React from 'react';

import { NotificationsProvider, ToastProvider, ErrorProvider } from 'v2/features';
import {
  AccountProvider,
  AddressBookProvider,
  AssetProvider,
  NetworkProvider,
  SettingsProvider,
  ContractProvider,
  DataProvider
} from 'v2/services/Store';
import { DevToolsProvider, RatesProvider, StoreProvider } from 'v2/services';
import { WalletConnectProvider } from 'v2/services/WalletService';

function AppProviders({ children }: { children: JSX.Element[] | JSX.Element | null }) {
  return (
    <DevToolsProvider>
      <ErrorProvider>
        <DataProvider>
          <SettingsProvider>
            <AddressBookProvider>
              <AccountProvider>
                <NotificationsProvider>
                  <ToastProvider>
                    <NetworkProvider>
                      <ContractProvider>
                        <AssetProvider>
                          {/* StoreProvider relies on the others Providers */}
                          <StoreProvider>
                            {/* RatesProvider relies on the Store */}
                            <RatesProvider>
                              <WalletConnectProvider>{children}</WalletConnectProvider>
                            </RatesProvider>
                          </StoreProvider>
                        </AssetProvider>
                      </ContractProvider>
                    </NetworkProvider>
                  </ToastProvider>
                </NotificationsProvider>
              </AccountProvider>
            </AddressBookProvider>
          </SettingsProvider>
        </DataProvider>
      </ErrorProvider>
    </DevToolsProvider>
  );
}

export default AppProviders;
