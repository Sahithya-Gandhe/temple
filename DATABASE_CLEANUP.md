# Database Cleanup Instructions

## Issue
Old donation records with filesystem paths (`/uploads/donations/...`) don't work on Vercel's serverless environment. The API now filters these out automatically.

## Option 1: Delete Old Records (Recommended)
If you want to permanently remove old filesystem-based donations from your database:

```sql
-- Connect to your Neon database and run:
DELETE FROM annadanam_donations 
WHERE image_url NOT LIKE 'data:%';
```

## Option 2: Keep Records for Historical Data
The current fix already hides these records from the public gallery and admin dashboard. They remain in the database but won't be displayed.

## Verify Fix
After deployment completes:
1. Visit your gallery page: https://temple-wheat-ten.vercel.app/gallery
2. Old donation images should no longer show 404 errors
3. Only donations with base64 images will be displayed

## New Uploads
All new donations uploaded through the admin dashboard will use base64 data URIs and work perfectly on Vercel.
