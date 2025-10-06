Installer instructions

1. Install dependencies (in the project root):

   ```bash
   yarn install
   yarn add express mysql2 multer
   ```

2. Start the installer server:

   ```bash
   yarn start-installer
   ```

3. Open the installer page in your browser (default http://localhost:4000/) and provide DB host/port/name/user/password and optionally upload an SQL dump (`dump.sql` is a placeholder).

Security notes:
- The installer accepts database credentials — make sure you run it in a trusted environment (local or staging) and remove the installer files after a successful installation.
- In production, prefer CLI-based or automated deployment pipelines instead of exposing web-based DB credential forms.
