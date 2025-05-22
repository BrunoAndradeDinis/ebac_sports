import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FavItens, Produto } from '../../types'

const initialState: FavItens = {
  favs: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFav: (state, action: PayloadAction<Produto>) => {
      const newFav = action.payload

      if (state.favs.find((fav) => fav.id === newFav.id)) {
        const favoritosSemProduto = state.favs.filter((p) => p.id !== newFav.id)
        state.favs = favoritosSemProduto
      } else {
        state.favs.push(newFav)
      }
    }
  }
})

export const { adicionarFav } = favoritosSlice.actions
export default favoritosSlice.reducer
