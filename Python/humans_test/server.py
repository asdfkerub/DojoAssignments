class humans(object):
    def __init__(self,clan = None):
        self.clan = clan
    def name(self):
        print "Supp"

mickey = humans('Ninja')
jimmy = humans('Hacker')

print mickey.clan
print jimmy.clan
mickey.name()

class gar(object):
    def __init__(self,color,type,age):
        self.color = color
        self.type = type
        self.age = age

garfield = gar("yellow","cat",9)
print "Color:" , garfield.color
print "Type:" , garfield.type
print "Age:" , garfield.age
