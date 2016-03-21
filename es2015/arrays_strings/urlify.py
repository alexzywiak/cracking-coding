#!/usr/bin/env python -tt

def urlify(s):
  for i in range(len(s)):
    if s[i] == ' ':
      s = s[:i] + '%20' + s[i + 1:]

  return s
  
if __name__ == "__main__":
  main()