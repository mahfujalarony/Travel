export const getAssetPath = (path: string): string => {
  const base = process.env.PUBLIC_URL || '';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBase}/${normalizedPath}`;
};
