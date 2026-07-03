# SUSEJ SOLUTIONS - Deployment Guide for Netlify

## 🚀 Quick Start: Deploy to Netlify

### Step 1: Push your code to GitHub/GitLab/Bitbucket
1. Create a new repository on GitHub (or GitLab/Bitbucket)
2. Initialize git in your project and push your code:

```bash
cd d:\Susej_Solutions
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify
1. Go to [https://app.netlify.com](https://app.netlify.com) and sign up/login
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to your Git provider (GitHub/GitLab/Bitbucket)
4. Select your repository
5. Configure the deployment:
   - **Site name**: Choose a name (e.g., `susej-solutions`)
   - **Base directory**: Leave empty (we're deploying from frontend folder)
   - **Package directory**: Leave empty
   - **Build command**: `cd frontend && npm run build`
   - **Publish directory**: `frontend/dist`
6. Click **"Deploy site"**

### Step 3: Enable Netlify Identity (for CMS Admin)
1. In Netlify, go to **Site settings** → **Identity**
2. Click **"Enable Identity"**
3. Under **Registration preferences**, select **"Invite only"** (recommended)
4. Under **External providers**, you can add Google, GitHub, etc. if needed
5. (Optional) Under **Email templates**, customize the invitation email

### Step 4: Enable Git Gateway
1. Go to **Site settings** → **Identity** → **Services**
2. Click **"Enable Git Gateway"**
3. This connects Netlify CMS to your repository

### Step 5: Invite Admin Users
1. Go to **Integrations** → **Identity**
2. Click **"Invite users"**
3. Enter your email and click **Send"**
4. Check your email and accept the invitation

### Step 6: Access the Admin Panel
Once deployed, go to:
```
https://your-site-name.netlify.app/admin
```
Log in with the credentials you set up, and you can now manage your News & Updates!

---

## 📝 Managing Content with Netlify CMS

### Adding News & Updates
1. Go to `/admin` on your site
2. Click **"New News & Updates"**
3. Fill out the form:
   - **Title**: Headline of your news
   - **Description**: Brief description
   - **Type**: Product / Update / Announcement
   - **Date**: Date or "Coming Soon"
   - **Color**: Choose a gradient color
4. Click **"Publish"** → **"Publish now"**
5. The site will automatically rebuild and deploy!

### Editing or Deleting
- To edit: Click on a news item, make changes, and publish
- To delete: Open a news item, click **"Actions"** → **"Delete"**

---

## 🔧 Local Development

### Running the site locally
```bash
cd frontend
npm install
npm run dev
```

### Testing CMS locally
Netlify CMS works best when deployed. To test locally, you can use the Netlify CLI:
```bash
npm install -g netlify-cli
netlify login
netlify link  # Link to your Netlify site
netlify dev   # Starts local dev server with CMS
```

---

## 📁 Important Files

- `public/admin/config.yml` - Netlify CMS configuration
- `public/admin/index.html` - Admin panel HTML
- `netlify.toml` - Netlify build configuration
- `content/news/` - News & Updates content (markdown files)

---

## 🎯 Next Steps after Deployment

1. **Custom Domain**: Go to **Domain settings** in Netlify to add your custom domain
2. **HTTPS**: Netlify provides free SSL certificates - enable it!
3. **Forms**: You can add Netlify Forms for your contact page if needed
4. **Analytics**: Enable Netlify Analytics to track site visitors

---

## 💡 Tips

- **Branch Deploys**: Use different branches for staging and production
- **Deploy Previews**: Netlify automatically creates preview links for PRs
- **Rollbacks**: Easily roll back to previous deployments if something breaks
- **Environment Variables**: Add API keys or secrets in **Site settings** → **Environment variables**

---

## 🆘 Need Help?

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify CMS Documentation](https://www.netlifycms.org/docs/intro/)
