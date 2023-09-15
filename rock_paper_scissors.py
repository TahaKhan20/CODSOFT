import random

print('Rock, Paper, and Scissors Game')

n = input('Press S to Start Game: ')
user_score = 0
comp_score = 0
tries = 0
cont  = False
if n == 'S':
    cont = True
while cont:
    print('Options:\n1) Rock\n2) Paper\n3) Scissors')
    user_choice = int(input('Enter your choice: '))

    choices = {1: 'Rock', 2: 'Paper', 3: 'Scissors'}  # Use a dictionary for choices
    print("Your choice:", choices[user_choice])

    # Generate a random choice for the computer
    computer_choice = random.randint(1, 3)
    print("Computer's choice:", choices[computer_choice])

    if user_choice == computer_choice:
        print('\nGame Tied')
    elif (user_choice == 1 and computer_choice == 3) or \
            (user_choice == 2 and computer_choice == 1) or \
            (user_choice == 3 and computer_choice == 2):
        print('\nYou win!')
        user_score += 1
    else:
        print('\nComputer wins!')
        comp_score += 1
    tries += 1
    print('Games: ', tries, '\nUser: ', user_score, ' Computer: ', comp_score,'\n')
    n = input('Press E to Exit\nPress P to Play Again!\n')
    if n == 'P':
        cont = True
    else:
        cont = False
