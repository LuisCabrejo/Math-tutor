/**
 * MATH PARSER - Sistema de evaluación matemática robusto
 * Maneja raíces, potencias y operaciones complejas con explicaciones paso a paso
 */

class MathParser {
    constructor() {
        this.steps = [];
        this.currentStep = 1;

        // Tablas de referencia para raíces exactas
        this.cubeRoots = {
            1: 1, 8: 2, 27: 3, 64: 4, 125: 5, 216: 6, 343: 7,
            512: 8, 729: 9, 1000: 10, 1331: 11, 1728: 12,
            2197: 13, 2744: 14, 3375: 15, 4096: 16, 4913: 17,
            5832: 18, 6859: 19, 8000: 20, 9261: 21, 10648: 22,
            12167: 23, 13824: 24, 15625: 25, 17576: 26, 19683: 27,
            21952: 28, 24389: 29, 27000: 30
        };

        this.squareRoots = {
            1: 1, 4: 2, 9: 3, 16: 4, 25: 5, 36: 6, 49: 7,
            64: 8, 81: 9, 100: 10, 121: 11, 144: 12, 169: 13,
            196: 14, 225: 15, 256: 16, 289: 17, 324: 18, 361: 19,
            400: 20, 441: 21, 484: 22, 529: 23, 576: 24, 625: 25,
            676: 26, 729: 27, 784: 28, 841: 29, 900: 30
        };
    }

    /**
     * Añade un paso de explicación al proceso de resolución
     */
    addStep(title, content, calculation) {
        this.steps.push({
            title: `${this.getStepEmoji()} PASO ${this.currentStep}: ${title}`,
            content,
            calculation
        });
        this.currentStep++;
    }

    /**
     * Obtiene emojis variados para cada paso
     */
    getStepEmoji() {
        const emojis = ['🔍', '📊', '🧮', '⚡', '🎯', '🚀', '✨', '🎪', '🌟', '💫', '🔥', '💎'];
        return emojis[(this.currentStep - 1) % emojis.length];
    }

    /**
     * Método principal para evaluar expresiones personalizadas
     */
    evaluateCustomExpression(expr) {
        this.steps = [];
        this.currentStep = 1;

        try {
            // Validar expresión de entrada
            if (!this.isValidExpression(expr)) {
                throw new Error("Expresión contiene caracteres no válidos");
            }

            // Limpiar la expresión
            let cleanExpr = this.cleanExpression(expr);

            this.addStep(
                "Análisis de la expresión",
                `Identificamos los componentes de la expresión: <strong>${expr}</strong><br>
                 Vamos a resolver paso a paso siguiendo el orden PEMDAS (Paréntesis, Exponentes, Multiplicación/División, Adición/Sustracción).`,
                cleanExpr
            );

            // Evaluar en orden PEMDAS
            cleanExpr = this.evaluateParentheses(cleanExpr);
            cleanExpr = this.evaluateCubeRoots(cleanExpr);
            cleanExpr = this.evaluateSquareRoots(cleanExpr);
            cleanExpr = this.evaluatePowers(cleanExpr);
            cleanExpr = this.evaluateMultiplicationDivision(cleanExpr);
            const result = this.evaluateAdditionSubtraction(cleanExpr);

            this.addStep(
                "🏆 ¡Resultado Final!",
                `Hemos completado todos los pasos siguiendo la metodología PEMDAS.
                 El resultado de <strong>${expr}</strong> es <strong>${result}</strong>`,
                `✅ ${expr} = ${result}`
            );

            return {
                steps: this.steps,
                result: result,
                success: true
            };
        } catch (error) {
            return {
                steps: this.steps,
                result: null,
                success: false,
                error: `❌ ${error.message}`
            };
        }
    }

    /**
     * Valida que la expresión contenga solo caracteres matemáticos válidos
     */
    isValidExpression(expr) {
        const validPattern = /^[0-9+\-*/()√∛²³×÷\s\.]+$/;
        return validPattern.test(expr);
    }

    /**
     * Limpia y normaliza la expresión
     */
    cleanExpression(expr) {
        return expr
            .replace(/\s+/g, '') // Eliminar espacios
            .replace(/×/g, '*')   // Normalizar multiplicación
            .replace(/÷/g, '/');  // Normalizar división
    }

