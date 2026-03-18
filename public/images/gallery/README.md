# Gallery Images

## कैसे images add करें (How to add images):

### Step 1: Images को यहाँ डालें
इस folder में अपनी image files को add करें।
Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`

### Step 2: Gallery.js में add करें
`src/pages/Gallery.js` को edit करें और image को add करें:

```javascript
const galleryData = [
  {
    folder: "Events",  // Category का नाम
    images: [
      { title: "Event Name", imageUrl: "/images/gallery/filename.jpg" },
      // यहाँ और images add करें
    ]
  },
  // ...
];
```

### Example:
अगर आप `event1.jpg` file को add करना चाहते हो:

1. **Step 1**: `event1.jpg` को इस folder में रखें
   ```
   public/images/gallery/event1.jpg
   ```

2. **Step 2**: `src/pages/Gallery.js` में add करें:
   ```javascript
   { title: "My Event Photo", imageUrl: "/images/gallery/event1.jpg" }
   ```

3. **Step 3**: Website को reload करें - image दिखने लग जाएगी!

---

## Already configured folders:

✅ **Events** - `/images/gallery/event1.jpg`, `event2.jpg`, etc.
✅ **Chhath Puja** - `/images/gallery/chhath1.jpg`, `chhath2.jpg`, etc.
✅ **Meetings** - `/images/gallery/meeting1.jpg`, `meeting2.jpg`, etc.

---

## Image Tips:
- Image size: 600x400px या larger (responsive होगी)
- File size: 500KB से कम सबसे अच्छा है
- Format: `.jpg` सबसे अच्छी है
