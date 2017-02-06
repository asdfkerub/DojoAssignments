import random

heads = 0
tails = 0

for x in range(5001):
  num = round(random.random())
  if(num == 1):
    heads+=1
    print "Attemp #" + str(x) + ": " + "Throwing a coin... Its a head!... Got " + str(heads) + " head(s) total so far and " + str(tails) + " so far."
  else:
    tails+=1
    print "Attemp #" + str(x) + ": " + "Throwing a coin... Its a tail!... Got " + str(tails) + " tail(s) total so far and " + str(heads) + " so far."
 
print "Ending program. Thank you!"
