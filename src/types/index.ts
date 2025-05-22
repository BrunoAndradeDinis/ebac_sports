export type CarrinhoItens = {
  itens: Produto[]
}

export type FavItens = {
  favs: Produto[]
}

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export type PropsHeader = {
  itensNoCarrinho: Produto[]
  favoritos: Produto[]
}

export type PropsProduto = {
  produto: Produto
  aoComprar: (produto: Produto) => void
  favoritar: (produto: Produto) => void
  estaNosFavoritos: boolean
}

export type PropsProdutos = {
  produtos: Produto[]
  favoritos: Produto[]
  adicionarAoCarrinho: (produto: Produto) => void
  favoritar: (produto: Produto) => void
}
