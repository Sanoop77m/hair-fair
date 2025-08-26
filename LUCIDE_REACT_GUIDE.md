# Lucide React Icons Guide

## ✅ Installation Status

**Good news!** `lucide-react` is already installed in your project (version 0.541.0).

## 🚀 How to Use Lucide React Icons

### 1. Basic Import

```tsx
import { Apple, Play, Download, Heart, Star } from "lucide-react";
```

### 2. Basic Usage

```tsx
// Simple icon
<Apple className="w-6 h-6" />

// Colored icon
<Heart className="w-6 h-6 text-red-500" />

// Different sizes
<Star className="w-4 h-4" />  // Small
<Star className="w-8 h-8" />  // Large
```

### 3. Icons with Text

```tsx
<div className="flex items-center gap-2">
  <Download className="w-5 h-5 text-blue-500" />
  <span>Download App</span>
</div>
```

### 4. Icons in Buttons

```tsx
<button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
  <Apple className="w-5 h-5" />
  App Store
</button>
```

### 5. Interactive Icons

```tsx
<button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
  <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
</button>
```

## 🎨 Styling Options

### Size Classes

- `w-4 h-4` - 16px
- `w-5 h-5` - 20px
- `w-6 h-6` - 24px
- `w-8 h-8` - 32px
- `w-10 h-10` - 40px

### Color Classes

- `text-gray-500` - Gray
- `text-blue-500` - Blue
- `text-green-500` - Green
- `text-red-500` - Red
- `text-yellow-500` - Yellow
- `text-purple-500` - Purple

### Hover Effects

```tsx
<Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors" />
```

## 📱 Popular Icons for Your Hair Care App

### Navigation & Actions

- `Home` - Home page
- `User` - User profile
- `Settings` - Settings
- `Search` - Search functionality
- `Menu` - Mobile menu

### Contact & Communication

- `Phone` - Phone number
- `Mail` - Email
- `MessageCircle` - Chat/Contact
- `MapPin` - Location
- `Clock` - Business hours

### App Features

- `Heart` - Favorites/Likes
- `Star` - Ratings/Reviews
- `Calendar` - Appointments
- `CheckCircle` - Completed services
- `Award` - Certifications

### Social & Downloads

- `Apple` - App Store
- `Play` - Google Play
- `Download` - Download app
- `Share` - Share content
- `Instagram` - Social media

## 🔧 Example Component

I've created `src/components/icon-example.tsx` with various examples of how to use Lucide React icons in different contexts.

## 📚 Full Icon Library

Visit [Lucide Icons](https://lucide.dev/icons) to browse all available icons (1000+ icons).

## 💡 Tips

1. **Import only what you need** - This keeps your bundle size small
2. **Use consistent sizing** - Stick to a few standard sizes (w-4, w-5, w-6, w-8)
3. **Add hover effects** - Use `hover:` classes for interactive elements
4. **Consider accessibility** - Add `aria-label` for screen readers when needed
5. **Use semantic colors** - Match icon colors to their meaning (red for heart, green for check, etc.)

## 🎯 Quick Start

1. Import the icons you need:

```tsx
import { Heart, Star, Phone, Mail } from "lucide-react";
```

2. Use them in your components:

```tsx
<div className="flex items-center gap-2">
  <Heart className="w-5 h-5 text-red-500" />
  <span>Like this service</span>
</div>
```

That's it! Lucide React icons are now ready to use in your Next.js app. 🎉
