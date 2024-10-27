import { create } from 'zustand'

interface BasketState {
    basket: number
    increase: () => void
  }

export const useBasketStore = create<BasketState>()((set) => ({
  basket: 0,
  increase: () => set((state) => ({ basket: state.basket + 1 })),
  removeAllBaskets: () => set({ basket: 0 }),
}))

