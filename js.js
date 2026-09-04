const links = document.querySelectorAll('.nav a');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const pageId = this.dataset.page;

        // Remove active de todos
        links.forEach(l => l.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));

        // Ativa o clicado
        this.classList.add('active');
        document.getElementById('page-' + pageId).classList.add('active');

        // Scroll para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});