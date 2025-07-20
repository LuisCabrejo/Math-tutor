/**
 * MATH TUTOR - SCRIPT PRINCIPAL
 * Maneja todas las interacciones de la interfaz y la lógica de resolución
 */

// Inicialización del parser matemático
const mathParser = new MathParser();

// Variables globales
let currentExpression = "";
let solutionVisible = false;

/**
 * Inicialización cuando se carga la página
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🧮 Math Tutor cargado correctamente!');
    console.log('✨ Ejemplos disponibles:', quickExamples.map(ex => ex.expression).join(', '));

    // Mostrar mensaje de bienvenida
    showWelcomeMessage();

    // Configurar eventos del teclado
    setupKeyboardEvents();

    // Configurar el sticky scroll behavior
    setupStickyBehavior();

    // Mostrar tips educativos aleatorios cada 30 segundos
    startEducationalTips();
});

/**
 * Muestra mensaje de bienvenida educativo
 */
function showWelcomeMessage() {
    const solutionDiv = document.getElementById('solution');
    const randomTip = educationalMessages.tips[Math.floor(Math.random() * educationalMessages.tips.length)];

    solutionDiv.innerHTML = `
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 25px; border-radius: 15px; text-align: center;">
            <h2>🎓 ${educationalMessages.welcome}</h2>
            <p style="font-size: 1.1rem; margin: 15px 0;">${educationalMessages.pemdas}</p>
            <p style="font-size: 1rem; opacity: 0.9;">${randomTip}</p>
            <div style="margin-top: 20px; font-size: 0.9rem; opacity: 0.8;">
                <strong>Ejemplos rápidos:</strong> ${quickExamples.map(ex => ex.expression).join(', ')}
            </div>
        </div>
    `;
    solutionDiv.style.display = 'block';
}

/**
 * Resuelve un ejercicio predefinido
 */
function solveExercise(exerciseNumber) {
    const exercise = predefinedExercises[exerciseNumber];
    if (!exercise) {
        showError("Ejercicio no encontrado. Por favor, selecciona un ejercicio válido.");
        return;
    }

    currentExpression = exercise.expression;
    showStickyExpression(exercise.expression);
    displayPredefinedSolution(exercise);

    // Scroll suave a la solución
    setTimeout(() => {
        document.getElementById('solution').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

/**
 * Resuelve una expresión personalizada
 */
function solveCustom() {
    const input = document.getElementById('customExpression');
    const expression = input.value.trim();

    if (!expression) {
        showError("¡Ups! 😅 Parece que olvidaste escribir una expresión matemática. ¿Qué tal si pruebas con algo como ∛27+√16?");
        input.focus();
        return;
    }

    // Validación básica
    if (!isValidInput(expression)) {
        showError("🤔 Esta expresión contiene caracteres que no reconozco. Usa solo números, +, -, ×, ÷, √, ∛, ², ³ y paréntesis.");
        input.focus();
        return;
    }

    currentExpression = expression;
    showStickyExpression(expression);

    // Mostrar indicador de carga
    showLoadingState();

    // Resolver con un pequeño delay para mostrar la animación
    setTimeout(() => {
        const result = mathParser.evaluateCustomExpression(expression);

        if (result.success) {
            displayCustomSolution(result.steps, result.result, expression);
            showSuccessMessage();
        } else {
            showError(result.error || "No pude resolver esta expresión. ¿Podrías verificar que esté bien escrita? 🤓");
        }
    }, 500);
}

/**
 * Valida la entrada del usuario
 */
function isValidInput(expr) {
    // Patrón que permite números, operadores básicos, raíces, potencias y paréntesis
    const validPattern = /^[0-9+\-*/()√∛²³×÷\s\.]+$/;

    // Verificar caracteres válidos
    if (!validPattern.test(expr)) return false;

    // Verificar paréntesis balanceados
    let parenthesesCount = 0;
    for (let char of expr) {
        if (char === '(') parenthesesCount++;
        if (char === ')') parenthesesCount--;
        if (parenthesesCount < 0) return false;
    }

    return parenthesesCount === 0;
}

/**
 * Inserta un símbolo en el input
 */
function insertSymbol(symbol) {
    const input = document.getElementById('customExpression');
    const cursorPos = input.selectionStart;
    const textBefore = input.value.substring(0, cursorPos);
    const textAfter = input.value.substring(cursorPos);

    input.value = textBefore + symbol + textAfter;
    input.focus();
    input.setSelectionRange(cursorPos + symbol.length, cursorPos + symbol.length);

    // Pequeña animación visual en el botón presionado
    const buttons = document.querySelectorAll('.symbol-btn');
    buttons.forEach(btn => {
        if (btn.textContent === symbol) {
            btn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        }
    });
}

/**
 * Maneja la tecla Enter en el input
 */
function handleEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        solveCustom();
    }
}

/**
 * Muestra la expresión sticky
 */
function showStickyExpression(expression) {
    const sticky = document.getElementById('stickyExpression');
    sticky.innerHTML = `
        <span style="opacity: 0.8;">📝 Resolviendo:</span>
        <strong style="font-size: 1.2rem;">${expression}</strong>
        <span style="float: right; opacity: 0.7; font-size: 0.9rem;">PEMDAS</span>
    `;
    sticky.style.display = 'block';

    // Animación de entrada
    sticky.style.opacity = '0';
    sticky.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        sticky.style.transition = 'all 0.5s ease';
        sticky.style.opacity = '1';
        sticky.style.transform = 'translateY(0)';
    }, 50);
}

