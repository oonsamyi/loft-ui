import { Box, Chip } from '@material-ui/core'
import { useCallback } from 'react'
import { ISquare } from '../types'
import { Filter } from './Filter'

interface IProps {
  squares: ISquare[]
  onChange(squares: ISquare[]): void
}

const SQUARES: ISquare[] = [
  { to: 50 },
  { from: 50, to: 100 },
  { from: 100, to: 150 },
  { from: 150, to: 200 },
  { from: 200 },
]

export const SquareFilter = ({ squares, onChange }: IProps) => {
  const addSquare = useCallback(
    (square) => {
      const newSquares = [...squares, square]

      onChange(newSquares)
    },
    [squares, onChange]
  )

  const removeSquare = useCallback(
    (square) => {
      const newSquares = squares.filter(
        (selectedSquare) => selectedSquare !== square
      )

      onChange(newSquares)
    },
    [squares, onChange]
  )

  const handleClickSquare = (square: ISquare) => () => {
    if (squares.includes(square)) removeSquare(square)
    else addSquare(square)
  }

  return (
    <Filter label="Площадь">
      {SQUARES.map((square) => {
        const label = formatSquare(square)
        const isSelected = squares.includes(square)

        return (
          <Box key={label} component="span" mr="4px">
            <Chip
              label={label}
              color={isSelected ? 'primary' : 'default'}
              onClick={handleClickSquare(square)}
            />
          </Box>
        )
      })}
    </Filter>
  )
}

function formatSquare(square: ISquare) {
  if (square.to && !square.from) {
    return `до ${square.to} м²`
  }

  if (square.from && !square.to) {
    return `от ${square.from} м²`
  }

  return `${square.from}-${square.to} м²`
}
