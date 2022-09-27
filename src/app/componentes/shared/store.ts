export type Product = {
  id: string;
  category: string;
  secao: string;
  label: string;
  price: number;
  img: string;
};

export const EMPTY_PRODUCT: Product = {
  id: '',
  category: '',
  secao: '',
  label: '',
  price: 0,
  img: '',
};

export const BD_VIRTUAL_STORE: Product[] = [
  {
    id: '1',
    label: 'Stars War 1',
    category: 'Stars War',
    secao: 'personagens',
    price: 10.5,
    img: './assets/img/star-wars/copo-clone.png',
  },
  {
    id: '2',
    label: 'Stars War 2',
    category: 'Stars War',
    secao: 'personagens',
    price: 8.5,
    img: './assets/img/star-wars/dt.png',
  },
  {
    id: '3',
    label: 'Stars War 3',
    category: 'Stars War',
    secao: 'personagens',
    price: 7.5,
    img: './assets/img/star-wars/yoda.png',
  },
  {
    id: '4',
    label: 'Stars War 4',
    category: 'Stars War',
    secao: 'personagens',
    price: 55.99,
    img: './assets/img/star-wars/soldado-sw.png',
  },
  {
    id: '5',
    label: 'Stars War 5',
    category: 'Stars War',
    secao: 'personagens',
    price: 105.5,
    img: './assets/img/star-wars/assasins.png',
  },
  {
    id: '6',
    label: 'Stars War 6',
    category: 'Stars War',
    secao: 'personagens',
    price: 10,
    img: './assets/img/star-wars/yodinha.png',
  },

  {
    id: '7',
    label: 'Consoles 1',
    category: 'Consoles',
    secao: 'eletronicos',
    price: 10.5,
    img: './assets/img/consoles/controle-xbox.png',
  },
  {
    id: '8',
    label: 'Consoles 2',
    category: 'Consoles',
    secao: 'eletronicos',
    price: 8.5,
    img: './assets/img/consoles/ps5.png',
  },
  {
    id: '9',
    label: 'Consoles 3',
    category: 'Consoles',
    secao: 'eletronicos',
    price: 7.5,
    img: './assets/img/consoles/nintendo.png',
  },
  {
    id: '10',
    label: 'Consoles 4',
    category: 'Consoles',
    secao: 'eletronicos',
    price: 7.5,
    img: './assets/img/consoles/switch.png',
  },
  {
    id: '11',
    label: 'Consoles 5',
    category: 'Consoles',
    secao: 'eletronicos',
    price: 105.5,
    img: './assets/img/consoles/x-box.png',
  },
  {
    id: '12',
    label: 'Consoles 6',
    category: 'Consoles',
    secao: 'eletronicos',
    price: 10,
    img: './assets/img/consoles/game-pt.png',
  },
  {
    id: '13',
    label: 'Diversos 1',
    category: 'Diversos',
    secao: 'diversos',
    price: 10.5,
    img: './assets/img/diversos/wp.png',
  },
  {
    id: '14',
    label: 'Diversos 2',
    category: 'Diversos',
    secao: 'personagens',
    price: 8.5,
    img: './assets/img/diversos/player.png',
  },
  {
    id: '15',
    label: 'Diversos 3',
    category: 'Diversos',
    secao: 'personagens',
    price: 7.5,
    img: './assets/img/diversos/sonic.png',
  },
  {
    id: '16',
    label: 'Diversos 4',
    category: 'Diversos',
    secao: 'eletronicos',
    price: 55.99,
    img: './assets/img/diversos/radio-relogio.png',
  },
  {
    id: '17',
    label: 'Diversos 5',
    category: 'Diversos',
    secao: 'eletronicos',
    price: 105.5,
    img: './assets/img/diversos/vr.png',
  },
  {
    id: '18',
    label: 'Diversos 6',
    category: 'Diversos',
    secao: 'personagens',
    price: 10,
    img: './assets/img/diversos/pokemon.png',
  },
];

// export type itensStore = Array<bdVirtualStore>;
export function findById(id: string): Product | undefined {
  return BD_VIRTUAL_STORE.find((p) => p.id === id);
}
