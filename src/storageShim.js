const PREFIX = 'nexora:';

function allKeys(prefixFilter) {
  const out = [];
  for (let i = 0; i < localStorage.length; i++) {
    const raw = localStorage.key(i);
    if (raw && raw.startsWith(PREFIX)) {
      const key = raw.slice(PREFIX.length);
      if (!prefixFilter || key.startsWith(prefixFilter)) out.push(key);
    }
  }
  return out;
}

export const storage = {
  async get(key) {
    const raw = localStorage.getItem(PREFIX + key);
    if (raw === null) throw new Error(`storage key not found: ${key}`);
    return { key, value: raw, shared: false };
  },
  async set(key, value) {
    localStorage.setItem(PREFIX + key, value);
    return { key, value, shared: false };
  },
  async delete(key) {
    localStorage.removeItem(PREFIX + key);
    return { key, deleted: true, shared: false };
  },
  async list(prefixFilter) {
    return { keys: allKeys(prefixFilter), prefix: prefixFilter, shared: false };
  },
};

if (typeof window !== 'undefined' && !window.storage) {
  window.storage = storage;
}
