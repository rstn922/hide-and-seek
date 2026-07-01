// ==========================================
// GAME CONSTANTS & DATA
// ==========================================
const ZONES = [
    { 
        id: 'z1', name: 'RUANG TAMU', icon: '🛋️', x: 2, y: 2, w: 23, h: 31,
        tactics: [
            { id: 'z1_t1', text: 'Sembunyi di belakang sofa' },
            { id: 'z1_t2', text: 'Tiarap di bawah meja ruang tamu' },
            { id: 'z1_t3', text: 'Berlindung di balik pot tanaman besar' },
            { id: 'z1_t4', text: 'Menyamar di antara bantal-bantal' }
        ]
    },
    { 
        id: 'z2', name: 'DAPUR', icon: '🍳', x: 26, y: 2, w: 23, h: 31,
        tactics: [
            { id: 'z2_t1', text: 'Sembunyi di dalam lemari kabinet' },
            { id: 'z2_t2', text: 'Menyelip di celah samping kulkas' },
            { id: 'z2_t3', text: 'Tiarap di bawah meja dapur (island)' },
            { id: 'z2_t4', text: 'Sembunyi di balik tumpukan kardus bahan' }
        ]
    },
    { 
        id: 'z3', name: 'RUANG MAKAN', icon: '🍽️', x: 50, y: 2, w: 23, h: 31,
        tactics: [
            { id: 'z3_t1', text: 'Sembunyi di bawah meja makan panjang' },
            { id: 'z3_t2', text: 'Menyelip di antara kursi-kursi' },
            { id: 'z3_t3', text: 'Menyamar memakai taplak meja' },
            { id: 'z3_t4', text: 'Berdiri mematung di sudut ruangan' }
        ]
    },
    { 
        id: 'z4', name: 'RUANG KERJA', icon: '💻', x: 74, y: 2, w: 24, h: 31,
        tactics: [
            { id: 'z4_t1', text: 'Sembunyi di kolong meja kerja' },
            { id: 'z4_t2', text: 'Menyelip di belakang rak buku' },
            { id: 'z4_t3', text: 'Duduk diam di kursi membelakangi pintu' },
            { id: 'z4_t4', text: 'Sembunyi di dalam lemari arsip' }
        ]
    },
    { 
        id: 'z5', name: 'KAMAR UTAMA', icon: '🛏️', x: 2, y: 35, w: 23, h: 31,
        tactics: [
            { id: 'z5_t1', text: 'Sembunyi di kolong ranjang King Size' },
            { id: 'z5_t2', text: 'Menyelimut di atas kasur' },
            { id: 'z5_t3', text: 'Menyelip di balik gorden jendela' },
            { id: 'z5_t4', text: 'Berlindung di belakang meja rias' }
        ]
    },
    { 
        id: 'z6', name: 'K. MANDI UTAMA', icon: '🛁', x: 26, y: 35, w: 23, h: 31,
        tactics: [
            { id: 'z6_t1', text: 'Berendam jongkok di dalam bathtub' },
            { id: 'z6_t2', text: 'Berdiri mematung di balik tirai shower' },
            { id: 'z6_t3', text: 'Sembunyi di dalam kabinet bawah wastafel' },
            { id: 'z6_t4', text: 'Nongkrong diam di atas kloset' }
        ]
    },
    { 
        id: 'z7', name: 'RUANG PAKAIAN', icon: '👗', x: 50, y: 35, w: 23, h: 31,
        tactics: [
            { id: 'z7_t1', text: 'Menyelip di antara baju gantung' },
            { id: 'z7_t2', text: 'Sembunyi di balik rak sepatu' },
            { id: 'z7_t3', text: 'Masuk ke dalam keranjang pakaian kotor' },
            { id: 'z7_t4', text: 'Tiarap di balik deretan koper' }
        ]
    },
    { 
        id: 'z8', name: 'LORONG UTAMA', icon: '🚪', x: 74, y: 35, w: 24, h: 31,
        tactics: [
            { id: 'z8_t1', text: 'Berlindung di balik patung hiasan lorong' },
            { id: 'z8_t2', text: 'Menempel kaku di dinding sudut' },
            { id: 'z8_t3', text: 'Sembunyi di balik pintu yang terbuka' },
            { id: 'z8_t4', text: 'Tiarap di atas karpet lorong' }
        ]
    },
    { 
        id: 'z9', name: 'KAMAR TAMU', icon: '🧳', x: 2, y: 68, w: 23, h: 30,
        tactics: [
            { id: 'z9_t1', text: 'Sembunyi di bawah kasur tamu' },
            { id: 'z9_t2', text: 'Masuk ke dalam lemari pakaian kayu' },
            { id: 'z9_t3', text: 'Menutupi diri dengan tumpukan selimut' },
            { id: 'z9_t4', text: 'Berdiri di balik pintu kamar' }
        ]
    },
    { 
        id: 'z10', name: 'K. MANDI TAMU', icon: '🚽', x: 26, y: 68, w: 23, h: 30,
        tactics: [
            { id: 'z10_t1', text: 'Berdiri di dalam bilik shower' },
            { id: 'z10_t2', text: 'Jongkok di belakang kloset duduk' },
            { id: 'z10_t3', text: 'Menyelip di balik pintu masuk' },
            { id: 'z10_t4', text: 'Sembunyi di rak handuk' }
        ]
    },
    { 
        id: 'z11', name: 'RUANG CUCI', icon: '🧺', x: 50, y: 68, w: 23, h: 30,
        tactics: [
            { id: 'z11_t1', text: 'Masuk ke dalam mesin cuci besar (bahaya!)' },
            { id: 'z11_t2', text: 'Sembunyi di keranjang cucian' },
            { id: 'z11_t3', text: 'Berlindung di balik rak deterjen' },
            { id: 'z11_t4', text: 'Menyelip di samping papan setrika' }
        ]
    },
    { 
        id: 'z12', name: 'TERAS BLKNG', icon: '🥾', x: 74, y: 68, w: 24, h: 30,
        tactics: [
            { id: 'z12_t1', text: 'Sembunyi di dalam lemari sepatu kotor' },
            { id: 'z12_t2', text: 'Berlindung di balik jas hujan gantung' },
            { id: 'z12_t3', text: 'Menyelip di samping mesin pemanas air' },
            { id: 'z12_t4', text: 'Jongkok di sudut dekat tempat payung' }
        ]
    }
];

