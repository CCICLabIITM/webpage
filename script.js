// script.js
// --- DATA ---
// All website content data is centralized here for easy updates across all pages.

const teamMembers = [
    // Updated image paths to reliable placeholders to prevent the "question mark" icon
    { name: "Jogeshwar Chhatria", role: "PhD Student", joiningDate: "July 2022",
      linkedin: "https://www.linkedin.com/in/jogeswar-chhatria-6538362b4/", email: "cy22d017@smail.iiitm.ac.in", imageUrl: "IMAGE/PROFILE/jogesh.jpg" }, 
    { name: "Madhurja Buragohain", role: "PhD Student", joiningDate: "July 2022", linkedin: "https://www.linkedin.com/in/mburagohain/",
      imageUrl: "IMAGE/PROFILE/madhurja.jpg", email: "cy22d015@smail.iiitm.ac.in" }, 
    { name: "Sudhin R", role: "PhD Student", joiningDate: "July 2023",
      linkedin: "https://www.linkedin.com/in/sudhin-r/", email: "cy23d024@smail.iitm.ac.in", imageUrl: "IMAGE/PROFILE/sudhin.jpg"}, 
    { name: "Athira J", role: "PhD Student", joiningDate: "July 2024",
      linkedin: "https://www.linkedin.com/in/athira-jayasankar-867b46214/", email: "cy24d300@smail.iitm.ac.in", imageUrl: "IMAGE/PROFILE/athira.jpg"}, 
    { name: "Anjana Vijayan", role: "PhD Student", joiningDate: "July 2025",
      linkedin: "#", email: "cy25d037@smail.iiitm.ac.in", imageUrl: "IMAGE/PROFILE/anjana.jpg"}, 
    { name: "Stuti Gupta", role: "Project Student", joiningDate: "July 2025",
      linkedin: "https://www.linkedin.com/in/stuti-gupta-24285b215/", email: "guptastuti012@gmail.com", imageUrl: "IMAGE/PROFILE/stuti.jpg"}, 
    { name: "Ankan Kamila", role: "Masters Student", joiningDate: "July 2025",
      linkedin: "#", email: "cy24c013@smail.iiitm.ac.in", imageUrl: "IMAGE/PROFILE/ankan.jpg"}, 
    { name: "Himadri Mittal", role: "Masters Student", joiningDate: "July 2025",
      linkedin: "#", email: "cy24c033@smail.iiitm.ac.in", imageUrl: "IMAGE/PROFILE/himadri.jpg"}
];

const postdocAlumni = [
    { name: "Dr. Pragin", role: "Works at TCS", where: "Post Doc, 2024 (CCIC LAB)" }, 
    { name: "Dr. Maiyelvaganan ", role: "Postdoctoral Researcher", where: "PostDoc, 2025 (CCIC LAB)" } 
];

const mscAlumni = [
    { name: "Stuti Gupta", role: "Continewing PhD at CCIC", where: "MSc, 2023" },
    { name: "Amiya Paul", role: "PhD at  University of North Carolina at Chapel Hill", where: "MSc, 2024" },
];

const internAlumni = [
    { name: "Soumya U K", role: "PhD at  TCG Crest, Kolkata", where: "MSc, 2023" },
    { name: "Nikitha S", role: "PhD at Ghent University, Belgium", where: "MSc, 2022" },
    { name: "Muskan", role: "Works at Pharma", where: "MSc, 2023" },
    { name: "Sankari NS", role: "PhD at  IIT Madras", where: "MSc, 2022" }
];


