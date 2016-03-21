#!/usr/bin/env python -tt
import unittest
from urlify import urlify

class UniqueTestCase(unittest.TestCase):

  def test_case(self):
    self.assertTrue(urlify('a bc') == 'a%20bc')

if __name__ == '__main__':
    unittest.main()