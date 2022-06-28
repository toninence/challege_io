import { useReducer, createContext } from "react";
import { FavoritesStateProps, CharacterProps, FavoritesContextProps, FavoritesStatePropsValue } from '../../interfaces/interfaces';

interface ActionProps {
  type: string;
  payload: CharacterProps;
}
export const FavoritesReducer = (state:FavoritesStateProps, action:ActionProps) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((ch) => {
          if (ch.id !== payload.id) {
            return ch;
          }
        }),
      };
    default:
      return state;
  }
};
const initialState:FavoritesStateProps = {
  favorites: []
};
export const FavoritesContext = createContext<FavoritesContextProps>({
  state: initialState,
  dispatch: () => null,
  toggleFavorites: (payload:CharacterProps) => {}
});;


export const FavoritesState = ({children}:FavoritesStatePropsValue) => {
  

  const [state, dispatch] = useReducer(FavoritesReducer, initialState);
  const toggleFavorites = (payload:CharacterProps) => {
    let remove=false;
    state.favorites.forEach(fv=>{
      if(fv.id === payload.id){
        remove=true
      }
    })
    if (remove) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: payload,
      });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: payload,
      });
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        state,
        toggleFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
