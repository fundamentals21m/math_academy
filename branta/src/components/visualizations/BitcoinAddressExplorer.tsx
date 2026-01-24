import { useState, useMemo } from 'react';

interface AddressFormat {
  name: string;
  prefix: string;
  prefixTestnet: string;
  description: string;
  example: string;
  features: string[];
  year: number;
  color: string;
}

const ADDRESS_FORMATS: AddressFormat[] = [
  {
    name: 'Legacy (P2PKH)',
    prefix: '1',
    prefixTestnet: 'm/n',
    description: 'Original Bitcoin address format from 2009',
    example: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
    features: ['Most compatible', 'Highest fees', 'Base58Check encoding'],
    year: 2009,
    color: 'orange',
  },
  {
    name: 'Script Hash (P2SH)',
    prefix: '3',
    prefixTestnet: '2',
    description: 'Pay-to-Script-Hash, enables multisig and complex scripts',
    example: '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
    features: ['Multisig support', 'Wrapped SegWit', 'Medium fees'],
    year: 2012,
    color: 'blue',
  },
  {
    name: 'Native SegWit (P2WPKH)',
    prefix: 'bc1q',
    prefixTestnet: 'tb1q',
    description: 'Segregated Witness, more efficient transactions',
    example: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
    features: ['Lower fees', 'Bech32 encoding', 'Better security'],
    year: 2017,
    color: 'green',
  },
  {
    name: 'Taproot (P2TR)',
    prefix: 'bc1p',
    prefixTestnet: 'tb1p',
    description: 'Latest format with enhanced privacy and smart contracts',
    example: 'bc1p5d7rjq7g6rdk2yhzks9smlaqtedr4dekq08ge8ztwac72sfr9rusxg3297',
    features: ['Best privacy', 'Schnorr signatures', 'Complex scripts'],
    year: 2021,
    color: 'purple',
  },
];

const validateAddress = (address: string): { valid: boolean; format: AddressFormat | null; network: 'mainnet' | 'testnet' | null } => {
  if (!address) return { valid: false, format: null, network: null };

  const trimmed = address.trim();

  for (const format of ADDRESS_FORMATS) {
    if (trimmed.startsWith(format.prefix)) {
      return { valid: true, format, network: 'mainnet' };
    }
    if (trimmed.startsWith(format.prefixTestnet)) {
      return { valid: true, format, network: 'testnet' };
    }
  }

  return { valid: false, format: null, network: null };
};

