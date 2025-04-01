function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('#results .card');
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if(title.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentUrl = window.location.href;
    
    navLinks.forEach(link => {
        if(link.href === currentUrl) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function() {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    

     document.querySelector('.btn-primary').addEventListener('click', performSearch);

});  

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const loginBtn = document.querySelector('.login-btn');
    
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
    
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        this.appendChild(ripple);
        
        
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        
        ripple.style.animation = 'ripple 0.6s linear';
        
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;
        
        if(email && password) {
            
            loginBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
            
            
            setTimeout(() => {
                loginBtn.innerHTML = 'Login Success <i class="bi bi-check-circle"></i>';
                loginBtn.classList.add('btn-success');
                loginBtn.classList.remove('btn-primary');
            }, 1500);
        }
    });
});


function filterCategory(category) {
    const items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}
