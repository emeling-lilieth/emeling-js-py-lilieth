import random

# Generar un array de números aleatorios entre 1 y 100
array = [random.randint(1, 100) for _ in range(10)]

# Identificar el mayor y el menor
mayor = max(array)
menor = min(array)

# Imprimir los resultados en GitHub Actions
print(f"El número mayor es: {mayor}")
print(f"El número menor es: {menor}")