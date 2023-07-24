import { filename } from '~/support/strings';

export const cleanFilename = (filename) =>
  filename
    .replace(/\.[^/.]+$/, '')
    .replace(/\.[/]+/, '')
    .trim();

export const filenameFromPath = (path, split = '_') =>
  cleanFilename(path?.split(split)[0]).trim();

export const filenameGetHref = (filename) => {
  if (filename.split('_').length <= 1) {
    return null;
  }

  const link = cleanFilename(filename.split('_')[1]).trim();

  return `https://${link}/`;
};

export const getFromContext = (files, extension, fn = null) => {
  const modules = [];

  for (const src in files) {
    modules.push({
      src,
      name: filename(src, extension),
      ...(fn ? fn(src, extension) : {}),
    });
  }

  return modules;
};

export const loadClients = () => {
  return getFromContext(import.meta.glob('~/assets/images/clients/*.*'), '.*');
};

export const loadPartners = () => {
  return getFromContext(import.meta.glob('~/assets/images/partners/*.*'), '.*');
};

export const loadTools = (fn = () => {}) => {
  return getFromContext(
    import.meta.glob('~/assets/images/tools/**/*.svg'),
    '.svg',
    fn
  );
};