// ==========================================
// STATE MANAGEMENT
// ==========================================
const state = {
    matchNumber: 1,
    p1Score: 0,
    p2Score: 0,
    role: '', 
    phase: 'MENU',
    timerInterval: null,
    timer: 0,
    
    hiddenZone: null,
    hiddenTactic: null,
    
    selectedZone: null,
    seekerLives: 2,
    seekerTimeLeft: 300, // Keep track to resume timer
};

let targetData = {}; 

// ==========================================
// DOM ELEMENTS
// ==========================================
const screens = {
    menu: document.getElementById('menu-screen'),
    lobby: document.getElementById('lobby-screen'),
    game: document.getElementById('game-screen'),
    interrogation: document.getElementById('interrogation-screen'),
    result: document.getElementById('result-screen'),
};

const mapContainer = document.getElementById('map-container');
const hiderOptionsOverlay = document.getElementById('hider-options-overlay');
const relocateOverlay = document.getElementById('relocate-overlay');
const hiderTacticsGrid = document.getElementById('hider-tactics');
const seekerTacticsGrid = document.getElementById('seeker-tactics');
const btnScan = document.getElementById('btn-scan');
const btnCancelHide = document.getElementById('btn-cancel-hide');
const btnCloseOptions = document.getElementById('btn-close-options');
const btnStay = document.getElementById('btn-stay');
const btnRelocate = document.getElementById('btn-relocate');
const btnBackMenu = document.getElementById('btn-back-menu');

const sfxHover = document.getElementById('sfx-hover');
const sfxClick = document.getElementById('sfx-click');
const sfxScan = document.getElementById('sfx-scan');
const sfxAlert = document.getElementById('sfx-alert');
const sfxHeartbeat = document.getElementById('sfx-heartbeat');

