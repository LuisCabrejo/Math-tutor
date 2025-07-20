# 🧮 Math Tutor - Sistema Educativo Completo

<div align="center">

![Math Tutor](https://img.shields.io/badge/Math%20Tutor-v1.0.0-blue?style=for-the-badge&logo=calculator)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)

**✨ Herramienta educativa web para estudiantes de 12-15 años que resuelve ejercicios matemáticos complejos con explicaciones paso a paso siguiendo la metodología PEMDAS ✨**

[🚀 Demo en Vivo](#) | [📖 Documentación](#características) | [🐛 Reportar Bug](#contribución)

</div>

## 🎯 Características Principales

### 🔧 **Sistema de Evaluación Matemática Robusto**
- ✅ **Parser inteligente** que maneja raíces, potencias y operaciones complejas
- ✅ **Evaluación segura** sin vulnerabilidades de código
- ✅ **Soporte completo** para:
  - **Raíces cúbicas:** ∛1, ∛8, ∛27, ∛64, ∛125, ∛216, ∛343, ∛512, ∛729, ∛1000
  - **Raíces cuadradas:** √1, √4, √9, √16, √25, √36, √49, √64, √81, √100
  - **Potencias:** 2², 3², 4², 5², 2³, 3³, 4³, 5³
  - **Operaciones combinadas:** suma, resta, multiplicación, división

### 🎯 **Ejercicios Educativos**
- **5 ejercicios predefinidos** con dificultad creciente ⭐⭐⭐⭐⭐
- **Sistema de ejercicios personalizados** para expresiones como:
  - `∛27+√16` → **7** ✅
  - `∛125` → **5** ✅
  - `3²+2³` → **17** ✅
  - `√16+√9` → **7** ✅

### 🎨 **Diseño Moderno y Atractivo**
- **Gradientes vibrantes** que motivan a los estudiantes
- **Animaciones suaves** con efectos hover y transformaciones
- **Emojis educativos** en cada paso (🔍, 📊, ⚡, 🎯)
- **Diseño responsivo** para móviles y tablets
- **Interfaz intuitiva** especialmente diseñada para niños

### 📚 **Sistema Educativo Completo**
- **Explicaciones paso a paso** siguiendo metodología PEMDAS
- **Tooltips educativos** con información contextual
- **Expresión sticky** que permanece visible durante el scroll
- **Mensajes de error educativos** con ejemplos útiles
- **Tips rotativos** para reforzar el aprendizaje

## 🚀 Instalación Rápida

### **Opción 1: Solo Frontend (Recomendado)**
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/math-tutor.git
cd math-tutor

# Abrir directamente en el navegador
open index.html
# O usar un servidor local simple
python -m http.server 8000
# Visitar: http://localhost:8000
```

### **Opción 2: Con Backend Flask (Opcional)**
```bash
# Instalar dependencias de Python
pip install flask

# Ejecutar el servidor
python app.py

# Visitar: http://localhost:5000
```

### **Opción 3: Usando Live Server (VS Code)**
1. Instalar extensión "Live Server" en VS Code
2. Abrir el proyecto en VS Code
3. Click derecho en `index.html` → "Open with Live Server"

## 📁 Estructura del Proyecto

```
math_tutor/
├── 📄 index.html                 # Página principal
├── 📁 css/
│   └── 🎨 style.css             # Estilos modernos y responsivos
├── 📁 js/
│   ├── 🧮 mathParser.js         # Parser matemático robusto
│   ├── 📊 exerciseData.js       # Datos de ejercicios predefinidos
│   └── ⚡ script.js             # Lógica principal e interacciones
├── 🐍 app.py                     # Backend Flask (opcional)
├── 📖 README.md                  # Esta documentación
├── 📦 package.json              # Configuración del proyecto
├── 🙈 .gitignore                # Archivos ignorados por Git
└── 📝 requirements.txt          # Dependencias de Python
```

## 🎮 Cómo Usar

### **1. Ejercicios Predefinidos**
- Haz clic en cualquier botón de ejercicio (📊, 🔍, ⚡, 🎪, 🚀)
- Observa la solución paso a paso con explicaciones detalladas
- Cada ejercicio tiene diferentes niveles de dificultad

### **2. Ejercicios Personalizados**
1. **Usa la paleta de símbolos:** √, ∛, ², ³, ×, ÷, (, ), /
2. **Escribe tu expresión:** Ejemplos como `∛27+√16`, `3²+2³`
3. **Presiona "Resolver"** o Enter
4. **Observa la solución** paso a paso

### **3. Ejemplos Rápidos**
```
✅ ∛27+√16 = 7     (∛27=3, √16=4, 3+4=7)
✅ ∛125 = 5        (5³ = 125)
✅ 3²+2³ = 17      (9 + 8 = 17)
✅ √16+√9 = 7      (4 + 3 = 7)
✅ ∛27+5 = 8       (3 + 5 = 8)
```

## 🛠️ Tecnologías Utilizadas

| Tecnología | Propósito | Versión |
|------------|-----------|---------|
| **HTML5** | Estructura semántica | Latest |
| **CSS3** | Diseño moderno y animaciones | Latest |
| **JavaScript** | Lógica de aplicación | ES6+ |
| **Python** | Backend opcional | 3.8+ |
| **Flask** | API REST opcional | 2.0+ |

## 🔧 Configuración Avanzada

### **Variables CSS Personalizables**
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-gradient: linear-gradient(135deg, #ff6b6b, #feca57);
  --success-gradient: linear-gradient(135deg, #56ab2f, #a8e6cf);
  --border-radius: 15px;
  --animation-speed: 0.3s;
}
```

### **Configuración del Parser Matemático**
```javascript
// En js/mathParser.js - Añadir nuevas raíces
this.cubeRoots = {
  // Añadir más valores según necesidad
  35937: 33, // 33³ = 35937
  // ...
};
```

## 📊 Ejercicios Predefinidos Incluidos

| Ejercicio | Dificultad | Descripción |
|-----------|------------|-------------|
| **Ejercicio 1** | ⭐⭐⭐⭐⭐ | `(4/3)³ - (3/4) * {-∛(2744/27000) - (8/5) * [-11/3 × 13/4 + 16/3 ÷ (-4/13)]}` |
| **Ejercicio 2** | ⭐⭐⭐⭐⭐ | `√(2744/3375) - (3/4) * {-(5/3)³ + (4/3) * [7/8 × (-15/2) + 9/5 ÷ (-3/12)]}` |
| **Ejercicio 3** | ⭐⭐⭐⭐ | `(3/4)³ - (5/2) * {-∛(8000/27000) - (4/3) * [-7/5 × 13/2 - 17/4 ÷ 2/9]}` |
| **Ejercicio 4** | ⭐⭐⭐⭐ | `(5/3)³ - (3/4) * {-∛(27000/8000) - (3/5) * [-7/5 × 13/3 - 11/4 ÷ 3/13]}` |
| **Ejercicio 5** | ⭐⭐⭐⭐⭐ | `(5/3)² - (7/2) * {-∛(2197/1000) - (3/4) * [7/5 × (-9/2) + 8/3 ÷ (-4/9)]}` |

## 🔍 API Endpoints (Si usas Flask)

### **POST /api/solve**
Resuelve una expresión matemática
```json
{
  "expression": "∛27+√16"
}
```

**Respuesta:**
```json
{
  "success": true,
  "result": 7,
  "steps": [...],
  "timestamp": "2024-01-15T10:30:00"
}
```

### **GET /api/examples**
Obtiene ejemplos rápidos
```json
{
  "success": true,
  "examples": [
    {
      "expression": "∛27+√16",
      "result": 7,
      "explanation": "∛27 = 3 y √16 = 4, entonces 3 + 4 = 7"
    }
  ]
}
```

### **GET /api/health**
Verificación de estado del servidor
```json
{
  "status": "healthy",
  "service": "Math Tutor API",
  "version": "1.0.0"
}
```

## 🎯 Metodología PEMDAS

Math Tutor sigue estrictamente la metodología **PEMDAS**:

1. **P**aréntesis - `()` `{}` `[]`
2. **E**xponentes - `²` `³` raíces `√` `∛`
3. **M**ultiplicación y **D**ivisión - `×` `÷` `*` `/`
4. **A**dición y **S**ustracción - `+` `-`

## 🚀 Despliegue

### **Vercel (Recomendado)**
1. Fork este repositorio
2. Conecta tu cuenta de GitHub a Vercel
3. Importa el proyecto
4. ¡Automáticamente desplegado!

### **Netlify**
1. Arrastra la carpeta del proyecto a netlify.com
2. O conecta tu repositorio de GitHub
3. Configuración automática

### **GitHub Pages**
1. Ve a Settings → Pages en tu repositorio
2. Source: Deploy from a branch
3. Branch: main / (root)

## 🐛 Solución de Problemas

### **Problema: "La expresión no se evalúa correctamente"**
- ✅ Verifica que uses solo símbolos matemáticos válidos
- ✅ Revisa que los paréntesis estén balanceados
- ✅ Comprueba la sintaxis: `∛27+5` no `∛27 + 5`

### **Problema: "Los estilos no se cargan"**
- ✅ Verifica que `css/style.css` existe
- ✅ Comprueba la ruta relativa en `index.html`
- ✅ Usa un servidor local en lugar de `file://`

### **Problema: "JavaScript no funciona"**
- ✅ Abre las herramientas de desarrollador (F12)
- ✅ Revisa la consola por errores
- ✅ Verifica que todos los archivos JS se carguen

## 🤝 Contribución

¡Las contribuciones son bienvenidas! 🎉

### **Cómo Contribuir:**
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

### **Áreas donde puedes ayudar:**
- 🧮 Añadir más tipos de operaciones matemáticas
- 🎨 Mejorar el diseño y UX
- 📚 Crear más ejercicios educativos
- 🌍 Añadir soporte multiidioma
- 📱 Optimizar para dispositivos móviles
- 🔧 Mejorar el parser matemático

## 📜 Licencia

Este proyecto está licenciado bajo la **MIT License** - ver el archivo [LICENSE](LICENSE) para detalles.

## 👥 Autores

- **Tu Nombre** - *Desarrollo inicial* - [TuGitHub](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- **Estudiantes de 12-15 años** por inspirar este proyecto
- **Comunidad educativa** por feedback valioso
- **Desarrolladores Open Source** por las herramientas increíbles

## 📞 Soporte

¿Necesitas ayuda? ¡Estamos aquí para ti!

- 📧 **Email:** soporte@mathtutor.com
- 💬 **Discord:** [Servidor Math Tutor](#)
- 🐛 **Issues:** [GitHub Issues](https://github.com/tu-usuario/math-tutor/issues)
- 📖 **Documentación:** [Wiki del Proyecto](#)

---

<div align="center">

**¡Hecho con ❤️ para hacer las matemáticas más divertidas!**

[⬆️ Volver arriba](#-math-tutor---sistema-educativo-completo)

</div>
