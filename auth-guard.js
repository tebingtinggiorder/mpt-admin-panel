// auth-guard.js - Pengaman Sesi Admin Otomatis
(function() {
    const sessionData = localStorage.getItem('mpt_admin_session_permanent');
    if (!sessionData) {
        window.location.replace('../index.html');
        return;
    }
    try {
        const adminObj = JSON.parse(sessionData);
        if (!adminObj.email || !adminObj.role) {
            localStorage.removeItem('mpt_admin_session_permanent');
            window.location.replace('../index.html');
        }
    } catch (e) {
        localStorage.removeItem('mpt_admin_session_permanent');
        window.location.replace('../index.html');
    }
})();