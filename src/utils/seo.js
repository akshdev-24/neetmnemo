/**
 * NEET Mnemo — SEO Architecture & Metadata Engine
 * Handles canonical URLs, dynamic page titles, descriptions, OpenGraph, Twitter cards,
 * robots directives, and validated JSON-LD structured data schemas.
 */

export const siteConfig = {
  name: 'NEET Mnemo',
  shortName: 'NEETMnemo',
  title: 'NEET Mnemonics for Physics, Chemistry & Biology | NEET Mnemo',
  description: 'Visual mnemonics, illustrated memory tricks, NCERT revision facts and formulas for NEET Physics, Chemistry, and Biology. Remember more, revise faster.',
  url: 'https://neetmnemo.pages.dev',
  ogImage: 'https://neetmnemo.pages.dev/og-image.svg',
  locale: 'en_IN',
  twitterHandle: '@neetmnemo',
  creator: 'NEET Mnemo Academic Team',
  targetExam: 'NTA NEET UG',
  curriculum: 'NCERT Class 11 & Class 12'
};

/**
 * Returns formatted absolute canonical URL without trailing slash (except root)
 */
export function getCanonicalUrl(path = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/' || cleanPath === '') {
    return `${siteConfig.url}/`;
  }
  return `${siteConfig.url}${cleanPath.replace(/\/+$/, '')}`;
}

/**
 * Generates SEO metadata for any route and parameters
 */