    /**
     * Evalúa expresiones entre paréntesis
     */
    evaluateParentheses(expr) {
        const parenthesesPattern = /\(([^()]+)\)/;
        let match;
        let result = expr;

        while ((match = parenthesesPattern.exec(result)) !== null) {
            const innerExpr = match[1];
            const innerResult = this.evaluateSimpleExpression(innerExpr);

            this.addStep(
                `Resolvemos paréntesis: (${innerExpr})`,
                `Evaluamos primero lo que está entre paréntesis según el orden PEMDAS.`,
                `(${innerExpr}) = ${innerResult}`
            );

            result = result.replace(match[0], innerResult.toString());
        }

        return result;
    }

    /**
     * Evalúa raíces cúbicas en la expresión
     */
    evaluateCubeRoots(expr) {
        const cubeRootPattern = /∛(\d+)/g;
        let match;
        let result = expr;

        const matches = [...expr.matchAll(cubeRootPattern)];
        for (match of matches) {
            const number = parseInt(match[1]);
            const cubeRoot = this.findCubeRoot(number);

            if (cubeRoot !== null) {
                this.addStep(
                    `Calculamos ∛${number}`,
                    `Buscamos qué número elevado al cubo da ${number}.<br>
                     Como ${cubeRoot} × ${cubeRoot} × ${cubeRoot} = ${cubeRoot ** 3}, entonces <strong>∛${number} = ${cubeRoot}</strong>`,
                    `∛${number} = ${cubeRoot}`
                );
                result = result.replace(`∛${number}`, cubeRoot.toString());
            } else {
                const approxRoot = Math.cbrt(number);
                this.addStep(
                    `Calculamos ∛${number}`,
                    `Esta raíz cúbica no es exacta. Calculamos su valor aproximado.<br>
                     <strong>∛${number} ≈ ${approxRoot.toFixed(3)}</strong>`,
                    `∛${number} ≈ ${approxRoot.toFixed(3)}`
                );
                result = result.replace(`∛${number}`, approxRoot.toFixed(3));
            }
        }

        return result;
    }

    /**
     * Evalúa raíces cuadradas en la expresión
     */
    evaluateSquareRoots(expr) {
        const squareRootPattern = /√(\d+)/g;
        let match;
        let result = expr;

        const matches = [...expr.matchAll(squareRootPattern)];
        for (match of matches) {
            const number = parseInt(match[1]);
            const squareRoot = this.findSquareRoot(number);

            if (squareRoot !== null) {
                this.addStep(
                    `Calculamos √${number}`,
                    `Buscamos qué número elevado al cuadrado da ${number}.<br>
                     Como ${squareRoot} × ${squareRoot} = ${squareRoot ** 2}, entonces <strong>√${number} = ${squareRoot}</strong>`,
                    `√${number} = ${squareRoot}`
                );
                result = result.replace(`√${number}`, squareRoot.toString());
            } else {
                const approxRoot = Math.sqrt(number);
                this.addStep(
                    `Calculamos √${number}`,
                    `Esta raíz cuadrada no es exacta. Calculamos su valor aproximado.<br>
                     <strong>√${number} ≈ ${approxRoot.toFixed(3)}</strong>`,
                    `√${number} ≈ ${approxRoot.toFixed(3)}`
                );
                result = result.replace(`√${number}`, approxRoot.toFixed(3));
            }
        }

        return result;
    }

    /**
     * Evalúa potencias en la expresión
     */
    evaluatePowers(expr) {
        let result = expr;

        // Potencias al cubo
        const cubePattern = /(\d+(?:\.\d+)?)³/g;
        const cubeMatches = [...expr.matchAll(cubePattern)];
        for (let match of cubeMatches) {
            const base = parseFloat(match[1]);
            const cubed = Math.pow(base, 3);

            this.addStep(
                `Calculamos ${base}³`,
                `Elevamos ${base} al cubo: ${base} × ${base} × ${base}<br>
                 <strong>${base}³ = ${cubed}</strong>`,
                `${base}³ = ${cubed}`
            );
            result = result.replace(`${base}³`, cubed.toString());
        }

        // Potencias al cuadrado
        const squarePattern = /(\d+(?:\.\d+)?)²/g;
        const squareMatches = [...result.matchAll(squarePattern)];
        for (let match of squareMatches) {
            const base = parseFloat(match[1]);
            const squared = Math.pow(base, 2);

            this.addStep(
                `Calculamos ${base}²`,
                `Elevamos ${base} al cuadrado: ${base} × ${base}<br>
                 <strong>${base}² = ${squared}</strong>`,
                `${base}² = ${squared}`
            );
            result = result.replace(`${base}²`, squared.toString());
        }

        return result;
    }

