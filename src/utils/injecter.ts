import { inject } from "vue";

/**
 * Type을 갖는 inject
 * @param key
 * @param fallback
 * @returns injected object with type.
 */
function injectStrict<T>(key: string, fallback?: T) {
  const resolved = inject(key, fallback);
  if (!resolved) {
    throw new Error(`Could not resolve ${key}`);
  }

  return resolved;
}

export { injectStrict };