// ==========================================
// INIT
// ==========================================
function init() {
    renderMap();
    setupAudio();
    
    btnCancelHide.addEventListener('click', closeHiderOptions);
    btnCloseOptions.addEventListener('click', closeHiderOptions);
    
    btnStay.addEventListener('click', () => {
        relocateOverlay.classList.add('hidden');
        document.getElementById('status-message').innerText = "POSISI AMAN. TETAP TENANG.";
        Multiplayer.send({ type: 'HIDER_STAY' });
    });

    btnRelocate.addEventListener('click', () => {
        relocateOverlay.classList.add('hidden');
        state.phase = 'RELOCATING';
        document.getElementById('status-message').innerText = "CEPAT PINDAH AREA (15 DETIK!)";
        document.body.classList.remove('shake', 'red-alert');
        
        // Hapus penanda lama
        document.querySelectorAll('.hider-blip').forEach(el => el.remove());
        
        Multiplayer.send({ type: 'HIDER_RELOCATING' });

        startTimer(15, () => {
            if (state.phase === 'RELOCATING') {
                state.phase = 'WAITING';
                closeHiderOptions();
                document.getElementById('status-message').innerText = "WAKTU PINDAH HABIS. POSISI LAMA DIPERTAHANKAN.";
                
                const z = document.getElementById(`zone-${state.hiddenZone}`);
                if (z) {
                    const blip = document.createElement('div');
                    blip.className = 'hider-blip';
                    z.appendChild(blip);
                }
                
                Multiplayer.send({ type: 'HIDER_STAY' });
            }
        });
    });

    btnBackMenu.addEventListener('click', () => {
        window.location.reload(); // Simple restart for entire app
    });
}

function closeHiderOptions() {
    hiderOptionsOverlay.classList.add('hidden');
}

function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function playHover() { sfxHover.currentTime = 0; sfxHover.play().catch(()=>{}); }
function playClick() { sfxClick.currentTime = 0; sfxClick.play().catch(()=>{}); }

function setupAudio() {
    document.querySelectorAll('button').forEach(el => {
        el.addEventListener('mouseenter', playHover);
        el.addEventListener('click', playClick);
    });
}

// ==========================================
// MAP RENDERING
// ==========================================
function renderMap() {
    mapContainer.innerHTML = '';
    ZONES.forEach(zone => {
        const div = document.createElement('div');
        div.className = 'zone';
        div.id = `zone-${zone.id}`;
        div.style.left = `${zone.x}%`;
        div.style.top = `${zone.y}%`;
        div.style.width = `${zone.w}%`;
        div.style.height = `${zone.h}%`;
        
        div.innerHTML = `
            <span class="zone-label">${zone.name}</span>
        `;
        
        div.addEventListener('mouseenter', playHover);
        div.addEventListener('click', () => {
            playClick();
            handleZoneClick(zone);
        });
        mapContainer.appendChild(div);
    });
}

function renderTactics(zoneObj) {
    hiderTacticsGrid.innerHTML = '';
    seekerTacticsGrid.innerHTML = '';
    
    zoneObj.tactics.forEach(t => {
        // Tactic button for Hider
        const btn1 = document.createElement('button');
        btn1.className = 'tactic-btn';
        btn1.innerText = t.text;
        btn1.onclick = () => { playClick(); selectHiderTactic(t.id); };
        btn1.addEventListener('mouseenter', playHover);
        hiderTacticsGrid.appendChild(btn1);

        // Tactic button for Seeker
        const btn2 = document.createElement('button');
        btn2.className = 'tactic-btn';
        btn2.innerText = t.text;
        btn2.onclick = () => { playClick(); guessSeekerTactic(t.id); };
        btn2.addEventListener('mouseenter', playHover);
        seekerTacticsGrid.appendChild(btn2);
    });
}

// ==========================================
// MULTIPLAYER LOGIC
// ==========================================
document.getElementById('btn-host').addEventListener('click', () => {
    document.getElementById('menu-status').innerText = 'Membuat Room...';
    Multiplayer.initHost((id) => {
        document.getElementById('display-room-id').innerText = id;
        showScreen('lobby');
    }, (err) => {
        document.getElementById('menu-status').innerText = 'Error: ' + err;
    });
});

