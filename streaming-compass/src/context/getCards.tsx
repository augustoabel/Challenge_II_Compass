import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Item {
  id: number;
  title: string;
  poster_path: string;
  name: string;
  release_date: string;
  first_air_date: string;
  overview: string;
  backdrop_path: string;
  genre_ids: [];
  
  // Adicione outros campos necessários
}

interface ItemContextType {
  selectedItem: Item | null;
  setSelectedItem: (item: Item) => void;
  idSeries: Item | null;
  setIdSeries: (item: Item) => void;
  favoriteMovie: string[];
  setFavoriteMovie: (items: string[]) => void;
  favoriteSerie: string[];
  setFavoriteSerie: (items: string[]) => void;
}

interface ItemProviderProps {
  children: ReactNode;
}
const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider: React.FC<ItemProviderProps> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [idSeries, setIdSeries] = useState<Item | null>(null);
  const [favoriteMovie, setFavoriteMovie] = useState<string[]>([]);
  const [favoriteSerie, setFavoriteSerie] = useState<string[]>([]);

  return (
    <ItemContext.Provider
      value={{ selectedItem, setSelectedItem, idSeries, setIdSeries, favoriteMovie, setFavoriteMovie, favoriteSerie, setFavoriteSerie }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItem = (): ItemContextType => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItem must be used within an ItemProvider');
  }
  return context;
};
