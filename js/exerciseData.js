/**
 * EXERCISE DATA - Datos de ejercicios predefinidos
 * Contiene todos los ejercicios complejos con sus soluciones paso a paso
 */

const predefinedExercises = {
    1: {
        expression: "(4/3)³ - (3/4) * {-∛(2744/27000) - (8/5) * [-11/3 × 13/4 + 16/3 ÷ (-4/13)]}",
        description: "Ejercicio complejo con potencias, raíces cúbicas y operaciones anidadas",
        difficulty: "⭐⭐⭐⭐⭐",
        steps: [
            {
                title: "🔍 PASO 1: Identificamos la estructura PEMDAS",
                content: `Tenemos una expresión compleja con múltiples niveles de anidación:
                <br>• <strong>Potencias:</strong> (4/3)³
                <br>• <strong>Raíces cúbicas:</strong> ∛(2744/27000)
                <br>• <strong>Operaciones en corchetes:</strong> [-11/3 × 13/4 + 16/3 ÷ (-4/13)]
                <br>• <strong>Operaciones en llaves:</strong> {...}
                <br><br>Seguimos el orden PEMDAS: <em>Paréntesis, Exponentes, Multiplicación/División, Adición/Sustracción</em>`,
                calculation: "(4/3)³ - (3/4) * {-∛(2744/27000) - (8/5) * [-11/3 × 13/4 + 16/3 ÷ (-4/13)]}"
            },
            {
                title: "📊 PASO 2: Resolvemos la potencia (4/3)³",
                content: `Para elevar una fracción al cubo, elevamos numerador y denominador por separado:
                <br>• Numerador: 4³ = 4 × 4 × 4 = 64
                <br>• Denominador: 3³ = 3 × 3 × 3 = 27
                <br>• Resultado: <strong>(4/3)³ = 64/27</strong>`,
                calculation: "(4/3)³ = 4³/3³ = 64/27 ≈ 2.37"
            },
            {
                title: "🧮 PASO 3: Calculamos la raíz cúbica ∛(2744/27000)",
                content: `Separamos numerador y denominador para encontrar raíces exactas:
                <br>• ∛2744: Buscamos qué número al cubo da 2744 → 14³ = 2744 ✓
                <br>• ∛27000: Buscamos qué número al cubo da 27000 → 30³ = 27000 ✓
                <br>• Por tanto: <strong>∛(2744/27000) = 14/30 = 7/15</strong>`,
                calculation: "∛(2744/27000) = ∛2744/∛27000 = 14/30 = 7/15 ≈ 0.467"
            },
            {
                title: "⚡ PASO 4: Resolvemos las operaciones dentro de los corchetes",
                content: `Trabajamos de izquierda a derecha dentro de los corchetes:
                <br>• Primera operación: -11/3 × 13/4 = -143/12
                <br>• Segunda operación: 16/3 ÷ (-4/13) = 16/3 × (-13/4) = -52/3 = -208/12
                <br>• Suma final: -143/12 + (-208/12) = <strong>-351/12</strong>`,
                calculation: "[-11/3 × 13/4 + 16/3 ÷ (-4/13)] = [-143/12 - 208/12] = -351/12"
            },
            {
                title: "🎯 PASO 5: Completamos las operaciones dentro de las llaves",
                content: `Sustituimos los valores calculados y operamos:
                <br>• Primer término: -∛(2744/27000) = -7/15
                <br>• Segundo término: -(8/5) × (-351/12) = (8/5) × (351/12) = 2808/60 = 468/10 = 234/5
                <br>• Resultado llaves: <strong>-7/15 + 234/5 = -7/15 + 702/15 = 695/15 = 139/3</strong>`,
                calculation: "{-7/15 - (8/5) * (-351/12)} = -7/15 + 468/10 = 695/15 = 139/3"
            },
            {
                title: "🚀 PASO 6: Operación final",
                content: `Realizamos la resta final entre la potencia y el producto con las llaves:
                <br>• Primer término: 64/27
                <br>• Segundo término: (3/4) × (139/3) = 417/12 = 139/4
                <br>• Conversión a denominador común: 64/27 = 256/108 y 139/4 = 3753/108
                <br>• Resultado final: <strong>256/108 - 3753/108 = -3497/108</strong>`,
                calculation: "64/27 - (3/4) * (139/3) = 64/27 - 139/4 = -3497/108 ≈ -32.38"
            }
        ],
        result: "-3497/108 ≈ -32.38",
        tips: [
            "💡 Siempre resuelve desde los paréntesis más internos hacia afuera",
            "💡 Las fracciones se pueden simplificar para facilitar los cálculos",
            "💡 Verifica cada paso antes de continuar con el siguiente"
        ]
    },

    2: {
        expression: "√(2744/3375) - (3/4) * {-(5/3)³ + (4/3) * [7/8 × (-15/2) + 9/5 ÷ (-3/12)]}",
        description: "Ejercicio con raíces cuadradas, potencias cúbicas y operaciones con números negativos",
        difficulty: "⭐⭐⭐⭐⭐",
        steps: [
            {
                title: "🔍 PASO 1: Analizamos la estructura completa",
                content: `Esta expresión combina varios tipos de operaciones:
                <br>• <strong>Raíz cuadrada:</strong> √(2744/3375)
                <br>• <strong>Potencia cúbica:</strong> (5/3)³
                <br>• <strong>Operaciones con negativos:</strong> números negativos en multiplicaciones y divisiones
                <br>• <strong>Múltiples niveles:</strong> corchetes dentro de llaves`,
                calculation: "√(2744/3375) - (3/4) * {-(5/3)³ + (4/3) * [7/8 × (-15/2) + 9/5 ÷ (-3/12)]}"
            },
            {
                title: "📊 PASO 2: Calculamos √(2744/3375)",
                content: `Para la raíz cuadrada de una fracción:
                <br>• √2744: Como 2744 = 4 × 686, no es un cuadrado perfecto simple
                <br>• Calculamos directamente: √2744 ≈ 52.38
                <br>• √3375 ≈ 58.09
                <br>• Por tanto: <strong>√(2744/3375) ≈ 0.902</strong>`,
                calculation: "√(2744/3375) = √2744/√3375 ≈ 52.38/58.09 ≈ 0.902"
            },
            {
                title: "🧮 PASO 3: Resolvemos (5/3)³",
                content: `Potencia cúbica de una fracción:
                <br>• Numerador: 5³ = 5 × 5 × 5 = 125
                <br>• Denominador: 3³ = 3 × 3 × 3 = 27
                <br>• Resultado: <strong>(5/3)³ = 125/27 ≈ 4.63</strong>`,
                calculation: "(5/3)³ = 5³/3³ = 125/27 ≈ 4.63"
            },
            {
                title: "⚡ PASO 4: Operaciones en los corchetes con negativos",
                content: `Resolvemos cuidadosamente los signos negativos:
                <br>• Primera multiplicación: 7/8 × (-15/2) = -105/16
                <br>• División con negativo: 9/5 ÷ (-3/12) = 9/5 × (-12/3) = 9/5 × (-4) = -36/5
                <br>• Suma: -105/16 + (-36/5) = -105/16 - 36/5 = <strong>-105/16 - 576/80 = -681/80</strong>`,
                calculation: "[7/8 × (-15/2) + 9/5 ÷ (-3/12)] = [-105/16 - 36/5] = -681/80"
            },
            {
                title: "🎯 PASO 5: Resolvemos las operaciones en llaves",
                content: `Combinamos todos los términos dentro de las llaves:
                <br>• Primer término: -(125/27) = -125/27
                <br>• Segundo término: (4/3) × (-681/80) = -2724/240 = -227/20
                <br>• Suma: <strong>-125/27 + (-227/20) = -125/27 - 227/20</strong>
                <br>• Resultado: aproximadamente -16.01`,
                calculation: "{-(125/27) + (4/3) × (-681/80)} = -125/27 - 227/20 ≈ -16.01"
            },
            {
                title: "🚀 PASO 6: Cálculo final",
                content: `Realizamos la operación principal:
                <br>• Primer término: √(2744/3375) ≈ 0.902
                <br>• Segundo término: (3/4) × (-16.01) ≈ -12.01
                <br>• Resultado final: <strong>0.902 - (-12.01) = 0.902 + 12.01 = 12.91</strong>`,
                calculation: "0.902 - (3/4) × (-16.01) = 0.902 + 12.01 = 12.91"
            }
        ],
        result: "≈ 12.91",
        tips: [
            "💡 Ten especial cuidado con los signos negativos",
            "💡 Un menos por un menos da más",
            "💡 Verifica los signos en cada paso"
        ]
    },

    3: {
        expression: "(3/4)³ - (5/2) * {-∛(8000/27000) - (4/3) * [-7/5 × 13/2 - 17/4 ÷ 2/9]}",
        description: "Ejercicio con raíces cúbicas exactas y operaciones complejas",
        difficulty: "⭐⭐⭐⭐",
        steps: [
            {
                title: "🔍 PASO 1: Estructura del ejercicio",
                content: `Identificamos los componentes principales:
                <br>• <strong>Potencia:</strong> (3/4)³
                <br>• <strong>Raíz cúbica:</strong> ∛(8000/27000) - que esperamos sea exacta
                <br>• <strong>Operaciones anidadas:</strong> multiplicaciones y divisiones en corchetes
                <br>• <strong>Factor externo:</strong> (5/2) multiplicando las llaves`,
                calculation: "(3/4)³ - (5/2) * {-∛(8000/27000) - (4/3) * [-7/5 × 13/2 - 17/4 ÷ 2/9]}"
            },
            {
                title: "📊 PASO 2: Calculamos (3/4)³",
                content: `Elevamos la fracción al cubo:
                <br>• Numerador: 3³ = 27
                <br>• Denominador: 4³ = 64
                <br>• Resultado: <strong>(3/4)³ = 27/64 ≈ 0.422</strong>`,
                calculation: "(3/4)³ = 3³/4³ = 27/64 ≈ 0.422"
            },
            {
                title: "🧮 PASO 3: Raíz cúbica exacta ∛(8000/27000)",
                content: `Buscamos raíces cúbicas exactas:
                <br>• ∛8000: 20³ = 8000 ✓
                <br>• ∛27000: 30³ = 27000 ✓
                <br>• Por tanto: <strong>∛(8000/27000) = 20/30 = 2/3 ≈ 0.667</strong>`,
                calculation: "∛(8000/27000) = ∛8000/∛27000 = 20/30 = 2/3 ≈ 0.667"
            },
            {
                title: "⚡ PASO 4: Operaciones en corchetes",
                content: `Resolvemos paso a paso:
                <br>• Multiplicación: -7/5 × 13/2 = -91/10
                <br>• División: 17/4 ÷ 2/9 = 17/4 × 9/2 = 153/8
                <br>• Resta: -91/10 - 153/8
                <br>• Denominador común: <strong>-728/80 - 1530/80 = -2258/80 = -1129/40</strong>`,
                calculation: "[-7/5 × 13/2 - 17/4 ÷ 2/9] = [-91/10 - 153/8] = -1129/40"
            },
            {
                title: "🎯 PASO 5: Completamos las llaves",
                content: `Sustituimos valores en las llaves:
                <br>• Primer término: -∛(8000/27000) = -2/3
                <br>• Segundo término: -(4/3) × (-1129/40) = (4/3) × (1129/40) = 4516/120 = 1129/30
                <br>• Suma: <strong>-2/3 + 1129/30 = -20/30 + 1129/30 = 1109/30</strong>`,
                calculation: "{-2/3 - (4/3) × (-1129/40)} = -2/3 + 1129/30 = 1109/30"
            },
            {
                title: "🚀 PASO 6: Resultado final",
                content: `Completamos la operación principal:
                <br>• Primer término: 27/64
                <br>• Segundo término: (5/2) × (1109/30) = 5545/60 = 1109/12
                <br>• Denominador común para 27/64 y 1109/12...
                <br>• Resultado: <strong>27/64 - 1109/12 ≈ 0.422 - 92.42 = -92.00</strong>`,
                calculation: "27/64 - (5/2) × (1109/30) = 27/64 - 1109/12 ≈ -92.00"
            }
        ],
        result: "≈ -92.00",
        tips: [
            "💡 Las raíces cúbicas de números como 8000 y 27000 suelen ser exactas",
            "💡 Busca patrones en los números para simplificar cálculos",
            "💡 Mantén las fracciones hasta el final cuando sea posible"
        ]
    },

    4: {
        expression: "(5/3)³ - (3/4) * {-∛(27000/8000) - (3/5) * [-7/5 × 13/3 - 11/4 ÷ 3/13]}",
        description: "Ejercicio con intercambio de numeradores en la raíz cúbica",
        difficulty: "⭐⭐⭐⭐",
        steps: [
            {
                title: "🔍 PASO 1: Análisis inicial",
                content: `Notamos que esta expresión es similar al ejercicio 3, pero con algunos cambios:
                <br>• <strong>Potencia:</strong> (5/3)³ en lugar de (3/4)³
                <br>• <strong>Raíz cúbica:</strong> ∛(27000/8000) - numeradores intercambiados
                <br>• <strong>Coeficientes diferentes:</strong> (3/4) y (3/5) en lugar de (5/2) y (4/3)`,
                calculation: "(5/3)³ - (3/4) * {-∛(27000/8000) - (3/5) * [-7/5 × 13/3 - 11/4 ÷ 3/13]}"
            },
            {
                title: "📊 PASO 2: Potencia (5/3)³",
                content: `Calculamos la potencia cúbica:
                <br>• Numerador: 5³ = 125
                <br>• Denominador: 3³ = 27
                <br>• Resultado: <strong>(5/3)³ = 125/27 ≈ 4.63</strong>`,
                calculation: "(5/3)³ = 5³/3³ = 125/27 ≈ 4.63"
            },
            {
                title: "🧮 PASO 3: Raíz cúbica ∛(27000/8000)",
                content: `Con numeradores intercambiados del ejercicio anterior:
                <br>• ∛27000 = 30 (ya sabemos esto)
                <br>• ∛8000 = 20 (ya sabemos esto)
                <br>• Por tanto: <strong>∛(27000/8000) = 30/20 = 3/2 = 1.5</strong>`,
                calculation: "∛(27000/8000) = ∛27000/∛8000 = 30/20 = 3/2 = 1.5"
            },
            {
                title: "⚡ PASO 4: Operaciones en corchetes",
                content: `Nuevas operaciones en los corchetes:
                <br>• Primera multiplicación: -7/5 × 13/3 = -91/15
                <br>• División: 11/4 ÷ 3/13 = 11/4 × 13/3 = 143/12
                <br>• Resta: -91/15 - 143/12
                <br>• Común denominador: <strong>-364/60 - 715/60 = -1079/60</strong>`,
                calculation: "[-7/5 × 13/3 - 11/4 ÷ 3/13] = [-91/15 - 143/12] = -1079/60"
            },
            {
                title: "🎯 PASO 5: Operaciones en llaves",
                content: `Sustituimos en las llaves:
                <br>• Primer término: -∛(27000/8000) = -3/2
                <br>• Segundo término: -(3/5) × (-1079/60) = (3/5) × (1079/60) = 3237/300 = 1079/100
                <br>• Suma: <strong>-3/2 + 1079/100 = -150/100 + 1079/100 = 929/100</strong>`,
                calculation: "{-3/2 - (3/5) × (-1079/60)} = -3/2 + 1079/100 = 929/100"
            },
            {
                title: "🚀 PASO 6: Cálculo final",
                content: `Operación principal:
                <br>• Primer término: 125/27 ≈ 4.63
                <br>• Segundo término: (3/4) × (929/100) = 2787/400 ≈ 6.97
                <br>• Resultado final: <strong>125/27 - 2787/400 ≈ 4.63 - 6.97 = -2.34</strong>`,
                calculation: "125/27 - (3/4) × (929/100) ≈ 4.63 - 6.97 = -2.34"
            }
        ],
        result: "≈ -2.34",
        tips: [
            "💡 Compara con ejercicios similares para detectar patrones",
            "💡 Los intercambios de numeradores cambian significativamente el resultado",
            "💡 Mantén la precisión en fracciones para resultados exactos"
        ]
    },

    5: {
        expression: "(5/3)² - (7/2) * {-∛(2197/1000) - (3/4) * [7/5 × (-9/2) + 8/3 ÷ (-4/9)]}",
        description: "Ejercicio con potencia cuadrada y números negativos complejos",
        difficulty: "⭐⭐⭐⭐⭐",
        steps: [
            {
                title: "🔍 PASO 1: Estructura del problema",
                content: `Este ejercicio combina varios desafíos:
                <br>• <strong>Potencia cuadrada:</strong> (5/3)² en lugar de cúbica
                <br>• <strong>Nueva raíz cúbica:</strong> ∛(2197/1000)
                <br>• <strong>Muchos números negativos:</strong> requiere cuidado extra con los signos
                <br>• <strong>Factor grande:</strong> (7/2) multiplica las llaves`,
                calculation: "(5/3)² - (7/2) * {-∛(2197/1000) - (3/4) * [7/5 × (-9/2) + 8/3 ÷ (-4/9)]}"
            },
            {
                title: "📊 PASO 2: Calculamos (5/3)²",
                content: `Potencia cuadrada (más simple que cúbica):
                <br>• Numerador: 5² = 25
                <br>• Denominador: 3² = 9
                <br>• Resultado: <strong>(5/3)² = 25/9 ≈ 2.78</strong>`,
                calculation: "(5/3)² = 5²/3² = 25/9 ≈ 2.78"
            },
            {
                title: "🧮 PASO 3: Raíz cúbica ∛(2197/1000)",
                content: `Buscamos raíces exactas:
                <br>• ∛2197: Probemos... 13³ = 13 × 13 × 13 = 2197 ✓
                <br>• ∛1000: Sabemos que 10³ = 1000 ✓
                <br>• Por tanto: <strong>∛(2197/1000) = 13/10 = 1.3</strong>`,
                calculation: "∛(2197/1000) = ∛2197/∛1000 = 13/10 = 1.3"
            },
            {
                title: "⚡ PASO 4: Operaciones con números negativos",
                content: `Mucho cuidado con los signos:
                <br>• Primera operación: 7/5 × (-9/2) = -63/10
                <br>• Segunda operación: 8/3 ÷ (-4/9) = 8/3 × (-9/4) = -72/12 = -6
                <br>• Suma: -63/10 + (-6) = -63/10 - 60/10 = <strong>-123/10 = -12.3</strong>`,
                calculation: "[7/5 × (-9/2) + 8/3 ÷ (-4/9)] = [-63/10 - 6] = -123/10"
            },
            {
                title: "🎯 PASO 5: Resolvemos las llaves",
                content: `Cuidado especial con el doble negativo:
                <br>• Primer término: -∛(2197/1000) = -13/10 = -1.3
                <br>• Segundo término: -(3/4) × (-123/10) = (3/4) × (123/10) = 369/40 = 9.225
                <br>• Suma: <strong>-1.3 + 9.225 = 7.925</strong>`,
                calculation: "{-13/10 - (3/4) × (-123/10)} = -1.3 + 9.225 = 7.925"
            },
            {
                title: "🚀 PASO 6: Resultado final",
                content: `Completamos la operación principal:
                <br>• Primer término: 25/9 ≈ 2.78
                <br>• Segundo término: (7/2) × 7.925 = 3.5 × 7.925 = 27.74
                <br>• Resultado final: <strong>2.78 - 27.74 = -24.96</strong>`,
                calculation: "25/9 - (7/2) × 7.925 = 2.78 - 27.74 = -24.96"
            }
        ],
        result: "≈ -24.96",
        tips: [
            "💡 Con muchos negativos, verifica cada signo dos veces",
            "💡 Un negativo multiplicado por un negativo da positivo",
            "💡 Trabaja paso a paso para evitar errores de signo"
        ]
    }
};

