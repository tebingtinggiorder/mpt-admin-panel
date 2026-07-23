// auth-guard.js - Pengaman Sesi Admin Otomatis (Bypass Mode)
(function() {
    let sessionData = localStorage.getItem('mpt_admin_session_permanent');
    
    // Jika belum login sama sekali, buatkan sesi dummy otomatis agar tidak kedap-kedip
    if (!sessionData) {
        const dummyAdmin = {
            email: "admin@tebingtinggi.com",
            role: "superadmin"
        };
        localStorage.setItem('mpt_admin_session_permanent', JSON.stringify(dummyAdmin));
        sessionData = localStorage.getItem('mpt_admin_session_permanent');
    }

    try {
        const adminObj = JSON.parse(sessionData);
        if (!adminObj.email || !adminObj.role) {
            localStorage.removeItem('mpt_admin_session_permanent');
            window.location.replace('index.html');
        }
    } catch (e) {
        localStorage.removeItem('mpt_admin_session_permanent');
        window.location.replace('index.html');
    }
})();
