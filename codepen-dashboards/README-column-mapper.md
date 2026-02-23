# 🎨 Advanced Drag & Drop Column Mapper - Data Processing

**Author**: Jorge Morais (@mopanc)
**Portfolio**: [jorgemopanc.com](https://jorgemopanc.com)
**GitHub**: [@jorgemorais272](https://github.com/jorgemorais272)

---

## 🎯 Overview

Professional drag & drop data mapping interface for ETL, CSV imports, and data processing tools. SaaS-grade component built with **vanilla JavaScript**.

**Features**:
- ✅ Visual drag & drop mapping interface
- ✅ CSV data preview with interactive table
- ✅ Automatic data type detection
- ✅ Transformation rules (trim, uppercase, validate)
- ✅ Real-time progress tracking
- ✅ Export template configuration as JSON
- ✅ Professional SaaS-style UI
- ✅ Fully responsive design
- ✅ Smooth animations and transitions
- ✅ Zero dependencies (pure vanilla JS)

---

## 🚀 Usage

### Quick Start

Simply copy the HTML file and open in your browser. All components are self-contained.

### Components Included

#### 1. **CSV Data Preview**
Interactive table showing your source data.

```javascript
// Displays sample CSV data
// Columns: Name, Email, Phone, Company, Status
// 5 rows of demo data
```

#### 2. **Template Fields (Target)**
Drag zone for your target schema/template fields.

```javascript
// Predefined fields: Full Name, Email Address, Phone Number, Organization
// Visual drop zones with hover states
// Shows mapped status
```

#### 3. **Source Columns (Draggable)**
Draggable source columns from your CSV.

```javascript
// Drag & Drop API implementation
// Visual feedback during drag
// Snap-to-drop zones
```

#### 4. **Mapping Configuration**
Shows current mappings and allows adding transformation rules.

```javascript
// Add transformations:
// - Trim whitespace
// - Convert to uppercase
// - Email validation
// View all active mappings
```

#### 5. **Progress Tracking**
Real-time progress indicator showing completion percentage.

```javascript
// Auto-calculates based on mapped fields
// Updates dynamically
// Visual progress bar
```

#### 6. **Export Configuration**
Export your mapping template as JSON.

```javascript
// Generates JSON configuration
// Includes field mappings
// Includes transformation rules
// Ready to use in your backend
```

---

## 🎨 Customization

### Colors

Change theme colors in CSS variables:

```css
:root {
  --bg-primary: #0f172a;
  --color-primary: #3b82f6;
  --color-success: #10b981;
  --color-warning: #f59e0b;
}
```

### Add Custom Fields

Add your own target fields:

```html
<div class="field-item drop-zone" data-target="custom_field">
  <div class="field-icon">🎯</div>
  <div class="field-info">
    <div class="field-name">Custom Field</div>
    <div class="field-type">string</div>
  </div>
  <div class="drop-indicator">Drop here</div>
</div>
```

### Add Custom Transformations

Extend the transformation options:

```javascript
// Add to transformation buttons
function applyCustomTransformation(field, rule) {
  if (!transformations[field]) transformations[field] = [];
  transformations[field].push(rule);
  updateMappings();
}
```

### Connect to Real CSV Parser

Replace demo data with actual CSV parsing:

```javascript
// Example: Using Papa Parse library
Papa.parse(file, {
  complete: function(results) {
    displayCSVData(results.data);
    createSourceColumns(results.meta.fields);
  }
});
```

---

## 📱 Responsive Design

Fully responsive across all devices:
- 🖥️ **Desktop**: Side-by-side layout with preview
- 💻 **Tablet**: Adaptive 2-column layout
- 📱 **Mobile**: Stacked single-column layout

---

## 🛠️ Technical Details

### Technologies
- **HTML5** - Semantic structure with data attributes
- **CSS3** - Advanced Grid, Flexbox, Transitions
- **Vanilla JavaScript** - ES6+ with Drag & Drop API
- **Native Drag & Drop API** - No external libraries
- **JSON Export** - Configuration serialization

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Performance
- ⚡ Smooth drag & drop interactions
- 🎯 Optimized event handling
- 💾 Minimal memory footprint
- 🚀 No external dependencies

---

## 💡 Use Cases

Perfect for building:
- 📊 Data import/export tools
- 🔄 ETL (Extract, Transform, Load) platforms
- 💼 SaaS applications with data onboarding
- 🗄️ Database migration tools
- 📋 Admin dashboards with CSV upload
- 🔧 Data transformation pipelines
- 📈 Business intelligence platforms
- 🎯 CRM data import wizards

---

## 🔧 Extending the Mapper

### Add Data Type Validation

```javascript
function validateDataType(value, expectedType) {
  switch(expectedType) {
    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    case 'phone':
      return /^\+?[\d\s-()]+$/.test(value);
    case 'number':
      return !isNaN(parseFloat(value));
    default:
      return true;
  }
}
```

### Add Preview Transformation

```javascript
function previewTransformation(data, mappings, transformations) {
  // Show how data will look after mapping
  const preview = data.map(row => {
    const transformed = {};
    Object.entries(mappings).forEach(([target, source]) => {
      let value = row[source];
      // Apply transformations
      if (transformations[target]) {
        transformations[target].forEach(rule => {
          value = applyRule(value, rule);
        });
      }
      transformed[target] = value;
    });
    return transformed;
  });
  return preview;
}
```

### Add Batch Processing

```javascript
function processBatch(data, batchSize = 100) {
  const batches = [];
  for (let i = 0; i < data.length; i += batchSize) {
    batches.push(data.slice(i, i + batchSize));
  }
  return batches;
}
```

---

## 📦 CodePen Settings

### HTML
- Just paste the entire HTML file
- Or extract body content to CodePen HTML panel

### CSS
- CSS is included in `<style>` tag
- Or extract to CodePen CSS panel

### JS
- JavaScript is in `<script>` tag
- Or extract to CodePen JS panel
- No external libraries needed!

### External Resources
- **None required!** ✨
- 100% self-contained
- Optional: Add Papa Parse for real CSV parsing

---

## 🎓 Learning Points

This component demonstrates:
1. ✅ **Drag & Drop API** - Native browser API usage
2. ✅ **Event Delegation** - Efficient event handling
3. ✅ **CSS Grid/Flexbox** - Advanced responsive layouts
4. ✅ **Data Attributes** - HTML data-* attributes for state
5. ✅ **JSON Serialization** - Configuration export
6. ✅ **Progressive Enhancement** - Works without JS for basic display
7. ✅ **Accessibility** - Keyboard navigation support
8. ✅ **State Management** - Vanilla JS object state tracking

---

## 📝 License

**MIT License** - Free to use in personal and commercial projects!

---

## 🌟 Show Your Support

If you found this useful:
- ⭐ Star on CodePen
- 💬 Leave a comment
- 🔗 Share with your network
- 🚀 Use in your projects

---

## 🤝 Connect

- 🌐 **Portfolio**: [jorgemopanc.com](https://jorgemopanc.com)
- 💼 **LinkedIn**: [jorge-mopanc](https://www.linkedin.com/in/jorge-mopanc/)
- 🐙 **GitHub**: [@jorgemorais272](https://github.com/jorgemorais272)
- 📧 **Email**: jorgemopanc@icloud.com

---

## 📚 Related Projects

Check out my other CodePens:
- 📊 Real-time Trading Dashboard Component Library
- 📝 Smart Multi-Step Form Wizard
- 🎨 More coming soon...

---

**Built with ❤️ by Jorge Morais**
*Senior Full Stack Developer | React • Vue.js • Node.js • TypeScript*
