import { useState, useEffect } from 'react';

const LEGITIMATE_ADDRESS = 'bc1qmerchant7x8f5kvy5l643lydnw9re59gtzzwf5mdq';
const ATTACKER_ADDRESS = 'bc1qattacker9z2m4nvy8k754mxenw0rt48htwwz6ndp';

export function AddressSwapDetector() {
  const [clipboardContent, setClipboardContent] = useState('');
  const [displayedAddress, setDisplayedAddress] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);
  const [malwareActive, setMalwareActive] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  const handleCopy = () => {
    setClipboardContent(LEGITIMATE_ADDRESS);
    setDisplayedAddress(LEGITIMATE_ADDRESS);
    setIsCopied(true);
    setIsSwapped(false);
    setShowWarning(false);

    if (malwareActive) {
      // Simulate malware intercepting clipboard
      setTimeout(() => {
        setIsSwapping(true);
      }, 800);

      setTimeout(() => {
        setClipboardContent(ATTACKER_ADDRESS);
        setIsSwapping(false);
        setIsSwapped(true);
      }, 1500);
    }
  };

  const handlePaste = () => {
    setDisplayedAddress(clipboardContent);
    if (isSwapped) {
      setShowWarning(true);
    }
  };

  const handleReset = () => {
    setClipboardContent('');
    setDisplayedAddress('');
    setIsCopied(false);
    setIsSwapping(false);
    setIsSwapped(false);
    setShowWarning(false);
  };

  // Highlight differences between addresses
  const renderAddressComparison = () => {
    const chars1 = LEGITIMATE_ADDRESS.split('');
    const chars2 = displayedAddress.split('');

    return (
      <div className="font-mono text-sm space-y-2">
        <div className="flex items-start gap-2">
          <span className="text-dark-400 w-20 shrink-0">Expected:</span>
          <span className="text-green-400 break-all">{LEGITIMATE_ADDRESS}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-dark-400 w-20 shrink-0">Received:</span>
          <span className="break-all">
            {chars2.map((char, i) => (
              <span
                key={i}
                className={char !== chars1[i] ? 'text-red-400 bg-red-900/30' : 'text-dark-200'}
              >
                {char}
              </span>
            ))}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">Address Swap Detector</h3>

      {/* Malware toggle */}
      <div className="flex items-center gap-4 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={malwareActive}
            onChange={(e) => {
              setMalwareActive(e.target.checked);
              handleReset();
            }}
            className="w-5 h-5 rounded accent-red-500"
          />
          <span className="text-dark-200">
            Simulate Clipboard Malware {malwareActive ? '🦠' : ''}
          </span>
        </label>

        <button
          onClick={handleReset}
          className="px-3 py-1 rounded bg-dark-700 text-dark-300 text-sm hover:bg-dark-600"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Source (Website) */}
        <div className="bg-dark-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🌐</span>
            <span className="text-dark-200 font-semibold">Merchant Website</span>
          </div>

          <div className="bg-dark-900 rounded-lg p-4">
            <p className="text-dark-400 text-sm mb-2">Payment Address:</p>
            <div className="flex items-center gap-2">
              <code className="text-green-400 text-sm font-mono break-all flex-1">
                {LEGITIMATE_ADDRESS}
              </code>
              <button
                onClick={handleCopy}
                className="px-3 py-2 rounded bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 shrink-0"
              >
                📋 Copy
              </button>
            </div>
          </div>

          {isCopied && (
            <div className="mt-4 text-sm text-green-400">
              ✓ Address copied to clipboard
            </div>
          )}
        </div>

        {/* Clipboard (Middle) */}
        <div className={`bg-dark-800 rounded-xl p-4 transition-all ${
          isSwapping ? 'ring-2 ring-red-500 animate-pulse' : ''
        }`}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📋</span>
            <span className="text-dark-200 font-semibold">System Clipboard</span>
            {malwareActive && <span className="text-red-400 text-sm">(Monitored by malware)</span>}
          </div>

          <div className="bg-dark-900 rounded-lg p-4 min-h-[80px]">
            {clipboardContent ? (
              <>
                <p className="text-dark-400 text-sm mb-2">Current content:</p>
                <code className={`text-sm font-mono break-all ${
                  isSwapped ? 'text-red-400' : 'text-green-400'
                }`}>
                  {clipboardContent}
                </code>
              </>
            ) : (
              <p className="text-dark-500 text-sm italic">Clipboard empty</p>
            )}
          </div>

          {isSwapping && (
            <div className="mt-4 flex items-center gap-2 text-red-400">
              <span className="animate-spin">🔄</span>
              <span className="text-sm">Malware swapping address...</span>
            </div>
          )}

          {isSwapped && (
            <div className="mt-4 text-sm text-red-400">
              ⚠️ Address has been replaced by attacker!
            </div>
          )}
        </div>
      </div>

      {/* Wallet (Destination) */}
      <div className="mt-6 bg-dark-800 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">👛</span>
          <span className="text-dark-200 font-semibold">Your Wallet</span>
        </div>

        <div className="bg-dark-900 rounded-lg p-4">
          <p className="text-dark-400 text-sm mb-2">Send to address:</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-dark-800 rounded p-2 min-h-[40px]">
              {displayedAddress ? (
                <code className={`text-sm font-mono break-all ${
                  isSwapped && displayedAddress === ATTACKER_ADDRESS ? 'text-red-400' : 'text-dark-200'
                }`}>
                  {displayedAddress}
                </code>
              ) : (
                <span className="text-dark-500 text-sm italic">Paste address here</span>
              )}
            </div>
            <button
              onClick={handlePaste}
              disabled={!clipboardContent}
              className="px-3 py-2 rounded bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              📝 Paste
            </button>
          </div>
        </div>

        {/* Warning or comparison */}
        {showWarning && (
          <div className="mt-4 p-4 bg-red-900/30 border border-red-700 rounded-lg">
            <p className="text-red-400 font-semibold mb-3">
              ⚠️ Address Mismatch Detected!
            </p>
            {renderAddressComparison()}
            <p className="mt-4 text-dark-300 text-sm">
              With Branta, this mismatch would be detected before you send any funds.
              The pasted address doesn't match the registered merchant address.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
