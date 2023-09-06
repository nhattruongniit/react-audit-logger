/* eslint-disable no-unused-vars */
export const defaultsOptions = {
  level: "log",
  logger: console,
  logErrors: true,
  collapsed: undefined,
  predicate: undefined,
  duration: false,
  timestamp: true,
  stateTransformer: (state) => state,
  actionTransformer: (action) => action,
  errorTransformer: (error) => error,
  colors: {
    title: () => "inherit",
    prevState: () => "#9E9E9E",
    action: () => "#03A9F4",
    nextState: () => "#4CAF50",
    error: () => "#F20404",
  },
  diff: false,
  diffPredicate: undefined,

  // Deprecated options
  transformer: undefined,
};
class AuditLogger {
  constructor() {}

  createLogger(
    payload = {
      action: "click",
      baseUrl: "",
      datetime: new Date().toUTCString(),
    }
  ) {
    const loggerOptions = Object.assign({}, defaultsOptions);

    const {
      logger,
      stateTransformer,
      errorTransformer,
      predicate,
      logErrors,
      diffPredicate,
    } = loggerOptions;

    if (typeof logger === "undefined") {
      return () => (next) => (action) => next(action);
    }

    const logBuffer = [];

    return ({ getState }) =>
      (next) =>
      (action) => {
        let returnedValue = 10;
        return returnedValue;
      };
  }
}

const auditLogger = new AuditLogger();

export default auditLogger;
