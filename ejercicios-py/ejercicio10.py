import random
import string

# Generar una longitud aleatoria entre 16 y 40
longitud = random.randint(16, 40)

# Generar una contraseña aleatoria con letras y números
contraseña = ''.join(random.choices(string.ascii_letters + string.digits, k=longitud))

# Imprimir los resultados en GitHub Actions
print(f"La contraseña generada es: {contraseña}")