// Context interfaces

export interface CharacterProps {
  name: string;
  image: string;
  species: string;
  status: string;
  url: string;
  origin: { name: string };
  location: { name: string; url: string };
  id: number;
}

export type FavoritesContextProps = {
  state: FavoritesStateProps;
  dispatch?: React.Dispatch<any>;
  toggleFavorites: (payload:CharacterProps)=>void;
};

export interface FavoritesStateProps {
  favorites: CharacterProps[];
}

export interface FavoritesReducerProps {
  state: FavoritesStateProps;
  action: {
    type: string;
    payload: CharacterProps;
  };
}

export interface FavoritesStatePropsValue {
  children: JSX.Element | JSX.Element[];
}

export interface ThemeProps {
  theme: string;
  toggleTheme: () => void
}