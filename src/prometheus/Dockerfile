FROM prom/prometheus:latest

WORKDIR "/etc/"

COPY prometheus.yaml /etc/prometheus.yaml

CMD [ "--web.console.templates=/etc/prometheus/consoles", "--web.console.libraries=/etc/prometheus/console_libraries", "--storage.tsdb.retention.time=1h", "--config.file=/etc/prometheus.yaml", "--storage.tsdb.path=/prometheus", "--web.enable-lifecycle", "--web.route-prefix=/", "--web.enable-remote-write-receiver", "--enable-feature=exemplar-storage" ]