/**
 * Muestra la solución de un ejercicio predefinido
 */
function displayPredefinedSolution(exercise) {
    const solutionDiv = document.getElementById('solution');

    // Crear HTML para los pasos
    const stepsHTML = exercise.steps.map((step, index) => `
        <div class="step" style="animation-delay: ${index * 0.1}s">
            <h3>${step.title}</h3>
            <div class="step-content">
                <p>${step.content}</p>
                <div class="calculation">${step.calculation}</div>
                ${step.tips ? `<div style="margin-top: 10px; font-size: 0.9rem; color: #666;">${step.tips.join('<br>')}</div>` : ''}
            </div>
        </div>
    `).join('');

    // Crear HTML para tips adicionales
    const tipsHTML = exercise.tips ? `
        <div style="background: linear-gradient(135deg, #a8edea, #fed6e3); padding: 20px; border-radius: 12px; margin: 20px 0;">
            <h3 style="color: #4facfe; margin-bottom: 15px;">🎯 Consejos Importantes</h3>
            ${exercise.tips.map(tip => `<p style="margin: 8px 0;">${tip}</p>`).join('')}
        </div>
    ` : '';

    solutionDiv.innerHTML = `
        <div style="text-align: center; margin-bottom: 25px;">
            <h2>🎉 Solución Paso a Paso</h2>
            <div style="background: rgba(255,255,255,0.8); padding: 15px; border-radius: 10px; margin: 10px 0;">
                <strong style="color: #667eea;">Dificultad:</strong> ${exercise.difficulty} |
                <strong style="color: #667eea;">Descripción:</strong> ${exercise.description}
            </div>
        </div>
        ${stepsHTML}
        ${tipsHTML}
        <div class="result">
            🏆 ¡Resultado Final: <span style="font-size: 1.8rem;">${exercise.result}</span>!
        </div>
        <div style="text-align: center; margin-top: 20px;">
            <button onclick="tryAnotherExercise()" style="background: linear-gradient(135deg, #4facfe, #00f2fe); color: white; border: none; padding: 15px 30px; border-radius: 10px; cursor: pointer; font-size: 1rem; font-weight: bold;">
                🎯 Probar Otro Ejercicio
            </button>
        </div>
    `;

    solutionDiv.style.display = 'block';
    solutionVisible = true;
}

/**
 * Muestra la solución de una expresión personalizada
 */
