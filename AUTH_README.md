Authentication notes

- To create an admin account in development, open `/ (auth)/admin-login` page in the app and provide an `ADMIN_SETUP_TOKEN` (default in code: `admin-setup-token`) via the prompt. For production, set `ADMIN_SETUP_TOKEN` as a secure environment variable.
- The app supports MySQL if `DB_HOST` is set; otherwise it falls back to `data/users.json` for user storage (development only).
- JWT secret: set `JWT_SECRET` in env for production.
