// Main JavaScript for Rahul Bhimani AI Portfolio
// Handles all interactive functionality and animations

class AIPortfolio {
    constructor() {
        this.skillsData = {
            'LLMs & NLP': 95,
            'AI Agents': 90,
            'Multimodal Systems': 85,
            'Fine-tuning & Training': 88,
            'Web Development': 80,
            'Data Science': 92
        };
        
        this.projects = [
            {
                id: 1,
                title: "Fine-Tuned LLMs for Education",
                category: "Education",
                description: "Customized Large Language Models trained on CBSE, NCERT, and conceptual learning datasets to create AI Tutors capable of answering and explaining student queries contextually.",
                techStack: ["PyTorch", "Transformers", "LoRA", "Flask", "RAG", "FAISS"],
                image: "resources/ai-neural-1.jpg",
                demoUrl: "#",
                githubUrl: "#"
            },
            {
                id: 2,
                title: "Agentic AI Platform",
                category: "Agents",
                description: "Built a modular AI Agent system that performs automated problem-solving, task execution, and reasoning using connected sub-agents with memory and context sharing.",
                techStack: ["LangChain", "CrewAI", "LangGraph", "Flask", "MongoDB"],
                image: "resources/ai-brain-1.jpg",
                demoUrl: "#",
                githubUrl: "#"
            },
            {
                id: 3,
                title: "VLMs for Intelligent Systems",
                category: "Multimodal",
                description: "Developed custom multimodal models capable of image understanding, captioning, and visual Q&A using CLIP + LLaVA architecture for education and manufacturing analytics.",
                techStack: ["CLIP", "LLaVA", "Vision Transformers", "PyTorch"],
                image: "resources/workspace-1.jpg",
                demoUrl: "#",
                githubUrl: "#"
            },
            {
                id: 4,
                title: "AI Chatbot with Knowledge Graph",
                category: "Chatbot",
                description: "Advanced chatbot integrated with vector database and domain knowledge graphs to produce contextually accurate and explainable responses for business analytics.",
                techStack: ["FAISS", "Knowledge Graphs", "RAG", "Python"],
                image: "resources/tech-bg-1.jpg",
                demoUrl: "#",
                githubUrl: "#"
            },
            {
                id: 5,
                title: "AI-Powered ERP & Analytics",
                category: "ERP",
                description: "Lightweight Flask-based ERP for SMEs integrating inventory forecasting, billing automation, AI query assistant, and real-time analytics dashboard deployed on Raspberry Pi.",
                techStack: ["Flask", "ARIMA", "Docker", "Raspberry Pi"],
                image: "resources/ai-lab-1.jpg",
                demoUrl: "#",
                githubUrl: "#"
            }
        ];

        this.aiQuotes = [
            "I don't just build AI systems — I build the intelligence that builds systems.",
            "The future of AI is not just about machines thinking, but about machines that help humans think better.",
            "In the intersection of learning, reasoning, and autonomy lies the true power of artificial intelligence.",
            "AI mastery should be universal — anyone should be able to understand, build, and enhance AI.",
            "The next generation of intelligent systems will merge human creativity with machine precision.",
            "Teaching AI in schools is not about replacing teachers, but about amplifying human potential.",
            "Every line of code in an AI system is a step toward understanding intelligence itself."
        ];

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAnimations();
        this.createSkillsChart();
        this.setupProjectFilters();
        this.initContactForm();
        this.startBackgroundEffects();
    }

