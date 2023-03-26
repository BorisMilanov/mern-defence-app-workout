import { MoviesContext } from '../context/MoviesContext'
import { useContext } from 'react'

export const useWorkoutsContext = () => {
  const context = useContext(MoviesContext)

  if (!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}