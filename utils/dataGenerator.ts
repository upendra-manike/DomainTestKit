export const DataGenerator = {
  randomEmail(prefix = 'user'): string {
    const suffix = Math.random().toString(36).slice(2, 10);
    return `${prefix}.${suffix}@example.test`;
  },
  randomId(prefix = 'id'): string {
    const suffix = Math.random().toString(36).slice(2, 10);
    return `${prefix}-${suffix}`;
  }
};
