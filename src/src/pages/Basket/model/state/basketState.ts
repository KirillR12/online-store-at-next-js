import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface BasketSchema {
    id: string,
    name: string,
    status: string,
    price: number,
    speed: number,
    battery: number,
    power: number,
    times: number,
    image: string
}

type Store = {
    basket: BasketSchema[]
    addBasketItem: (item: BasketSchema) => void
  }

export const useBasket = create<Store>()(devtools((set) => ({
    basket: [],
    loading: false,
    error: null,
    addBasketItem: (item) => set((state) => ({ basket: [...state.basket, item] })),

})))
