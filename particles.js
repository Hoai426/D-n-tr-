/* particles.js - Simple Particle System */
class ParticleSystem {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.particles = [];
        this.options = {
            density: options.density || 50,
            color: options.color || '#ffffff',
            size: options.size || 3,
            speed: options.speed || 1,
            opacity: options.opacity || 0.5,
            ...options
        };
        
        this.init();
    }

    init() {
        this.createCanvas();
        this.createParticles();
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.canvas.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        `;
        
        this.container.appendChild(this.canvas);
        this.resizeCanvas();
    }

    resizeCanvas() {
        const rect = this.container.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    createParticles() {
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 10000 * this.options.density);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * this.options.size + 1,
                speedX: (Math.random() - 0.5) * this.options.speed,
                speedY: (Math.random() - 0.5) * this.options.speed,
                opacity: Math.random() * this.options.opacity
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.speedY *= -1;
            
            // Keep within bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${this.hexToRgb(this.options.color)}, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        // Draw connections between nearby particles
        this.drawConnections();
        
        requestAnimationFrame(() => this.animate());
    }

    drawConnections() {
        const maxDistance = 100;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    const opacity = 1 - (distance / maxDistance);
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(${this.hexToRgb(this.options.color)}, ${opacity * 0.2})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? 
            `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
            : '255, 255, 255';
    }

    // Public methods to update options
    setColor(color) {
        this.options.color = color;
    }

    setDensity(density) {
        this.options.density = density;
        this.particles = [];
        this.createParticles();
    }

    destroy() {
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// Mood-specific particle configurations
const moodParticles = {
    'duong-tam': {
        color: '#FF9AA2',
        density: 60,
        size: 4,
        speed: 0.8,
        opacity: 0.4
    },
    'ngu-ngon': {
        color: '#A2D2FF',
        density: 40,
        size: 3,
        speed: 0.5,
        opacity: 0.3
    },
    'thu-gian': {
        color: '#C8B6FF',
        density: 50,
        size: 3.5,
        speed: 0.6,
        opacity: 0.35
    },
    'giai-doc': {
        color: '#CCD5AE',
        density: 55,
        size: 3,
        speed: 0.7,
        opacity: 0.4
    },
    'nang-luong': {
        color: '#FFB4A2',
        density: 70,
        size: 4.5,
        speed: 1.2,
        opacity: 0.5
    },
    'tinh-tao': {
        color: '#A2D2C8',
        density: 65,
        size: 3,
        speed: 1,
        opacity: 0.4
    }
};

// Initialize particle system for a specific mood
function initMoodParticles(mood, containerId = 'mood-particles') {
    const config = moodParticles[mood] || moodParticles.duong-tam;
    return new ParticleSystem(containerId, config);
}

// Simple particles.js compatibility layer
window.particlesJS = function(containerId, config) {
    return new ParticleSystem(containerId, config.particles || {});
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ParticleSystem, initMoodParticles, moodParticles };
}