export function BitcoinAddressExplorer() {
  const [inputAddress, setInputAddress] = useState('');
  const [selectedFormat, setSelectedFormat] = useState<AddressFormat | null>(null);

  const validation = useMemo(() => validateAddress(inputAddress), [inputAddress]);

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    orange: { bg: 'bg-orange-900/30', border: 'border-orange-600', text: 'text-orange-400' },
    blue: { bg: 'bg-blue-900/30', border: 'border-blue-600', text: 'text-blue-400' },
    green: { bg: 'bg-green-900/30', border: 'border-green-600', text: 'text-green-400' },
    purple: { bg: 'bg-purple-900/30', border: 'border-purple-600', text: 'text-purple-400' },
  };

  return (
    <div className="demo-container">
      <h3 className="text-lg font-semibold text-dark-200 mb-4">Bitcoin Address Format Explorer</h3>

      {/* Address input */}
      <div className="mb-6">
        <label className="block text-sm text-dark-400 mb-2">
          Enter a Bitcoin address to identify its format
        </label>
        <input
          type="text"
          value={inputAddress}
          onChange={(e) => setInputAddress(e.target.value)}
          placeholder="bc1q..., 1..., 3..., or bc1p..."
          className="w-full bg-dark-700 text-dark-200 rounded-lg px-4 py-3 border border-dark-600 focus:border-amber-500 focus:outline-none font-mono text-sm"
        />

        {/* Validation result */}
        {inputAddress && (
          <div className={`mt-3 p-3 rounded-lg ${
            validation.valid
              ? 'bg-green-900/30 border border-green-600'
              : 'bg-red-900/30 border border-red-600'
          }`}>
            {validation.valid ? (
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-lg">✓</span>
                <div>
                  <p className={`font-semibold ${colorClasses[validation.format!.color].text}`}>
                    {validation.format!.name}
                  </p>
                  <p className="text-dark-400 text-sm">
                    {validation.network === 'mainnet' ? 'Mainnet' : 'Testnet'} address detected
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-red-400 text-lg">✗</span>
                <p className="text-red-400">Unrecognized address format</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Format cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {ADDRESS_FORMATS.map((format) => {
          const colors = colorClasses[format.color];
          const isSelected = selectedFormat?.name === format.name;
          const isDetected = validation.format?.name === format.name;

          return (
            <div
              key={format.name}
              onClick={() => setSelectedFormat(isSelected ? null : format)}
              className={`p-4 rounded-xl cursor-pointer transition-all ${
                isDetected
                  ? `${colors.bg} border-2 ${colors.border} ring-2 ring-amber-500`
                  : isSelected
                  ? `${colors.bg} border-2 ${colors.border}`
                  : 'bg-dark-800 border border-dark-700 hover:border-dark-500'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className={`font-semibold ${isDetected || isSelected ? colors.text : 'text-dark-200'}`}>
                  {format.name}
                </h4>
                <span className="text-dark-500 text-sm">{format.year}</span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-dark-700 rounded text-xs font-mono text-dark-300">
                  {format.prefix}...
                </span>
                <span className="text-dark-500 text-xs">mainnet</span>
                <span className="px-2 py-1 bg-dark-700 rounded text-xs font-mono text-dark-300">
                  {format.prefixTestnet}...
                </span>
                <span className="text-dark-500 text-xs">testnet</span>
              </div>

              <p className="text-dark-400 text-sm mb-3">{format.description}</p>

              <div className="flex flex-wrap gap-1">
                {format.features.map((feature) => (
                  <span
                    key={feature}
                    className={`px-2 py-0.5 rounded text-xs ${
                      isDetected || isSelected
                        ? `${colors.bg} ${colors.text}`
                        : 'bg-dark-700 text-dark-400'
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected format details */}
      {selectedFormat && (
        <div className={`p-6 rounded-xl ${colorClasses[selectedFormat.color].bg} border ${colorClasses[selectedFormat.color].border}`}>
          <h4 className={`text-lg font-semibold ${colorClasses[selectedFormat.color].text} mb-4`}>
            {selectedFormat.name} Details
          </h4>

          <div className="space-y-4">
            <div>
              <p className="text-dark-400 text-sm mb-1">Example Address</p>
              <code className="block bg-dark-900 rounded-lg p-3 font-mono text-sm text-dark-200 break-all">
                {selectedFormat.example}
              </code>
            </div>

            <div>
              <p className="text-dark-400 text-sm mb-2">Key Characteristics</p>
              <ul className="space-y-1">
                {selectedFormat.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-dark-300">
                    <span className={colorClasses[selectedFormat.color].text}>•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                setInputAddress(selectedFormat.example);
                setSelectedFormat(null);
              }}
              className="px-4 py-2 rounded-lg bg-dark-700 text-dark-200 hover:bg-dark-600 text-sm"
            >
              Try this example →
            </button>
          </div>
        </div>
      )}

      {/* Timeline visualization */}
      <div className="mt-6 bg-dark-800 rounded-xl p-6">
        <h4 className="text-dark-200 font-semibold mb-4">Evolution Timeline</h4>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-dark-600 -translate-y-1/2" />

          <div className="relative flex justify-between">
            {ADDRESS_FORMATS.map((format) => {
              const colors = colorClasses[format.color];
              return (
                <div key={format.name} className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${colors.bg} border-2 ${colors.border} z-10`} />
                  <span className="text-dark-400 text-xs mt-2">{format.year}</span>
                  <span className={`text-xs mt-1 ${colors.text}`}>
                    {format.name.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Branta support note */}
      <div className="mt-4 p-4 bg-amber-900/20 border border-amber-600 rounded-lg">
        <p className="text-amber-400 text-sm">
          <strong>🛡️ Branta Support:</strong> Guardrail verifies all Bitcoin address formats.
          Whether you're using Legacy, SegWit, or Taproot addresses, Branta can register and
          verify them for pre-payment protection.
        </p>
      </div>
    </div>
  );
}
