document.querySelectorAll('.menu-bar a[href^="#"], .overlay a[href^="#"], .about a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (!targetElement) return; // Verifica se o elemento alvo existe

        // Pega a altura do cabeçalho (menu-bar)
        const headerOffset = document.querySelector('.menu-bar').offsetHeight;

        // Calcula a altura da viewport e da seção
        const viewportHeight = window.innerHeight;
        const elementHeight = targetElement.offsetHeight;

        // Calcula a posição do elemento-alvo, ajustando o offset
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

        // Ajusta a posição para centralizar a seção na tela
        const offsetPosition = elementPosition - headerOffset - (viewportHeight / 2) + (elementHeight / 2);

        // Realiza o scroll suave para a posição calculada
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
