import { createContextId } from '@khulnasoft.com/qwik';
import type { ThemePreference } from './components/theme-toggle/theme-toggle';

export interface SiteStore {
  headerMenuOpen: boolean;
  sideMenuOpen: boolean;
  theme: ThemePreference | 'auto';
}

export const GlobalStore = createContextId<SiteStore>('site-store');
