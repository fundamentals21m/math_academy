// =============================================================================
// MULTIPLAYER LOBBY
// =============================================================================
// UI for creating/joining multiplayer game rooms and waiting for players.
// =============================================================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RACING_TIERS, type RacingTier } from '@shared/gamification';
import type { GameRoom, PlayerState } from '../../hooks/useGameRoom';

interface MultiplayerLobbyProps {
  userNpub: string;
  userLevel: number;
  room: GameRoom | null;
  isCreating: boolean;
  isJoining: boolean;
  error: string | null;
  onCreateRoom: (tier: RacingTier, totalRounds: number) => void;
  onJoinRoom: (roomCode: string) => void;
  onSetReady: (isReady: boolean) => void;
  onLeaveRoom: () => void;
  onBack: () => void;
}

export function MultiplayerLobby({
  userNpub,
  userLevel,
  room,
  isCreating,
  isJoining,
  error,
  onCreateRoom,
  onJoinRoom,
  onSetReady,
  onLeaveRoom,
  onBack,
}: MultiplayerLobbyProps) {
  const [mode, setMode] = useState<'menu' | 'create' | 'join'>('menu');
  const [selectedTier, setSelectedTier] = useState<RacingTier>(1);
  const [roundCount, setRoundCount] = useState(10);
  const [roomCode, setRoomCode] = useState('');

  // If we have a room, show the waiting room
  if (room) {
    return (
      <WaitingRoom
        room={room}
        userNpub={userNpub}
        onSetReady={onSetReady}
        onLeaveRoom={onLeaveRoom}
      />
    );
  }

  // Main menu
  if (mode === 'menu') {
    return (
      <div className="max-w-md mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Multiplayer</h1>
          <p className="text-dark-300">
            Race against other players in real-time!
          </p>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6 text-red-300"
          >
            {error}
          </motion.div>
        )}

        <div className="space-y-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            onClick={() => setMode('create')}
            className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg rounded-lg transition-colors"
          >
            Create Room
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => setMode('join')}
            className="w-full py-4 bg-dark-700 hover:bg-dark-600 text-white font-bold text-lg rounded-lg transition-colors border border-dark-500"
          >
            Join Room
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={onBack}
            className="w-full py-3 text-dark-300 hover:text-white transition-colors"
          >
            Back to Menu
          </motion.button>
        </div>
      </div>
    );
  }

  // Create room form
  if (mode === 'create') {
    return (
      <div className="max-w-md mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-2xl font-bold text-white mb-2">Create Room</h1>
        </motion.div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6 text-red-300">
            {error}
          </div>
        )}

        {/* Tier Selection */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-3">Difficulty</h2>
          <div className="grid grid-cols-2 gap-2">
            {RACING_TIERS.map((tier) => {
              const isSelected = selectedTier === tier.tier;

              return (
                <button
                  key={tier.tier}
                  onClick={() => setSelectedTier(tier.tier)}
                  className={`
                    p-3 rounded-lg border-2 transition-all text-left
                    ${isSelected
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-dark-600 bg-dark-800 hover:border-dark-500'
                    }
                  `}
                >
                  <div className={`font-bold ${isSelected ? 'text-cyan-400' : 'text-white'}`}>
                    {tier.name}
                  </div>
                  <div className="text-xs text-dark-400">
                    {tier.basePoints} pts
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Round Count */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-3">Rounds</h2>
          <div className="flex gap-2">
            {[5, 10, 15, 20].map((count) => (
              <button
                key={count}
                onClick={() => setRoundCount(count)}
                className={`
                  flex-1 py-2 rounded-lg border-2 transition-all font-medium
                  ${roundCount === count
                    ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                    : 'border-dark-600 bg-dark-800 text-white hover:border-dark-500'
                  }
                `}
              >
                {count}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => onCreateRoom(selectedTier, roundCount)}
            disabled={isCreating}
            className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-dark-600 text-white font-bold text-lg rounded-lg transition-colors"
          >
            {isCreating ? 'Creating...' : 'Create Room'}
          </button>

          <button
            onClick={() => setMode('menu')}
            className="w-full py-3 text-dark-300 hover:text-white transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // Join room form
  return (
    <div className="max-w-md mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h1 className="text-2xl font-bold text-white mb-2">Join Room</h1>
        <p className="text-dark-300">Enter the 6-character room code</p>
      </motion.div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6 text-red-300">
          {error}
        </div>
      )}

      <div className="mb-6">
        <input
          type="text"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value.toUpperCase().slice(0, 6))}
          placeholder="ABC123"
          className="w-full text-center text-3xl font-mono tracking-widest py-4 bg-dark-800 border-2 border-dark-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none"
          maxLength={6}
        />
      </div>

      <div className="space-y-3">
        <button
          onClick={() => onJoinRoom(roomCode)}
          disabled={isJoining || roomCode.length !== 6}
          className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-dark-600 text-white font-bold text-lg rounded-lg transition-colors"
        >
          {isJoining ? 'Joining...' : 'Join Room'}
        </button>

        <button
          onClick={() => setMode('menu')}
          className="w-full py-3 text-dark-300 hover:text-white transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

// =============================================================================
// WAITING ROOM COMPONENT
// =============================================================================

interface WaitingRoomProps {
  room: GameRoom;
  userNpub: string;
  onSetReady: (isReady: boolean) => void;
  onLeaveRoom: () => void;
}

function WaitingRoom({ room, userNpub, onSetReady, onLeaveRoom }: WaitingRoomProps) {
  const players = Object.values(room.players);
  const currentPlayer = room.players[userNpub];
  const isHost = room.hostNpub === userNpub;
  const allReady = players.length >= 2 && players.every(p => p.isReady);
  const tierConfig = RACING_TIERS.find(t => t.tier === room.tier)!;

  return (
    <div className="max-w-md mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h1 className="text-2xl font-bold text-white mb-2">Waiting Room</h1>
        <div className="flex justify-center gap-2">
          <span className="bg-dark-700 px-3 py-1 rounded-full text-sm text-dark-300">
            {tierConfig.name}
          </span>
          <span className="bg-dark-700 px-3 py-1 rounded-full text-sm text-dark-300">
            {room.totalRounds} rounds
          </span>
        </div>
      </motion.div>

      {/* Room Code */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-dark-800 rounded-lg p-4 mb-6 text-center"
      >
        <div className="text-sm text-dark-400 mb-1">Room Code</div>
        <div className="text-4xl font-mono font-bold text-cyan-400 tracking-widest">
          {room.roomCode}
        </div>
        <div className="text-xs text-dark-500 mt-2">
          Share this code with friends to join
        </div>
      </motion.div>

      {/* Players List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-lg font-semibold text-white mb-3">
          Players ({players.length}/8)
        </h2>
        <div className="space-y-2">
          {players.map((player, index) => (
            <PlayerRow
              key={player.npub}
              player={player}
              isHost={player.npub === room.hostNpub}
              isYou={player.npub === userNpub}
              index={index}
            />
          ))}
        </div>

        {players.length < 2 && (
          <div className="mt-4 text-center text-dark-400 text-sm">
            Waiting for at least one more player...
          </div>
        )}
      </motion.div>

      {/* Ready Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <button
          onClick={() => onSetReady(!currentPlayer?.isReady)}
          className={`
            w-full py-4 font-bold text-lg rounded-lg transition-colors
            ${currentPlayer?.isReady
              ? 'bg-green-600 hover:bg-green-500 text-white'
              : 'bg-dark-700 hover:bg-dark-600 text-white border border-dark-500'
            }
          `}
        >
          {currentPlayer?.isReady ? 'Ready!' : 'Click when Ready'}
        </button>

        {allReady && (
          <div className="text-center text-green-400 animate-pulse">
            All players ready! Starting game...
          </div>
        )}

        <button
          onClick={onLeaveRoom}
          className="w-full py-3 text-dark-300 hover:text-white transition-colors"
        >
          Leave Room
        </button>
      </motion.div>
    </div>
  );
}

// =============================================================================
// PLAYER ROW COMPONENT
// =============================================================================

interface PlayerRowProps {
  player: PlayerState;
  isHost: boolean;
  isYou: boolean;
  index: number;
}

function PlayerRow({ player, isHost, isYou, index }: PlayerRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`
        flex items-center justify-between p-3 rounded-lg
        ${isYou ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-dark-800'}
      `}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-dark-600 flex items-center justify-center text-lg">
          {isHost ? '👑' : '🎮'}
        </div>
        <div>
          <div className="font-medium text-white">
            {player.displayName || player.npub.slice(0, 8) + '...'}
            {isYou && <span className="text-cyan-400 ml-2">(You)</span>}
          </div>
          {isHost && (
            <div className="text-xs text-dark-400">Host</div>
          )}
        </div>
      </div>

      <div
        className={`
          w-3 h-3 rounded-full transition-colors
          ${player.isReady ? 'bg-green-500' : 'bg-dark-600'}
        `}
        title={player.isReady ? 'Ready' : 'Not ready'}
      />
    </motion.div>
  );
}
