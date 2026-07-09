declare module '*.css';

interface TurnstileRenderOptions {
  sitekey: string;
  callback?: (token: string) => void;
  'error-callback'?: () => void;
  'expired-callback'?: () => void;
  theme?: 'light' | 'dark' | 'auto';
}

interface Window {
  turnstile?: {
    render: (el: HTMLElement, opts: TurnstileRenderOptions) => string;
    reset: (id?: string) => void;
    remove: (id?: string) => void;
  };
}