    setupEventListeners() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Window resize handler
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    initAnimations() {
        // Initialize Typed.js for hero text
        if (document.querySelector('.hero-typewriter')) {
            new Typed('.hero-typewriter', {
                strings: [
                    'AI Researcher',
                    'Machine Learning Expert',
                    'LLM Specialist',
                    'AI Agent Developer',
                    'Multimodal Systems Architect'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }

        // Initialize quote generator
        this.initQuoteGenerator();

        // Scroll reveal animations
        this.initScrollAnimations();
    }

    initQuoteGenerator() {
        const quoteElement = document.querySelector('.ai-quote');
        const generateBtn = document.querySelector('.generate-quote-btn');
        
        if (quoteElement && generateBtn) {
            // Display initial quote
            this.displayRandomQuote();
            
            generateBtn.addEventListener('click', () => {
                this.displayRandomQuote();
            });
        }
    }

    displayRandomQuote() {
        const quoteElement = document.querySelector('.ai-quote');
        if (!quoteElement) return;

        const randomQuote = this.aiQuotes[Math.floor(Math.random() * this.aiQuotes.length)];
        
        // Animate out current quote
        anime({
            targets: quoteElement,
            opacity: 0,
            duration: 300,
            complete: () => {
                quoteElement.textContent = randomQuote;
                // Animate in new quote
                anime({
                    targets: quoteElement,
                    opacity: 1,
                    duration: 300
                });
            }
        });
    }

    initScrollAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    if (element.classList.contains('fade-in-up')) {
                        anime({
                            targets: element,
                            translateY: [50, 0],
                            opacity: [0, 1],
                            duration: 800,
                            easing: 'easeOutQuart'
                        });
                    }
                    
                    if (element.classList.contains('stagger-children')) {
                        const children = element.children;
                        anime({
                            targets: children,
                            translateY: [30, 0],
                            opacity: [0, 1],
                            duration: 600,
                            delay: anime.stagger(100),
                            easing: 'easeOutQuart'
                        });
                    }
                    
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        document.querySelectorAll('.fade-in-up, .stagger-children').forEach(el => {
            observer.observe(el);
        });
    }

    createSkillsChart() {
        const chartContainer = document.querySelector('#skills-chart');
        if (!chartContainer) return;

        const chart = echarts.init(chartContainer);
        
        const option = {
            backgroundColor: 'transparent',
            radar: {
                indicator: Object.keys(this.skillsData).map(skill => ({
                    name: skill,
                    max: 100
                })),
                center: ['50%', '50%'],
                radius: '70%',
                axisName: {
                    color: '#2c3e50',
                    fontSize: 12,
                    fontWeight: 'bold'
                },
                splitLine: {
                    lineStyle: {
                        color: '#e0e0e0'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#e0e0e0'
                    }
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: Object.values(this.skillsData),
                    name: 'Skills',
                    areaStyle: {
                        color: 'rgba(0, 212, 255, 0.3)'
                    },
                    lineStyle: {
                        color: '#00d4ff',
                        width: 2
                    },
                    itemStyle: {
                        color: '#ff6b35'
                    }
                }],
                animationDuration: 2000,
                animationEasing: 'cubicOut'
            }]
        };

        chart.setOption(option);
        
        // Responsive resize
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }

    setupProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        if (!filterButtons.length || !projectCards.length) return;

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter projects
                this.filterProjects(filter, projectCards);
            });
        });
    }

    filterProjects(filter, projectCards) {
        projectCards.forEach(card => {
            const category = card.dataset.category;
            const shouldShow = filter === 'all' || category === filter;
            
            if (shouldShow) {
                anime({
                    targets: card,
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    duration: 400,
                    easing: 'easeOutQuart'
                });
                card.style.display = 'block';
            } else {
                anime({
                    targets: card,
                    opacity: 0,
                    scale: 0.8,
                    duration: 300,
                    complete: () => {
                        card.style.display = 'none';
                    }
                });
            }
        });
    }

    initContactForm() {
        const form = document.querySelector('#contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(form);
        });

        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Clear previous errors
        this.clearFieldError(field);

        // Validation rules
        if (fieldName === 'name' && !value) {
            isValid = false;
            errorMessage = 'Name is required';
        } else if (fieldName === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) {
                isValid = false;
                errorMessage = 'Email is required';
            } else if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email';
            }
        } else if (fieldName === 'message' && !value) {
            isValid = false;
            errorMessage = 'Message is required';
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('border-red-500');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'text-red-500 text-sm mt-1 field-error';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
    }

    clearFieldError(field) {
        field.classList.remove('border-red-500');
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    handleFormSubmit(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        let isFormValid = true;

        // Validate all fields
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            this.submitForm(form);
        } else {
            this.showFormError('Please correct the errors above');
        }
    }

    submitForm(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            this.showFormSuccess('Thank you! Your message has been sent successfully.');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showFormSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4';
        successDiv.textContent = message;
        
        const form = document.querySelector('#contact-form');
        form.parentNode.insertBefore(successDiv, form);

        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

    showFormError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4';
        errorDiv.textContent = message;
        
        const form = document.querySelector('#contact-form');
        form.parentNode.insertBefore(errorDiv, form);

        // Remove error message after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    startBackgroundEffects() {
        // Initialize neural network background
        this.initNeuralNetwork();
    }

    initNeuralNetwork() {
        const canvas = document.querySelector('#neural-network-canvas');
        if (!canvas) return;

        // Simple neural network visualization using canvas
        const ctx = canvas.getContext('2d');
        const nodes = [];
        const connections = [];
        
        // Create nodes
        for (let i = 0; i < 50; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 3 + 1
            });
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw nodes
            nodes.forEach(node => {
                // Update position
                node.x += node.vx;
                node.y += node.vy;
                
                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
                
                // Draw node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
                ctx.fill();
            });
            
            // Draw connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(255, 107, 53, ${1 - distance / 100})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }

    handleResize() {
        // Handle responsive adjustments
        const canvas = document.querySelector('#neural-network-canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AIPortfolio();
});

// Utility functions for hover effects
function addHoverEffects() {
    const cards = document.querySelectorAll('.hover-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            anime({
                targets: e.target,
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
        
        card.addEventListener('mouseleave', (e) => {
            anime({
                targets: e.target,
                scale: 1,
                rotateY: 0,
                rotateX: 0,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
    });
}

// Initialize hover effects when DOM is loaded
document.addEventListener('DOMContentLoaded', addHoverEffects);