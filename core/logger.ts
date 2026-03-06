export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

export class Logger {
  static log(level: LogLevel, message: string, meta?: Record<string, unknown>): void {
    const timestamp = new Date().toISOString();
    const payload = meta ? ` ${JSON.stringify(meta)}` : '';
    // Centralized log format keeps local and CI logs consistent.
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}${payload}`);
  }

  static info(message: string, meta?: Record<string, unknown>): void {
    this.log('info', message, meta);
  }

  static warn(message: string, meta?: Record<string, unknown>): void {
    this.log('warn', message, meta);
  }

  static error(message: string, meta?: Record<string, unknown>): void {
    this.log('error', message, meta);
  }

  static debug(message: string, meta?: Record<string, unknown>): void {
    this.log('debug', message, meta);
  }
}
