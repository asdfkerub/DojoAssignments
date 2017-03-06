def stars(list):
  for i in list:
    star = ""
    if isinstance(i,int):
      for x in range(0,i):
        star+="*"
    else:
      for y in range(0,len(i)):
        star+=i[0].lower()
    print star

stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])
