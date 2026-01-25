import { useState } from 'react';

interface Channel {
  id: string;
  peer: string;
  capacity: number;
  localBalance: number;
}

export function ChannelBalanceVisualizer() {
  const [channels, setChannels] = useState<Channel[]>([
    { id: '1', peer: 'ACINQ', capacity: 500000, localBalance: 300000 },
    { id: '2', peer: 'Wallet of Satoshi', capacity: 250000, localBalance: 50000 },
    { id: '3', peer: 'OpenNode', capacity: 100000, localBalance: 80000 },
  ]);

  const [newChannelCapacity, setNewChannelCapacity] = useState(100000);
  const [newChannelPeer, setNewChannelPeer] = useState('New Peer');
  const [paymentAmount, setPaymentAmount] = useState(10000);
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);

  const totalCapacity = channels.reduce((sum, ch) => sum + ch.capacity, 0);
  const totalLocal = channels.reduce((sum, ch) => sum + ch.localBalance, 0);
  const totalRemote = totalCapacity - totalLocal;

  const formatSats = (sats: number) => sats.toLocaleString() + ' sats';

  const addChannel = () => {
    const newChannel: Channel = {
      id: Date.now().toString(),
      peer: newChannelPeer,
      capacity: newChannelCapacity,
      localBalance: newChannelCapacity, // New channels start with 100% local
    };
    setChannels([...channels, newChannel]);
  };

  const simulatePayment = (channelId: string, amount: number) => {
    setChannels(channels.map(ch => {
      if (ch.id === channelId) {
        const newLocal = Math.max(0, ch.localBalance - amount);
        return { ...ch, localBalance: newLocal };
      }
      return ch;
    }));
  };

  const simulateReceive = (channelId: string, amount: number) => {
    setChannels(channels.map(ch => {
      if (ch.id === channelId) {
        const newLocal = Math.min(ch.capacity, ch.localBalance + amount);
        return { ...ch, localBalance: newLocal };
      }
      return ch;
    }));
  };

  const removeChannel = (channelId: string) => {
    setChannels(channels.filter(ch => ch.id !== channelId));
    if (selectedChannel === channelId) {
      setSelectedChannel(null);
    }
  };

  return (
    <div className="p-6 bg-dark-800 rounded-xl">
      <h3 className="text-xl font-semibold text-dark-100 mb-4">Lightning Channel Balance Visualizer</h3>
      <p className="text-dark-400 text-sm mb-6">
        Explore how Lightning channels work. Each channel has a capacity that's split between
        local (what you can send) and remote (what you can receive) balances.
      </p>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-dark-700/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-amber-400">{formatSats(totalLocal)}</div>
          <div className="text-sm text-dark-400">Outbound (Can Send)</div>
        </div>
        <div className="bg-dark-700/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-dark-100">{formatSats(totalCapacity)}</div>
          <div className="text-sm text-dark-400">Total Capacity</div>
        </div>
        <div className="bg-dark-700/50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-cyan-400">{formatSats(totalRemote)}</div>
          <div className="text-sm text-dark-400">Inbound (Can Receive)</div>
        </div>
      </div>

      {/* Channel List */}
      <div className="space-y-4 mb-6">
        {channels.map(channel => {
          const remoteBalance = channel.capacity - channel.localBalance;
          const localPercent = (channel.localBalance / channel.capacity) * 100;
          const isSelected = selectedChannel === channel.id;

          return (
            <div
              key={channel.id}
              className={`bg-dark-700/30 rounded-lg p-4 cursor-pointer transition-all ${
                isSelected ? 'ring-2 ring-amber-500' : 'hover:bg-dark-700/50'
              }`}
              onClick={() => setSelectedChannel(isSelected ? null : channel.id)}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-dark-100">{channel.peer}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeChannel(channel.id);
                  }}
                  className="text-dark-500 hover:text-red-400 text-sm"
                >
                  Close
                </button>
              </div>

              {/* Balance Bar */}
              <div className="h-6 bg-dark-600 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
                  style={{ width: `${localPercent}%` }}
                />
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-amber-400">Local: {formatSats(channel.localBalance)}</span>
                <span className="text-dark-400">{formatSats(channel.capacity)}</span>
                <span className="text-cyan-400">Remote: {formatSats(remoteBalance)}</span>
              </div>

              {/* Payment Controls (when selected) */}
              {isSelected && (
                <div className="mt-4 pt-4 border-t border-dark-600 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      simulatePayment(channel.id, paymentAmount);
                    }}
                    disabled={channel.localBalance < paymentAmount}
                    className="flex-1 px-3 py-2 bg-amber-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-500"
                  >
                    Send {formatSats(paymentAmount)}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      simulateReceive(channel.id, paymentAmount);
                    }}
                    disabled={remoteBalance < paymentAmount}
                    className="flex-1 px-3 py-2 bg-cyan-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-500"
                  >
                    Receive {formatSats(paymentAmount)}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Payment Amount Slider */}
      <div className="mb-6">
        <label className="block text-sm text-dark-400 mb-2">
          Payment Amount: {formatSats(paymentAmount)}
        </label>
        <input
          type="range"
          min="1000"
          max="100000"
          step="1000"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(Number(e.target.value))}
          className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-amber-500"
        />
      </div>

      {/* Add New Channel */}
      <div className="bg-dark-700/30 rounded-lg p-4">
        <h4 className="font-medium text-dark-100 mb-3">Open New Channel</h4>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-dark-400 mb-1">Peer Name</label>
            <input
              type="text"
              value={newChannelPeer}
              onChange={(e) => setNewChannelPeer(e.target.value)}
              className="w-full px-3 py-2 bg-dark-600 text-dark-100 rounded-lg border border-dark-500 focus:border-amber-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-dark-400 mb-1">
              Capacity: {formatSats(newChannelCapacity)}
            </label>
            <input
              type="range"
              min="50000"
              max="1000000"
              step="10000"
              value={newChannelCapacity}
              onChange={(e) => setNewChannelCapacity(Number(e.target.value))}
              className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-amber-500 mt-2"
            />
          </div>
        </div>
        <button
          onClick={addChannel}
          className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors"
        >
          Open Channel
        </button>
        <p className="text-xs text-dark-500 mt-2">
          Note: New channels start with 100% local balance (no inbound liquidity)
        </p>
      </div>
    </div>
  );
}
