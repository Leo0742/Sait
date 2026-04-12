import pino from "pino";

export function createLogger(service: string, level: string = "info") {
  return pino({ name: service, level, base: { service } });
}
