import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextProps {
  darkMode: boolean;
  toggleDarkMode: (x?: number, y?: number) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const applyTheme = (dark: boolean) => {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    applyTheme(darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = (x?: number, y?: number) => {
    const next = !darkMode;

    // Store click origin as CSS vars so the keyframe can reference them
    const root = document.documentElement;
    root.style.setProperty('--ripple-x', x != null ? `${x}px` : 'calc(100% - 110px)');
    root.style.setProperty('--ripple-y', y != null ? `${y}px` : '44px');

    // ── View Transitions API (Chrome/Edge 111+) ──────────────────────────────
    // This is the "true simultaneous" approach: the API snapshots the old page,
    // switches theme underneath, then reveals the new theme via an expanding
    // circle — colours change exactly at the ripple's leading edge.
    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        applyTheme(next);
        setDarkMode(next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
      });
      return;
    }

    // ── Fallback: manual expanding ripple overlay ────────────────────────────
    const DARK_BG  = '#0d1117';
    const LIGHT_BG = '#f6f8fa';
    const ox = x != null ? `${x}px` : 'calc(100% - 110px)';
    const oy = y != null ? `${y}px` : '44px';

    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed; inset: 0; z-index: 99998; pointer-events: none;
      background: ${next ? DARK_BG : LIGHT_BG};
      clip-path: circle(0px at ${ox} ${oy});
      animation: theme-ripple-expand 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
    `;
    document.body.appendChild(el);
    setTimeout(() => {
      applyTheme(next);
      setDarkMode(next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
    }, 280);
    setTimeout(() => {
      el.style.transition = 'opacity 0.25s ease';
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 270);
    }, 520);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
