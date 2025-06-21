 
 # Lista de palabras
palabras = [
    'Aceituna', 'Murciélago', 'Educación', 'Aeropuerto',
    'Otorrinolaringólogo', 'Euforia', 'Aceite', 'Paleontólogo',
    'Hippópata', 'Arquitectura'
]

# Función para contar las vocales
def contar_vocales(palabra):
    vocales = 'AEIOUaeiou'
    contador = 0
    for char in palabra:
        if char in vocales:
            contador += 1
    return contador

# Seleccionar una palabra aleatoria
import random
indice_aleatorio = random.randint(0, len(palabras) - 1)
palabra_aleatoria = palabras[indice_aleatorio]

# Contar las vocales en la palabra aleatoria y mostrar el resultado
vocales_en_palabra = contar_vocales(palabra_aleatoria)
print(f"La palabra '{palabra_aleatoria}' tiene {vocales_en_palabra} vocales.")