document.getElementById('btn-join').addEventListener('click', () => {
    const id = document.getElementById('input-room-id').value;
    if (!id) return;
    document.getElementById('menu-status').innerText = 'Bergabung...';
    Multiplayer.joinRoom(id, () => {
        showScreen('lobby');
    }, (err) => {
        document.getElementById('menu-status').innerText = 'Error: ' + err;
    });
});

Multiplayer.onConnection = () => {
    document.querySelector('.waiting-text').style.display = 'none';
    document.getElementById('lobby-players').style.display = 'block';
    
    if (Multiplayer.isHost) {
        document.getElementById('btn-start').disabled = false;
    } else {
        document.getElementById('btn-start').innerText = 'MENUNGGU HOST...';
    }
};

Multiplayer.onData = (data) => {
    console.log("Received:", data);
    switch(data.type) {
        case 'START_MATCH':
            startMatch(data.matchNumber, data.isHostHider);
            break;
        case 'HIDER_READY':
            targetData.zone = data.zone;
            targetData.tactic = data.tactic;
            if (state.role === 'SEEKER' && state.phase === 'WAITING_FOR_RELOCATE') {
                // Resume seeker
                state.phase = 'SEEKING';
                state.seekerLives = 2; // Restore lives
                document.getElementById('status-message').innerText = "TARGET SELESAI BERPINDAH. (NYAWA DIKEMBALIKAN KE 2)";
                startTimer(state.seekerTimeLeft, () => {
                    if (state.phase === 'SEEKING') {
                        Multiplayer.send({ type: 'MATCH_END', winnerRole: 'HIDER', reason: 'Waktu Sniper telah habis.' });
                        showMatchResult('HIDER', 'Waktu habis. Penyusup berhasil kabur.');
                    }
                });
            } else if (state.role === 'SEEKER') {
                startSeekerPhase();
            }
            break;
        case 'SCAN_ZONE':
            if (state.role === 'HIDER') handleEnemyScan(data.zoneId);
            break;
        case 'INTERROGATION_START':
            if (state.role === 'HIDER') startHiderInterrogated();
            break;
        case 'SEEKER_GUESS_CORRECT':
            if (state.role === 'HIDER') {
                sfxHeartbeat.pause();
                Multiplayer.send({ type: 'MATCH_END', winnerRole: 'SEEKER', reason: 'Penyusup ditemukan dan dieliminasi.' });
                showMatchResult('SEEKER', 'Sniper berhasil menebak taktikmu!');
            }
            break;
        case 'SEEKER_GUESS_WRONG':
            if (state.role === 'HIDER') {
                showScreen('game'); // Kembalikan Hider ke layar peta
                sfxHeartbeat.pause();
                document.body.classList.remove('red-alert');
                relocateOverlay.classList.remove('hidden');
            }
            break;
        case 'HIDER_RELOCATING':
            if (state.role === 'SEEKER') {
                state.phase = 'WAITING_FOR_RELOCATE';
                stopTimer(); // Pause timer
                document.getElementById('status-message').innerText = "AWAS! TARGET SEDANG BERPINDAH TEMPAT...";
            }
            break;
        case 'HIDER_STAY':
            if (state.role === 'SEEKER') {
                document.getElementById('status-message').innerText = "TARGET TETAP DI AREA SEKITAR ATAU GAGAL PINDAH. LANJUT MENCARI.";
                if (state.phase === 'WAITING_FOR_RELOCATE') {
                    // Resume seeker timer since they were waiting for a relocate that failed/timed out
                    state.phase = 'SEEKING';
                    startTimer(state.seekerTimeLeft, () => {
                        if (state.phase === 'SEEKING') {
                            Multiplayer.send({ type: 'MATCH_END', winnerRole: 'HIDER', reason: 'Waktu Sniper telah habis.' });
                            showMatchResult('HIDER', 'Waktu habis. Penyusup berhasil kabur.');
                        }
                    });
                }
            }
            break;
        case 'MATCH_END':
            showMatchResult(data.winnerRole, data.reason);
            break;
    }
};

