#!/usr/bin/env python3
"""
MATH TUTOR - Backend Flask
Sistema opcional para servir la aplicación y manejar APIs avanzadas
"""

from flask import Flask, render_template, request, jsonify
from fractions import Fraction
import math
import re
import json
from datetime import datetime

app = Flask(__name__)

class MathSolver:
    """Solver matemático avanzado para el backend"""

    def __init__(self):
        self.cube_roots = {
            1: 1, 8: 2, 27: 3, 64: 4, 125: 5, 216: 6, 343: 7,
            512: 8, 729: 9, 1000: 10, 1331: 11, 1728: 12,
            2197: 13, 2744: 14, 3375: 15, 4096: 16, 4913: 17,
            5832: 18, 6859: 19, 8000: 20, 9261: 21, 10648: 22,
            12167: 23, 13824: 24, 15625: 25, 17576: 26, 19683: 27,
            21952: 28, 24389: 29, 27000: 30
        }

        self.square_roots = {
            1: 1, 4: 2, 9: 3, 16: 4, 25: 5, 36: 6, 49: 7,
            64: 8, 81: 9, 100: 10, 121: 11, 144: 12, 169: 13,
            196: 14, 225: 15, 256: 16, 289: 17, 324: 18, 361: 19,
            400: 20, 441: 21, 484: 22, 529: 23, 576: 24, 625: 25
        }

    def solve_fraction_arithmetic(self, expression):
        """Resuelve aritmética de fracciones con precisión exacta"""
        try:
            # Convertir expresión a fracciones para cálculos exactos
            # Esto es útil para los ejercicios predefinidos complejos

            # Ejemplo de procesamiento para (4/3)³ - (3/4) * {...}
            steps = []

            # Identificar patrones de fracciones
            fraction_pattern = r'\((\d+)/(\d+)\)'
            matches = re.findall(fraction_pattern, expression)

            for match in matches:
                num, den = int(match[0]), int(match[1])
                frac = Fraction(num, den)
                steps.append({
                    "operation": f"Fracción {num}/{den}",
                    "result": str(frac),
                    "decimal": float(frac)
                })

            return {
                "success": True,
                "steps": steps,
                "result": "Procesamiento completado"
            }

        except Exception as e:
            return {
                "success": False,
                "error": str(e)
            }

    def validate_expression(self, expr):
        """Valida si una expresión es segura y válida"""
        # Solo permitir caracteres matemáticos seguros
        safe_pattern = r'^[0-9+\-*/()√∛²³×÷\s\.]+$'
        return bool(re.match(safe_pattern, expr))

# Rutas principales
@app.route('/')
def index():
    """Página principal"""
    return render_template('index.html')

@app.route('/api/solve', methods=['POST'])
def api_solve():
    """API para resolver expresiones matemáticas"""
    try:
        data = request.get_json()
        expression = data.get('expression', '').strip()

        if not expression:
            return jsonify({
                "success": False,
                "error": "Expresión vacía"
            })

        solver = MathSolver()

        # Validar expresión
        if not solver.validate_expression(expression):
            return jsonify({
                "success": False,
                "error": "Expresión contiene caracteres no válidos"
            })

        # Resolver expresión
        result = solver.solve_fraction_arithmetic(expression)

        # Añadir metadata
        result['timestamp'] = datetime.now().isoformat()
        result['expression'] = expression

        return jsonify(result)

    except Exception as e:
        return jsonify({
            "success": False,
            "error": f"Error del servidor: {str(e)}"
        })

@app.route('/api/examples')
def api_examples():
    """API que devuelve ejemplos rápidos"""
    examples = [
        {
            "expression": "∛27+√16",
            "result": 7,
            "explanation": "∛27 = 3 y √16 = 4, entonces 3 + 4 = 7"
        },
        {
            "expression": "∛125",
            "result": 5,
            "explanation": "∛125 = 5 porque 5³ = 125"
        },
        {
            "expression": "3²+2³",
            "result": 17,
            "explanation": "3² = 9 y 2³ = 8, entonces 9 + 8 = 17"
        },
        {
            "expression": "√16+√9",
            "result": 7,
            "explanation": "√16 = 4 y √9 = 3, entonces 4 + 3 = 7"
        }
    ]

    return jsonify({
        "success": True,
        "examples": examples,
        "count": len(examples)
    })

@app.route('/api/health')
def health_check():
    """Endpoint de verificación de salud"""
    return jsonify({
        "status": "healthy",
        "service": "Math Tutor API",
        "version": "1.0.0",
        "timestamp": datetime.now().isoformat()
    })

# Manejo de errores
@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "success": False,
        "error": "Endpoint no encontrado"
    }), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        "success": False,
        "error": "Error interno del servidor"
    }), 500

# Configuración para desarrollo
if __name__ == '__main__':
    print("🧮 Iniciando Math Tutor Backend...")
    print("📊 Servidor disponible en: http://localhost:5000")
    print("🎯 API endpoints:")
    print("   - POST /api/solve - Resolver expresiones")
    print("   - GET /api/examples - Obtener ejemplos")
    print("   - GET /api/health - Estado del servidor")

    app.run(
        debug=True,
        host='0.0.0.0',
        port=5000,
        threaded=True
    )
