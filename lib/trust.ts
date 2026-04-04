```typescript
/**
 * Trust Engine
 * 
 * Models trust as a decaying exponential with event-based boosts.
 * Trust is computed per entity (user, agent, fleet) and decays over time
 * unless reinforced by positive interactions.
 */

export interface TrustEvent {
  entityId: string;
  type: 'positive' | 'negative' | 'neutral';
  magnitude: number; // 0-1 scale
  timestamp: number;
  metadata?: Record<string, any>;
}

export interface TrustState {
  entityId: string;
  currentTrust: number; // 0-1
  lastUpdated: number;
  totalEvents: number;
  positiveCount: number;
  negativeCount: number;
  decayRate: number; // per day
}

export class TrustEngine {
  private states: Map<string, TrustState> = new Map();
  private readonly defaultDecayRate = 0.05; // 5% per day

  /**
   * Record a trust event and update the trust score
   */
  recordEvent(event: TrustEvent): TrustState {
    const now = Date.now();
    const daysSinceLast = this.getDaysSinceLast(event.entityId, now);
    
    let state = this.states.get(event.entityId);
    if (!state) {
      state = {
        entityId: event.entityId,
        currentTrust: 0.5, // neutral starting point
        lastUpdated: now,
        totalEvents: 0,
        positiveCount: 0,
        negativeCount: 0,
        decayRate: this.defaultDecayRate,
      };
    }

    // Apply decay first
    if (daysSinceLast > 0) {
      const decayFactor = Math.exp(-state.decayRate * daysSinceLast);
      state.currentTrust *= decayFactor;
    }

    // Apply event impact
    let impact = 0;
    switch (event.type) {
      case 'positive':
        impact = event.magnitude * (1 - state.currentTrust); // Diminishing returns
        state.positiveCount++;
        break;
      case 'negative':
        impact = -event.magnitude * state.currentTrust; // More damaging when trust is high
        state.negativeCount++;
        break;
      case 'neutral':
        impact = 0;
        break;
    }

    state.currentTrust = Math.max(0, Math.min(1, state.currentTrust + impact));
    state.lastUpdated = now;
    state.totalEvents++;

    this.states.set(event.entityId, state);
    return state;
  }

  /**
   * Compute current trust level with exponential decay applied
   */
  computeTrust(entityId: string, timestamp: number = Date.now()): number {
    const state = this.states.get(entityId);
    if (!state) return 0.5; // Default neutral trust

    const daysSinceLast = this.getDaysSinceLast(entityId, timestamp);
    if (daysSinceLast <= 0) return state.currentTrust;

    const decayFactor = Math.exp(-state.decayRate * daysSinceLast);
    return state.currentTrust * decayFactor;
  }

  /**
   * Get trust level as a categorical label
   */
  getTrustLevel(entityId: string): string {
    const trust = this.computeTrust(entityId);
    if (trust >= 0.8) return 'high';
    if (trust >= 0.6) return 'medium';
    if (trust >= 0.4) return 'low';
    return 'distrusted';
  }

  /**
   * Get full trust state for an entity
   */
  getTrustState(entityId: string): TrustState | undefined {
    const state = this.states.get(entityId);
    if (!state) return undefined;

    // Return a copy with current trust computed
    return {
      ...state,
      currentTrust: this.computeTrust(entityId),
    };
  }

  /**
   * Set custom decay rate for an entity
   */
  setDecayRate(entityId: string, decayRate: number): void {
    const state = this.states.get(entityId);
    if (state) {
      state.decayRate = decayRate;
    }
  }

  /**
   * Reset trust for an entity
   */
  resetTrust(entityId: string, initialTrust: number = 0.5): void {
    this.states.set(entityId, {
      entityId,
      currentTrust: initialTrust,
      lastUpdated: Date.now(),
      totalEvents: 0,
      positiveCount: 0,
      negativeCount: 0,
      decayRate: this.defaultDecayRate,
    });
  }

  /**
   * Get all trust states
   */
  getAllTrustStates(): TrustState[] {
    return Array.from(this.states.values()).map(state => ({
      ...state,
      currentTrust: this.computeTrust(state.entityId),
    }));
  }

  private getDaysSinceLast(entityId: string, currentTime: number): number {
    const state = this.states.get(entityId);
    if (!state) return 0;
    return (currentTime - state.lastUpdated) / (1000 * 60 * 60 * 24);
  }
}

// Singleton instance
export const trustEngine = new TrustEngine();
```