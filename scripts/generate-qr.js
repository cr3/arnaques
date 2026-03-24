import QRCode from 'qrcode';
import { writeFileSync } from 'fs';

const url = process.argv[2];
if (!url) {
  console.error('Usage: node scripts/generate-qr.js <url>');
  process.exit(1);
}
const svg = await QRCode.toString(url, { type: 'svg' });
writeFileSync('qr.svg', svg);
console.log('qr.svg generated');
