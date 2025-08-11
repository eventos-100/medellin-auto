# 🚀 Webflow DevLink Components - Complete Setup Guide

## ✅ **Setup Complete!**

Your Webflow components have been successfully synced via DevLink. You can now test them locally.

## 📍 **Access Your Test Pages**

### **1. DevLink Filter Test Page**
Visit: **http://localhost:3000/filter-test**

This page demonstrates:
- All synced Webflow filter components
- Sample car data from your collection
- Multiple layout options using different component sets
- Interactive filtering functionality

### **2. Main Application**
Visit: **http://localhost:3000**

Your main Next.js application with all DevLink components integrated.

---

## 📦 **What Was Synced**

The `webflow devlink sync` command created the following in `/src/devlink/`:

### **Filter Components**
- `MainFilterBlock1` - Main filter container
- `MainFilterBlockHeader` - Filter header with controls
- `MainFilterList` - List view for filtered items
- `MainFilterResults` - Results counter
- `MainFilterTags` - Active filter tags display
- `MainFilterEmpty` - Empty state component

### **Individual Filter Controls**
- `Makes` - Brand filter component
- `Types` - Vehicle type filter
- `Year` - Year selection filter
- `Price` - Price range slider
- `Mileage` - Mileage filter

### **Alternative Components (Wiz)**
- `WizFilterBlock` - Alternative filter layout
- `WizFilterHeader` - Wiz header component
- `WizFilterList` - Wiz list view
- `WizFilterTags` - Wiz tags display
- `WizFilterEmpty` - Wiz empty state

### **Card Components**
- `ActiveCard` - Active state card
- `MainCardComponent` - Main car card display
- `IntCard` / `Int2Card` - Interior view cards

### **Core Files**
- `DevLinkProvider` - Handles Webflow interactions
- `global.css` - Global Webflow styles
- CSS modules for each component

---

## 💻 **Using DevLink Components in Your Code**

### **Basic Usage**
```tsx
import { DevLinkProvider } from '@/devlink/DevLinkProvider';
import { MainFilterBlock1 } from '@/devlink/MainFilterBlock1';
import '@/devlink/global.css';

export default function MyPage() {
  return (
    <DevLinkProvider>
      <MainFilterBlock1 />
    </DevLinkProvider>
  );
}
```

### **With Props**
Many components accept props for customization:
```tsx
<MainCardComponent 
  carName="Audi A6"
  price="$125,000"
  year={2025}
  imageUrl="..."
/>
```

---

## 🔄 **Keeping Components Updated**

### **Sync Latest Changes**
Whenever you update components in Webflow:
```bash
cd /home/sk/auto/med-auto
webflow devlink sync
```

### **Sync Specific Components Only**
To sync specific components for faster updates:
```bash
webflow devlink sync MainFilterBlock1 Price Types
```

---

## 🎨 **Customization Options**

### **1. Override Styles**
Create custom CSS to override DevLink styles:
```css
/* Override in your component or global CSS */
.your-wrapper :global(.devlink-class) {
  /* Your custom styles */
}
```

### **2. Wrap Components**
Wrap DevLink components with your own logic:
```tsx
function CustomFilter() {
  const [filters, setFilters] = useState({});
  
  return (
    <div className="custom-wrapper">
      <Makes onChange={handleMakeChange} />
      <Types onChange={handleTypeChange} />
    </div>
  );
}
```

### **3. Combine with Local Data**
Integrate with your API or local state:
```tsx
const [cars, setCars] = useState([]);

useEffect(() => {
  fetchCarsFromAPI().then(setCars);
}, []);

return (
  <MainFilterList items={cars} />
);
```

---

## 📁 **Project Structure**

```
/home/sk/auto/med-auto/
├── src/
│   ├── app/
│   │   ├── filter-test/
│   │   │   └── page.tsx        # Test page with all components
│   │   └── page.tsx             # Main application
│   └── devlink/                 # All synced Webflow components
│       ├── *.js                 # Component JavaScript
│       ├── *.module.css         # Component styles
│       ├── global.css           # Global Webflow styles
│       └── DevLinkProvider.js   # Interaction handler
├── .webflowrc.js                # DevLink configuration
├── webflow.json                 # Webflow project config
└── .env                         # API credentials
```

---

## 🔧 **Configuration Files**

### **.webflowrc.js**
```javascript
module.exports = {
  host: "https://api.webflow.com",
  rootDir: "./src/devlink",
  siteId: process.env.WEBFLOW_SITE_ID,
  authToken: process.env.WEBFLOW_API_TOKEN,
  cssModules: true
}
```

### **webflow.json**
```json
{
  "devlink": {
    "rootDir": "./src/devlink",
    "cssModules": true
  }
}
```

---

## 🐛 **Troubleshooting**

### **Components Not Updating**
1. Clear Next.js cache: `rm -rf .next`
2. Re-sync components: `webflow devlink sync`
3. Restart dev server: `npm run dev`

### **Styles Not Applying**
- Ensure `global.css` is imported in your layout
- Check that `DevLinkProvider` wraps your components
- Verify CSS modules are enabled in config

### **Missing Components**
- Check if component exists in Webflow
- Ensure it's marked as a Component (not just grouped elements)
- Run sync command again

---

## 🚀 **Next Steps**

1. **Test the filter page**: http://localhost:3000/filter-test
2. **Customize components** with your data
3. **Build your production app** using the synced components
4. **Deploy** when ready

---

## 📞 **Support**

- **Webflow DevLink Docs**: https://developers.webflow.com/docs/devlink
- **Site ID**: 687bbc3b0bb3dd57d6c1fd83
- **Components Directory**: `/home/sk/auto/med-auto/src/devlink`

---

## ✨ **Summary**

Your Webflow components are now:
- ✅ Synced to your local project
- ✅ Available as React components
- ✅ Styled with Webflow's design system
- ✅ Ready for testing at http://localhost:3000/filter-test
- ✅ Configured for continuous updates

**Happy coding! 🎉**