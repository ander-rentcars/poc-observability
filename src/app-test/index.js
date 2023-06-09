// definir intervalo de impressão de log
const logInterval = 1000; // 1 segundo

// contador de logs
let logCounter = 1;

// imprimir log intermitente
setInterval(() => {
  console.log(`Log ${logCounter++}`);
}, logInterval);

// imprimir log intermitente
setInterval(() => {
  console.error(`Log error ${logCounter++}`);
}, logInterval * 1.5);

// imprimir log intermitente
setInterval(() => {
  console.debug(`Log error ${logCounter++}`);
}, logInterval * 2);