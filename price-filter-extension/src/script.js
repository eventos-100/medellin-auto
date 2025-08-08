// Price Filter Creator Extension Script

let webflowAPI = null;
let createdComponent = null;

// Logging function
function log(message, type = 'info') {
    const logDiv = document.getElementById('log');
    const timestamp = new Date().toLocaleTimeString();
    logDiv.style.display = 'block';
    logDiv.innerHTML += `<div>[${timestamp}] ${type.toUpperCase()}: ${message}</div>`;
    logDiv.scrollTop = logDiv.scrollHeight;
    console.log(`[${type}] ${message}`);
}

// Wait for Webflow API
function waitForWebflowAPI() {
    return new Promise((resolve, reject) => {
        if (window.webflow) {
            resolve(window.webflow);
            return;
        }
        
        let attempts = 0;
        const checkInterval = setInterval(() => {
            attempts++;
            if (window.webflow) {
                clearInterval(checkInterval);
                resolve(window.webflow);
            } else if (attempts > 50) { // 5 seconds timeout
                clearInterval(checkInterval);
                reject(new Error('Webflow API not available after 5 seconds'));
            }
        }, 100);
    });
}

// Step 1: Verify API
document.getElementById('verify-api').addEventListener('click', async () => {
    const button = document.getElementById('verify-api');
    const status = document.getElementById('api-status');
    
    try {
        button.disabled = true;
        button.textContent = 'Checking...';
        status.innerHTML = '';
        
        log('Checking for Webflow Designer API...');
        webflowAPI = await waitForWebflowAPI();
        
        // Test API methods
        const siteInfo = await webflowAPI.getSiteInfo();
        log(`Site: ${siteInfo.displayName} (ID: ${siteInfo.id})`);
        
        const allElements = await webflowAPI.getAllElements();
        log(`Found ${allElements.length} elements on current page`);
        
        status.innerHTML = '<div style="color: green;">✅ Webflow API Ready!</div>';
        button.textContent = '✅ API Verified';
        button.classList.add('success');
        
        // Enable next step
        document.getElementById('create-component').disabled = false;
        
    } catch (error) {
        log(`API check failed: ${error.message}`, 'error');
        status.innerHTML = `<div class="error">❌ ${error.message}</div>`;
        button.disabled = false;
        button.textContent = 'Retry API Check';
    }
});