    /**
     * Evalúa multiplicaciones y divisiones
     */
    evaluateMultiplicationDivision(expr) {
        const pattern = /(\d+(?:\.\d+)?)\s*([*/])\s*(\d+(?:\.\d+)?)/;
        let result = expr;
        let hasOperations = true;

        while (hasOperations) {
            const match = pattern.exec(result);
            if (!match) {
                hasOperations = false;
                break;
            }

            const num1 = parseFloat(match[1]);
            const operator = match[2];
            const num2 = parseFloat(match[3]);
            let opResult;
            let opName;

            if (operator === '*') {
                opResult = num1 * num2;
                opName = 'multiplicación';
            } else {
                opResult = num1 / num2;
                opName = 'división';
            }

            this.addStep(
                `Realizamos ${opName}: ${num1} ${operator === '*' ? '×' : '÷'} ${num2}`,
                `Según PEMDAS, resolvemos multiplicaciones y divisiones de izquierda a derecha.<br>
                 <strong>${num1} ${operator === '*' ? '×' : '÷'} ${num2} = ${opResult}</strong>`,
                `${num1} ${operator === '*' ? '×' : '÷'} ${num2} = ${opResult}`
            );

            result = result.replace(match[0], opResult.toString());
        }

        return result;
    }

    /**
     * Evalúa sumas y restas
     */
    evaluateAdditionSubtraction(expr) {
        const pattern = /(\d+(?:\.\d+)?)\s*([+\-])\s*(\d+(?:\.\d+)?)/;
        let result = expr;
        let hasOperations = true;

        while (hasOperations) {
            const match = pattern.exec(result);
            if (!match) {
                hasOperations = false;
                break;
            }

            const num1 = parseFloat(match[1]);
            const operator = match[2];
            const num2 = parseFloat(match[3]);
            let opResult;
            let opName;

            if (operator === '+') {
                opResult = num1 + num2;
                opName = 'suma';
            } else {
                opResult = num1 - num2;
                opName = 'resta';
            }

            this.addStep(
                `Realizamos ${opName}: ${num1} ${operator} ${num2}`,
                `Finalmente, resolvemos sumas y restas de izquierda a derecha.<br>
                 <strong>${num1} ${operator} ${num2} = ${opResult}</strong>`,
                `${num1} ${operator} ${num2} = ${opResult}`
            );

            result = result.replace(match[0], opResult.toString());
        }

        // Verificar si el resultado es un número válido
        const finalResult = parseFloat(result);
        if (isNaN(finalResult)) {
            throw new Error("No se pudo obtener un resultado numérico válido");
        }

        return finalResult;
    }

    /**
     * Evalúa expresiones simples sin pasos detallados
     */
    evaluateSimpleExpression(expr) {
        try {
            // Método seguro para evaluar expresiones matemáticas simples
            return new Function('return ' + expr)();
        } catch (error) {
            throw new Error("Expresión matemática inválida");
        }
    }

    /**
     * Busca raíces cúbicas exactas
     */
    findCubeRoot(number) {
        return this.cubeRoots[number] || null;
    }

    /**
     * Busca raíces cuadradas exactas
     */
    findSquareRoot(number) {
        return this.squareRoots[number] || null;
    }

    /**
     * Método de utilidad para formatear números
     */
    formatNumber(num) {
        if (Number.isInteger(num)) {
            return num.toString();
        }
        return parseFloat(num.toFixed(3)).toString();
    }

    /**
     * Valida si una expresión tiene paréntesis balanceados
     */
    hasBalancedParentheses(expr) {
        let count = 0;
        for (let char of expr) {
            if (char === '(') count++;
            if (char === ')') count--;
            if (count < 0) return false;
        }
        return count === 0;
    }

    /**
     * Método para limpiar y resetear el parser
     */
    reset() {
        this.steps = [];
        this.currentStep = 1;
    }
}
