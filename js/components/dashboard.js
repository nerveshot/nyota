// ==========================================================================
// NYOTA USER DASHBOARD COMPONENT (PURE VANILLA JS)
// ==========================================================================

import { getAllInvitations, getAllRsvps } from '../db.js';
import { copyToClipboard } from '../utils/helpers.js';

export function renderUserDashboard(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const { onEditInvitation = () => {}, onOpenStudio = () => {} } = options;

  async function loadDataAndRender() {
    container.innerHTML = `
      <div class="dashboard-wrapper container">
        <div class="text-center" style="padding: 4rem 0;">
          <div class="stat-icon" style="margin: 0 auto 1rem;">⏳</div>
          <p class="text-gold">Loading Your Luxury Dashboard...</p>
        </div>
      </div>
    `;

    const invitations = await getAllInvitations();
    const rsvps = await getAllRsvps();

    const totalRsvps = rsvps.length;
    const attendingCount = rsvps.filter(r => r.status === 'attending').reduce((acc, r) => acc + (r.guestCount || 1), 0);

    container.innerHTML = `
      <div class="dashboard-wrapper container">
        
        <!-- Header -->
        <div class="flex justify-between items-center" style="margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="badge badge-gold" style="margin-bottom: 0.5rem;">Host Portal</span>
            <h1 class="font-serif" style="font-size: 2.25rem; color: #FFF;">My Invitation Dashboard</h1>
            <p class="text-muted" style="font-size: 0.9rem;">Manage your wedding invitations, track RSVPs, and share links.</p>
          </div>
          <button id="dash-new-inv-btn" class="btn btn-primary-gold">
            <span>+ Create New Invitation</span>
          </button>
        </div>

        <!-- Metrics Cards -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">💌</div>
            <div>
              <div class="stat-val">${invitations.length}</div>
              <div class="stat-title">Active Invitations</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div>
              <div class="stat-val">${attendingCount}</div>
              <div class="stat-title">Attending Guests</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📨</div>
            <div>
              <div class="stat-val">${totalRsvps}</div>
              <div class="stat-title">RSVP Responses</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">💎</div>
            <div>
              <div class="stat-val">₹1001</div>
              <div class="stat-title">Plan Status: Active</div>
            </div>
          </div>
        </div>

        <!-- Invitations Table -->
        <div class="table-container" style="margin-bottom: 3rem;">
          <div class="table-toolbar">
            <h3 class="font-serif" style="font-size: 1.25rem; color: #FFF;">Your Created Invitations</h3>
          </div>

          ${invitations.length === 0 ? `
            <div class="text-center" style="padding: 3rem 1.5rem;">
              <p class="text-muted" style="margin-bottom: 1rem;">You have not created any invitations yet.</p>
              <button id="empty-create-btn" class="btn btn-primary-gold">Create Your First Invitation ✨</button>
            </div>
          ` : `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Couple / Title</th>
                  <th>Date & Venue</th>
                  <th>Theme</th>
                  <th>Share Link</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${invitations.map(inv => `
                  <tr>
                    <td>
                      <div style="font-weight: 600; color: #FFF;">${inv.primaryNames || 'Celebration'}</div>
                      <div class="text-muted" style="font-size: 0.75rem;">${inv.id}</div>
                    </td>
                    <td>
                      <div>${inv.dateText || 'TBD'}</div>
                      <div class="text-muted" style="font-size: 0.75rem;">${inv.venueName || ''}</div>
                    </td>
                    <td>
                      <span class="badge badge-gold">${inv.themeId || 'royalRed'}</span>
                    </td>
                    <td>
                      <button class="btn btn-sm btn-gold-outline copy-inv-link-btn" data-slug="${inv.slug || inv.id}">
                        <span>Copy Link</span>
                        <span>📋</span>
                      </button>
                    </td>
                    <td>
                      <div class="flex gap-2">
                        <button class="btn btn-sm btn-secondary edit-inv-btn" data-id="${inv.id}">Edit</button>
                        <a href="invite.html?id=${inv.id}" target="_blank" class="btn btn-sm btn-primary-gold">View Page ↗</a>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          `}
        </div>

      </div>
    `;

    // Bind event listeners
    const newBtn = document.getElementById('dash-new-inv-btn');
    if (newBtn) newBtn.addEventListener('click', onOpenStudio);

    const emptyBtn = document.getElementById('empty-create-btn');
    if (emptyBtn) emptyBtn.addEventListener('click', onOpenStudio);

    container.querySelectorAll('.copy-inv-link-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const slug = btn.dataset.slug;
        const fullUrl = `${window.location.origin}/invite.html?id=${slug}`;
        copyToClipboard(fullUrl, 'Guest invitation link copied!');
      });
    });

    container.querySelectorAll('.edit-inv-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const inv = invitations.find(i => i.id === btn.dataset.id);
        if (inv) onEditInvitation(inv);
      });
    });
  }

  loadDataAndRender();
}
