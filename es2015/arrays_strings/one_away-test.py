#!/usr/bin/env python -tt
import unittest
from one_away import one_away

class UniqueTestCase(unittest.TestCase):

  def test_case(self):
    self.assertTrue(one_away('pale', 'ple'))
    self.assertTrue(one_away('pales', 'pale'))
    self.assertTrue(one_away('pale', 'bale'))
    self.assertFalse(one_away('pale', 'bake'))

if __name__ == '__main__':
    unittest.main()