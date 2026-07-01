const Multiplayer = {
    peer: null,
    conn: null,
    isHost: false,
    onData: null,
    onConnection: null,

    initHost: function(onSuccess, onError) {
        // Generate random 4 character ID
        const id = Math.random().toString(36).substring(2, 6).toUpperCase();
        this.peer = new Peer(id);
        this.isHost = true;
        
        this.peer.on('open', (id) => {
            onSuccess(id);
        });

        this.peer.on('connection', (c) => {
            if (this.conn) {
                // Reject multiple connections
                c.close();
                return;
            }
            this.conn = c;
            this.setupConnection();
        });

        this.peer.on('error', (err) => {
            onError(err.message);
        });
    },

    joinRoom: function(id, onSuccess, onError) {
        this.peer = new Peer();
        this.isHost = false;

        this.peer.on('open', () => {
            this.conn = this.peer.connect(id.toUpperCase());
            
            this.conn.on('open', () => {
                this.setupConnection();
                onSuccess();
            });

            this.conn.on('error', (err) => {
                if (onError) onError(err.message);
            });
        });

        this.peer.on('error', (err) => {
            if (onError) onError(err.message);
        });
    },

    setupConnection: function() {
        if (this.onConnection) this.onConnection();
        
        this.conn.on('data', (data) => {
            if (this.onData) this.onData(data);
        });
        
        this.conn.on('close', () => {
            alert("Connection lost. Returning to menu.");
            location.reload();
        });
    },

    send: function(data) {
        if (this.conn && this.conn.open) {
            this.conn.send(data);
        }
    }
};