// Step 2: Create Component
document.getElementById('create-component').addEventListener('click', async () => {
    const button = document.getElementById('create-component');
    const status = document.getElementById('create-status');
    
    try {
        button.disabled = true;
        button.textContent = 'Creating Component...';
        status.innerHTML = '';
        
        log('Starting component creation...');
        
        // Get root element or selected element as parent
        let parentElement = await webflowAPI.getSelectedElement();
        if (!parentElement) {
            log('No element selected, using page body');
            const allElements = await webflowAPI.getAllElements();
            parentElement = allElements.find(el => el.type === 'Body') || allElements[0];
        }
        
        log(`Parent element: ${parentElement.type}`);
        
        // Create component container
        log('Creating component container...');
        const container = await parentElement.append(webflowAPI.elementPresets.DivBlock);
        
        // Style the container
        log('Applying container styles...');
        await container.setStyles({
            'background-color': '#f8fafc',
            'border': '2px solid #e2e8f0',
            'border-radius': '12px',
            'padding': '24px',
            'margin': '20px 0',
            'display': 'block'
        });
        
        // Set component attributes
        log('Setting component attributes...');
        await container.setCustomAttribute('data-component', 'price-filter');
        await container.setCustomAttribute('fs-cmsfilter-element', 'filters');
        
        // Create header
        log('Creating header...');
        const header = await container.append(webflowAPI.elementPresets.Heading);
        await header.setTextContent('Enhanced Price Range Filter');
        await header.setTag('h3');
        await header.setStyles({
            'margin-bottom': '20px',
            'color': '#1f2937'
        });
        
        // Create form container
        log('Creating form elements...');
        const formContainer = await container.append(webflowAPI.elementPresets.DivBlock);
        await formContainer.setStyles({
            'display': 'grid',
            'grid-template-columns': '1fr 1fr',
            'gap': '15px',
            'margin-bottom': '20px'
        });
        
        // Min price input
        const minLabel = await formContainer.append(webflowAPI.elementPresets.FormBlockLabel);
        await minLabel.setTextContent('Minimum Price');
        
        const minInput = await formContainer.append(webflowAPI.elementPresets.FormTextInput);
        await minInput.setCustomAttribute('type', 'number');
        await minInput.setCustomAttribute('placeholder', '$0');
        await minInput.setCustomAttribute('fs-cmsfilter-field', 'prices');
        await minInput.setCustomAttribute('fs-cmsfilter-operator', 'gte');
        
        // Max price input
        const maxLabel = await formContainer.append(webflowAPI.elementPresets.FormBlockLabel);
        await maxLabel.setTextContent('Maximum Price');
        
        const maxInput = await formContainer.append(webflowAPI.elementPresets.FormTextInput);
        await maxInput.setCustomAttribute('type', 'number');
        await maxInput.setCustomAttribute('placeholder', '$999,999');
        await maxInput.setCustomAttribute('fs-cmsfilter-field', 'prices');
        await maxInput.setCustomAttribute('fs-cmsfilter-operator', 'lte');
        
        // Apply button
        const applyButton = await container.append(webflowAPI.elementPresets.Button);
        await applyButton.setTextContent('Apply Price Filter');
        await applyButton.setStyles({
            'background-color': '#4f46e5',
            'color': 'white',
            'width': '100%',
            'padding': '12px',
            'border-radius': '6px'
        });
        
        // CRITICAL: Register as component
        log('Registering component in Webflow...');
        const componentName = 'EnhancedPriceFilter';
        createdComponent = await webflowAPI.registerComponent(componentName, container);
        
        log(`Component registered with ID: ${createdComponent.id}`);
        
        status.innerHTML = '<div style="color: green;">✅ Component Created Successfully!</div>';
        button.textContent = '✅ Component Created';
        button.classList.add('success');
        
        // Enable next step
        document.getElementById('verify-component').disabled = false;
        
    } catch (error) {
        log(`Component creation failed: ${error.message}`, 'error');
        status.innerHTML = `<div class="error">❌ ${error.message}</div>`;
        button.disabled = false;
        button.textContent = 'Retry Creation';
    }
});

// Step 3: Verify Component
document.getElementById('verify-component').addEventListener('click', async () => {
    const button = document.getElementById('verify-component');
    const status = document.getElementById('verify-status');
    
    try {
        button.disabled = true;
        button.textContent = 'Verifying...';
        status.innerHTML = '';
        
        log('Verifying component registration...');
        
        const allComponents = await webflowAPI.getAllComponents();
        log(`Total components in project: ${allComponents.length}`);
        
        const ourComponent = allComponents.find(c => c.id === createdComponent?.id);
        
        if (ourComponent) {
            log(`✅ Component found: ${ourComponent.name}`);
            status.innerHTML = '<div style="color: green;">✅ Component is registered and visible in Navigator!</div>';
            button.textContent = '✅ Component Verified';
            button.classList.add('success');
            
            // Enable next step
            document.getElementById('add-to-page').disabled = false;
        } else {
            throw new Error('Component not found in project');
        }
        
    } catch (error) {
        log(`Verification failed: ${error.message}`, 'error');
        status.innerHTML = `<div class="error">❌ ${error.message}</div>`;
        button.disabled = false;
        button.textContent = 'Retry Verification';
    }
});

// Step 4: Add to Page
document.getElementById('add-to-page').addEventListener('click', async () => {
    const button = document.getElementById('add-to-page');
    const status = document.getElementById('add-status');
    
    try {
        button.disabled = true;
        button.textContent = 'Adding to Page...';
        status.innerHTML = '';
        
        log('Creating component instance...');
        
        if (!createdComponent) {
            throw new Error('No component available to add');
        }
        
        // Create instance of the component
        const instance = await createdComponent.createInstance();
        log(`Component instance created with ID: ${instance.id}`);
        
        status.innerHTML = '<div style="color: green;">✅ Component added to page!</div>';
        button.textContent = '✅ Added to Page';
        button.classList.add('success');
        
        log('🎉 SUCCESS! Check your Navigator panel for the new component.');
        
    } catch (error) {
        log(`Adding to page failed: ${error.message}`, 'error');
        status.innerHTML = `<div class="error">❌ ${error.message}</div>`;
        button.disabled = false;
        button.textContent = 'Retry Adding';
    }
});

// Initialize when extension loads
log('Extension loaded. Click "Check Webflow API" to start.');