function displayCustomSolution(steps, result, expression) {
    const solutionDiv = document.getElementById('solution');

    const stepsHTML = steps.map((step, index) => `
        <div class="step" style="animation-delay: ${index * 0.1}s">
            <h3>${step.title}</h3>
            <div class="step-content">
                <p>${step.content}</p>
                <div class="calculation">${step.calculation}</div>
            </div>
        </div>
    `).join('');

    // Mensaje personalizado basado en el resultado
    const encouragement = educationalMessages.encouragement[Math.floor(Math.random() * educationalMessages.encouragement.length)];
    const randomTip = educationalMessages.tips[Math.floor(Math.random() * educationalMessages.tips.length)];

    solutionDiv.innerHTML = `
        <div style="text-align: center; margin-bottom: 25px;">
            <h2>🎉 ¡Tu Solución Personalizada!</h2>
            <p style="color: #666; font-size: 1.1rem;">${encouragement}</p>
        </div>
        ${stepsHTML}
        <div class="result">
            🏆 ¡Resultado Final: <span style="font-size: 1.8rem;">${result}</span>!
        </div>
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 20px; border-radius: 12px; margin-top: 20px; text-align: center;">
            <p>${randomTip}</p>
        </div>
        <div style="text-align: center; margin-top: 20px;">
            <button onclick="clearAndTryAgain()" style="background: linear-gradient(135deg, #ff6b6b, #feca57); color: white; border: none; padding: 15px 30px; border-radius: 10px; cursor: pointer; font-size: 1rem; font-weight: bold; margin-right: 10px;">
                ✏️ Intentar Otro
            </button>
            <button onclick="showExamples()" style="background: linear-gradient(135deg, #4facfe, #00f2fe); color: white; border: none; padding: 15px 30px; border-radius: 10px; cursor: pointer; font-size: 1rem; font-weight: bold;">
                💡 Ver Ejemplos
            </button>
        </div>
    `;

    solutionDiv.style.display = 'block';
    solutionVisible = true;
}

/**
 * Muestra estado de carga
 */
