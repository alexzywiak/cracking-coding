#!/usr/bin/env python -tt
import unittest
from pal_perm import pal_perm

class UniqueTestCase(unittest.TestCase):

  def test_case(self):
    self.assertTrue(pal_perm('taco cat'))
    self.assertTrue(pal_perm('ababc'))
    self.assertFalse(pal_perm('aaab'))
    self.assertFalse(pal_perm('aaaabbbbcccccd'))

if __name__ == '__main__':
    unittest.main()