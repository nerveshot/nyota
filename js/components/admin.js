// ==========================================================================
// NYOTA ADMIN PORTAL COMPONENT (PURE VANILLA JS)
// Metrics, Live Firestore Invitations, RSVPs, Orders, and Status
// ==========================================================================

import { getAllInvitations, getAllRsvps, getAllOrders } from '../db.js';
import { copyToClipboard, showToast } from '../utils/helpers.js';

export function renderAdminPortal(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  async function loadAdminData() {
    container.innerHTML = `
      <div class="dashboard-wrapper container">
        <div class="text-center" style="padding: 4rem 0;">
          <div class="stat-icon" style="margin: 0 auto 1rem;">⚡</div>
          <p class="text-gold">Loading Admin Console & Live Firestore Data...</p>
        </div>
      </div>
    `;

    const invitations = await getAllInvitations();
    const rsvps = await getAllRsvps();
    const orders = await getAllOrders();

    const totalRevenue = orders.length * 1001;

    container.innerHTML = `
      <div class="dashboard-wrapper container">
        
        <!-- Header -->
        <div class="flex justify-between items-center" style="margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div class="flex items-center gap-2" style="margin-bottom: 0.5rem;">
              <span class="badge badge-emerald">Master Admin Console</span>
              <span class="badge badge-gold">Firestore Live</span>
            </div>
            <h1 class="font-serif" style="font-size: 2.25rem; color: #FFF;">System Overview & Controls</h1>
            <p class="text-muted" style="font-size: 0.9rem;">Namespace: <code>/nyota/*</code> • Firebase Project: <code>nyotapages</code></p>
          </div>
          <button id="admin-refresh-btn" class="btn btn-secondary">
            <span>Refresh Telemetry</span>
            <span>🔄</span>
          </button>
        </div>

        <!-- Metrics -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">📜</div>
            <div>
              <div class="stat-val">${invitations.length}</div>
              <div class="stat-title">Total Invitations</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">📨</div>
            <div>
              <div class="stat-val">${rsvps.length}</div>
              <div class="stat-title">Total RSVPs</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">💰</div>
            <div>
              <div class="stat-val">₹${totalRevenue.toLocaleString()}</div>
              <div class="stat-title">Gross Revenue</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🛡️</div>
            <div>
              <div class="stat-val">Online</div>
              <div class="stat-title">Firebase Status</div>
            </div>
          </div>
        </div>

        <!-- RSVPs Table -->
        <div class="table-container" style="margin-bottom: 3rem;">
          <div class="table-toolbar">
            <h3 class="font-serif" style="font-size: 1.25rem; color: #FFF;">Live RSVP Registry</h3>
          </div>

          ${rsvps.length === 0 ? `
            <div class="text-center" style="padding: 2.5rem;">
              <p class="text-muted">No RSVPs recorded yet.</p>
            </div>
          ` : `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Guest Name</th>
                  <th>Status</th>
                  <th>Count</th>
                  <th>Dietary</th>
                  <th>Message / Blessing</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                ${rsvps.map(r => `
                  <tr>
                    <td>
                      <div style="font-weight: 600; color: #FFF;">${r.guestName}</div>
                      <div class="text-muted" style="font-size: 0.75rem;">${r.guestEmail || ''} ${r.guestPhone ? '• ' + r.guestPhone : ''}</div>
                    </td>
                    <td>
                      <span class="badge ${r.status === 'attending' ? 'badge-emerald' : 'badge-rose'}">
                        ${r.status}
                      </span>
                    </td>
                    <td>${r.guestCount || 0}</td>
                    <td>${r.dietary || 'Standard'}</td>
                    <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                      ${r.message || '—'}
                    </td>
                    <td class="text-muted" style="font-size: 0.75rem;">
                      ${r.createdAt ? new Date(r.createdAt).toLocaleDateString() : 'Recent'}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          `}
        </div>

      </div>
    `;

    const refreshBtn = document.getElementById('admin-refresh-btn');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        showToast('Refreshing data...', 'default');
        loadAdminData();
      });
    }
  }

  loadAdminData();
}
