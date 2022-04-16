n,m = map(int, input().split()) # 앞의 글자는 n, 뒤의 글자는 m으로 할당됨.
arr = []

for _ in range(m): # m번 loop을 돌면서 input을 arr에 append
	arr.append(list(map(int, input().split())))

six = 1000
one = 100

for _ in range(m):
  splited = arr[_]
  six2 = int(arr[_][0])
  one2 = int(arr[_][1])
  if six2 < six : six = six2
  if one2 < one : one = one2
  
if six >= one * 6 :
  print(n*one)
else :
  if n >= 6 :
    price1 = (n//6) * six + (n%6)*one
    price2 = ((n//6) +1) * six
    if price1 <= price2:
      print(price1)
    else :
      print(price2)
      
  else :
    price1 = (n%6) * one
    price2 = ((n//6) +1) * six
    if price1 <= price2:
      print(price1)
    else :
      print(price2)