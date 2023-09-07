import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface PokemonTypes {
  [pokemonName: string]: string[];
}

interface PokedexState {
  pokemons: PokemonTypes;
}

const initialState: PokedexState = {
  pokemons: {},
};

export const pokemonApi = createApi({
  reducerPath: "pokedexApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: ({ perPage, page }) =>
        `/pokemon?offset=${page * 10}&limit=${perPage}`,
    }),
    getAllPokemons: builder.query({
      query: () => `/pokemon?limit=100000&offset=0`,
    }),
    getPokemonByName: builder.query({
      query: (name) => `/pokemon/${name}`,
    }),
  }),
});

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemonTypes: (state, action) => {
      const { pokemonName, types } = action.payload;
      state.pokemons[pokemonName] = types;
    },
    setPokemonData: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemonTypes, setPokemonData } = pokemonSlice.actions;
export default pokemonSlice.reducer;

export const {
  useGetPokemonsQuery,
  useGetAllPokemonsQuery,
  useGetPokemonByNameQuery,
} = pokemonApi;
