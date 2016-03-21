#!/usr/bin/env python -tt
def matrix_rotation(m):
  n = len(m)
  layer = 0
  
  for layer in range((n+1)/2):

    first = layer
    last = n - 1 - layer

    for num in range(first, last):

      offset = last - i

      top = m[first][i]
      m[first][i] = m[offset][first]
      m[offset][first] = m[i][last]
      m[i][last] = top

def matrix_rotation_copy(matrix):

  n = len(matrix)
  rotated = [[None for i in range(n)] for i in range(n)]

  for row in range(n):
    for col in range(n):
      rotated[col][n - 1 - row] = matrix[row][col]

  return rotated


def main():
  return

if __name__ == "__main__":
  main()