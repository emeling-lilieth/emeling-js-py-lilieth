import random

def es_primo(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

# Generar un número aleatorio entre 1 y 100
num = random.randint(1, 100)

# Imprimir el resultado en la consola
if es_primo(num):
    print(f"El número {num} es primo")
else:
    print(f"El número {num} no es primo")