const newsItems = [
    { title: "Madhurja’s Latest Paper Publication",
      date: "October 16, 2025",
      excerpt: "We're happy to share our new article on solid electrolyte interphase (SEI) formation in Li metal batteries, published in ACS Applied Energy Materials.", 
      imageUrl: "https://pubs.acs.org/cms/10.1021/acsaem.5c02340/asset/images/medium/ae5c02340_0009.gif" },
    { title: "Mr. Madhurja recieves best oral presentation award",
      date: "Sepetember 8, 2025",
      excerpt: " We are proud to share that Madhurjya Buragohain received the Best Oral Presentation Award at the Chemistry In-House Symposium (CiHS)-2025, organized by the Department of Chemistry, IIT Madras.  Congratulations from the entire CCIC Lab on this achievement!", 
      imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQHNvXkunRhQEA/feedshare-shrink_800/B56ZkvLm_RHAAg-/0/1757433202892?e=1762992000&v=beta&t=zCDPbYtLTTWBZRzHbcPXvBVoWZ1Vi9aFI4eWvPFAhnU" },
    { title: "Mr. Sudhin R recieves best poster award",
      date: "August 28, 2025",
      excerpt: "We are delighted to share that Sudhin R. from our CCIC lab has been awarded the Best Poster Award at the National Symposium on Electrochemical Science and Technology (NSEST-2025), held during 28–29 August 2025.The symposium, jointly organized by the Electrochemical Society of India, Indian Institute of Science (Bengaluru), SRM Institute of Science and Technology (Kattankulathur), and Indian Institute of Technology Madras.Congratulations, Sudhin! Wishing you many more milestones and successes in your research journey.", 
      imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQHh6w4E_zQbfw/feedshare-shrink_800/B56ZkPgRKYG4Ak-/0/1756901744882?e=1762992000&v=beta&t=HjjZJY9-lxE2bjNGcKdrpsey8vRTmzJjhPZlsHazZWM" },
    { title: "CCIC welcomes new PhD students",
      date: "August 1, 2025", 
      excerpt: "We are excited to welcome Anjana Vijayan to the lab. She will be working on solid-electrolyte.", 
      imageUrl: "https://placehold.co/400x250/10B981/FFFFFF?text=Welcome" },
    { title: "Ms. Stuti awarded the prestigious Prof. V. Ramamurthy Endowment Award for Best MSc Thesis.",
      date: "August 17, 2025", 
      excerpt: "We’re delighted to share that STUTI GUPTA, an MSc student from our lab, has officially graduated. She has been awarded the prestigious Prof. V. Ramamurthy Endowment Award for Best MSc Thesis. Wishing her all the very best for the exciting paths to come! ", 
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQEOQACqZH_iUg/feedshare-shrink_800/B4DZgXFofgGsAg-/0/1752734011582?e=1762992000&v=beta&t=WqXHvqZPvyeqHuxHf8YNwwOqjxQT9vfsGWH2D96oZQ0" },
    { title: "Mr. Jogesh recieves best poster award",
      date: "November 6, 2024", 
      excerpt: "A big congratulations to our lab member Jogeswar Chhatria, who has been awarded the Best Poster in Theoretical Chemistry at the Chemistry In-House Symposium 2024 conducted by Department of Chemistry, Indian Institute of Technology, Madras.", 
      imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQFsTpi-yk5J4g/feedshare-shrink_800/feedshare-shrink_800/0/1730884396137?e=1762992000&v=beta&t=Kh6PMJ3rd7N-4lbIXIvmdpw6tOENiAxVDaXUzLQINxc" }
];
    
const galleryImages = [
    { src: "IMAGE/Gallery/Aug2_2025.png", caption: "Good food, great company • Soumya’s Farewell Dinner • 02/08/25" },
    { src: "IMAGE/Gallery/Oct9_2024.png", caption: "Celebrating teamwork, curiosity, and countless hours at the bench with a well-deserved dinner outing. Oct 2, 2024, was a night to remember for our incredible lab family!" },
    { src: "IMAGE/Gallery/13_August ‎2023.png", caption: "Caption" },
    { src: "IMAGE/Gallery/14Aug.2023.png", caption: "Caption" },
    { src: "IMAGE/Gallery/29July_2023.png", caption: "Caption" },
    { src: "IMAGE/Gallery/07August_2023.png", caption: "Caption" },
    { src: "IMAGE/Gallery/21_September_2023.png", caption: "Caption" },
    { src: "IMAGE/Gallery/10Oct_2023.png", caption: "Great vibes, amazing team • Lab dinner • 10/10/23" }
];


// --- DYNAMIC CONTENT RENDERING FUNCTIONS (only run if the element exists) ---
// These functions are designed to check if the target container exists before running,
// ensuring they only execute on the page where they are relevant (mostly team.html).

function renderPublications(limit) {
    const list = document.getElementById('publications-list');
    if (!list) return;

    list.innerHTML = ''; 

    // NOTE: Publications data is missing from the provided script. 
    // This function will not render anything unless a 'publications' array is defined.
    // Assuming 'publications' array exists elsewhere or was omitted.
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
            // NOTE: Removed target="_blank" from the publication link to match the user's request.
            // For external links, target="_blank" is generally preferred, but we adhere to the fix requested.
            pubsColumn.appendChild(item);
        });
        
        yearSection.innerHTML = yearColumn;
        yearSection.appendChild(pubsColumn);
        list.appendChild(yearSection);
    });
}
    
