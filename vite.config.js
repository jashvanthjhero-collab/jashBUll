import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Mock Backend API Plugin for Deletion Approval Workflow
function deletionApiPlugin() {
  const memoryDeletionRequests = [];
  const memoryAuditLogs = [];

  return {
    name: 'deletion-api-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url, `http://${req.headers.host}`);

        // 1. GET /deletion-requests/:token/approve -> Redirects or returns JSON
        const approveMatch = url.pathname.match(/^\/deletion-requests\/([^/]+)\/approve\/?$/);
        if (req.method === 'GET' && approveMatch) {
          const token = approveMatch[1];
          // If browser request, redirect to app with token query parameter
          if (req.headers.accept && req.headers.accept.includes('text/html')) {
            res.writeHead(302, { Location: `/?action=approve_deletion&token=${token}` });
            return res.end();
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, action: 'approve', token, message: 'Approval token received' }));
        }

        // 2. GET /deletion-requests/:token/reject -> Redirects or returns JSON
        const rejectMatch = url.pathname.match(/^\/deletion-requests\/([^/]+)\/reject\/?$/);
        if (req.method === 'GET' && rejectMatch) {
          const token = rejectMatch[1];
          if (req.headers.accept && req.headers.accept.includes('text/html')) {
            res.writeHead(302, { Location: `/?action=reject_deletion&token=${token}` });
            return res.end();
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, action: 'reject', token, message: 'Rejection token received' }));
        }

        // 3. GET /deletion-requests -> Returns pending & past requests
        if (req.method === 'GET' && url.pathname === '/deletion-requests') {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, requests: memoryDeletionRequests }));
        }

        // 4. POST /deletion-requests -> Creates a new deletion request
        if (req.method === 'POST' && url.pathname === '/deletion-requests') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              const newReq = {
                id: `DEL-${Date.now().toString().slice(-6)}`,
                module: data.module || 'Unknown',
                record_ids: data.record_ids || [],
                recordDetails: data.record_details || [],
                requested_by: data.requested_by || { name: 'Staff', email: 'staff@gmail.com', role: 'STAFF' },
                requested_at: new Date().toISOString(),
                status: 'Pending',
                approval_token: Math.random().toString(36).substring(2) + Date.now().toString(36),
                token_expiry: new Date(Date.now() + 48 * 3600 * 1000).toISOString()
              };
              memoryDeletionRequests.unshift(newReq);
              res.writeHead(201, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, request: newReq }));
            } catch (err) {
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload' }));
            }
          });
          return;
        }

        // 5. GET /audit-logs -> Returns audit logs
        if (req.method === 'GET' && url.pathname === '/audit-logs') {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, logs: memoryAuditLogs }));
        }

        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    deletionApiPlugin()
  ],
});
