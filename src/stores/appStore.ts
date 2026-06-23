import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'user' | 'admin' | 'creator'
}

interface AppState {
  theme: 'light' | 'dark'
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  notifications: any[]
  favorites: string[]
  setTheme: (theme: 'light' | 'dark') => void
  setUser: (user: User | null) => void
  setIsAuthenticated: (value: boolean) => void
  setIsLoading: (value: boolean) => void
  addNotification: (notification: any) => void
  removeNotification: (id: string) => void
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
  initializeApp: () => void
}

export const useStore = create<AppState>(
  persist(
    (set) => ({
      theme: 'light',
      user: null,
      isAuthenticated: false,
      isLoading: false,
      notifications: [],
      favorites: [],

      setTheme: (theme) => set({ theme }),

      setUser: (user) => set({ user }),

      setIsAuthenticated: (value) => set({ isAuthenticated: value }),

      setIsLoading: (value) => set({ isLoading: value }),

      addNotification: (notification) =>
        set((state) => ({
          notifications: [...state.notifications, notification],
        })),

      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),

      addFavorite: (id) =>
        set((state) => ({
          favorites: [...new Set([...state.favorites, id])],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== id),
        })),

      initializeApp: () => {
        // Initialize app logic here
        const savedTheme = localStorage.getItem('theme') || 'dark'
        set({ theme: (savedTheme as 'light' | 'dark') })
      },
    }),
    {
      name: 'degraph-ux-store',
      partialize: (state) => ({
        theme: state.theme,
        favorites: state.favorites,
      }),
    }
  )
)