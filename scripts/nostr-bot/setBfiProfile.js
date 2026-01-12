#!/usr/bin/env node
/**
 * Set the BFI bot's Nostr profile metadata
 *
 * Run this once after generating the keypair to set up the bot's identity.
 *
 * Usage:
 *   BFI_BOT_NSEC=nsec1... node setBfiProfile.js
 */

import 'websocket-polyfill';
import { finalizeEvent, nip19 } from 'nostr-tools';
import { Relay } from 'nostr-tools/relay';

// Popular relays to publish to
const RELAYS = [
  'wss://relay.damus.io',
  'wss://nos.lol',
  'wss://relay.nostr.band',
  'wss://relay.primal.net',
  'wss://nostr.wine',
];

// Profile metadata for the BFI bot
const PROFILE_METADATA = {
  name: 'Bitcoin for Institutions',
  display_name: 'Bitcoin for Institutions',
  about: 'Insights from "Bitcoin for Institutions" by Brian Hirschfield. Learn how institutional investors can approach Bitcoin.\n\nBuy the book: https://zeuspay.com/btc-for-institutions\n\nFree course: https://bfi-deploy.vercel.app',
  picture: '', // Can be set to course logo URL if available
  banner: '',
  website: 'https://zeuspay.com/btc-for-institutions',
  nip05: '', // Optional: verification
  lud16: 'fundamentals@zeuspay.com',
};

async function main() {
  const nsec = process.env.BFI_BOT_NSEC;

  if (!nsec) {
    console.error('Error: BFI_BOT_NSEC environment variable is required');
    console.error('Usage: BFI_BOT_NSEC=nsec1... node setBfiProfile.js');
    process.exit(1);
  }

  // Decode nsec to get secret key bytes
  const decoded = nip19.decode(nsec);
  if (decoded.type !== 'nsec') {
    throw new Error('Invalid nsec provided');
  }
  const secretKey = decoded.data;

  console.log('\n₿ Setting BFI Bot Profile\n');
  console.log('Profile metadata:');
  console.log(`  Name: ${PROFILE_METADATA.name}`);
  console.log(`  Display Name: ${PROFILE_METADATA.display_name}`);
  console.log(`  Website: ${PROFILE_METADATA.website}`);
  console.log(`  About: ${PROFILE_METADATA.about.slice(0, 50)}...`);

  // Create kind 0 (profile metadata) event
  const event = finalizeEvent({
    kind: 0, // Profile metadata
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: JSON.stringify(PROFILE_METADATA),
  }, secretKey);

  console.log(`\nEvent ID: ${event.id}`);
  console.log(`Publishing to ${RELAYS.length} relays...`);

  const publishedTo = [];
  const errors = [];

  // Publish to each relay
  for (const relayUrl of RELAYS) {
    try {
      const relay = await Relay.connect(relayUrl);
      await relay.publish(event);
      publishedTo.push(relayUrl);
      console.log(`  ✓ Published to ${relayUrl}`);
      relay.close();
    } catch (error) {
      errors.push({ relay: relayUrl, error: error.message });
      console.error(`  ✗ Failed to publish to ${relayUrl}: ${error.message}`);
    }
  }

  if (publishedTo.length === 0) {
    console.error('\n✗ Failed to publish to any relays');
    process.exit(1);
  }

  console.log(`\n✓ Profile published to ${publishedTo.length} relays`);

  // Show the public key
  const pubkeyHex = event.pubkey;
  const npub = nip19.npubEncode(pubkeyHex);
  console.log(`\nBot public key:`);
  console.log(`  npub: ${npub}`);
  console.log(`  hex: ${pubkeyHex}`);
  console.log(`\nView profile: https://primal.net/p/${npub}`);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
