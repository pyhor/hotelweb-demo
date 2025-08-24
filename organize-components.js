const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const mkdir = promisify(fs.mkdir);
const rename = promisify(fs.rename);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Define feature-based component organization
const componentMapping = {
  // Layout components
  'Layout': 'layout',
  'Navigation': 'layout',
  'Footer': 'layout',
  'Header': 'layout',
  'Sidebar': 'layout',
  
  // UI components
  'Button': 'ui',
  'Card': 'ui',
  'Modal': 'ui',
  'Input': 'ui',
  'Form': 'ui',
  'Select': 'ui',
  'Checkbox': 'ui',
  'Radio': 'ui',
  'Dropdown': 'ui',
  'Alert': 'ui',
  'Toast': 'ui',
  'Loading': 'ui',
  'Pagination': 'ui',
  'Tabs': 'ui',
  'Accordion': 'ui',
  
  // Feature-specific components
  'RoomCard': 'rooms',
  'RoomGallery': 'rooms',
  'RoomDetails': 'rooms',
  'RoomBooking': 'booking',
  'BookingForm': 'booking',
  'BookingCalendar': 'booking',
  'BranchCard': 'branches',
  'BranchMap': 'branches',
  'BranchGallery': 'branches',
  'Testimonial': 'testimonials',
  'ReviewForm': 'reviews',
  'ReviewList': 'reviews',
  'UserProfile': 'account',
  'LoginForm': 'auth',
  'RegisterForm': 'auth',
  'ForgotPassword': 'auth',
  'ResetPassword': 'auth',
  
  // Shared components
  'ImageGallery': 'shared',
  'ImageSlider': 'shared',
  'Rating': 'shared',
  'Breadcrumb': 'shared',
  'Banner': 'shared',
  'ContactForm': 'shared',
  'SocialLinks': 'shared',
  'Icon': 'shared',
  'Seo': 'shared',
  'ErrorBoundary': 'shared',
  'NotFound': 'shared',
  'LoadingSpinner': 'shared',
  'Tooltip': 'shared',
  'Popover': 'shared',
  'Carousel': 'shared',
  'Lightbox': 'shared',
  'VideoPlayer': 'shared',
  'Countdown': 'shared',
  'ProgressBar': 'shared',
  'Divider': 'shared',
  'Badge': 'shared',
  'Chip': 'shared',
  'Avatar': 'shared',
  'Breadcrumbs': 'shared',
  'Stepper': 'shared',
  'Tabs': 'shared',
  'Table': 'shared',
  'DataTable': 'shared',
  'Pagination': 'shared',
  'Search': 'shared',
  'Filter': 'shared',
  'Sort': 'shared',
  'Map': 'shared',
  'Calendar': 'shared',
  'DatePicker': 'shared',
  'TimePicker': 'shared',
  'DateTimePicker': 'shared',
  'RichTextEditor': 'shared',
  'MarkdownEditor': 'shared',
  'CodeEditor': 'shared',
  'FileUpload': 'shared',
  'ImageUpload': 'shared',
  'Dropzone': 'shared',
  'Wizard': 'shared',
  'WizardStep': 'shared',
  'WizardNavigation': 'shared',
  'WizardFooter': 'shared',
  'WizardHeader': 'shared',
  'WizardProgress': 'shared',
  'WizardContent': 'shared',
  'WizardActions': 'shared',
  'WizardButtons': 'shared',
  'WizardNextButton': 'shared',
  'WizardBackButton': 'shared',
  'WizardSubmitButton': 'shared',
  'WizardCancelButton': 'shared',
  'WizardComplete': 'shared',
  'WizardError': 'shared',
  'WizardLoading': 'shared',
  'WizardSuccess': 'shared',
  'WizardConfirmation': 'shared',
  'WizardSummary': 'shared',
  'WizardReview': 'shared',
  'WizardThankYou': 'shared',
  'WizardReceipt': 'shared',
  'WizardFinal': 'shared',
  'WizardCompleteStep': 'shared',
  'WizardErrorStep': 'shared',
  'WizardLoadingStep': 'shared',
  'WizardSuccessStep': 'shared',
  'WizardConfirmationStep': 'shared',
  'WizardSummaryStep': 'shared',
  'WizardReviewStep': 'shared',
  'WizardThankYouStep': 'shared',
  'WizardReceiptStep': 'shared',
  'WizardFinalStep': 'shared',
  'WizardCompletePage': 'shared',
  'WizardErrorPage': 'shared',
  'WizardLoadingPage': 'shared',
  'WizardSuccessPage': 'shared',
  'WizardConfirmationPage': 'shared',
  'WizardSummaryPage': 'shared',
  'WizardReviewPage': 'shared',
  'WizardThankYouPage': 'shared',
  'WizardReceiptPage': 'shared',
  'WizardFinalPage': 'shared',
};

