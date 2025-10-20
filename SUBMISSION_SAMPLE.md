# Bug Report: Incorrect Breeds JSON Path

## Summary

The Breeds component requests `/breeeeeds.json`, which returns 404. The correct file bundled in `public/` is `breeds.json`. This prevents the breeds list from loading.

## Affected Component

`src/components/Breeds.jsx`

## Location / Reference

Initial `useEffect` fetch call:

```jsx
fetch('/breeeeeds.json')
```

## Priority

P1 – Blocks core functionality (breed listing) yet trivial to fix.

## Steps to Reproduce

1. Start dev server.
2. Open app at `http://localhost:5173/`.
3. Login and navigate to Breeds page.
4. Open dev tools Network tab; observe error of `invalid JSON` where breeds data is fetched.

## Expected Result

Successful fetch of breed data from `/breeds.json` and populated list.

## Actual Result

Fetch to `/breeeeeds.json` fails; `breeds` state remains empty and error banner shows.

## Impact / Risk

Users cannot view or interact with breeds; downstream features (image fetching, favorites) largely unusable.

## Root Cause (Hypothesized)

Typographical error in JSON filename within fetch path.

## Suggested Fix

Change fetch call to:

```jsx
fetch('/breeds.json')
```
