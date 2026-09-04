// ============================================
// NAVEGAÇÃO ENTRE ABAS
// ============================================
const links = document.querySelectorAll('.nav a');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.dataset.page;
        navegar(pageId);
        // Fecha o menu mobile
        document.querySelector('.nav').classList.remove('open');
    });
});

function navegar(pageId) {
    links.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));

    document.querySelector(`.nav a[data-page="${pageId}"]`).classList.add('active');
    document.getElementById('page-' + pageId).classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// MENU MOBILE
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// ============================================
// FORMULÁRIO DE CONTATO
// ============================================
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Mensagem enviada! Entraremos em contato em breve.');
    this.reset();
});
