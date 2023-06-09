// Require dependencies
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');
const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-http");
const { containerDetector } = require('@opentelemetry/resource-detector-container')
const { Resource, envDetector, hostDetector, osDetector, processDetector } = require('@opentelemetry/resources')
const { dockerCGroupV1Detector } = require('@opentelemetry/resource-detector-docker');
//const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc')

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter({
    // optional - default url is http://localhost:4318/v1/traces
    url: "http://otel-collector:4318/v1/traces",
    // optional - collection of custom headers to be sent with each request, empty by default
    headers: {},
  }),
  instrumentations: [getNodeAutoInstrumentations()],
  resourceDetectors: [
    dockerCGroupV1Detector,
    containerDetector,
    envDetector, 
    hostDetector, 
    osDetector, 
    processDetector
  ]
});

sdk.start()