export function getRouteMetadata({ route, subject, chapter, mnemonic, params = {} }) {
  const defaultMeta = {
    title: siteConfig.title,
    description: siteConfig.description,
    canonical: getCanonicalUrl(''),
    ogType: 'website',
    robots: 'index, follow',
    breadcrumbs: [
      { name: 'Home', url: getCanonicalUrl('') }
    ]
  };

  switch (route) {
    case 'home':
      return {
        ...defaultMeta,
        title: 'NEET Mnemonics for Physics, Chemistry & Biology | NEET Mnemo',
        description: 'Learn NEET Biology, Physics and Chemistry with visual mnemonics, memorable tricks, NCERT revision facts and quick study tools.',
        canonical: getCanonicalUrl(''),
        keywords: 'NEET mnemonics, NEET UG revision, visual memory tricks, NCERT Biology mnemonics, NEET Physics formulas, NEET Chemistry tricks'
      };

    case 'subjects':
      return {
        ...defaultMeta,
        title: 'NEET UG Subjects: Physics, Chemistry & Biology Mnemonics | NEET Mnemo',
        description: 'Explore visual mnemonics and memory tricks mapped to the complete NEET UG syllabus for Physics, Chemistry, Botany, and Zoology.',
        canonical: getCanonicalUrl('/subjects'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Subjects', url: getCanonicalUrl('/subjects') }
        ]
      };

    case 'physics':
      return {
        ...defaultMeta,
        title: 'NEET Physics Formula Tricks & Mnemonics | NEET Mnemo',
        description: 'Learn NEET Physics formulas, SI units, dimensions and difficult concepts using simple memory tricks and quick revision.',
        canonical: getCanonicalUrl('/physics'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Physics', url: getCanonicalUrl('/physics') }
        ],
        keywords: 'NEET Physics formulas, Physics memory tricks, SI units mnemonic, Kinematics formulas, Current electricity formulas, Optics formulas'
      };

    case 'chemistry':
      return {
        ...defaultMeta,
        title: 'NEET Chemistry Mnemonics & Reaction Tricks | NEET Mnemo',
        description: 'Revise NEET Chemistry with useful mnemonics, periodic trends, organic reaction tricks and memorable chemistry concepts.',
        canonical: getCanonicalUrl('/chemistry'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Chemistry', url: getCanonicalUrl('/chemistry') }
        ],
        keywords: 'NEET Chemistry tricks, Periodic table mnemonics, Organic chemistry memory tricks, Named reactions tricks, Coordination compounds mnemonics'
      };

    case 'biology':
      return {
        ...defaultMeta,
        title: 'NEET Biology Mnemonics & NCERT Memory Tricks | NEET Mnemo',
        description: 'Remember important NEET Biology concepts with visual mnemonics, NCERT-based memory tricks, classifications and quick revision.',
        canonical: getCanonicalUrl('/biology'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Biology', url: getCanonicalUrl('/biology') }
        ],
        keywords: 'NEET Biology mnemonics, NCERT Biology revision, Taxonomic hierarchy mnemonic, Plant hormones mnemonic, Animal kingdom memory tricks, Genetics mnemonics'
      };

    case 'chapter':
      if (chapter) {
        const subjectName = chapter.subject ? chapter.subject.charAt(0).toUpperCase() + chapter.subject.slice(1) : 'NEET';
        return {
          ...defaultMeta,
          title: `${chapter.title} Mnemonics & Quick Revision for NEET | NEET Mnemo`,
          description: `Master ${chapter.title} for NEET ${subjectName} with high-yield visual mnemonics, NCERT facts, key formulas, and active recall cards.`,
          canonical: getCanonicalUrl(`/chapters/${chapter.id}`),
          breadcrumbs: [
            { name: 'Home', url: getCanonicalUrl('') },
            { name: subjectName, url: getCanonicalUrl(`/${chapter.subject}`) },
            { name: chapter.title, url: getCanonicalUrl(`/chapters/${chapter.id}`) }
          ],
          keywords: `${chapter.title} NEET, ${chapter.title} mnemonics, NEET ${subjectName} chapter ${chapter.number}`
        };
      }
      return defaultMeta;

    case 'mnemonic':
      if (mnemonic) {
        const subjectName = mnemonic.subject ? mnemonic.subject.charAt(0).toUpperCase() + mnemonic.subject.slice(1) : 'NEET';
        const hookSnippet = mnemonic.memoryHook ? ` Memory Hook: "${mnemonic.memoryHook}".` : '';
        return {
          ...defaultMeta,
          title: `${mnemonic.title} Mnemonic for NEET ${subjectName} | NEET Mnemo`,
          description: `Learn ${mnemonic.title} (${mnemonic.chapterTitle}) for NEET ${subjectName}.${hookSnippet} NCERT fact, breakdown, and practice question.`,
          canonical: getCanonicalUrl(`/mnemonics/${mnemonic.id}`),
          ogType: 'article',
          breadcrumbs: [
            { name: 'Home', url: getCanonicalUrl('') },
            { name: subjectName, url: getCanonicalUrl(`/${mnemonic.subject}`) },
            { name: mnemonic.chapterTitle, url: getCanonicalUrl(`/chapters/${mnemonic.chapterId}`) },
            { name: mnemonic.title, url: getCanonicalUrl(`/mnemonics/${mnemonic.id}`) }
          ],
          keywords: `${mnemonic.title} mnemonic, ${mnemonic.topicTitle} NEET, ${mnemonic.chapterTitle} tricks`
        };
      }
      return defaultMeta;

    case 'revision':
      return {
        ...defaultMeta,
        title: 'Quick Revision Sprints for NEET UG | NEET Mnemo',
        description: 'Speed-revise high-yield NCERT facts, formulas, and visual memory hooks with timed active recall revision sprints.',
        canonical: getCanonicalUrl('/revision'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Quick Revision', url: getCanonicalUrl('/revision') }
        ]
      };

    case 'quiz':
      return {
        ...defaultMeta,
        title: 'Interactive NEET UG Flash Quiz & Recall Practice | NEET Mnemo',
        description: 'Test your memory on NCERT NEET concepts, formula recall, and high-yield mnemonics with instant explanations.',
        canonical: getCanonicalUrl('/quiz'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Quiz', url: getCanonicalUrl('/quiz') }
        ]
      };

    case 'about':
      return {
        ...defaultMeta,
        title: 'About NEET Mnemo — Visual Learning Platform for NEET UG | NEET Mnemo',
        description: 'Learn about NEET Mnemo, our cognitive visual mnemonics methodology, and 100% NCERT syllabus compliance for NEET UG aspirants.',
        canonical: getCanonicalUrl('/about'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'About', url: getCanonicalUrl('/about') }
        ]
      };

    // Private or user-specific client states: Noindex
    case 'search':
      return {
        ...defaultMeta,
        title: 'Search NEET Mnemonics & NCERT Tricks | NEET Mnemo',
        description: 'Search through 100+ visual mnemonics, formulas, and memory hooks for NEET Physics, Chemistry, and Biology.',
        canonical: getCanonicalUrl('/search'),
        robots: 'noindex, follow', // Do not index arbitrary search queries
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Search', url: getCanonicalUrl('/search') }
        ]
      };

    case 'favorites':
      return {
        ...defaultMeta,
        title: 'My Memory Shelf — Saved NEET Mnemonics | NEET Mnemo',
        description: 'Review your personalized saved visual mnemonics and revision shelf for NEET UG preparation.',
        canonical: getCanonicalUrl('/favorites'),
        robots: 'noindex, nofollow', // Private client state
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'My Saves', url: getCanonicalUrl('/favorites') }
        ]
      };

    case 'progress':
      return {
        ...defaultMeta,
        title: 'My Study Progress & Mastery Tracker | NEET Mnemo',
        description: 'Track your NEET preparation streak, learned mnemonics, XP points, and active recall mastery.',
        canonical: getCanonicalUrl('/progress'),
        robots: 'noindex, nofollow', // Private client state
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Progress', url: getCanonicalUrl('/progress') }
        ]
      };

    default:
      return defaultMeta;
  }
}

/**
 * Builds JSON-LD Schema graph based on active page metadata
 */
