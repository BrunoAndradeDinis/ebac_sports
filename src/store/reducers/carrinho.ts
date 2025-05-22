import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto, CarrinhoItens } from '../../types'

const initialState: CarrinhoItens = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarItem: (state, action: PayloadAction<Produto>) => {
      const itemProduto = action.payload

      if (state.itens.find((produto) => produto.id === itemProduto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(itemProduto)
      }
    }
  }
})

export const { adicionarItem } = carrinhoSlice.actions
export default carrinhoSlice.reducer
