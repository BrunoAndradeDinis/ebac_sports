import { store } from '../store'

export type CarrinhoItens = {
  itens: Produto[]
}

export type FavItens = {
  favs: Produto[]
}

export type ProdutosType = {
  produto: Produto[]
}

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export type PropsProduto = {
  produto: Produto
  estaNosFavoritos: boolean
}

export type RootReducer = ReturnType<typeof store.getState>
