document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Interactive Repository Filtering System
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active style state from all filter nodes
            filterButtons.forEach(btn => {
                btn.classList.remove('active-filter', 'bg-cyan-500/10', 'text-cyan-400', 'border-cyan-500/30');
                btn.classList.add('text-slate-400', 'border-slate-800');
            });

            // Activate chosen toggle asset
            button.classList.add('active-filter', 'bg-cyan-500/10', 'text-cyan-400', 'border-cyan-500/30');
            button.classList.remove('text-slate-400', 'border-slate-800');

            const filterValue = button.getAttribute('data-filter');

            // Evaluate matrix view configuration updates
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    card.style.display = 'none';
                }
            });
        });
    });
});
