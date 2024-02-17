import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { ITEMS_LENGTH_LOCAL_STORAGE } from '@/src/shared/constant/localStorage'

type idType = string

type Store = {
    itemsInCart: idType[]
    addBasketItem: (id: idType) => void
    deleteItemsAll: () => void,
    deleteItem: (id: idType) => void
  }

export const useItems = create<Store>()(persist(devtools((set) => ({
    itemsInCart: [],
    addBasketItem: (id) => set((state) => ({ itemsInCart: [...state.itemsInCart, id] })),
    deleteItemsAll: () => set(() => ({ itemsInCart: [] })),
    deleteItem: (id) => set((state) => ({ itemsInCart: state.itemsInCart.filter((el) => el !== id) })),
})), { name: ITEMS_LENGTH_LOCAL_STORAGE, version: 1 }))