// Default category for unmapped components
const DEFAULT_CATEGORY = 'shared';

async function organizeComponents() {
  const componentsDir = path.join(process.cwd(), 'components');
  const newBaseDir = path.join(process.cwd(), 'src', 'components');
  
  try {
    // Create the new components directory structure
    await mkdir(newBaseDir, { recursive: true });
    
    // Get all component files
    const files = await readdir(componentsDir);
    
    for (const file of files) {
      if (!file.endsWith('.tsx') && !file.endsWith('.jsx') && !file.endsWith('.ts') && !file.endsWith('.js')) {
        continue;
      }
      
      const componentName = file.replace(/\.[^/.]+$/, '');
      const category = componentMapping[componentName] || DEFAULT_CATEGORY;
      const targetDir = path.join(newBaseDir, category);
      
      // Create the category directory if it doesn't exist
      await mkdir(targetDir, { recursive: true });
      
      // Move the component file
      const sourcePath = path.join(componentsDir, file);
      const targetPath = path.join(targetDir, file);
      
      await rename(sourcePath, targetPath);
      console.log(`Moved ${file} to ${path.relative(process.cwd(), targetPath)}`);
      
      // Update the component's imports if it imports other components
      await updateComponentImports(targetPath, componentName, category);
    }
    
    console.log('\nComponent reorganization complete!');
    console.log('Components have been moved to the following categories:');
    
    // List all categories and their components
    const categories = await readdir(newBaseDir);
    for (const category of categories) {
      const categoryPath = path.join(newBaseDir, category);
      const stats = await fs.promises.stat(categoryPath);
      
      if (stats.isDirectory()) {
        const components = (await readdir(categoryPath))
          .filter(f => f.endsWith('.tsx') || f.endsWith('.jsx') || f.endsWith('.ts') || f.endsWith('.js'))
          .map(f => `  - ${f.replace(/\.[^/.]+$/, '')}`)
          .join('\n');
        
        console.log(`\n${category.toUpperCase()}:\n${components}`);
      }
    }
    
    console.log('\nNext steps:');
    console.log('1. Update imports in your pages and other components to use the new paths');
    console.log('2. Run the update-imports.js script to automatically update import paths');
    console.log('3. Test your application to ensure all components are working correctly');
    
  } catch (error) {
    console.error('Error organizing components:', error);
  }
}

async function updateComponentImports(filePath, componentName, category) {
  try {
    let content = await readFile(filePath, 'utf8');
    let updated = false;
    
    // Update relative imports to use the new paths
    for (const [compName, compCategory] of Object.entries(componentMapping)) {
      if (compName === componentName) continue;
      
      const importRegex = new RegExp(`(import\s+.*?\s+from\s+['"])(\.\./|\./|@/components/|@/)?${compName}(['"])`, 'g');
      const requireRegex = new RegExp(`(require\(['"])(\.\./|\./|@/components/|@/)?${compName}(['"])`, 'g');
      
      if (importRegex.test(content)) {
        content = content.replace(importRegex, `$1@/components/${compCategory}/${compName}$3`);
        updated = true;
      }
      
      if (requireRegex.test(content)) {
        content = content.replace(requireRegex, `$1@/components/${compCategory}/${compName}$3`);
        updated = true;
      }
    }
    
    if (updated) {
      await writeFile(filePath, content, 'utf8');
      console.log(`  Updated imports in ${path.basename(filePath)}`);
    }
  } catch (error) {
    console.error(`Error updating imports in ${filePath}:`, error);
  }
}

// Run the script
organizeComponents().catch(console.error);
