import java.util.Random;
import java.util.Scanner;

public class VowelCounter {
    public static void main(String[] args) {
        // Lista de palabras
        String[] words = {
            "Aceituna", "Murciélago", "Educación", "Aeropuerto",
            "Otorrinolaringólogo", "Euforia", "Aceite", "Paleontólogo",
            "Hippópata", "Arquitectura"
        };

        // Tomar una palabra aleatoria de la lista
        Random random = new Random();
        int randomIndex = random.nextInt(words.length);
        String word = words[randomIndex];

        // Contar y mostrar las vocales de la palabra
        countVowels(word);
    }

    public static void countVowels(String word) {
        int countA = 0, countE = 0, countI = 0, countO = 0, countU = 0;

        for (int i = 0; i < word.length(); i++) {
            char letter = word.toLowerCase().charAt(i);
            if (letter == 'a') countA++;
            else if (letter == 'e') countE++;
            else if (letter == 'i') countI++;
            else if (letter == 'o') countO++;
            else if (letter == 'u') countU++;
        }

        System.out.println("La palabra aleatoria es: " + word);
        System.out.println("Vocales 'A': " + countA);
        System.out.println("Vocales 'E': " + countE);
        System.out.println("Vocales 'I': " + countI);
        System.out.println("Vocales 'O': " + countO);
        System.out.println("Vocales 'U': " + countU);
    }
}