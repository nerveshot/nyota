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

    const currentCategoryObj = TEMPLATE_CATEGORIES.find(c => c.id === activeCategory) || TEMPLATE_CATEGORIES[0];
    const categoryCustomMsg = encodeURIComponent(`Hi! ✨ I would like to order a bespoke custom invitation for ${currentCategoryObj.label}. Please share design details and pricing.`);
    const customWhatsAppUrl = `https://wa.me/918302929248?text=${categoryCustomMsg}`;

    container.innerHTML = `
      <section id="gallery-section" style="padding: 5rem 0;">
        <div class="container">
          <div class="text-center" style="margin-bottom: 3rem;">
            <span class="badge badge-gold" style="margin-bottom: 0.75rem;">Curated Collection</span>
            <h2 class="font-serif" style="font-size: 2.5rem; color: #FFF; margin-bottom: 0.75rem;">
              Handcrafted Luxury Invitation Suites
            </h2>
            <p class="text-muted" style="max-width: 600px; margin: 0 auto; font-size: 0.95rem;">
              Choose from royal wedding themes, or request a bespoke custom invitation for any milestone celebration.
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
          ${filteredTemplates.length > 0 ? `
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

              ${activeCategory === 'all' ? `
                <!-- Bespoke Custom Request Card in All view -->
                <div class="glass-panel" style="overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; border: 2px dashed rgba(212, 175, 55, 0.4); padding: 2rem; text-align: center; background: radial-gradient(circle at center, rgba(19, 15, 41, 0.9) 0%, rgba(11, 9, 20, 0.95) 100%); transition: var(--transition);" onmouseenter="this.style.borderColor='rgba(212,175,55,0.8)'; this.style.transform='translateY(-6px)'" onmouseleave="this.style.borderColor='rgba(212,175,55,0.4)'; this.style.transform='translateY(0)'">
                  <div>
                    <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 1px solid var(--gold-border); margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center; font-size: 1.75rem;">
                      🎨
                    </div>
                    <span class="badge badge-gold" style="margin-bottom: 0.75rem; font-size: 0.7rem;">Bespoke Service</span>
                    <h3 class="font-serif" style="font-size: 1.4rem; color: #FFF; margin-bottom: 0.5rem;">Need a Custom Design?</h3>
                    <p class="text-muted" style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.5rem;">
                      Looking for birthdays, baby showers, anniversaries, or gala events? We handcraft custom invitations tailored to your exact theme.
                    </p>
                  </div>
                  
                  <a href="https://wa.me/918302929248?text=${encodeURIComponent('Hi! ✨ I would like to request a bespoke custom invitation for my event.')}" target="_blank" rel="noopener" class="btn btn-primary-gold btn-block" style="text-decoration: none;">
                    <span>Order Custom on WhatsApp</span>
                    <span>💬</span>
                  </a>
                </div>
              ` : ''}

            </div>
          ` : `
            <!-- Empty Category: Coming Soon & Custom Order Card -->
            <div class="glass-panel coming-soon-card" style="max-width: 680px; width: 100%; margin: 0 auto; padding: clamp(1.75rem, 5vw, 3.5rem) clamp(1rem, 4vw, 2.5rem); text-align: center; border: 2px solid rgba(212, 175, 55, 0.45); border-radius: var(--radius-xl); background: radial-gradient(circle at center, rgba(22, 18, 44, 0.92) 0%, rgba(11, 9, 20, 0.96) 100%); box-shadow: var(--shadow-gold-lg); box-sizing: border-box;">
              
              <div style="width: 72px; height: 72px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 1.5px solid var(--gold-border); margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 2.25rem; box-shadow: var(--shadow-gold);">
                ${currentCategoryObj.icon}
              </div>

              <div class="badge badge-gold" style="margin-bottom: 1rem; font-size: 0.75rem; letter-spacing: 0.12em; white-space: normal; line-height: 1.4; padding: 0.35rem 0.85rem; max-width: 100%;">
                <span>✨</span>
                <span>Coming Soon • Bespoke Orders Open</span>
              </div>

              <h3 class="font-cinzel" style="font-size: clamp(1.5rem, 4vw, 2rem); color: #FFF; font-weight: 700; margin-bottom: 0.75rem; word-break: break-word;">
                ${currentCategoryObj.label} Suite
              </h3>

              <p class="text-muted" style="font-size: 0.95rem; line-height: 1.7; max-width: 520px; margin: 0 auto 1.75rem;">
                Pre-made templates for <strong style="color: var(--gold-light);">${currentCategoryObj.label}</strong> are currently being handcrafted and will be launching soon!
              </p>

              <!-- Highlight Box -->
              <div style="background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 2rem; text-align: left; box-sizing: border-box; width: 100%;">
                <div style="font-size: 0.88rem; font-weight: 700; color: var(--gold-light); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; flex-wrap: wrap;">
                  <span>💬</span>
                  <span>Custom Invitations Available Right Now:</span>
                </div>
                <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6; margin: 0;">
                  For now, you can order a bespoke custom invitation designed exclusively for your ${currentCategoryObj.label} celebration with personalized music, 3D wax seal unboxing, and tailored theme colors.
                </p>
              </div>

              <!-- Action CTAs -->
              <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; max-width: 440px; margin: 0 auto; box-sizing: border-box;">
                <a href="${customWhatsAppUrl}" target="_blank" rel="noopener" class="btn btn-primary-gold" style="box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4); text-decoration: none; padding: 0.85rem 1.25rem; font-size: 0.95rem; white-space: normal; line-height: 1.4; text-align: center; width: 100%; box-sizing: border-box; display: inline-flex; justify-content: center; align-items: center; gap: 0.5rem;">
                  <span>💬</span>
                  <span>Order Custom Invitation on WhatsApp</span>
                </a>
                <button class="btn btn-secondary gallery-filter-btn" data-category="all" style="padding: 0.85rem 1.25rem; font-size: 0.95rem; white-space: normal; line-height: 1.4; text-align: center; width: 100%; box-sizing: border-box; display: inline-flex; justify-content: center; align-items: center; gap: 0.5rem;">
                  <span>Explore Wedding Templates</span>
                  <span>💍</span>
                </button>
              </div>

            </div>
          `}
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
