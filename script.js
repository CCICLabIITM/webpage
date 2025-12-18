// script.js

// NOTE: News Items have been moved to news.html.
// NOTE: Gallery Images have been moved to gallery.html.
// NOTE: Team Members and Alumni have been moved to team.html.

// --- DYNAMIC CONTENT RENDERING FUNCTIONS ---

function renderPublications(limit) {
    const list = document.getElementById('publications-list');
    if (!list) return;

    list.innerHTML = ''; 

    // NOTE: This function requires a 'publications' array to be defined globally 
    // (e.g. in publications.html)
    if (typeof publications === 'undefined' || !Array.isArray(publications)) {
        console.warn('Publications data is missing. Skipping renderPublications.');
        return;
    }

    // Sort publications by year, most recent first
    const sortedPublications = [...publications].sort((a, b) => b.year - a.year);
    const itemsToShow = limit ? sortedPublications.slice(0, limit) : sortedPublications;

    // Group publications by year
    const groupedByYear = itemsToShow.reduce((acc, p) => {
        if (!acc[p.year]) {
            acc[p.year] = [];
        }
        acc[p.year].push(p);
        return acc;
    }, {});

    const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

    sortedYears.forEach(year => {
        const yearSection = document.createElement('div');
        yearSection.className = 'flex flex-col md:flex-row gap-4 md:gap-8';

        const yearColumn = `
            <div class="md:w-1/12 flex-shrink-0">
                <h3 class="text-2xl font-bold text-gray-800 md:sticky md:top-24">${year}</h3>
            </div>`;

        const pubsColumn = document.createElement('div');
        pubsColumn.className = 'md:w-11/12 space-y-6';

        groupedByYear[year].forEach(p => {
            const item = document.createElement('div');
            item.className = 'bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-shadow duration-300 hover:shadow-lg';
            item.innerHTML = `
                <p class="font-bold text-lg text-gray-900">${p.title}</p>
                <p class="text-gray-600 mt-1 text-sm">${p.authors}</p>
                <p class="text-sm text-gray-500 mt-2"><em>${p.journal}</em>, ${p.year}</p>
                ${p.link && p.link !== '#' ? `
                <a href="${p.link}" class="inline-block mt-3 text-blue-600 font-semibold text-sm hover:underline">
                    Read Paper <span class="font-sans">&rarr;</span>
                </a>` : ''}
            `;
            pubsColumn.appendChild(item);
        });
       
        yearSection.innerHTML = yearColumn;
        yearSection.appendChild(pubsColumn);
        list.appendChild(yearSection);
    });
}
   
function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    // Safety Check: Ensure galleryImages exists (since it's now in gallery.html)
    if (typeof galleryImages === 'undefined') {
        console.warn("galleryImages array is missing. Ensure it is defined in gallery.html");
        return;
    }

    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.getElementById('modal-close-btn');

    grid.innerHTML = '';
    galleryImages.forEach(img => {
        const item = document.createElement('div');
        item.className = 'aspect-w-1 aspect-h-1 cursor-pointer overflow-hidden rounded-lg group';
        item.innerHTML = `<img src="${img.src}" onerror="this.onerror=null;this.src='https://placehold.co/400x300/F59E0B/FFFFFF?text=Photo+Missing';" alt="${img.caption}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300">`;
       
        item.addEventListener('click', () => {
            modalImg.src = img.src;
            // Add a fallback for the modal image too
            modalImg.onerror = () => modalImg.src = 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Image+Not+Found'; 
            modalCaption.textContent = img.caption;
            modal.classList.remove('hidden');
        });
        grid.appendChild(item);
    });

    if (modal && closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
    if (window.feather) feather.replace();
}

/**
 * Global function to remove the target="_blank" attribute from all links.
 */
function fixNavigationLinks() {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        // Remove the target attribute completely
        link.removeAttribute('target');
    });
}


// --- GLOBAL INITIALIZATION AND EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', function() {
    // --- Data Rendering ---
    // Only run if the containers exist (e.g. on publications.html or gallery.html)
    renderPublications(4); 
    renderGallery();

    // --- Global Setup ---
    
    // FIX: Ensure all links open in the same window
    fixNavigationLinks();

    // Set current year in footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    
    // Feather Icons initialization (needed on all pages)
    if (window.feather) feather.replace();

    // --- Event Listeners ---

    // "Show All" button functionality for Publications
    const toggleBtn = document.getElementById('toggle-publications-btn');
    if (toggleBtn) {
        let allShown = false;
        toggleBtn.addEventListener('click', () => {
            allShown = !allShown;
            if (allShown) {
                renderPublications(); 
                toggleBtn.textContent = 'Show Less';
            } else {
                renderPublications(4); 
                toggleBtn.textContent = 'Show All Publications';
            }
            setTimeout(() => {
                const pubSection = document.getElementById('publications');
                if(pubSection) pubSection.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.add('hidden');
        });
    });

    // Header shrink on scroll
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('py-2');
                header.classList.remove('py-4');
            } else {
                header.classList.add('py-4');
                header.classList.remove('py-2');
            }
        });
    }
});
