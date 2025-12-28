#!/usr/bin/env node

/**
 * Set the bot's Nostr profile metadata
 */

import 'websocket-polyfill';
import { finalizeEvent, nip19 } from 'nostr-tools';
import { Relay } from 'nostr-tools/relay';

const nsec = process.env.NOSTR_BOT_NSEC;
if (!nsec) {
  console.error('Error: NOSTR_BOT_NSEC environment variable required');
  process.exit(1);
}

const decoded = nip19.decode(nsec);
const secretKey = decoded.data;

const metadata = {
  name: 'Magic Internet Math',
  display_name: 'Magic Internet Math',
  about: 'Daily Top 10 Leaderboard for Magic Internet Math courses. Learn at https://mathacademy-cyan.vercel.app',
  picture: 'https://mathacademy-cyan.vercel.app/images/og-preview.png',
  website: 'https://mathacademy-cyan.vercel.app',
};

const event = finalizeEvent({
  kind: 0,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: JSON.stringify(metadata),
}, secretKey);

console.log('Setting profile metadata...');
console.log(metadata);

const relays = ['wss://relay.damus.io', 'wss://nos.lol', 'wss://relay.primal.net'];

for (const url of relays) {
  try {
    const relay = await Relay.connect(url);
    await relay.publish(event);
    console.log(`  Published to ${url}`);
    relay.close();
  } catch (e) {
    console.error(`  Failed: ${url} - ${e.message}`);
  }
}

console.log('\nDone! Profile updated.');