function showLoadingState() {
    const solutionDiv = document.getElementById('solution');
    solutionDiv.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="display: inline-block; animation: pulse 1.5s infinite;">
                <div style="font-size: 3rem;">🧮</div>
                <p style="font-size: 1.2rem; color: #667eea; margin-top: 10px;">
                    <strong>Resolviendo paso a paso...</strong>
                </p>
                <div style="margin-top: 20px;">
                    <div style="display: inline-block; width: 40px; height: 4px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 2px; animation: loading 1.5s infinite;"></div>
                </div>
            </div>
        </div>
        <style>
            @keyframes loading {
                0% { transform: scaleX(0.3); }
                50% { transform: scaleX(1); }
                100% { transform: scaleX(0.3); }
            }
        </style>
    `;
    solutionDiv.style.display = 'block';
}

/**
 * Muestra mensaje de éxito
 */
function showSuccessMessage() {
    // Pequeña celebración visual
    createConfetti();

    // Sonido de éxito (si el navegador lo permite)
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQtAjiL1PDXeSsFJJDK7+OZSA0PVqzn77BTGQxDld/35WQtBjqBzvLYiTYIG');
        audio.volume = 0.1;
        audio.play().catch(() => {}); // Ignora errores si no se puede reproducir
    } catch (e) {}
}

/**
 * Muestra mensaje de error educativo
 */
function showError(message) {
    const solutionDiv = document.getElementById('solution');
    const randomTip = educationalMessages.tips[Math.floor(Math.random() * educationalMessages.tips.length)];

    solutionDiv.innerHTML = `
        <div class="error">
            <div style="font-size: 2rem; margin-bottom: 10px;">🤔</div>
            <div style="font-size: 1.1rem; margin-bottom: 15px;">${message}</div>
            <div style="font-size: 0.9rem; opacity: 0.9; border-top: 2px solid rgba(255,255,255,0.3); padding-top: 15px; margin-top: 15px;">
                ${randomTip}
                <br><br>
                <strong>✨ Ejemplos que siempre funcionan:</strong><br>
                ${quickExamples.map(ex => `${ex.expression} = ${ex.result}`).join(' • ')}
            </div>
        </div>
    `;
    solutionDiv.style.display = 'block';
}

/**
 * Funciones auxiliares para botones
 */
function tryAnotherExercise() {
    document.getElementById('customExpression').focus();
    document.querySelector('.custom-input-section').scrollIntoView({ behavior: 'smooth' });
}

function clearAndTryAgain() {
    const input = document.getElementById('customExpression');
    input.value = '';
    input.focus();
    document.querySelector('.custom-input-section').scrollIntoView({ behavior: 'smooth' });
}

function showExamples() {
    const solutionDiv = document.getElementById('solution');
    solutionDiv.innerHTML = `
        <div style="background: linear-gradient(135deg, #a8edea, #fed6e3); padding: 25px; border-radius: 15px;">
            <h2 style="text-align: center; color: #4facfe; margin-bottom: 25px;">💡 Ejemplos Paso a Paso</h2>
            ${quickExamples.map(ex => `
                <div style="background: white; padding: 20px; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                    <div style="font-size: 1.3rem; font-weight: bold; color: #667eea; margin-bottom: 10px;">
                        ${ex.expression} = ${ex.result}
                    </div>
                    <div style="color: #666; font-size: 1rem;">
                        ${ex.explanation}
                    </div>
                    <button onclick="document.getElementById('customExpression').value='${ex.expression}'; solveCustom();"
                            style="background: linear-gradient(135deg, #4facfe, #00f2fe); color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer; font-size: 0.9rem; margin-top: 10px;">
                        🎯 Resolver Este
                    </button>
                </div>
            `).join('')}
        </div>
    `;
}

/**
 * Configuración de eventos del teclado
 */
function setupKeyboardEvents() {
    document.addEventListener('keydown', function(event) {
        // Atajos de teclado útiles
        if (event.ctrlKey || event.metaKey) {
            switch(event.key) {
                case 'Enter':
                    event.preventDefault();
                    solveCustom();
                    break;
                case 'k':
                    event.preventDefault();
                    document.getElementById('customExpression').focus();
                    break;
            }
        }
    });
}

/**
 * Configuración del comportamiento sticky
 */
function setupStickyBehavior() {
    let isFixed = false;

    window.addEventListener('scroll', function() {
        const sticky = document.getElementById('stickyExpression');

        if (sticky.style.display === 'block') {
            const scrollY = window.scrollY;
            const threshold = 200;

            if (scrollY > threshold && !isFixed) {
                // Cambiar a posición fija
                sticky.style.position = 'fixed';
                sticky.style.top = '10px';
                sticky.style.left = '50%';
                sticky.style.transform = 'translateX(-50%)';
                sticky.style.maxWidth = '90%';
                sticky.style.zIndex = '1000';
                sticky.style.animation = 'slideIn 0.3s ease-out';
                isFixed = true;
            } else if (scrollY <= threshold && isFixed) {
                // Volver a posición sticky
                sticky.style.position = 'sticky';
                sticky.style.top = '20px';
                sticky.style.left = 'auto';
                sticky.style.transform = 'none';
                sticky.style.maxWidth = 'none';
                isFixed = false;
            }
        }
    });
}

/**
 * Sistema de tips educativos rotativos
 */
function startEducationalTips() {
    // Mostrar un tip cada 30 segundos solo si no hay solución visible
    setInterval(() => {
        if (!solutionVisible) {
            const randomTip = educationalMessages.tips[Math.floor(Math.random() * educationalMessages.tips.length)];
            showTemporaryTip(randomTip);
        }
    }, 30000);
}

function showTemporaryTip(tip) {
    // Crear elemento flotante temporal
    const tipElement = document.createElement('div');
    tipElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4facfe, #00f2fe);
        color: white;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1001;
        max-width: 300px;
        font-size: 0.9rem;
        animation: slideInRight 0.5s ease-out;
    `;
    tipElement.innerHTML = tip;

    document.body.appendChild(tipElement);

    // Remover después de 5 segundos
    setTimeout(() => {
        tipElement.style.animation = 'slideOutRight 0.5s ease-in';
        setTimeout(() => {
            document.body.removeChild(tipElement);
        }, 500);
    }, 5000);
}

/**
 * Efecto de confeti para celebraciones
 */
function createConfetti() {
    const colors = ['#ff6b6b', '#4facfe', '#00f2fe', '#feca57', '#48dbfb', '#ff9ff3'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: -10px;
                left: ${Math.random() * 100}vw;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                pointer-events: none;
                z-index: 1000;
                animation: confettiFall 3s linear forwards;
            `;

            document.body.appendChild(confetti);

            setTimeout(() => {
                document.body.removeChild(confetti);
            }, 3000);
        }, i * 50);
    }
}

// CSS adicional para animaciones
const additionalStyles = `
    <style>
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }

        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);