// ==========================================
// MATCH FLOW
// ==========================================
document.getElementById('btn-start').addEventListener('click', () => {
    const hostIsHider = (state.matchNumber % 2 !== 0);
    Multiplayer.send({ type: 'START_MATCH', matchNumber: state.matchNumber, isHostHider: !hostIsHider });
    startMatch(state.matchNumber, hostIsHider);
});

function startMatch(matchNum, iAmHider) {
    state.matchNumber = matchNum;
    state.role = iAmHider ? 'HIDER' : 'SEEKER';
    state.phase = 'HIDING';
    state.hiddenZone = null;
    state.hiddenTactic = null;
    state.selectedZone = null;
    state.seekerLives = 2;
    state.seekerTimeLeft = 300;
    targetData = {};

    document.getElementById('match-number').innerText = matchNum;
    document.getElementById('player-role').innerText = state.role === 'HIDER' ? 'PENYUSUP (SEMBUNYI)' : 'SNIPER (MENCARI)';
    document.getElementById('player-role').style.color = iAmHider ? 'var(--primary)' : 'var(--danger)';
    document.getElementById('score-p1').innerText = `P1: ${state.p1Score}`;
    document.getElementById('score-p2').innerText = `P2: ${state.p2Score}`;
    
    btnScan.disabled = true;
    hiderOptionsOverlay.classList.add('hidden');
    relocateOverlay.classList.add('hidden');
    document.getElementById('seeker-scanner').classList.add('hidden');
    document.body.classList.remove('red-alert', 'shake');
    sfxHeartbeat.pause();
    
    document.querySelectorAll('.zone').forEach(z => z.classList.remove('selected', 'scanned'));
    document.querySelectorAll('.hider-blip').forEach(el => el.remove());

    if (iAmHider) {
        document.getElementById('hider-controls').classList.remove('hidden');
        document.getElementById('seeker-controls').classList.add('hidden');
        document.getElementById('status-message').innerText = "PILIH AREA PERSEMBUNYIAN (50 DETIK)";
        startTimer(50, () => {
            if (state.phase === 'HIDING') {
                Multiplayer.send({ type: 'MATCH_END', winnerRole: 'SEEKER', reason: 'Penyusup gagal bersembunyi tepat waktu.' });
                showMatchResult('SEEKER', 'Gagal bersembunyi tepat waktu.');
            }
        });
    } else {
        document.getElementById('seeker-controls').classList.remove('hidden');
        document.getElementById('hider-controls').classList.add('hidden');
        document.getElementById('status-message').innerText = "MENUNGGU PENYUSUP BERSEMBUNYI...";
        document.getElementById('timer').innerText = "00:00";
    }

    showScreen('game');
}

// ==========================================
// ZONE CLICK LOGIC
// ==========================================
function handleZoneClick(zoneObj) {
    document.querySelectorAll('.zone').forEach(z => z.classList.remove('selected'));
    document.getElementById(`zone-${zoneObj.id}`).classList.add('selected');
    state.selectedZone = zoneObj.id;

    if (state.role === 'HIDER' && (state.phase === 'HIDING' || state.phase === 'RELOCATING')) {
        renderTactics(zoneObj);
        document.getElementById('hider-zone-name').innerText = `AREA: ${zoneObj.name}`;
        hiderOptionsOverlay.classList.remove('hidden');
    } else if (state.role === 'SEEKER' && state.phase === 'SEEKING') {
        btnScan.disabled = false;
    }
}

// ==========================================
// HIDER LOGIC
// ==========================================
function selectHiderTactic(tacticId) {
    state.hiddenZone = state.selectedZone;
    state.hiddenTactic = tacticId;
    state.phase = 'WAITING'; 
    stopTimer();
    
    hiderOptionsOverlay.classList.add('hidden');
    document.getElementById('status-message').innerText = "POSISI AMAN. TETAP TENANG.";
    
    const z = document.getElementById(`zone-${state.hiddenZone}`);
    const blip = document.createElement('div');
    blip.className = 'hider-blip';
    z.appendChild(blip);

    Multiplayer.send({ type: 'HIDER_READY', zone: state.hiddenZone, tactic: state.hiddenTactic });
}

function handleEnemyScan(scannedZoneId) {
    if (scannedZoneId === state.hiddenZone) {
        // Hider has been scanned. Just wait for INTERROGATION_START.
    }
}