// Ejemplos rápidos para demostración
const quickExamples = [
    {
        expression: "∛27+√16",
        result: 7,
        explanation: "∛27 = 3 (porque 3³ = 27) y √16 = 4 (porque 4² = 16), entonces 3 + 4 = 7"
    },
    {
        expression: "∛125",
        result: 5,
        explanation: "∛125 = 5 porque 5³ = 5 × 5 × 5 = 125"
    },
    {
        expression: "3²+2³",
        result: 17,
        explanation: "3² = 9 y 2³ = 8, entonces 9 + 8 = 17"
    },
    {
        expression: "√16+√9",
        result: 7,
        explanation: "√16 = 4 y √9 = 3, entonces 4 + 3 = 7"
    }
];

// Mensajes educativos y motivacionales
const educationalMessages = {
    welcome: "¡Bienvenido a Math Tutor! 🎉 Aquí aprenderás matemáticas paso a paso de forma divertida.",
    pemdas: "Recuerda PEMDAS: Paréntesis, Exponentes, Multiplicación/División, Adición/Sustracción 📚",
    encouragement: [
        "¡Excelente trabajo! 🌟",
        "¡Vas muy bien! 🚀",
        "¡Perfecto! Sigue así 💪",
        "¡Fantástico! 🎊",
        "¡Increíble progreso! ⭐"
    ],
    tips: [
        "💡 Tip: Siempre resuelve desde los paréntesis más internos",
        "💡 Tip: Las raíces cuadradas y cúbicas tienen valores exactos para números perfectos",
        "💡 Tip: Ten cuidado con los signos negativos, ¡son muy importantes!",
        "💡 Tip: Convierte las divisiones en multiplicaciones para facilitar el cálculo",
        "💡 Tip: Verifica tu resultado sustituyendo valores simples"
    ]
};
