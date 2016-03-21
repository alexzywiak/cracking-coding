#!/usr/bin/env python -tt
import unittest
from permute_str import permute_str

class UniqueTestCase(unittest.TestCase):

  def test_are_permutations(self):
    self.assertTrue(permute_str('abc', 'cba'))
    self.assertTrue(permute_str('aaa', 'aaa'))
    self.assertTrue(permute_str('abdc', 'dcba'))

  def test_are_not_permutations(self):
    self.assertFalse(permute_str('abc', 'ccba'))
    self.assertFalse(permute_str('abdc', 'ccba'))
    self.assertFalse(permute_str('a', 'aaaa'))

if __name__ == '__main__':
    unittest.main()
