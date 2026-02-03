import { useEffect } from 'react';

export default function useTitulo(titulo) {
  useEffect(() => {
    document.title = titulo;
  }, [titulo]);
}
