import React, { useEffect } from 'react';
import { getRouteMetadata, generateStructuredData, updateDOMMetadata } from '../../utils/seo';

/**
 * SEOHead component
 * Listens to active route & resource state and synchronizes:
 * - Document title
 * - Canonical link tag
 * - Meta description and keywords
 * - Open Graph & Twitter Cards
 * - JSON-LD Structured Data Schema (<script id="seo-jsonld">)
 * FIX: tab prop is now correctly forwarded to metadata + schema generators
 * so /privacy, /terms, /disclaimer, /contact each get their unique SEO data.
 */
export function SEOHead({ route, subject, chapter, mnemonic, tab }) {
  useEffect(() => {
    const metadata = getRouteMetadata({ route, subject, chapter, mnemonic, tab });
    const schemas = generateStructuredData({ route, subject, chapter, mnemonic, metadata });
    updateDOMMetadata(metadata, schemas);
  }, [route, subject, chapter, mnemonic, tab]);

  return null;
}
