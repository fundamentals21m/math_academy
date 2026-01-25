# STOP - DO NOT EDIT THIS REPOSITORY DIRECTLY

## This is the PRODUCTION repository.

**ALL changes must be made in the DEV repository first:**

```
/Users/brianhirschfield/Claude/dev-repos/math_academy_dev
```

## Workflow

1. Make changes in `math_academy_dev`
2. Test locally
3. Get user approval
4. Run `./scripts/promote-to-production.sh`
5. Deploy from production

## Why?

- Production serves real users at mathacademy-cyan.vercel.app
- Untested changes break 60+ courses
- Dev environment allows safe experimentation

## If you're Claude Code reading this:

**STOP. Navigate to the dev repo instead.**

```bash
cd /Users/brianhirschfield/Claude/dev-repos/math_academy_dev
```

Then make your changes there.
