class human(object):
    def __init__(self , name=None):
        self.name = name
        self.health = 100
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print "Name:",self.name
        print "Health:",self.health
        return self

class Dog(human):
    def __init__(self , name=None):
        super(Dog, self).__init__()
        self.name = name
        self.health = 150
    def pet(self):
        self.health += 5
        return self
class Dragon(human):
    def __init__(self,name=None):
        super(Dragon,self).__init__()
        self.name = name
        self.health = 170
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print "ITS A DRAGON"
        print "Name:",self.name
        print "Health:",self.health
        return self


animal = human('Animal')
animal.walk().walk().walk().run().run().displayHealth()
print "---------------------"
dog = Dog('Doggie')
dog.walk().walk().walk().run().run().pet().displayHealth()
print "---------------------"
dragon = Dragon('Dragg')
dragon.walk().walk().walk().run().run().fly().fly().displayHealth()