function renderTeam(members, containerId) {
    const list = document.getElementById(containerId);
    if (!list) return;

    list.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'text-center';
        const initials = member.name.split(' ').map(n => n[0]).join('');
        // NOTE: The main imageUrl will now be the placeholder URL from the data array.
        // The ternary logic below is simplified because member.imageUrl is now a valid URL.
        const imageUrl = member.imageUrl || `https://placehold.co/200x200/EBF4FF/3B82F6?text=${initials}`;
        
        let description = `<p class="text-blue-600">${member.role}</p>`;
        if (member.joiningDate) {
            description += `<p class="text-gray-500 text-sm mt-1">Joined: ${member.joiningDate}</p>`;
        }
        if (member.where) {
            description += `<p class="text-gray-500 text-sm mt-1">${member.where}</p>`;
        }

        let socialLinks = '';
        if (member.linkedin && member.email) {
            // NOTE: Removed target="_blank" from the social link to match the user's request.
            socialLinks = `
                <div class="flex justify-center space-x-3 mt-2">
                    <a href="${member.linkedin}" class="text-gray-400 hover:text-blue-600">
                        <i data-feather="linkedin" class="w-5 h-5"></i>
                    </a>
                    <a href="mailto:${member.email}" class="text-gray-400 hover:text-blue-600">
                        <i data-feather="mail" class="w-5 h-5"></i>
                    </a>
                </div>`;
        }

        card.innerHTML = `
            <img src="${imageUrl}" onerror="this.onerror=null;this.src='https://placehold.co/200x200/EBF4FF/3B82F6?text=${initials}';" alt="${member.name}" class="w-40 h-40 mx-auto rounded-full object-cover mb-4 shadow-lg border-4 border-white">
            <h4 class="font-bold text-lg">${member.name}</h4>
            ${description}
            ${socialLinks}
        `;
        list.appendChild(card);
    });
    // Re-initialize Feather icons after adding new elements
    feather.replace(); 
}

