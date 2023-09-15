
tries = 1
while tries > 0:
    n1 = int(input('Enter number 1: '))
    op = input('Enter operator: ')
    n2 = int(input('Enter number 2: '))

    sum1 = None

    if op == '+':
        sum1 = n1 + n2
    elif op == '-':
        sum1 = n1 - n2
    elif op == '*':
        sum1 = n1 * n2
    elif op == '/':
        sum1 = n1 / n2
        if n2 != 0:  # Check for division by zero
            sum1 = n1 / n2
        else:
            print("Error: Division by zero")
    if sum1 is not None:
        print("Result:", sum1)
    choice = input('Press T to calculate another expression or press E to exit:  ')
    if choice == 'T':
        tries = 1
    elif choice == 'E':
        tries = 0
    else:
        tries = 0
        print('Invalid command entered')
