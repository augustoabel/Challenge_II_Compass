// ItemProvider.tsx
import React, { createContext, useState, ReactNode } from 'react';

export interface Item {
  id: number;
  title: string;
  poster_path: string;
  name: string;
  release_date: string;
  first_air_date: string;
  overview: string;
  backdrop_path: string;
  genre_ids: [];
}

export interface ItemContextType {
  selectedItem: Item | null;
  setSelectedItem: (item: Item) => void;
  idSeries: number | null;
  setIdSeries: (item: number) => void;
  idMovies: number | null;
  setIdMovies: (item: number) => void;
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
  const [idSeries, setIdSeries] = useState<number | null>(null);
  const [idMovies, setIdMovies] = useState<number | null>(null);
  const [favoriteMovie, setFavoriteMovie] = useState<string[]>([]);
  const [favoriteSerie, setFavoriteSerie] = useState<string[]>([]);

  return (
    <ItemContext.Provider
      value={{
        selectedItem,
        setSelectedItem,
        idSeries,
        setIdSeries,
        idMovies,
        setIdMovies,
        favoriteMovie,
        setFavoriteMovie,
        favoriteSerie,
        setFavoriteSerie,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext };
