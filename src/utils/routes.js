/**
 * NEET Mnemo — Route Matching and URL Synchronizer (100% NEET Biology)
 * Enables deep linking, HTML5 History API pushState, and canonical path resolution.
 */

export function parsePath(pathname = window.location.pathname) {
  // Strip trailing slashes
  const cleanPath = pathname.replace(/\/+$/, '') || '/';

  if (cleanPath === '/' || cleanPath === '') {
    return { route: 'home' };
  }

  if (cleanPath === '/subjects' || cleanPath === '/chapters' || cleanPath === '/biology') {
    return { route: 'chapters', subjectId: 'biology' };
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
    return { route: 'about', tab: 'about' };
  }

  if (cleanPath === '/privacy') {
    return { route: 'about', tab: 'privacy' };
  }

  if (cleanPath === '/terms') {
    return { route: 'about', tab: 'terms' };
  }

  if (cleanPath === '/disclaimer') {
    return { route: 'about', tab: 'disclaimer' };
  }

  if (cleanPath === '/contact') {
    return { route: 'about', tab: 'contact' };
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

export function formatUrlForRoute({ route, subjectId, chapterId, mnemonicId, tab }) {
  switch (route) {
    case 'home':
      return '/';
    case 'chapters':
    case 'subjects':
    case 'biology':
      return '/chapters';
    case 'chapter':
      return chapterId ? `/chapters/${chapterId}` : '/chapters';
    case 'mnemonic':
      return mnemonicId ? `/mnemonics/${mnemonicId}` : '/chapters';
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
      if (tab === 'privacy') return '/privacy';
      if (tab === 'terms') return '/terms';
      if (tab === 'disclaimer') return '/disclaimer';
      if (tab === 'contact') return '/contact';
      return '/about';
    case 'privacy':
      return '/privacy';
    case 'terms':
      return '/terms';
    case 'disclaimer':
      return '/disclaimer';
    case 'contact':
      return '/contact';
    default:
      return '/';
  }
}
