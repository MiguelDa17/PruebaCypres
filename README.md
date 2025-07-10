# 🧪 Prueba Técnica QA - Automatización con Cypress

Este proyecto contiene la automatización de pruebas funcionales para un flujo de autenticación y búsqueda de filtro embarques en la plataforma [Selaski](https://www.selaski.com). Se han implementado tanto pruebas positivas como negativas utilizando Cypress.

---

## 📌 Requerimientos

- Node.js (v14+)
- Cypress (`^14.5.1`)
- NPM

---

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/MiguelDa17/PruebaCypres.git

# Entrar al proyecto
cd PruebaCypres

# Instalar dependencias
npm install
🧪 Casos de prueba implementados
✅ Login exitoso y búsqueda de embarque válido

Ingreso correcto de PIN.

Selección de filtro por "Embarque".

Búsqueda del embarque "Prueba 1".

Validación de resultados esperados.

❌ Login con PIN incorrecto

Ingreso de PIN inválido.

Validación de mensaje de error correspondiente.

🔍 Búsqueda de embarque inexistente

Login exitoso.

Selección del filtro "Embarque".

Ingreso del nombre de embarque no registrado.

Validación de que no aparezcan resultados.

🎥 Evidencia en video
Todos los escenarios fueron ejecutados y grabados. Puedes ver los videos directamente desde Google Drive:

📁 Carpeta pública de evidencias
🔗 Ver videos en Drive https://drive.google.com/drive/folders/1JfcmSo922DwAYNMar3taVRZuHfDeVKSH

📄 Datos utilizados
Los datos de prueba están centralizados en cypress/fixtures/datos.json:


{
  "pinCorrecto": "5569",
  "pinInvalido": "1234",
  "embarqueValido": "Prueba 1",
  "embarqueInexistente": "Prueba sin resultados"
}

▶️ Ejecución de pruebas
Ejecutar en modo interactivo (UI):



npx cypress open
Ejecutar en modo headless con Chrome:

npx cypress run --browser chrome
Los videos de la ejecución se almacenarán automáticamente en la carpeta /cypress/videos.

👨‍💻 Autor
Miguel Dávila
🔗 GitHub: https://github.com/MiguelDa17

📌 Notas
Las pruebas se ejecutan en entorno headless o visual.

Se utilizaron validaciones condicionales y tiempos de espera adecuados para adaptarse a la latencia del sistema.

El objetivo fue verificar funcionalidades clave con claridad, mantenibilidad y automatización estable.