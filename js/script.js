// =============================== 

// Cognivault Unique Script.js 

// =============================== 

 

// 1. DARK/LIGHT MODE TOGGLE 

Const toggle = document.createElement(‘button’); 

Toggle.textContent = “🌙 Toggle Mode”; 

Toggle.className = “btn”; 

Document.querySelector(‘header’).appendChild(toggle); 

 

Toggle.addEventListener(‘click’, () => { 

    Document.body.classList.toggle(‘dark-mode’); 

    Document.body.style.transition = “background 0.8s ease, color 0.8s ease”; 

}); 

 

// 2. TYPING EFFECT FOR HERO HEADINGS 

Function typeEffect(element, text, speed = 100) { 

    Let i = 0; 

    Function typing() { 

        If (i < text.length) { 

            Element.innerHTML += text.charAt(i); 

            I++; 

            setTimeout(typing, speed); 

        } 

    } 

    Typing(); 

} 

Document.addEventListener(“DOMContentLoaded”, () => { 

    Const heroHeading = document.querySelector(“.hero h2”); 

    If (heroHeading) { 

        Const text = heroHeading.textContent; 

        heroHeading.textContent = “”; 

        typeEffect(heroHeading, text, 120); 

    } 

}); 

 

// 3. CONTACT FORM VALIDATION + SUCCESS ANIMATION 

Const form = document.querySelector(‘.contact-form’); 

If (form) { 

    Form.addEventListener(‘submit’, e => { 

        e.preventDefault(); 

 

        // Basic validation 

        Const name = document.getElementById(‘name’).value.trim(); 

        Const email = document.getElementById(‘email’).value.trim(); 

        Const subject = document.getElementById(‘subject’).value.trim(); 

        Const message = document.getElementById(‘message’).value.trim(); 

 

        If (!name || !email || !subject || !message) { 

            Alert(“⚠️ Please fill in all fields.”); 

            Return; 

        } 

 

        // Success animation 

        Const successMsg = document.createElement(‘div’); 

        successMsg.textContent = “✅ Message sent successfully!”; 

        successMsg.style.background = “#00ffe7”; 

        successMsg.style.color = “#111”; 

        successMsg.style.padding = “1rem”; 

        successMsg.style.marginTop = “1rem”; 

        successMsg.style.borderRadius = “8px”; 

        successMsg.style.textAlign = “center”; 

        form.appendChild(successMsg); 

 

        form.reset(); 

        setTimeout(() => successMsg.remove(), 4000); 

    }); 

} 