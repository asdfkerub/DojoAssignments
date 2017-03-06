import random
random_num = random.randrange(100)
print random_num

if random_num < 60:
    print "Score: " + str(random_num) + ". You failed."
elif random_num >= 60 and  random_num <= 69:
    print "Score: " + str(random_num) + ". Your grade is D"
elif random_num  >= 70 and random_num <= 79:
    print "Score: " + str(random_num) + ". Your grade is C"
elif random_num  >= 80 and random_num <= 89:
    print "Score: " + str(random_num) + ". Your grade is B"
else:
    print "Score: " + str(random_num) + ". Your grade is A"
