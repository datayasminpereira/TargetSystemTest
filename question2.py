number = 0

def fib(number):
    n1, n2 = 0, 1
    isValueCheck = True
    while n1<=number:
       nth = n1 + n2
       n1 = n2
       n2 = nth
       if(number==n1) or (number==0):
        isValueCheck = False
        print("Seu numero pertence")
        break
    if(isValueCheck):
        print("Seu nao numero pertence")
fib(number)