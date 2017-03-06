def odd_even():
    for i in range(1,2001):
        if i % 2 == 0:
            print "Number is " + str(i) + ". This is an even number."
        else:
            print "Number is " + str(i) + ". This is an odd number."

odd_even()

def multiply(arr , num):
    for i in range(len(arr)):
        arr[i] = arr[i] * num
    return arr

b = multiply([2,4,10,16],5)
print b

def layers(arr):
    newarr = [];
    anarr = []
    for x in range(len(arr)):
        anarr = [1] * arr[x]
        newarr.append(anarr)
    return newarr

print layers(multiply([2,4,5],3))
