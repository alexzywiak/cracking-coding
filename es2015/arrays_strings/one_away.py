#!/usr/bin/env python -tt

def one_away(a, b):
  
  # Same String
  if(a == b):
    return True

  # Length is off by more than one
  if(abs(len(a) - len(b)) > 1):
    return False

  l = 0
  s = 0
  # Assign long and short strings
  long_str = a if len(a) > len(b) else b
  short_str = a if len(a) <= len(b) else b
  
  diff = False

  while l < len(long_str) and s < len(short_str):
    if(long_str[l] != short_str[s]):
      if(diff):
        return False
      else:
        diff = True
        if(len(long_str) != len(short_str)):
          s -= 1
    s+=1
    l+=1
  return True

def main():
  return True
if __name__ == "__main__":
  main()