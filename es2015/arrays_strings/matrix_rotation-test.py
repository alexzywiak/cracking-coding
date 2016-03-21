#!/usr/bin/env python -tt
import unittest
from matrix_rotation import matrix_rotation

class UniqueTestCase(unittest.TestCase):

  def test_case(self):
    self.assertEqual(matrix_rotation([[0,1,2],[3,4,5],[6,7,8]]), [[6,3,0],[7,4,1],[8,5,2]])

if __name__ == '__main__':
    unittest.main()