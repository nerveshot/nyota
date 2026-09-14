// ==========================================================================
// NYOTA TEMPLATE GALLERY COMPONENT (PURE VANILLA JS)
// ==========================================================================

import { TEMPLATE_CATEGORIES, INVITATION_TEMPLATES } from '../templates.js';

export function renderTemplateGallery(containerId, onSelectTemplate = () => {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let activeCategory = 'all';

  function render() {
    const filteredTemplates = activeCategory === 'all' 
      ? INVITATION_TEMPLATES 
      : INVITATION_TEMPLATES.filter(t => t.category === activeCategory);

    container.innerHTML = `
      <section style="padding: 5rem 0;">
        <div class="container">
          <div class="text-center" style="margin-bottom: 3rem;">
            <span class="badge badge-gold" style="margin-bottom: 0.75rem;">Curated Collection</span>
            <h2 class="font-serif" style="font-size: 2.5rem; color: #FFF; margin-bottom: 0.75rem;">
              Handcrafted Luxury Invitation Suites
            </h2>
            <p class="text-muted" style="max-width: 600px; margin: 0 auto; font-size: 0.95rem;">
              Choose from royal Arabian palace aesthetics, midnight starlight galas, or romantic floral calligraphy.
            </p>
          </div>

          <!-- Category Filters -->
          <div class="flex justify-center gap-2" style="flex-wrap: wrap; margin-bottom: 3rem;">
            ${TEMPLATE_CATEGORIES.map(cat => `
              <button class="btn btn-sm ${activeCategory === cat.id ? 'btn-primary-gold' : 'btn-secondary'} gallery-filter-btn" data-category="${cat.id}">
                <span>${cat.icon}</span>
                <span>${cat.label}</span>
              </button>
            `).join('')}
          </div>

          <!-- Templates Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2rem;">
            ${filteredTemplates.map(t => `
              <div class="glass-panel" style="overflow: hidden; display: flex; flex-direction: column; transition: var(--transition);" onmouseenter="this.style.transform='translateY(-6px)'" onmouseleave="this.style.transform='translateY(0)'">
                <div style="position: relative; height: 260px; overflow: hidden; background: #05060F;">
                  <img src="${t.defaults.heroPhoto || '/images/muslim-royal-couple.jpg'}" alt="${t.name}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />
                  <div style="position: absolute; top: 1rem; left: 1rem;">
                    <span class="badge badge-gold">${t.badge || 'Luxury'}</span>
                  </div>
                  <div style="position: absolute; bottom: 1rem; right: 1rem; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); padding: 0.4rem 0.8rem; border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.85rem; color: var(--gold-light);">
                    ₹${t.basePrice}
                  </div>
                </div>

                <div style="padding: 1.75rem; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <h3 class="font-serif" style="font-size: 1.35rem; color: #FFF; margin-bottom: 0.5rem;">${t.name}</h3>
                    <p class="text-muted" style="font-size: 0.85rem; line-height: 1.5; margin-bottom: 1.5rem;">${t.tagline}</p>
                  </div>

                  <div class="flex gap-2">
                    <button class="btn btn-primary-gold btn-block template-customize-btn" data-template-id="${t.id}">
                      <span>Customize in Studio</span>
                      <span>✨</span>
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;

    // Bind category filter clicks
    container.querySelectorAll('.gallery-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.category;
        render();
      });
    });

    // Bind customize button clicks
    container.querySelectorAll('.template-customize-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tId = btn.dataset.templateId;
        const selected = INVITATION_TEMPLATES.find(t => t.id === tId) || INVITATION_TEMPLATES[0];
        onSelectTemplate(selected);
      });
    });
  }

  render();
}
