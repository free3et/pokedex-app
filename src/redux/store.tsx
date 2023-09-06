import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./services/pokemonSlice";
import { pokemonApi } from "./services/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
