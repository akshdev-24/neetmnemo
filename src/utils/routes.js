/**
 * NEET Mnemo — Route Matching and URL Synchronizer
 * Enables deep linking, HTML5 History API pushState, and canonical path resolution.
 */

export function parsePath(pathname = window.location.pathname) {
  // Strip trailing slashes
  const cleanPath = pathname.replace(/\/+$/, '') || '/';

  if (cleanPath === '/' || cleanPath === '') {
    return { route: 'home' };
  }

  if (cleanPath === '/subjects') {
    return { route: 'subjects' };
  }

  if (cleanPath === '/physics' || cleanPath === '/chemistry' || cleanPath === '/biology') {
    const subjectId = cleanPath.slice(1);
    return { route: subjectId, subjectId };
  }

  if (cleanPath === '/revision') {
    return { route: 'revision' };
  }

  if (cleanPath === '/quiz') {
    return { route: 'quiz' };
  }

  if (cleanPath === '/search') {
    return { route: 'search' };
  }

  if (cleanPath === '/favorites') {
    return { route: 'favorites' };
  }

  if (cleanPath === '/progress') {
    return { route: 'progress' };
  }

  if (cleanPath === '/about') {
    return { route: 'about' };
  }

  // /chapters/:chapterId
  const chapterMatch = cleanPath.match(/^\/chapters\/([^/]+)$/);
  if (chapterMatch) {
    return { route: 'chapter', chapterId: chapterMatch[1] };
  }

  // /mnemonics/:mnemonicId
  const mnemonicMatch = cleanPath.match(/^\/mnemonics\/([^/]+)$/);
  if (mnemonicMatch) {
    return { route: 'mnemonic', mnemonicId: mnemonicMatch[1] };
  }

  return { route: 'home' };
}

export function formatUrlForRoute({ route, subjectId, chapterId, mnemonicId }) {
  switch (route) {
    case 'home':
      return '/';
    case 'subjects':
      return '/subjects';
    case 'physics':
    case 'chemistry':
    case 'biology':
      return `/${route}`;
    case 'chapter':
      return chapterId ? `/chapters/${chapterId}` : '/subjects';
    case 'mnemonic':
      return mnemonicId ? `/mnemonics/${mnemonicId}` : '/subjects';
    case 'revision':
      return '/revision';
    case 'quiz':
      return '/quiz';
    case 'search':
      return '/search';
    case 'favorites':
      return '/favorites';
    case 'progress':
      return '/progress';
    case 'about':
      return '/about';
    default:
      return '/';
  }
}