export function generateStructuredData({ route, subject, chapter, mnemonic, metadata }) {
  const schemas = [];

  // 1. WebSite Schema (Homepage & global)
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/favicon.svg`
      }
    }
  });

  // 2. Organization Schema
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    description: 'Educational revision and visual memory platform for Indian NEET UG aspirants (Physics, Chemistry, Biology).'
  });

  // 3. BreadcrumbList Schema
  if (metadata.breadcrumbs && metadata.breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: metadata.breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.url
      }))
    });
  }

  // 4. LearningResource Schema for Mnemonic Detail Page
  if (route === 'mnemonic' && mnemonic) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      '@id': `${getCanonicalUrl(`/mnemonics/${mnemonic.id}`)}#resource`,
      name: `${mnemonic.title} Mnemonic for NEET`,
      description: mnemonic.explanation || mnemonic.fact || mnemonic.memoryHook,
      learningResourceType: 'Mnemonic',
      educationalLevel: 'Class 11 & Class 12 / NEET UG',
      inLanguage: 'en-IN',
      url: getCanonicalUrl(`/mnemonics/${mnemonic.id}`),
      about: [
        {
          '@type': 'Thing',
          name: mnemonic.chapterTitle
        },
        {
          '@type': 'Thing',
          name: mnemonic.topicTitle
        },
        {
          '@type': 'Thing',
          name: mnemonic.subject.charAt(0).toUpperCase() + mnemonic.subject.slice(1)
        }
      ],
      teaches: mnemonic.fact || mnemonic.mnemonic,
      educationalUse: 'Revision / Memory Trick',
      isAccessibleForFree: true
    });

    // If micro-quiz exists on mnemonic, add Quiz schema
    if (mnemonic.quiz) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Quiz',
        name: `Recall Quiz: ${mnemonic.title}`,
        educationalLevel: 'NEET UG',
        hasPart: [
          {
            '@type': 'Question',
            name: mnemonic.quiz.question,
            text: mnemonic.quiz.question,
            suggestedAnswer: mnemonic.quiz.options.map((opt, i) => ({
              '@type': 'Answer',
              text: opt,
              position: i + 1
            })),
            acceptedAnswer: {
              '@type': 'Answer',
              text: mnemonic.quiz.options[mnemonic.quiz.answerIndex],
              explanation: mnemonic.quiz.explanation
            }
          }
        ]
      });
    }
  }

  // 5. Course / LearningResource for Chapter
  if (route === 'chapter' && chapter) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      '@id': `${getCanonicalUrl(`/chapters/${chapter.id}`)}#chapter`,
      name: `${chapter.title} NEET Revision & Mnemonics`,
      description: chapter.description || `Complete NCERT revision, formulas, and visual memory hooks for ${chapter.title}.`,
      educationalLevel: `Class ${chapter.classLevel || 11} / NEET UG`,
      learningResourceType: 'Study Guide',
      url: getCanonicalUrl(`/chapters/${chapter.id}`),
      isAccessibleForFree: true
    });
  }

  return schemas;
}

/**
 * Dynamically synchronizes document <head> meta elements with active route metadata
 */
export function updateDOMMetadata(meta, schemas = []) {
  if (typeof document === 'undefined') return;

  // Title
  document.title = meta.title || siteConfig.title;

  // Helper to set or create meta tag
  const setMeta = (nameAttr, nameVal, content) => {
    if (!content) return;
    let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(nameAttr, nameVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Helper to set or create link tag
  const setLink = (rel, href) => {
    if (!href) return;
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  };

  // Standard Meta Tags
  setMeta('name', 'description', meta.description || siteConfig.description);
  setMeta('name', 'robots', meta.robots || 'index, follow');
  if (meta.keywords) {
    setMeta('name', 'keywords', meta.keywords);
  }

  // Canonical Link
  setLink('canonical', meta.canonical || siteConfig.url);

  // Open Graph
  setMeta('property', 'og:site_name', siteConfig.name);
  setMeta('property', 'og:title', meta.title || siteConfig.title);
  setMeta('property', 'og:description', meta.description || siteConfig.description);
  setMeta('property', 'og:url', meta.canonical || siteConfig.url);
  setMeta('property', 'og:type', meta.ogType || 'website');
  setMeta('property', 'og:image', meta.ogImage || siteConfig.ogImage);
  setMeta('property', 'og:locale', siteConfig.locale);

  // Twitter / X
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:site', siteConfig.twitterHandle);
  setMeta('name', 'twitter:title', meta.title || siteConfig.title);
  setMeta('name', 'twitter:description', meta.description || siteConfig.description);
  setMeta('name', 'twitter:image', meta.ogImage || siteConfig.ogImage);

  // Structured Data (JSON-LD)
  let scriptEl = document.getElementById('seo-jsonld');
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'seo-jsonld';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  if (schemas && schemas.length > 0) {
    scriptEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemas
    }, null, 2);
  } else {
    scriptEl.textContent = '';
  }
}
