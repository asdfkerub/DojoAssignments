sen = "If monkeys like bananas, then I must be a monkey!"
x = sen.find('monkey')
y = sen.find('monkey',x+1,len(sen))
print "Monkey is in " + str(x) + " and " + str(y)
print sen.replace('monkey','alligator',2)

numbers = [2,54,-2,7,12,98]
newnums = [max(numbers),min(numbers)]
print "New list with max and in: " + str(newnums)

fl = ["hello",1,2,3,4,5,6,7,"earthling"]

print "First: " + fl[0] + "\n" + "Last: " + fl[len(fl) - 1]

newfl = [fl[0] , fl[len(fl) - 1]]

print "New first and last in a list: " + str(newfl)

neg = [19,2,54,-2,7,12,98,32,10,-3,6]
newneg = []
count = 0
for i in neg:

  if i <  0:
    newneg.append(i)
    neg.pop(count)
  count = count + 1

neg.sort()
newneg.sort()
neg.insert(0,newneg)
print neg
