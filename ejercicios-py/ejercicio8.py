import random

# Generar un array de números aleatorios entre 1 y 100
array = [random.randint(1, 100) for _ in range(10)]

# Calcular la sumatoria de los elementos del array
sumatoria = sum(array)

# Imprimir los resultados en GitHub Actions
print(f"La sumatoria del array es: {sumatoria}")