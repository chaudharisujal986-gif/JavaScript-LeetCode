class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(eventName, callback) {
        // Create an array for this event if it doesn't exist
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        // Add callback
        this.events.get(eventName).push(callback);

        // Return unsubscribe object
        return {
            unsubscribe: () => {
                const callbacks = this.events.get(eventName);

                const index = callbacks.indexOf(callback);

                if (index !== -1) {
                    callbacks.splice(index, 1);
                }

                return undefined;
            }
        };
    }

    emit(eventName, args = []) {
        // No subscribers
        if (!this.events.has(eventName)) {
            return [];
        }

        const callbacks = this.events.get(eventName);

        // Call callbacks in subscription order
        return callbacks.map(callback => callback(...args));
    }
}