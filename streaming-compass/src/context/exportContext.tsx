import { useContext } from 'react';
import { ItemContext, ItemContextType } from './getCards';

export const useItem = (): ItemContextType => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItem must be used within an ItemProvider');
  }
  return context;
};
