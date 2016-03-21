#!/usr/bin/env python -tt
import unittest
from strings_one import unique_str

class UniqueTestCase(unittest.TestCase):

  def test_unique_string(self):
    self.assertTrue(unique_str('abcd'))

  def test_duplicate_string(self):
    self.assertFalse(unique_str('abbcd'))

if __name__ == '__main__':
    unittest.main()