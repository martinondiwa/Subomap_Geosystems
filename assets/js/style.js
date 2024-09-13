// Counter animation
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = '0';
        
        const updateCounter = () => {
            const target = +counter.getAttribute('data-count'); // Get target number
            const count = +counter.innerText;
            const increment = target / 100; // Speed of counting
            
            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 30); // Update every 30ms
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
});