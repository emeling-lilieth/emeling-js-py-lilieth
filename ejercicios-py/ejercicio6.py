def factorial(num):
    if num == 0:
        return 1
    else:
        return num * factorial(num - 1)

# Calcular el factorial de un número aleatorio (ej: 5! = 120)
num = random.randint(1, 10)
resultado = factorial(num)
print(f"{num}! = {resultado}")