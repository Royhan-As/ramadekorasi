import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Undangan {
  id: string
  title: string
  description: string
  date: string
}

interface UndanganStore {
  undangan: Undangan[]
  addUndangan: (newUndangan: Omit<Undangan, "id">) => void
}

export const useUndanganStore = create<UndanganStore>()(
  persist(
    (set) => ({
      undangan: [],
      addUndangan: (newUndangan) =>
        set((state) => ({
          undangan: [...state.undangan, { ...newUndangan, id: Date.now().toString() }],
        })),
    }),
    {
      name: "undangan-storage",
    },
  ),
)

