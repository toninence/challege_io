import { useReducer, createContext } from "react";

export const FavoritesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.concat(payload),
      };
      break;
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((ch) => {
          if (ch.id !== payload.id) {
            return ch;
          }
        }),
      };
      break;
    default:
      return state;
      break;
  }
};
export const FavoritesContext = createContext();

export const FavoritesState = (props) => {
  const initialState = {
    favorites: [],
  };

  const [state, dispatch] = useReducer(FavoritesReducer, initialState);
  const toggleFavorites = (payload) => {
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
        toggleFavorites,
      }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};
