# 📝 Smart Multi-Step Form Wizard with Validation & Auto-Save

**Author**: Jorge Morais (@mopanc)
**Portfolio**: [jorgemopanc.com](https://jorgemopanc.com)
**GitHub**: [@jorgemorais272](https://github.com/jorgemorais272)

---

## 🎯 Overview

Advanced multi-step form wizard with validation, auto-save progress, file upload, and conditional logic. Perfect for registration, booking, and onboarding flows.

**Features**:
- ✅ Multi-step wizard with progress indicator
- ✅ Advanced validation (email, password strength, required fields)
- ✅ Auto-save progress using LocalStorage
- ✅ Drag & drop file upload with preview
- ✅ Conditional logic based on selections
- ✅ Review & summary step before submission
- ✅ Success screen with animations
- ✅ Fully responsive design
- ✅ Smooth step transitions
- ✅ Zero dependencies (pure vanilla JS)

---

## 🚀 Usage

### Quick Start

Simply copy the HTML file and open in your browser. All components are self-contained.

### Wizard Steps

#### **Step 1: Personal Information**
Basic user details collection.

```javascript
Fields:
- Full Name (required, min 3 characters)
- Email (required, valid email format)
- Phone (required, valid phone format)
- Date of Birth (required, date picker)
```

#### **Step 2: Account Details**
Account setup and preferences.

```javascript
Fields:
- Username (required, min 4 characters)
- Password (required, strong password validation)
- Confirm Password (required, must match)
- Account Type (radio: Personal/Business)
- Interests (checkboxes: multiple selection)
```

#### **Step 3: Additional Information**
Conditional fields and file upload.

```javascript
Fields:
- Company Name (conditional: shown if Business selected)
- Profile Picture (drag & drop file upload)
- Bio/Description (textarea, optional)
- Terms & Conditions (checkbox, required)
```

#### **Step 4: Review & Submit**
Summary of all entered data.

```javascript
Features:
- Review all form data
- Edit buttons to go back to specific steps
- Final submission
- Success screen with animation
```

---

## 🎨 Customization

### Colors

Change theme colors in CSS variables:

```css
:root {
  --color-primary: #6366f1;
  --color-primary-dark: #4f46e5;
  --color-success: #10b981;
  --color-danger: #ef4444;
}
```

### Add Custom Validation Rules

```javascript
function validateField(input) {
  const value = input.value.trim();
  const type = input.type;

  // Add your custom validation
  if (input.id === 'custom_field') {
    if (value.length < 10) {
      return 'Must be at least 10 characters';
    }
  }

  return '';
}
```

### Modify Step Configuration

```javascript
// Add or remove steps
const steps = [
  { id: 1, title: 'Personal Info' },
  { id: 2, title: 'Account Details' },
  { id: 3, title: 'Additional Info' },
  { id: 4, title: 'Review' },
  { id: 5, title: 'Your Custom Step' } // Add new step
];
```

### Connect to Backend API

```javascript
async function submitForm(formData) {
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    showSuccessScreen(result);
  } catch (error) {
    showErrorMessage('Submission failed. Please try again.');
  }
}
```

---

## 📱 Responsive Design

Fully responsive across all devices:
- 🖥️ **Desktop**: Wide form layout with side progress
- 💻 **Tablet**: Optimized spacing and touch targets
- 📱 **Mobile**: Stacked single-column layout

---

## 🛠️ Technical Details

### Technologies
- **HTML5** - Semantic forms with native validation
- **CSS3** - Advanced animations, transitions, Grid/Flexbox
- **Vanilla JavaScript** - ES6+ with modern APIs
- **LocalStorage API** - Auto-save functionality
- **File API** - Drag & drop file handling
- **FormData API** - Form serialization

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Performance
- ⚡ Smooth animations (60 FPS)
- 🎯 Debounced auto-save (prevents excessive writes)
- 💾 Efficient LocalStorage usage
- 🚀 No external dependencies

---

## 💡 Use Cases

Perfect for building:
- 📋 Registration forms (multi-step signup)
- 🏨 Booking systems (hotel, flight, appointments)
- 📊 Survey/Quiz applications
- 🎓 Onboarding flows (user/employee onboarding)
- 🛒 E-commerce checkouts (multi-step checkout)
- 💼 Lead generation forms
- 📝 Job application forms
- 🎯 Configuration wizards

---

## 🔧 Extending the Wizard

### Add Password Strength Indicator

```javascript
function checkPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z\d]/.test(password)) strength++;

  const levels = ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
  return { score: strength, label: levels[strength - 1] || 'Weak' };
}
```

### Add Step Animations

```javascript
function transitionStep(from, to) {
  const fromStep = document.querySelector(`[data-step="${from}"]`);
  const toStep = document.querySelector(`[data-step="${to}"]`);

  // Slide out animation
  fromStep.style.animation = 'slideOut 0.3s ease-out';

  setTimeout(() => {
    fromStep.classList.remove('active');
    toStep.classList.add('active');
    // Slide in animation
    toStep.style.animation = 'slideIn 0.3s ease-out';
  }, 300);
}
```

### Add Multi-file Upload

```javascript
let uploadedFiles = [];

function handleMultipleFiles(files) {
  Array.from(files).forEach(file => {
    if (file.size > 5 * 1024 * 1024) {
      showError('File size must be under 5MB');
      return;
    }

    uploadedFiles.push(file);
    createFilePreview(file);
  });
}
```

### Add Progress Persistence

```javascript
// Auto-save every 2 seconds
let saveTimeout;
function autoSave() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    const formData = collectFormData();
    localStorage.setItem('wizardProgress', JSON.stringify({
      step: currentStep,
      data: formData,
      timestamp: Date.now()
    }));
  }, 2000);
}

// Restore on page load
function restoreProgress() {
  const saved = localStorage.getItem('wizardProgress');
  if (saved) {
    const { step, data, timestamp } = JSON.parse(saved);
    // Only restore if less than 24 hours old
    if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
      populateFormData(data);
      goToStep(step);
    }
  }
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
- No Babel needed (uses ES6+ natively)

### External Resources
- **None required!** ✨
- 100% self-contained
- Optional: Add libraries like Cleave.js for input masking

---

## 🎓 Learning Points

This component demonstrates:
1. ✅ **LocalStorage API** - Persistent data storage
2. ✅ **File API** - Drag & drop file handling
3. ✅ **Form Validation** - Native and custom validation
4. ✅ **CSS Animations** - Smooth transitions and effects
5. ✅ **Conditional Rendering** - Show/hide based on state
6. ✅ **State Management** - Vanilla JS state tracking
7. ✅ **Event Handling** - Form events, file events
8. ✅ **Data Serialization** - Form data to JSON

---

## 🔐 Security Considerations

### Client-Side Only
- Remember: All validation happens client-side
- **Always validate on server-side too!**
- Never trust client data

### LocalStorage Security
- Don't store sensitive data (passwords, tokens)
- Clear storage after submission
- Consider encryption for sensitive forms

### File Upload Security
- Validate file types and sizes
- Scan for malware on server
- Use secure upload endpoints

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
- 🎨 Advanced Drag & Drop Column Mapper
- 🎨 More coming soon...

---

**Built with ❤️ by Jorge Morais**
*Senior Full Stack Developer | React • Vue.js • Node.js • TypeScript*
