#!/usr/bin/env python -tt
import unittest
from condense_string import condense_string

class UniqueTestCase(unittest.TestCase):

  def test_case(self):
    self.assertEqual(condense_string('aaabbbc'), 'a3b3c1')
    self.assertEqual(condense_string('abc'), 'abc')
    self.assertEqual(condense_string('abbbcccc'), 'a1b3c4')

if __name__ == '__main__':
    unittest.main()