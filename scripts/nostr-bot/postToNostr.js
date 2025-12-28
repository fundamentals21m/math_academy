/**
 * Post content to Nostr relays
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

/**
 * Post a note to Nostr relays
 * @param {string} content - The note content
 * @param {string} nsec - The private key in nsec format
 * @returns {Promise<{success: boolean, eventId: string, publishedTo: string[]}>}
 */
export async function postToNostr(content, nsec) {
  // Decode nsec to get secret key bytes
  const decoded = nip19.decode(nsec);
  if (decoded.type !== 'nsec') {
    throw new Error('Invalid nsec provided');
  }
  const secretKey = decoded.data;

  // Create the event
  const event = finalizeEvent({
    kind: 1, // Regular note
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: content,
  }, secretKey);

  console.log(`Event ID: ${event.id}`);
  console.log(`Publishing to ${RELAYS.length} relays...`);

  const publishedTo = [];
  const errors = [];

  // Publish to each relay
  for (const relayUrl of RELAYS) {
    try {
      const relay = await Relay.connect(relayUrl);
      await relay.publish(event);
      publishedTo.push(relayUrl);
      console.log(`  Published to ${relayUrl}`);
      relay.close();
    } catch (error) {
      errors.push({ relay: relayUrl, error: error.message });
      console.error(`  Failed to publish to ${relayUrl}: ${error.message}`);
    }
  }

  if (publishedTo.length === 0) {
    throw new Error(`Failed to publish to any relays: ${JSON.stringify(errors)}`);
  }

  return {
    success: true,
    eventId: event.id,
    publishedTo,
  };
}
