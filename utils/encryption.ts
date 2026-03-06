import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';

const ALGO = 'aes-256-gcm';

export const Encryption = {
  encrypt(text: string, secret: string): string {
    const iv = randomBytes(16);
    const key = scryptSync(secret, 'domain-test-kit-salt', 32);
    const cipher = createCipheriv(ALGO, key, iv);

    const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
    const tag = cipher.getAuthTag();

    return `${iv.toString('hex')}:${tag.toString('hex')}:${encrypted.toString('hex')}`;
  },

  decrypt(payload: string, secret: string): string {
    const [ivHex, tagHex, encryptedHex] = payload.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const tag = Buffer.from(tagHex, 'hex');
    const encrypted = Buffer.from(encryptedHex, 'hex');
    const key = scryptSync(secret, 'domain-test-kit-salt', 32);
    const decipher = createDecipheriv(ALGO, key, iv);

    decipher.setAuthTag(tag);
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return decrypted.toString('utf8');
  }
};