function startHiderInterrogated() {
    state.phase = 'INTERROGATED';
    document.body.classList.add('shake');
    document.body.classList.remove('red-alert');
    setTimeout(() => document.body.classList.remove('shake'), 500);
    
    document.getElementById('interrogation-zone').innerText = `AREA: ${ZONES.find(z=>z.id===state.hiddenZone).name}`;
    document.getElementById('seeker-lives').parentElement.style.display = 'none';
    document.querySelector('.interrogation-panel').style.display = 'none';
    document.getElementById('interrogation-wait').classList.remove('hidden');
    
    showScreen('interrogation');
}

// ==========================================
// SEEKER LOGIC
// ==========================================
function startSeekerPhase() {
    state.phase = 'SEEKING';
    document.getElementById('status-message').innerText = "TEMUKAN PENYUSUP (5 MENIT)";
    
    startTimer(300, () => {
        if (state.phase === 'SEEKING') {
            Multiplayer.send({ type: 'MATCH_END', winnerRole: 'HIDER', reason: 'Waktu Sniper telah habis.' });
            showMatchResult('HIDER', 'Waktu habis. Penyusup berhasil kabur.');
        }
    });
}

btnScan.addEventListener('click', () => {
    if (!state.selectedZone) return;
    
    sfxScan.play();
    btnScan.disabled = true;
    const scanner = document.getElementById('seeker-scanner');
    scanner.classList.remove('hidden');
    
    const z = document.getElementById(`zone-${state.selectedZone}`);
    z.classList.add('scanned');
    
    const rect = z.getBoundingClientRect();
    const mapRect = mapContainer.getBoundingClientRect();
    scanner.style.left = `${(rect.left - mapRect.left) + rect.width/2}px`;
    scanner.style.top = `${(rect.top - mapRect.top) + rect.height/2}px`;

    Multiplayer.send({ type: 'SCAN_ZONE', zoneId: state.selectedZone });

    setTimeout(() => {
        scanner.classList.add('hidden');
        btnScan.disabled = false;
        
        if (state.selectedZone === targetData.zone) {
            triggerInterrogation();
        }
    }, 1500);
});

function triggerInterrogation() {
    // Save remaining time
    state.seekerTimeLeft = state.timer;
    stopTimer();
    state.phase = 'INTERROGATING';
    
    // Alert the Seeker that they found the target!
    sfxAlert.play();
    sfxHeartbeat.play();
    document.body.classList.add('red-alert');
    
    const foundZoneObj = ZONES.find(z => z.id === state.selectedZone);
    renderTactics(foundZoneObj);

    Multiplayer.send({ type: 'INTERROGATION_START' });
    
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);
    
    document.getElementById('interrogation-zone').innerText = `AREA: ${foundZoneObj.name}`;
    document.getElementById('seeker-lives').innerText = (state.seekerLives === 2) ? '❤️❤️' : '💔❤️';
    document.getElementById('seeker-lives').parentElement.style.display = 'block';
    document.querySelector('.interrogation-panel').style.display = 'block';
    document.getElementById('interrogation-wait').classList.add('hidden');
    
    showScreen('interrogation');
}

function guessSeekerTactic(tacticId) {
    if (tacticId === targetData.tactic) {
        Multiplayer.send({ type: 'SEEKER_GUESS_CORRECT' });
        Multiplayer.send({ type: 'MATCH_END', winnerRole: 'SEEKER', reason: 'Penyusup ditemukan dan dieliminasi.' });
        showMatchResult('SEEKER', 'Tebakan tepat! Target dieliminasi.');
    } else {
        state.seekerLives--;
        sfxAlert.play();
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 500);
        
        if (state.seekerLives <= 0) {
            document.getElementById('seeker-lives').innerText = '💔💔';
            Multiplayer.send({ type: 'MATCH_END', winnerRole: 'HIDER', reason: 'Sniper salah menebak 2 kali. Penyusup kabur.' });
            showMatchResult('HIDER', 'Salah menebak taktik 2 kali. Kamu terbunuh jebakan.');
        } else {
            // Wrong guess, but has 1 life left
            Multiplayer.send({ type: 'SEEKER_GUESS_WRONG' });
            
            // Kick Seeker back to map
            showScreen('game');
            state.phase = 'SEEKING';
            document.getElementById('status-message').innerText = "TEBAKAN SALAH! NYAWA BERKURANG.";
            
            // Resume timer
            startTimer(state.seekerTimeLeft, () => {
                if (state.phase === 'SEEKING') {
                    Multiplayer.send({ type: 'MATCH_END', winnerRole: 'HIDER', reason: 'Waktu Sniper telah habis.' });
                    showMatchResult('HIDER', 'Waktu habis. Penyusup berhasil kabur.');
                }
            });
        }
    }
}

