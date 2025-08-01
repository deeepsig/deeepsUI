// contexts/CanvasContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';

interface CanvasContextType {
  isCanvasExpanded: boolean;
  expandCanvas: () => void;
  collapseCanvas: () => void;
}

const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

export function CanvasProvider({ children }: { children: ReactNode }) {
  const [isCanvasExpanded, setIsCanvasExpanded] = useState(false);

  const expandCanvas = () => setIsCanvasExpanded(true);
  const collapseCanvas = () => setIsCanvasExpanded(false);

  return (
    <CanvasContext.Provider
      value={{ isCanvasExpanded, expandCanvas, collapseCanvas }}
    >
      {children}
    </CanvasContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCanvas() {
  const context = useContext(CanvasContext);
  if (context === undefined) {
    throw new Error('useCanvas must be used within a CanvasProvider');
  }
  return context;
}
