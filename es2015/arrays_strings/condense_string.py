#!/usr/bin/env python -tt

def condense_string(string):
  count = 1
  prev = None
  out = []

  for ch in string:
    if(not prev):
      prev = ch
    else:
      if(prev == ch):
        count += 1
      else:
        out.append(prev)
        out.append(str(count))
        prev = ch
        count = 1

  out.append(prev)
  out.append(str(count))

  out_str = "".join(out) 

  return out_str if len(out_str) < len(string) else string

def main():
  return True
if __name__ == "__main__":
  main()