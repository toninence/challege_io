import { useReducer, createContext } from "react";

export const CharactersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CHARACTERS":
      return {
        ...state,
        characters: state.characters.concat(payload),
      };
      break;
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        characters: state.characters.map((ch) => {
          if (ch.id === payload.id) {
            ch.favorite = !ch.favorite;
          }
        }),
      };
      break;
    default:
      return state;
      break;
  }
};
export const CharactersContext = createContext();

export const CharactersState = (props) => {
  const initialState = {
    characters: [
      {
        character,
        favorite: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(CharactersReducer, initialState);
  const toggleCharacters = (payload) => {
    let data;
    if (state.characters.includes(payload)) {
      dispatch({
        type: "REMOVE_CHARACTER",
        payload: payload,
      });
    } else {
      dispatch({
        type: "ADD_CHARACTERS",
        payload: payload,
      });
    }
  };

  return (
    <CharactersContext.Provider
      value={{
        state,
        toggleCharacters,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
