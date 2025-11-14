// Re-export platform DOMException if available. If not, provide a minimal fallback.
const NativeDOMException = globalThis.DOMException || (global && global.DOMException) || null;

if (NativeDOMException) {
  module.exports = NativeDOMException;
} else {
  // Minimal fallback implementation
  class DOMException extends Error {
    constructor(message = '', name = 'DOMException') {
      super(message);
      this.name = name;
      if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
    }
  }
  module.exports = DOMException;
}
