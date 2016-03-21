#!/usr/bin/env python -tt

def unique_str(string):
  char_dict = {}

  for ch in string:
    if ch in char_dict:
      return False
    else:
      char_dict[ch] = True

  return True


def main():
  return

if __name__ == "__main__":
  main()