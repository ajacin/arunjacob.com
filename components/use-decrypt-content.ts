'use client';

import { useState, useEffect, useCallback } from 'react';

interface DecryptState {
  status: 'idle' | 'deriving' | 'decrypting' | 'done' | 'error';
  plaintext: string | null;
  error: string | null;
}

function base64ToBuffer(base64: string): ArrayBuffer {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

export function useDecryptContent(salt: string, iv: string, ciphertext: string) {
  const [state, setState] = useState<DecryptState>({
    status: 'idle',
    plaintext: null,
    error: null,
  });

  const decrypt = useCallback(
    async (password: string) => {
      if (!password) {
        setState({ status: 'error', plaintext: null, error: 'Password is required.' });
        return;
      }

      setState({ status: 'deriving', plaintext: null, error: null });

      try {
        const encoder = new TextEncoder();
        const decoder = new TextDecoder();

        const saltBuffer = base64ToBuffer(salt);
        const ivBuffer = base64ToBuffer(iv);
        const ciphertextBuffer = base64ToBuffer(ciphertext);

        // Step 1: Import password as PBKDF2 key material
        const keyMaterial = await crypto.subtle.importKey(
          'raw',
          encoder.encode(password),
          'PBKDF2',
          false,
          ['deriveKey'],
        );

        // Step 2: Derive AES-256-GCM key
        setState({ status: 'deriving', plaintext: null, error: null });
        const derivedKey = await crypto.subtle.deriveKey(
          {
            name: 'PBKDF2',
            salt: saltBuffer,
            iterations: 600_000,
            hash: 'SHA-256',
          },
          keyMaterial,
          { name: 'AES-GCM', length: 256 },
          false,
          ['decrypt'],
        );

        // Step 3: Decrypt
        setState({ status: 'decrypting', plaintext: null, error: null });
        const plaintextBuffer = await crypto.subtle.decrypt(
          { name: 'AES-GCM', iv: ivBuffer },
          derivedKey,
          ciphertextBuffer,
        );

        const plaintext = decoder.decode(plaintextBuffer);
        setState({ status: 'done', plaintext, error: null });
      } catch (err) {
        // crypto.subtle.decrypt throws on wrong password (authentication tag mismatch)
        setState({
          status: 'error',
          plaintext: null,
          error: 'Incorrect password. Please try again.',
        });
      }
    },
    [salt, iv, ciphertext],
  );

  const reset = useCallback(() => {
    setState({ status: 'idle', plaintext: null, error: null });
  }, []);

  return { ...state, decrypt, reset };
}
