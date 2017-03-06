name = "Kerub "
space = " "
lname = "Q."
age = 21
print "Name is {}{}{}".format(name,space,lname);

for x in range(11):
  print "Testing"

pip = "Why is my pip not working?"

print name + " says: "  + pip
print name + space + lname + " says: {}".format(pip)
print "About: {}{} is roughly {} years old".format(name,lname,age)

fruits = ['Apples','Orange','Bananas','Lime']
veggies = ['Letuce','Tomato','Cucumber','Olive']
fruits_veggies = fruits + veggies
print fruits_veggies
salad = 3 * veggies
print salad
fruitsalad = 3 * fruits
#print "Fruit Salad:" + fruitsalad
print "Fruit Salad:", fruitsalad
