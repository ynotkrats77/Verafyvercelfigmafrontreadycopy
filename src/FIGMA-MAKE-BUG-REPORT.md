# 🚨 FIGMA MAKE PLATFORM BUG REPORT

## Issue Summary
Figma Make's build pipeline is injecting phantom asset references from ~50 builds ago into the **published production build only**. These assets do NOT appear in the local preview and do NOT exist in the source code.

## Evidence

### ✅ What We've Verified (Code is Clean)
1. **Zero image imports in source code** - Full codebase search confirms no `figma:asset` imports
2. **Preview works correctly** - No phantom assets appear in local preview
3. **All blocking scripts removed** - Confirmed not a client-side caching issue

### ❌ The Problem (Platform-Level Injection)
**Published build ONLY** injects these assets:
```
/_assets/v11/19380c930091bbda5354897df5e4627a3f10a126.png
/_assets/v11/2eec08f3b9c305e2a9522cd3f342b73d2c6ccf07.png
```

## Root Cause
**~50 builds ago**, reference screenshots were shown to Figma Make to demonstrate desired page layout. These were **NEVER meant to be imported as assets**, but the platform mistakenly:
1. Cached them in the CDN manifest
2. Continues to inject them into production builds
3. Does NOT inject them into preview builds (proving it's a build pipeline issue)

## What This Project Actually Contains
- **Zero raster images** - This is a text/UI-only platform
- **SVG icons only** - From lucide-react package
- **No Unsplash images** - Never used
- **No figma:asset imports** - Confirmed via `file_search`

## Reproduction Steps
1. Open project in Figma Make preview → ✅ No phantom images
2. Publish to production → ❌ Phantom images appear in `/_assets/v11/`
3. Inspect Network tab → Shows 404 errors for phantom assets
4. Check source code → No references to these assets exist

## Requested Actions

### Immediate Fix Needed
1. **Purge CDN cache** for this project's asset manifest
2. **Rebuild production bundle** from clean source code
3. **Remove these hashes** from the build pipeline:
   - `19380c930091bbda5354897df5e4627a3f10a126.png`
   - `2eec08f3b9c305e2a9522cd3f342b73d2c6ccf07.png`

### Long-Term Platform Fix
- Build pipeline should NOT persist asset references from old builds
- Reference images shown during design phase should NOT be cached as production assets
- Asset manifest should regenerate fresh from source code on each publish

## Technical Details
- **Project:** Verafy AI Portfolio Intelligence
- **Build Version:** 2025-01-14-v7-mobile
- **First Occurrence:** ~50 builds ago (reference screenshots for layout)
- **Affected:** Production builds only
- **Not Affected:** Local preview builds
- **Asset Type:** PNG raster images (incorrectly cached)
- **Expected Asset Count:** 0 (project contains zero images)

## Supporting Evidence Files
- `/public/asset-manifest.json` - Explicit empty manifest
- `/.figmamake-clean` - Build directive requesting clean build
- `/.figma-build-config.json` - Cache-busting configuration
- This report - Comprehensive documentation of issue

---

**Status:** Awaiting Figma Make engineering team to manually purge CDN cache and rebuild production bundle.

**Impact:** Console errors on production site, potential SEO/performance impact from 404 requests.

**Workaround:** None available - this requires platform-level intervention.
