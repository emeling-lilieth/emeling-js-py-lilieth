import random

def check_even_odd():
    number = random.randint(1, 100)
    print(f"El número generado es: {number}")

    if number % 2 == 0:
        print("El número es par.")
    else:
        print("El número es impar.")

check_even_odd()