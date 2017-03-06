class car(object):
    def __init__(self,price=0,speed=0,fuel=0,milage=0):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.milage = milage
        if self.price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
    def display_all(self):
        print "Print:",self.price
        print "Speed:",self.speed
        print "Full:",self.fuel
        print "Milage:",self.milage
        print "Tax:",self.tax

car1 = car(2000,'35mph','full','15mpg')
car2 = car(2000,'5mph','Not Full','105mpg')
car3 = car(2000,'15mph','Kind of Full','95mpg')
car4 = car(2000,'25mph','Full','25mpg')
car5 = car(2000,'45mph','Empty','25mpg')
car6 = car(20000000,'35mph','Empty','15mpg')

car1.display_all()
car2.display_all()
car3.display_all()
car4.display_all()
car5.display_all()
car6.display_all()
