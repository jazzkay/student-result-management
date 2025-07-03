// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Initialize timeline animations
    initializeTimelineAnimations();
    
    // Initialize typing animation
    initializeTypingAnimation();
});

// Timeline animation on scroll
function initializeTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Terminal simulation functions
let currentSimulation = null;

function simulateFeature(feature) {
    const terminal = document.getElementById('terminal-output');
    clearTimeout(currentSimulation);
    
    // Clear previous content and show loading
    terminal.innerHTML = `
        <div class="terminal-line">$ python student_management.py</div>
        <div class="terminal-line">Loading ${feature} feature...</div>
        <div class="terminal-line"><span class="cursor">_</span></div>
    `;
    
    // Simulate feature execution
    currentSimulation = setTimeout(() => {
        switch(feature) {
            case 'add':
                simulateAddStudent();
                break;
            case 'view':
                simulateViewStudents();
                break;
            case 'search':
                simulateSearch();
                break;
            case 'delete':
                simulateDelete();
                break;
            case 'grade':
                simulateGradeCalculation();
                break;
        }
    }, 1500);
}

function simulateAddStudent() {
    const terminal = document.getElementById('terminal-output');
    terminal.innerHTML = `
        <div class="terminal-line">$ python student_management.py</div>
        <div class="terminal-line">Enter student ID: 12345</div>
        <div class="terminal-line">Enter student name: John Doe</div>
        <div class="terminal-line">Enter Math marks: 85</div>
        <div class="terminal-line">Enter Science marks: 92</div>
        <div class="terminal-line">Enter English marks: 78</div>
        <div class="terminal-line" style="color: #0f0;">✓ Student John Doe added successfully!</div>
        <div class="terminal-line" style="color: #0f0;">Grade calculated: A</div>
        <div class="terminal-line">Press any key to continue...<span class="cursor">_</span></div>
    `;
}

function simulateViewStudents() {
    const terminal = document.getElementById('terminal-output');
    terminal.innerHTML = `
        <div class="terminal-line">$ python student_management.py</div>
        <div class="terminal-line">==========================================</div>
        <div class="terminal-line">         STUDENT RECORDS</div>
        <div class="terminal-line">==========================================</div>
        <div class="terminal-line">ID: 12345 | Name: John Doe        | Grade: A</div>
        <div class="terminal-line">ID: 12346 | Name: Jane Smith      | Grade: A+</div>
        <div class="terminal-line">ID: 12347 | Name: Mike Johnson    | Grade: B</div>
        <div class="terminal-line">ID: 12348 | Name: Sarah Wilson    | Grade: A</div>
        <div class="terminal-line">==========================================</div>
        <div class="terminal-line" style="color: #0f0;">Total students: 4</div>
        <div class="terminal-line">Press any key to continue...<span class="cursor">_</span></div>
    `;
}

function simulateSearch() {
    const terminal = document.getElementById('terminal-output');
    terminal.innerHTML = `
        <div class="terminal-line">$ python student_management.py</div>
        <div class="terminal-line">Enter student ID to search: 12345</div>
        <div class="terminal-line">Searching...</div>
        <div class="terminal-line">==========================================</div>
        <div class="terminal-line" style="color: #0f0;">✓ Student found!</div>
        <div class="terminal-line">Name: John Doe</div>
        <div class="terminal-line">ID: 12345</div>
        <div class="terminal-line">Marks: Math(85), Science(92), English(78)</div>
        <div class="terminal-line">Average: 85.00</div>
        <div class="terminal-line">Grade: A</div>
        <div class="terminal-line">==========================================</div>
        <div class="terminal-line">Press any key to continue...<span class="cursor">_</span></div>
    `;
}

function simulateDelete() {
    const terminal = document.getElementById('terminal-output');
    terminal.innerHTML = `
        <div class="terminal-line">$ python student_management.py</div>
        <div class="terminal-line">Enter student ID to delete: 12347</div>
        <div class="terminal-line">Student found: Mike Johnson</div>
        <div class="terminal-line">Are you sure? (y/n): y</div>
        <div class="terminal-line" style="color: #ff6b6b;">⚠ Deleting student record...</div>
        <div class="terminal-line" style="color: #0f0;">✓ Student record deleted successfully!</div>
        <div class="terminal-line" style="color: #0f0;">Data file updated.</div>
        <div class="terminal-line">Press any key to continue...<span class="cursor">_</span></div>
    `;
}

function simulateGradeCalculation() {
    const terminal = document.getElementById('terminal-output');
    terminal.innerHTML = `
        <div class="terminal-line">$ python student_management.py</div>
        <div class="terminal-line">Recalculating grades for all students...</div>
        <div class="terminal-line">Processing: John Doe (ID: 12345)</div>
        <div class="terminal-line">  → Math: 85, Science: 92, English: 78</div>
        <div class="terminal-line">  → Average: 85.00, Grade: A</div>
        <div class="terminal-line">Processing: Jane Smith (ID: 12346)</div>
        <div class="terminal-line">  → Math: 95, Science: 98, English: 92</div>
        <div class="terminal-line">  → Average: 95.00, Grade: A+</div>
        <div class="terminal-line" style="color: #0f0;">✓ Grade calculation completed!</div>
        <div class="terminal-line" style="color: #0f0;">All records updated successfully.</div>
        <div class="terminal-line">Press any key to continue...<span class="cursor">_</span></div>
    `;
}

// Copy code function
function copyCode() {
    const codeBlock = document.getElementById('python-code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.style.background = '#28a745';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '#007acc';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy code. Please select and copy manually.');
    });
}

// Initialize typing animation for hero section
function initializeTypingAnimation() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(102, 126, 234, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        navbar.style.backdropFilter = 'none';
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});