// ==========================================
// RESULTS & SCORING
// ==========================================
function showMatchResult(winnerRole, reason) {
    stopTimer();
    sfxHeartbeat.pause();
    document.body.classList.remove('red-alert', 'shake');
    
    let iWon = (state.role === winnerRole);
    if (winnerRole === 'SEEKER') {
        if (state.role === 'SEEKER') (Multiplayer.isHost ? state.p1Score++ : state.p2Score++);
        else (Multiplayer.isHost ? state.p2Score++ : state.p1Score++);
    } else {
        if (state.role === 'HIDER') (Multiplayer.isHost ? state.p1Score++ : state.p2Score++);
        else (Multiplayer.isHost ? state.p2Score++ : state.p1Score++);
    }
    
    document.getElementById('match-result-title').innerText = iWon ? "MISI BERHASIL" : "MISI GAGAL";
    document.getElementById('match-result-title').style.color = iWon ? "var(--primary)" : "var(--danger)";
    document.getElementById('match-result-desc').innerText = reason;
    
    const myScore = Multiplayer.isHost ? state.p1Score : state.p2Score;
    const oppScore = Multiplayer.isHost ? state.p2Score : state.p1Score;
    
    document.getElementById('final-score-you').innerText = myScore;
    document.getElementById('final-score-opp').innerText = oppScore;
    
    const nextBtn = document.getElementById('btn-next-match');
    const waitText = document.getElementById('wait-next-match');
    const backMenuBtn = document.getElementById('btn-back-menu');
    
    if (myScore >= 3 || oppScore >= 3) {
        nextBtn.classList.add('hidden');
        waitText.classList.remove('hidden');
        backMenuBtn.classList.remove('hidden');
        waitText.innerText = (myScore >= 3) ? "KEMENANGAN MUTLAK!" : "KEKALAHAN TOTAL.";
    } else {
        if (Multiplayer.isHost) {
            nextBtn.classList.remove('hidden');
            waitText.classList.add('hidden');
            backMenuBtn.classList.add('hidden');
        } else {
            nextBtn.classList.add('hidden');
            waitText.classList.remove('hidden');
            backMenuBtn.classList.add('hidden');
            waitText.innerText = "Menunggu host untuk lanjut...";
        }
    }
    
    showScreen('result');
}

document.getElementById('btn-next-match').addEventListener('click', () => {
    state.matchNumber++;
    const hostIsHider = (state.matchNumber % 2 !== 0);
    Multiplayer.send({ type: 'START_MATCH', matchNumber: state.matchNumber, isHostHider: !hostIsHider });
    startMatch(state.matchNumber, hostIsHider);
});

// ==========================================
// TIMER UTILS
// ==========================================
function startTimer(seconds, onComplete) {
    stopTimer();
    state.timer = seconds;
    updateTimerDisplay();
    
    state.timerInterval = setInterval(() => {
        state.timer--;
        updateTimerDisplay();
        
        if (state.timer <= 30 && state.phase === 'SEEKING') {
            document.getElementById('timer').classList.add('warning');
        }
        
        if (state.timer <= 0) {
            stopTimer();
            if (onComplete) onComplete();
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    document.getElementById('timer').classList.remove('warning');
}

function updateTimerDisplay() {
    const m = Math.floor(state.timer / 60).toString().padStart(2, '0');
    const s = (state.timer % 60).toString().padStart(2, '0');
    document.getElementById('timer').innerText = `${m}:${s}`;
}

// INIT
window.onload = init;
