/**
 * NEET Mnemo — SEO Architecture & Metadata Engine
 * Dedicated 100% to NEET Biology Mnemonics and NCERT Revision.
 * Handles canonical URLs, dynamic page titles, descriptions, OpenGraph, Twitter cards,
 * robots directives, and validated JSON-LD structured data schemas.
 */

export const siteConfig = {
  name: 'NEETMONIC',
  shortName: 'NEETMONIC',
  title: 'NEETMONIC – NEET Biology Mnemonics & Memory Tricks',
  description: 'Learn NEET Biology with easy mnemonics, NCERT-based memory tricks, chapter-wise revision guides, and simple ways to remember important Biology facts for NEET UG.',
  url: 'https://neetmonic.akshdev.site',
  ogImage: 'https://neetmonic.akshdev.site/og-image.svg',
  locale: 'en_IN',
  twitterHandle: '@neetmonic',
  creator: 'NEETMONIC Academic Team (AKSHDEV)',
  parentBrand: 'AKSHDEV',
  targetExam: 'NTA NEET UG (Biology)',
  curriculum: 'NCERT Class 11 & Class 12 Biology'
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
export function getRouteMetadata({ route, chapter, mnemonic, tab, params = {} }) {
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
        title: 'NEETMONIC – NEET Biology Mnemonics & Memory Tricks',
        description: 'Learn NEET Biology with easy mnemonics, NCERT-based memory tricks, chapter-wise revision guides, and simple ways to remember important Biology facts for NEET UG.',
        canonical: getCanonicalUrl(''),
        keywords: 'NEET mnemonics, NEET Biology mnemonics, Biology mnemonics for NEET, NEET Biology memory tricks, Biology memory tricks for NEET, NCERT Biology mnemonics, NEET Biology chapter-wise mnemonics, Biology mnemonics for NEET UG, easy mnemonics for NEET Biology, NEET Biology revision tricks, Biology tricks to remember for NEET'
      };

    case 'class-11':
      return {
        ...defaultMeta,
        title: 'Class 11 Biology Mnemonics for NEET | NEETMONIC',
        description: 'Learn Class 11 Biology mnemonics for NEET with easy NCERT-based memory tricks, chapter-wise revision and simple ways to remember important Biology facts.',
        canonical: getCanonicalUrl('/class-11-biology-mnemonics'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Class 11 Biology Mnemonics', url: getCanonicalUrl('/class-11-biology-mnemonics') }
        ],
        keywords: 'Class 11 Biology mnemonics, Class 11 Biology mnemonics for NEET, NEET Class 11 Biology memory tricks, Class 11 Biology chapter-wise mnemonics, NCERT Class 11 Biology mnemonics, Class 11 Biology tricks to remember, NEET Biology mnemonics Class 11, Class 11 Biology important examples mnemonics, Class 11 Botany mnemonics for NEET, Class 11 Zoology mnemonics for NEET'
      };

    case 'class-12':
      return {
        ...defaultMeta,
        title: 'Class 12 Biology Mnemonics for NEET | NEETMONIC',
        description: 'Revise Class 12 Biology for NEET with easy mnemonics, NCERT-based memory tricks, chapter-wise revision guides and important Biology facts to remember.',
        canonical: getCanonicalUrl('/class-12-biology-mnemonics'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Class 12 Biology Mnemonics', url: getCanonicalUrl('/class-12-biology-mnemonics') }
        ],
        keywords: 'Class 12 Biology mnemonics, Class 12 Biology mnemonics for NEET, NEET Class 12 Biology memory tricks, Class 12 Biology chapter-wise mnemonics, NCERT Class 12 Biology mnemonics, Class 12 Biology tricks to remember, NEET Biology mnemonics Class 12, Class 12 Biology important examples mnemonics, Class 12 Botany mnemonics for NEET, Class 12 Zoology mnemonics for NEET'
      };

    case 'chapters':
    case 'subjects':
    case 'biology':
      return {
        ...defaultMeta,
        title: 'NEET Biology Chapters & NCERT Memory Tricks | NEETMONIC',
        description: 'Explore all 32 NEET Biology chapters across 10 NCERT units (Botany and Zoology) with handcrafted visual mnemonics and active recall cards.',
        canonical: getCanonicalUrl('/chapters'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Biology Chapters', url: getCanonicalUrl('/chapters') }
        ],
        keywords: 'NEET Biology chapters, NCERT Class 11 Biology, NCERT Class 12 Biology, Botany chapters, Zoology chapters, NEET memory tricks'
      };

    case 'chapter':
      if (chapter) {
        return {
          ...defaultMeta,
          title: `${chapter.title} Mnemonics & NCERT Revision | NEET Biology | NEETMONIC`,
          description: `Master ${chapter.title} (Class ${chapter.classLevel || 11} NCERT Biology) for NEET with high-yield visual mnemonics, key facts, and active recall cards.`,
          canonical: getCanonicalUrl(`/chapters/${chapter.id}`),
          breadcrumbs: [
            { name: 'Home', url: getCanonicalUrl('') },
            { 
              name: `Class ${chapter.classLevel || 11} Mnemonics`, 
              url: getCanonicalUrl(chapter.classLevel === 12 ? '/class-12-biology-mnemonics' : '/class-11-biology-mnemonics') 
            },
            { name: chapter.title, url: getCanonicalUrl(`/chapters/${chapter.id}`) }
          ],
          keywords: `${chapter.title} NEET Biology, ${chapter.title} mnemonics, NEET Biology chapter ${chapter.number}`
        };
      }
      return defaultMeta;

    case 'mnemonic':
      if (mnemonic) {
        const hookSnippet = mnemonic.mnemonic ? ` Memory Hook: "${mnemonic.mnemonic}".` : '';
        return {
          ...defaultMeta,
          title: `${mnemonic.title} Mnemonic for NEET Biology | NEETMONIC`,
          description: `Learn ${mnemonic.title} (${mnemonic.chapterTitle}) for NEET Biology.${hookSnippet} NCERT fact, breakdown, and practice question.`,
          canonical: getCanonicalUrl(`/mnemonics/${mnemonic.id}`),
          ogType: 'article',
          breadcrumbs: [
            { name: 'Home', url: getCanonicalUrl('') },
            { name: 'Biology Chapters', url: getCanonicalUrl('/chapters') },
            { name: mnemonic.chapterTitle, url: getCanonicalUrl(`/chapters/${mnemonic.chapterId}`) },
            { name: mnemonic.title, url: getCanonicalUrl(`/mnemonics/${mnemonic.id}`) }
          ],
          keywords: `${mnemonic.title} mnemonic, ${mnemonic.topicTitle} NEET Biology, ${mnemonic.chapterTitle} tricks`
        };
      }
      return defaultMeta;

    case 'revision':
      return {
        ...defaultMeta,
        title: 'Quick Biology Revision Sprints for NEET UG | NEETMONIC',
        description: 'Speed-revise high-yield NCERT Biology facts, diagrams, and visual memory hooks with timed active recall revision sprints.',
        canonical: getCanonicalUrl('/revision'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Quick Revision', url: getCanonicalUrl('/revision') }
        ]
      };

    case 'quiz':
      return {
        ...defaultMeta,
        title: 'Interactive NEET Biology Quiz & Recall Practice | NEETMONIC',
        description: 'Test your memory on NCERT NEET Biology concepts, taxonomy, pathways, and high-yield mnemonics with instant explanations.',
        canonical: getCanonicalUrl('/quiz'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Quiz', url: getCanonicalUrl('/quiz') }
        ]
      };

    case 'about':
      if (tab === 'privacy') {
        return {
          ...defaultMeta,
          title: 'Privacy Policy | NEETMONIC',
          description: 'Privacy Policy for NEETMONIC. Learn how we handle your study data, local storage preferences, and respect your privacy.',
          canonical: getCanonicalUrl('/privacy'),
          breadcrumbs: [
            { name: 'Home', url: getCanonicalUrl('') },
            { name: 'Privacy Policy', url: getCanonicalUrl('/privacy') }
          ]
        };
      }
      if (tab === 'terms') {
        return {
          ...defaultMeta,
          title: 'Terms of Service | NEETMONIC',
          description: 'Terms of Service and user guidelines for NEETMONIC educational revision tools and content.',
          canonical: getCanonicalUrl('/terms'),
          breadcrumbs: [
            { name: 'Home', url: getCanonicalUrl('') },
            { name: 'Terms of Service', url: getCanonicalUrl('/terms') }
          ]
        };
      }
      if (tab === 'disclaimer') {
        return {
          ...defaultMeta,
          title: 'Educational Disclaimer & NCERT Scope | NEETMONIC',
          description: 'NEETMONIC educational disclaimer, copyright notices, and official NCERT syllabus scope information.',
          canonical: getCanonicalUrl('/disclaimer'),
          breadcrumbs: [
            { name: 'Home', url: getCanonicalUrl('') },
            { name: 'Disclaimer', url: getCanonicalUrl('/disclaimer') }
          ]
        };
      }
      if (tab === 'contact') {
        return {
          ...defaultMeta,
          title: 'Contact Academic Team | NEETMONIC',
          description: 'Contact the NEETMONIC team for academic feedback, mnemonic submissions, or content suggestions.',
          canonical: getCanonicalUrl('/contact'),
          breadcrumbs: [
            { name: 'Home', url: getCanonicalUrl('') },
            { name: 'Contact', url: getCanonicalUrl('/contact') }
          ]
        };
      }
      return {
        ...defaultMeta,
        title: 'About NEETMONIC – NEET Biology Mnemonics Platform | AKSHDEV',
        description: 'Learn about NEETMONIC, an independent educational platform by AKSHDEV dedicated to NCERT Class 11 and 12 Biology mnemonics and revision for NEET UG.',
        canonical: getCanonicalUrl('/about'),
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'About NEETMONIC', url: getCanonicalUrl('/about') }
        ]
      };

    case 'search':
      return {
        ...defaultMeta,
        title: 'Search NEET Biology Mnemonics & NCERT Tricks | NEETMONIC',
        description: 'Search through 1,180+ visual mnemonics, memory hooks, and taxonomy tricks for NEET Biology.',
        canonical: getCanonicalUrl('/search'),
        robots: 'noindex, follow',
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'Search', url: getCanonicalUrl('/search') }
        ]
      };

    case 'favorites':
      return {
        ...defaultMeta,
        title: 'My Memory Shelf — Saved NEET Biology Mnemonics | NEETMONIC',
        description: 'Review your personalized saved visual mnemonics and revision shelf for NEET Biology preparation.',
        canonical: getCanonicalUrl('/favorites'),
        robots: 'noindex, nofollow',
        breadcrumbs: [
          { name: 'Home', url: getCanonicalUrl('') },
          { name: 'My Saves', url: getCanonicalUrl('/favorites') }
        ]
      };

    case 'progress':
      return {
        ...defaultMeta,
        title: 'My Biology Study Progress & Mastery Tracker | NEETMONIC',
        description: 'Track your NEET Biology preparation streak, learned mnemonics, XP points, and unit-by-unit recall mastery.',
        canonical: getCanonicalUrl('/progress'),
        robots: 'noindex, nofollow',
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
export function generateStructuredData({ route, chapter, mnemonic, metadata }) {
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
    description: 'Educational revision and visual memory platform dedicated to NCERT Biology (Botany & Zoology) for NEET UG aspirants under parent brand AKSHDEV.'
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

  // 4. Class 11 Landing Page Schema
  if (route === 'class-11') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${getCanonicalUrl('/class-11-biology-mnemonics')}#collection`,
      name: 'Class 11 Biology Mnemonics for NEET',
      description: 'Learn Class 11 Biology mnemonics for NEET with easy NCERT-based memory tricks, chapter-wise revision and simple ways to remember important Biology facts.',
      url: getCanonicalUrl('/class-11-biology-mnemonics'),
      educationalLevel: 'Class 11 NCERT Biology / NEET UG',
      about: {
        '@type': 'Thing',
        name: 'NEET Class 11 Biology'
      }
    });

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many chapters are in Class 11 NEET Biology?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Class 11 Biology includes 19 comprehensive chapters organized across 5 core NCERT units: Diversity in the Living World, Structural Organisation in Animals and Plants, Cell: Structure and Function, Plant Physiology, and Human Physiology.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the highest-yield Class 11 Biology units for NEET?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Human Physiology, Cell Biology (including Cell Division), and Plant Physiology consistently carry significant weight in the NEET UG exam, featuring heavily in example-based and direct NCERT questions.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do mnemonics help in memorizing Animal Kingdom and Plant Kingdom examples?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NCERT Animal Kingdom and Plant Kingdom feature hundreds of scientific names and classification examples. Structured acronyms and dual-coding visual hooks prevent confusion between similar genera during high-pressure timed exams.'
          }
        }
      ]
    });
  }

  // 5. Class 12 Landing Page Schema
  if (route === 'class-12') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${getCanonicalUrl('/class-12-biology-mnemonics')}#collection`,
      name: 'Class 12 Biology Mnemonics for NEET',
      description: 'Revise Class 12 Biology for NEET with easy mnemonics, NCERT-based memory tricks, chapter-wise revision guides and important Biology facts to remember.',
      url: getCanonicalUrl('/class-12-biology-mnemonics'),
      educationalLevel: 'Class 12 NCERT Biology / NEET UG',
      about: {
        '@type': 'Thing',
        name: 'NEET Class 12 Biology'
      }
    });

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which Class 12 Biology units carry maximum weightage in NEET?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Genetics and Evolution (Principles of Inheritance and Molecular Basis of Inheritance) alongside Biotechnology and Ecology form the highest-scoring core of Class 12 NEET Biology.'
          }
        },
        {
          '@type': 'Question',
          name: 'How to remember genetic disorders and chromosomal abnormalities for NEET?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Memory tricks simplify karyotypes and symptoms for Mendelian and chromosomal disorders such as Down syndrome (trisomy 21), Klinefelter syndrome (XXY), and Turner syndrome (XO).'
          }
        },
        {
          '@type': 'Question',
          name: 'How do mnemonics help in Ecology and Environmental Biology?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mnemonics help students accurately recall population interaction signs (+, -, 0), biodiversity hotspot criteria, pyramid shapes, and the Evil Quartet causes of biodiversity loss.'
          }
        }
      ]
    });
  }

  // 6. LearningResource Schema for Mnemonic Detail Page
  if (route === 'mnemonic' && mnemonic) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      '@id': `${getCanonicalUrl(`/mnemonics/${mnemonic.id}`)}#resource`,
      name: `${mnemonic.title} Mnemonic for NEET Biology`,
      description: mnemonic.explanation || mnemonic.fact || mnemonic.mnemonic,
      learningResourceType: 'Mnemonic',
      educationalLevel: 'Class 11 & Class 12 Biology / NEET UG',
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
          name: 'NEET Biology'
        }
      ],
      teaches: mnemonic.fact || mnemonic.mnemonic,
      educationalUse: 'Revision / Memory Trick',
      isAccessibleForFree: true
    });

    if (mnemonic.quiz) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Quiz',
        name: `Recall Quiz: ${mnemonic.title}`,
        educationalLevel: 'NEET UG Biology',
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

  // 7. Course / LearningResource for Chapter
  if (route === 'chapter' && chapter) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      '@id': `${getCanonicalUrl(`/chapters/${chapter.id}`)}#chapter`,
      name: `${chapter.title} NEET Biology Revision & Mnemonics`,
      description: chapter.description || `Complete NCERT Biology revision and visual memory hooks for ${chapter.title}.`,
      educationalLevel: `Class ${chapter.classLevel || 11} Biology / NEET UG`,
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
