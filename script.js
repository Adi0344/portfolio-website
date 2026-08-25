/**
 * Developer Architecture Layout Control Script
 */
document.addEventListener('DOMContentLoaded', () => {
    
    const filterButtons = document.querySelectorAll('.filter-toggle');
    const catalogCards = document.querySelectorAll('.project-node-card');

    // Interactive Repository Log Engine
    filterButtons.forEach(buttonElement => {
        buttonElement.addEventListener('click', () => {
            
            // Revert state markers on alternative options
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Commit active visualization style metrics
            buttonElement.classList.add('active');

            const searchScopeToken = buttonElement.getAttribute('data-target');

            // Evaluate configuration status matrices
            catalogCards.forEach(cardNode => {
                const infrastructureGroup = cardNode.getAttribute('data-group');

                if (searchScopeToken === 'all' || infrastructureGroup === searchScopeToken) {
                    // Instantly restore active visibility layout rules
                    cardNode.style.display = 'block';
                    cardNode.style.opacity = '1';
                    cardNode.style.transform = 'scale(1)';
                } else {
                    // Suppress unselected architecture options securely
                    cardNode.style.opacity = '0';
                    cardNode.style.transform = 'scale(0.95)';
                    cardNode.style.display = 'none';
                }
            });
        });
    });
});
