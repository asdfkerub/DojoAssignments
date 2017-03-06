students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
for i in students:
  print i["first_name"] + " " + i["last_name"] 
#loops through students object and print first / last name on the same line

users = {
 'Students': [
      {'first_name':  'Michael', 'last_name' : 'Jordan'},
      {'first_name' : 'John', 'last_name' : 'Rosales'},
      {'first_name' : 'Mark', 'last_name' : 'Guillen'},
      {'first_name' : 'KB', 'last_name' : 'Tonel'}
   ],
 'Instructors': [
      {'first_name' : 'Michael', 'last_name' : 'Choi'},
      {'first_name' : 'Martin', 'last_name' : 'Puryear'}
   ]
 }

for key,data in users.items():
  print key
  sc = 1
  for value in data:
    print str(sc) + " - " +  value["first_name"] + " " + value["last_name"] + " - " + str(len(value["first_name"]) + len(value["last_name"]))
    sc+=1
# returns an objects key and value
# sc for the count number next to the name
# last number is the sum of first name last name length

