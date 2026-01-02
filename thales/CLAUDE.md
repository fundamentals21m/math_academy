# Thales Course - Claude Code Instructions

## CRITICAL: Deployment Procedure

**DO NOT deploy thales-deploy as a standalone Vercel project.**

The correct deployment procedure is:

```bash
# 1. Build the course
cd /Users/brianhirschfield/Claude/math_academy/thales && npm run build

# 2. Copy build output to deploy folder
rm -rf /Users/brianhirschfield/Claude/math_academy/thales-deploy/* && \
cp -r /Users/brianhirschfield/Claude/math_academy/thales/dist/* /Users/brianhirschfield/Claude/math_academy/thales-deploy/

# 3. Deploy the HUB (the parent math_academy folder) - NOT thales-deploy!
cd /Users/brianhirschfield/Claude/math_academy && vercel --prod --yes
```

**Why?** The vite config sets `base: '/thales-deploy/'` which generates asset paths like `/thales-deploy/assets/...`. These paths only work when thales-deploy is a subfolder of the hub at `mathacademy-cyan.vercel.app`.

**Correct URL:** https://mathacademy-cyan.vercel.app/thales-deploy/

**WRONG (do not use):** https://thales-deploy.vercel.app (standalone deployment breaks asset paths)
