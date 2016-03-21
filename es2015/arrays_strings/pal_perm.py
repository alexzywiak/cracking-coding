#!/usr/bin/env python -tt

def pal_perm(string):
  ch_dict = {}

  for ch in string:
    if ch != ' ':
      if ch in ch_dict:
        ch_dict[ch] += 1
      else:
        ch_dict[ch] = 1

  def one_odd(odd_count, key):
    if(odd_count <= 1):
      if(ch_dict[key] % 2 != 0):
        odd_count += 1
    return odd_count

  return reduce(one_odd, ch_dict, 0) <= 1

def main():
  return 

if __name__ == "__main__":
  main()