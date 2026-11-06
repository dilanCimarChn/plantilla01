# CAFÉ AROMA: sitio de demostración

Interfaz HTML/CSS/JavaScript con Vite, GSAP y formulario Firestore. El rediseño pendiente del propietario se mantiene como una unidad funcional; no se divide por archivo para generar commits.

## Ejecutar y validar

Con dependencias instaladas: `npm run dev` y `npm run build`. Para una instalación nueva usar `npm ci`. `package.json` y el paquete raíz de `package-lock.json` declaran cafe-aroma 2.0.0.

La vista de producto respeta movimiento reducido mediante una disposición de escenas apiladas. Comprobar manualmente preferencia reducida, móvil, menú, enlaces y formulario. El build no sustituye esa comprobación visual.

El formulario requiere una configuración Firebase y reglas de seguridad verificadas antes de usar datos reales. No se cambia ni despliega ninguna regla en esta revisión. La configuración pública del SDK no concede por sí misma acceso a Firestore.

Excluir de un futuro commit funcional ajustes locales de Claude/editor y cachés de Firebase. No se eliminaron atribuciones de IA ni se descartaron cambios en la copia original.
