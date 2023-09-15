import random
print('Password Generator')

tries = 1
while tries > 0:

    length = int(input('Enter length: '))
    i = 0
    password = []
    while i < length:
        choice = random.randint(1, 3)  # Randomly choose between lowercase, uppercase, and numbers
        if choice == 1:
            password.append(chr(random.randint(97, 122)))  # Add a lowercase letter
        elif choice == 2:
            password.append(chr(random.randint(65, 90)))  # Add an uppercase letter
        else:
            password.append(str(random.randint(0, 9)))  # Add a number
        i += 1
    generated_password = ''.join(password)
    print('Generated password: ', generated_password)
    choice = input('Press T if you want to generate another password or press E to exit: ')
    if choice == 'T':
        tries = 1
    elif choice == 'E':
        tries = 0
    else:
        tries = 0
        print('Invalid command entered')
