// Require dependencies
const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-http");
const { containerDetector } = require('@opentelemetry/resource-detector-container')
const { envDetector, hostDetector, osDetector, processDetector } = require('@opentelemetry/resources')
//const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc')

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter({
    // optional - default url is http://localhost:4318/v1/traces
    url: "http://otel-collector:4318/v1/traces",
    // optional - collection of custom headers to be sent with each request, empty by default
    headers: {},
  }),
  instrumentations: [getNodeAutoInstrumentations()],
  resourceDetectors: [
    containerDetector,
    envDetector, 
    hostDetector, 
    osDetector, 
    processDetector
  ]
});

sdk.start()