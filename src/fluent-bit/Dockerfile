FROM fluent/fluent-bit

WORKDIR /fluent-bit/etc/

COPY ./conf/fluent-bit.conf /fluent-bit/etc/fluent-bit.conf

EXPOSE 24224 24224/udp

CMD ["/fluent-bit/bin/fluent-bit", "-c", "/fluent-bit/etc/fluent-bit.conf"]