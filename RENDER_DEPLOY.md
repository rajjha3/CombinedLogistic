# Render Deployment Guide

This repository is set up to deploy on Render with a root-level `render.yaml`.

## Services

- `stockbroker-backend`: Node web service from `backend/`
- `stockbroker-frontend`: Static site from `frontend/`
- `stockbroker-dashboard`: Static site from `dashboard/`

## Before You Deploy

Set these backend environment variables in Render:

- `MONGO_URL`
- `JWT_SECRET`
- `ADMIN_EMAILS`

The two React apps are configured to use these public service URLs by default:

- Frontend API: `https://stockbroker-backend.onrender.com/api`
- Frontend dashboard link: `https://stockbroker-dashboard.onrender.com`
- Dashboard API: `https://stockbroker-backend.onrender.com/api`

If you rename either Render service, update the matching URL in `render.yaml` before deploying.

## Recommended Deploy Flow

1. Commit and push this repository to GitHub.
2. In Render, choose `New +` -> `Blueprint`.
3. Connect this GitHub repository.
4. Render will detect the root `render.yaml` file automatically.
5. Review the three services and create the blueprint.
6. Add values for `MONGO_URL`, `JWT_SECRET`, and `ADMIN_EMAILS` when Render prompts for them.

## Important Notes

- The backend uses `npm start`, which now runs `node index.js` for production.
- Both React apps use client-side routing, so the blueprint includes a catch-all rewrite to `/index.html`.
- Render expects the API to listen on `PORT`; the backend already does that.
