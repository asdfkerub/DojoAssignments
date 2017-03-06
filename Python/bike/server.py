class bike(object):
    def __init__(self,price = 0,max_speed = 0,miles = 0):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    def displayinfo(self):
        print 'Price: $',self.price
        print 'Max Speed: ',self.max_speed
        print 'Total Milage: ',self.miles
        print '-------------------'
        return self
    def riding(self):
        print 'Riding...'
        self.miles += 10
        print '-------------------'
        return self
    def reverse(self):
        print 'Reversing...'
        if self.miles < 0:
            self.miles = 0
            print '*********CRASHED*******'
            return self
        else:
            self.miles -= 5
            print '-------------------'
            return self

bike1 = bike(200, '25mph')
bike1.riding().riding().riding().reverse().displayinfo()
print '===================='
bike2 = bike(300,'30mph')
bike2.riding().riding().riding().reverse().reverse().displayinfo()
print '===================='
bike3 = bike(400,'40mph')
bike3.reverse().reverse().reverse().displayinfo()
print '===================='
bike4 = bike(100,'50mph')
bike4.reverse().reverse().reverse().reverse().displayinfo()