function renderNews() {
    const list = document.getElementById('news-list');
    if (!list) return;

    list.innerHTML = '';
    newsItems.forEach(item => {
        const card = document.createElement('div');
        // Add a class to identify it as a trigger and add hover effects
        card.className = 'news-card-trigger bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1';
        
        // Store all data needed for the modal in data attributes
        card.dataset.title = item.title;
        card.dataset.date = item.date;
        card.dataset.excerpt = item.excerpt;
        card.dataset.image = item.imageUrl;

        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-48 object-cover">
            <!-- Added flex-grow to make the text content fill the space -->
            <div class="p-6 flex flex-col flex-grow">
                <p class="text-sm text-gray-500 mb-2">${item.date}</p>
                <h3 class="font-bold text-lg mb-3">${item.title}</h3>
                
                <!-- This 'excerpt-container' will be styled with line-clamp in news.html -->
                <div class="excerpt-container text-gray-600 text-sm mb-4 flex-grow">
                    <p>${item.excerpt}</p>
                </div>
                
                <!-- 'mt-auto' pushes the "Read More" link to the bottom of the card -->
                <div class="mt-auto">
                    <span class="text-blue-600 font-semibold text-sm hover:underline">
                        Read More <span class="font-sans">&rarr;</span>
                    </span>
                </div>
            </div>
        `;
        list.appendChild(card);
    });
}
    
function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.getElementById('modal-close-btn');

    grid.innerHTML = '';
    galleryImages.forEach(img => {
        const item = document.createElement('div');
        item.className = 'aspect-w-1 aspect-h-1 cursor-pointer overflow-hidden rounded-lg group';
        item.innerHTML = `<img src="${img.src}" onerror="this.onerror=null;this.src='httpsG://placehold.co/400x300/F59E0B/FFFFFF?text=Photo+Missing';" alt="${img.caption}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300">`;
        
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
    feather.replace();
}

/**
 * Global function to remove the target="_blank" attribute from all links.
 * This is necessary to fix links defined in the HTML file (like Home, Research, Team, Publications)
 * that may have been incorrectly set to open in a new tab.
 */
function fixNavigationLinks() {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        // Remove the target attribute completely, which defaults the link to open in the same window (_self)
        link.removeAttribute('target');
    });
}


// --- GLOBAL INITIALIZATION AND EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', function() {
    // --- Data Rendering ---
    // Only run on team.html:
    renderPublications(4); 
    renderTeam(teamMembers, 'team-members-list'); 
    renderTeam(postdocAlumni, 'team-alumni-postdoc-list'); 
    renderTeam(mscAlumni, 'team-alumni-msc-list'); 
    renderTeam(internAlumni, 'team-alumni-intern-list');
    renderNews();
    renderGallery();

    // --- Global Setup ---
    
    // FIX: Ensure all links open in the same window (Fixes the user's issue with nav links)
    fixNavigationLinks();

    // Set current year in footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    
    // Feather Icons initialization (needed on all pages)
    feather.replace();

    // --- Event Listeners (mostly relevant to team.html, but harmless globally) ---

    // "Show All" button functionality
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
             // Scroll back to the publications section top to see the change
             // Delay ensures content height calculation is done
             setTimeout(() => {
                 document.getElementById('publications').scrollIntoView({ behavior: 'smooth' });
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
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2');
            header.classList.remove('py-4');
        } else {
            header.classList.add('py-4');
            header.classList.remove('py-2');
        }
    });

    // Active nav link highlighting on scroll (Only relevant for team.html for internal anchors)
    const currentPage = document.querySelector('nav')?.dataset.currentPage;
    if (currentPage === 'team') {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                // Adjust sectionTop by 90px to account for fixed header height
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 90) { 
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                // Only consider the Team links (which contain a hash)
                if (link.getAttribute('href').includes('team.html#')) {
                    link.classList.remove('active');
                    const linkHash = link.getAttribute('href').split('#')[1];
                    if (current === linkHash) {
                        link.classList.add('active');
                    }
                }
            });
        });
    }

    // --- News Modal Logic ---
    const newsList = document.getElementById('news-list');
    const newsModal = document.getElementById('news-modal');
    const newsModalCloseBtn = document.getElementById('news-modal-close-btn');
    
    // Modal content elements
    const modalImg = document.getElementById('news-modal-image');
    const modalDate = document.getElementById('news-modal-date');
    const modalTitle = document.getElementById('news-modal-title');
    const modalExcerpt = document.getElementById('news-modal-excerpt');
    
    const openNewsModal = (card) => {
        if (!card || !newsModal) return;

        // 1. Get data from the clicked card's dataset
        const { title, date, excerpt, image } = card.dataset;

        // 2. Populate the modal
        modalImg.src = image;
        modalImg.alt = title;
        modalDate.textContent = date;
        modalTitle.textContent = title;
        // Handle multiline excerpts by splitting and wrapping in <p> tags
        modalExcerpt.innerHTML = excerpt.split('\n').map(p => `<p>${p}</p>`).join('');

        // 3. Show the modal with a fade-in effect
        newsModal.classList.remove('hidden');
        setTimeout(() => newsModal.classList.remove('opacity-0'), 10); // Start fade-in
    };

    const closeNewsModal = () => {
        if (!newsModal) return;
        
        newsModal.classList.add('opacity-0');
        setTimeout(() => newsModal.classList.add('hidden'), 300); // Hide after fade-out
    };

    // Event Delegation: Listen for clicks on the list itself
    if (newsList) {
        newsList.addEventListener('click', (e) => {
            // Find the card trigger that was clicked
            const cardTrigger = e.target.closest('.news-card-trigger');
            if (cardTrigger) {
                e.preventDefault();
                openNewsModal(cardTrigger);
            }
        });
    }

    // Close modal listeners
    if (newsModalCloseBtn) {
        newsModalCloseBtn.addEventListener('click', closeNewsModal);
    }
    
    if (newsModal) {
        newsModal.addEventListener('click', (e) => {
            // Check if the click is on the overlay (the modal itself)
            // and not on the content wrapper
            if (e.target === newsModal) {
                closeNewsModal();
            }
        });
    }
    
    // Also ensure Feather icons are replaced for the new modal close button
    feather.replace();
});


