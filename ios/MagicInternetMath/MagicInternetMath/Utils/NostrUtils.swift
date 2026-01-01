import Foundation

// MARK: - Bech32 Decoding (for npub validation)

enum Bech32 {
    private static let alphabet = "qpzry9x8gf2tvdw0s3jn54khce6mua7l"
    private static let alphabetMap: [Character: UInt8] = {
        var map: [Character: UInt8] = [:]
        for (i, c) in alphabet.enumerated() {
            map[c] = UInt8(i)
        }
        return map
    }()

    static func decode(_ string: String) throws -> (hrp: String, data: Data) {
        let lowered = string.lowercased()
        guard let sepIndex = lowered.lastIndex(of: "1") else {
            throw NostrError.invalidBech32
        }

        let hrp = String(lowered[..<sepIndex])
        let dataString = String(lowered[lowered.index(after: sepIndex)...])

        guard dataString.count >= 6 else {
            throw NostrError.invalidBech32
        }

        var values: [UInt8] = []
        for char in dataString {
            guard let value = alphabetMap[char] else {
                throw NostrError.invalidBech32
            }
            values.append(value)
        }

        // Remove checksum (last 6 characters)
        let dataValues = Array(values.dropLast(6))

        // Convert 5-bit values to 8-bit
        let data = try convertBits(data: dataValues, fromBits: 5, toBits: 8, pad: false)
        return (hrp, Data(data))
    }

    private static func convertBits(data: [UInt8], fromBits: Int, toBits: Int, pad: Bool) throws -> [UInt8] {
        var acc: Int = 0
        var bits: Int = 0
        var result: [UInt8] = []
        let maxv = (1 << toBits) - 1

        for value in data {
            acc = (acc << fromBits) | Int(value)
            bits += fromBits
            while bits >= toBits {
                bits -= toBits
                result.append(UInt8((acc >> bits) & maxv))
            }
        }

        if pad {
            if bits > 0 {
                result.append(UInt8((acc << (toBits - bits)) & maxv))
            }
        } else if bits >= fromBits || ((acc << (toBits - bits)) & maxv) != 0 {
            throw NostrError.invalidBech32
        }

        return result
    }
}

// MARK: - Npub Validation

struct NostrIdentity {
    let npub: String
    let pubkeyHex: String

    init(npub: String) throws {
        // Validate npub format
        guard npub.lowercased().hasPrefix("npub1") else {
            throw NostrError.invalidNpub
        }

        // Decode bech32
        let (hrp, data) = try Bech32.decode(npub)
        guard hrp == "npub", data.count == 32 else {
            throw NostrError.invalidNpub
        }

        self.npub = npub.lowercased()
        self.pubkeyHex = data.hexString
    }
}

// MARK: - Errors

enum NostrError: LocalizedError {
    case invalidBech32
    case invalidNpub

    var errorDescription: String? {
        switch self {
        case .invalidBech32:
            return "Invalid bech32 encoding"
        case .invalidNpub:
            return "Invalid npub format. Should start with 'npub1'"
        }
    }
}

// MARK: - Data Extensions

extension Data {
    var hexString: String {
        map { String(format: "%02x", $0) }.joined()
    }
}
