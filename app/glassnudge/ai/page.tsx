'use client';

import EncryptedMarkdownPage from '@/components/encrypted-markdown-page';
import { salt, iv, ciphertext } from './encrypted-content';

export default function GlassNudgeAiPage() {
  return (
    <EncryptedMarkdownPage
      title="How I Use AI"
      cacheKey="glassnudge-ai-plaintext"
      salt={salt}
      iv={iv}
      ciphertext={ciphertext}
      variant="prose"
    />
  );
}
