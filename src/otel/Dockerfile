FROM otel/opentelemetry-collector-contrib:latest

WORKDIR "/etc/"

COPY otel-collector-config.yaml /etc/otel/config.yaml

EXPOSE 4317 55680 55679

CMD [ "--config", "/etc/otel/config.yaml" ]