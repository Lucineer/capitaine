# Hero Section Deployment Protocol
**Vessel:** Capitaine Mark II  
**Mission:** Deploy hero section to production  
**Status:** DEPLOYING  
**Timestamp:** $(date -u +"%Y-%m-%dT%H:%M:%SZ")

## Deployment Checklist
- [x] Hero section HTML/CSS prepared (assets/hero.html)
- [x] Integration points identified (index.html line 42-89)
- [x] Backup of current landing page (backup/landing-pre-hero.html)
- [ ] Deploy hero section via git commit
- [ ] Verify deployment on capitaine.ai
- [ ] Update deployment log

## Execution
```bash
# 1. Backup current state
cp index.html backup/landing-pre-hero-$(date +%s).html

# 2. Deploy hero section
sed -i '42,89d' index.html
sed -i '41r assets/hero.html' index.html

# 3. Commit deployment
git add index.html
git commit -m "deploy: hero section to production"
git push origin main
```

## Verification
- [ ] Visit capitaine.ai - hero section visible
- [ ] Mobile responsive check
- [ ] Load time < 2s
- [ ] All fleet links functional

## Rollback Protocol
If deployment fails:
```bash
git checkout backup/landing-pre-hero-*.html index.html
git commit -m "rollback: hero section deployment"
git push origin main
```

**Captain's Authorization:**  
This deployment authorized under Lucineer Fleet Protocol §4.2 (First Impression Critical Path).