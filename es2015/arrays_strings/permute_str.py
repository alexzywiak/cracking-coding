#!/usr/bin/env python -tt

def add_to_dict(ch, ch_dict):
  if ch in ch_dict:
    ch_dict[ch] += 1
  else:
    ch_dict[ch] = 1

def permute_str(a, b):
  dict_a = {}

  if not len(a) == len(b):
    return False
  else:
    for i in range(len(a)):
      add_to_dict(a[i], dict_a)

    for ch in b:
      if not ch in dict_a:
        return False
      else:
        dict_a[ch] -= 1
        if dict_a[ch] < 0:
          return False

    return True

  