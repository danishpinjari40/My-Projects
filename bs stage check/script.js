// All Indian vehicle brands data with real logo URLs
const vehicleBrands = [
	// Indian Car Brands
	{
		id: 'tata',
		name: 'Tata',
		type: 'car',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/240px-Tata_logo.svg.png',
	},
	{
		id: 'mahindra',
		name: 'Mahindra',
		type: 'car',
		logo: 'https://cdn.iconscout.com/icon/free/png-512/free-mahindra-icon-svg-download-png-2249148.png?f=webp&w=512',
	},
	{
		id: 'maruti',
		name: 'Maruti Suzuki',
		type: 'car',
		logo: 'https://i.pinimg.com/736x/ea/c3/df/eac3dfab9034814d5775cdc2710f9b86.jpg',
	},
	{
		id: 'hyundai',
		name: 'Hyundai',
		type: 'car',
		logo: 'https://cdn.iconscout.com/icon/free/png-512/free-hyundai-icon-svg-download-png-202804.png?f=webp&w=512',
	},
	{
		id: 'honda',
		name: 'Honda',
		type: 'car',
		logo: 'https://cdn.iconscout.com/icon/free/png-256/free-honda-car-icon-svg-download-png-2874282.png?f=webp&w=256',
	},
	{
		id: 'toyota',
		name: 'Toyota',
		type: 'car',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/240px-Toyota_carlogo.svg.png',
	},
	{
		id: 'kia',
		name: 'Kia',
		type: 'car',
		logo: 'https://cdn.iconscout.com/icon/free/png-512/free-kia-logo-icon-svg-download-png-2641347.png?f=webp&w=512',
	},
	{
		id: 'mg',
		name: 'MG Motor',
		type: 'car',
		logo: 'https://cdn.iconscout.com/icon/free/png-512/free-mg-icon-svg-download-png-202848.png?f=webp&w=512',
	},
	{
		id: 'renault',
		name: 'Renault',
		type: 'car',
		logo: 'https://cdn.iconscout.com/icon/free/png-512/free-renault-icon-svg-download-png-2874314.png?f=webp&w=512',
	},
	{
		id: 'skoda',
		name: 'Skoda',
		type: 'car',
		logo: 'https://cdn.iconscout.com/icon/free/png-256/free-skoda-icon-svg-download-png-2874318.png?f=webp&w=256',
	},
	{
		id: 'volkswagen',
		name: 'Volkswagen',
		type: 'car',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/240px-Volkswagen_logo_2019.svg.png',
	},
	{
		id: 'ford',
		name: 'Ford',
		type: 'car',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/240px-Ford_Motor_Company_Logo.svg.png',
	},
	{
		id: 'nissan',
		name: 'Nissan',
		type: 'car',
		logo: 'https://cdn.iconscout.com/icon/free/png-256/free-nissan-icon-svg-download-png-202859.png?f=webp&w=256',
	},
	{
		id: 'jeep',
		name: 'Jeep',
		type: 'car',
		logo: 'https://cdn.iconscout.com/icon/free/png-512/free-jeep-icon-svg-download-png-202822.png?f=webp&w=512',
	},

	// Luxury Car Brands
	{
		id: 'bmw',
		name: 'BMW',
		type: 'luxury',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/240px-BMW.svg.png',
	},
	{
		id: 'mercedes',
		name: 'Mercedes-Benz',
		type: 'luxury',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/240px-Mercedes-Logo.svg.png',
	},

	// Two-Wheeler Brands
	{
		id: 'hero',
		name: 'Hero',
		type: 'twowheeler',
		logo: 'https://cdn.iconscout.com/icon/free/png-512/free-hero-icon-svg-download-png-2249161.png?f=webp&w=512',
	},
	{
		id: 'bajaj',
		name: 'Bajaj',
		type: 'twowheeler',
		logo: 'https://cdn.iconscout.com/icon/free/png-512/free-bajaj-icon-svg-download-png-2249150.png?f=webp&w=512',
	},
	{
		id: 'tvs',
		name: 'TVS',
		type: 'twowheeler',
		logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0015/2081/brand.gif?itok=0YnOsRYK',
	},
	{
		id: 'yamaha',
		name: 'Yamaha',
		type: 'twowheeler',
		logo: 'https://cdn.iconscout.com/icon/free/png-256/free-yamaha-icon-svg-download-png-282215.png?f=webp&w=256',
	},
	{
		id: 'suzuki_bike',
		name: 'Suzuki',
		type: 'twowheeler',
		logo: 'https://cdn.iconscout.com/icon/free/png-256/free-suzuki-icon-svg-download-png-282144.png?f=webp&w=256',
	},
	{
		id: 'royal_enfield',
		name: 'Royal Enfield',
		type: 'twowheeler',
		logo: 'https://images.seeklogo.com/logo-png/36/2/royal-enfield-logo-png_seeklogo-361484.png',
	},
	{
		id: 'honda_bike',
		name: 'Honda',
		type: 'twowheeler',
		logo: 'https://cdn.iconscout.com/icon/free/png-512/free-honda-icon-svg-download-png-202784.png?f=webp&w=512',
	},

	// Commercial Vehicles
	{
		id: 'ashok',
		name: 'Ashok Leyland',
		type: 'commercial',
		logo: 'https://e7.pngegg.com/pngimages/420/596/png-clipart-british-leyland-leyland-motors-car-ashok-leyland-nissan-truck-driver-company-text.png',
	},
	{
		id: 'eicher',
		name: 'Eicher',
		type: 'commercial',
		logo: 'https://1000logos.net/wp-content/uploads/2021/01/Eicher-logo.png',
	},
	{
		id: 'force',
		name: 'Force Motors',
		type: 'commercial',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Force_Motors_Logo.svg/2560px-Force_Motors_Logo.svg.png',
	},

	// Electric Vehicles
	{
		id: 'tata_ev',
		name: 'Tata EV',
		type: 'ev',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/240px-Tata_logo.svg.png',
	},
	{
		id: 'mg_ev',
		name: 'MG EV',
		type: 'ev',
		logo: 'https://cdn.iconscout.com/icon/free/png-512/free-mg-icon-svg-download-png-202848.png?f=webp&w=512',
	},
	{
		id: 'hyundai_ev',
		name: 'Hyundai EV',
		type: 'ev',
		logo: 'https://cdn.iconscout.com/icon/free/png-512/free-hyundai-icon-svg-download-png-202804.png?f=webp&w=512',
	},
	{
		id: 'mahindra_ev',
		name: 'Mahindra EV',
		type: 'ev',
		logo: 'https://cdn.iconscout.com/icon/free/png-512/free-mahindra-icon-svg-download-png-2249148.png?f=webp&w=512',
	},
	{
		id: 'ola',
		name: 'Ola Electric',
		type: 'ev',
		logo: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Ola_Cabs_logo.svg',
	},
	{
		id: 'ather',
		name: 'Ather Energy',
		type: 'ev',
		logo: 'https://solarimpulse.com/files/companies/logo/2018-08-01-095133/logo_Ather_Energy.jpg',
	},
];

// BS Stage transition data
const bsTransitionData = {
	default: {
		bs_iii_start: 2010,
		bs_iv_start: 2017,
		bs_vi_start: 2020,
	},
	// Some brands might have different transition dates
	tata: {
		bs_iii_start: 2010,
		bs_iv_start: 2017,
		bs_vi_start: 2020,
	},
	mahindra: {
		bs_iii_start: 2010,
		bs_iv_start: 2017,
		bs_vi_start: 2020,
	},
	maruti: {
		bs_iii_start: 2010,
		bs_iv_start: 2017,
		bs_vi_start: 2020,
	},
	hyundai: {
		bs_iii_start: 2010,
		bs_iv_start: 2017,
		bs_vi_start: 2020,
	},
};

// DOM elements
const brandGrid = document.getElementById('brandGrid');
const yearSelection = document.getElementById('yearSelection');
const brandSearch = document.getElementById('brandSearch');
const selectedDetails = document.getElementById('selectedDetails');
const selectedBrand = document.getElementById('selectedBrand');
const selectedYear = document.getElementById('selectedYear');

// Selected values
let selectedBrandId = null;
let selectedYearValue = null;

// Initialize the app
function initApp() {
	populateBrands();
	populateYears();
	setupEventListeners();

	// Set default selections
	selectBrand('maruti');
	selectYear(new Date().getFullYear());
}

// Populate brands in the grid
function populateBrands() {
	brandGrid.innerHTML = '';

	vehicleBrands.forEach((brand) => {
		const brandItem = document.createElement('div');
		brandItem.className = 'brand-item';
		brandItem.dataset.id = brand.id;
		brandItem.innerHTML = `
			<div class="brand-logo">
				<img src="${brand.logo}" alt="${brand.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='🚗';">
			</div>
			<div class="brand-name">${brand.name}</div>
		`;

		brandItem.addEventListener('click', () => {
			selectBrand(brand.id);
		});

		brandGrid.appendChild(brandItem);
	});
}

// Populate years in the selection
function populateYears() {
	yearSelection.innerHTML = '';
	const currentYear = new Date().getFullYear();

	for (let year = 2000; year <= currentYear; year++) {
		const yearItem = document.createElement('div');
		yearItem.className = 'year-item';
		yearItem.textContent = year;
		yearItem.dataset.year = year;

		yearItem.addEventListener('click', () => {
			selectYear(year);
		});

		yearSelection.appendChild(yearItem);
	}
}

// Set up event listeners
function setupEventListeners() {
	// Brand search
	brandSearch.addEventListener('input', filterBrands);

	// Quick year selection
	document.querySelectorAll('.quick-year').forEach((item) => {
		item.addEventListener('click', () => {
			const year = parseInt(item.dataset.year);
			selectYear(year);

			// Update quick year selection
			document.querySelectorAll('.quick-year').forEach((quickYear) => {
				quickYear.classList.remove('selected');
			});
			item.classList.add('selected');
		});
	});
}

// Filter brands based on search input
function filterBrands() {
	const searchTerm = brandSearch.value.toLowerCase();

	document.querySelectorAll('.brand-item').forEach((item) => {
		const brandName = item
			.querySelector('.brand-name')
			.textContent.toLowerCase();
		if (brandName.includes(searchTerm)) {
			item.style.display = 'flex';
		} else {
			item.style.display = 'none';
		}
	});
}

// Select a brand
function selectBrand(brandId) {
	selectedBrandId = brandId;

	// Update UI
	document.querySelectorAll('.brand-item').forEach((item) => {
		item.classList.remove('selected');
	});

	const selectedItem = document.querySelector(
		`.brand-item[data-id="${brandId}"]`
	);
	if (selectedItem) {
		selectedItem.classList.add('selected');
	}

	// Update selected details
	const brand = vehicleBrands.find((b) => b.id === brandId);
	if (brand) {
		selectedBrand.textContent = brand.name;
		updateSelectedDetails();
	}
}

// Select a year
function selectYear(year) {
	selectedYearValue = year;

	// Update UI
	document.querySelectorAll('.year-item').forEach((item) => {
		item.classList.remove('selected');
	});

	const selectedItem = document.querySelector(
		`.year-item[data-year="${year}"]`
	);
	if (selectedItem) {
		selectedItem.classList.add('selected');
	}

	// Update selected details
	selectedYear.textContent = year;
	updateSelectedDetails();
}

// Update selected details section
function updateSelectedDetails() {
	if (selectedBrandId && selectedYearValue) {
		selectedDetails.style.display = 'block';
	}
}

// Check BS Stage
function checkBSStage() {
	if (!selectedBrandId || !selectedYearValue) {
		alert('Please select both a brand and a year');
		return;
	}

	const brand = vehicleBrands.find((b) => b.id === selectedBrandId);
	const year = selectedYearValue;
	const resultDiv = document.getElementById('result');

	// Get transition data for the brand or use default
	const transitions =
		bsTransitionData[selectedBrandId] || bsTransitionData.default;

	let bsStage, message, resultClass;

	if (year < 2005) {
		bsStage = 'BS-II or earlier';
		message = `Your vehicle likely has BS-II or earlier emission norms.`;
		resultClass = 'unknown';
	} else if (year >= 2005 && year < transitions.bs_iii_start) {
		bsStage = 'BS-III';
		message = `Your vehicle likely has BS-III emission norms.`;
		resultClass = 'unknown';
	} else if (
		year >= transitions.bs_iii_start &&
		year < transitions.bs_iv_start
	) {
		bsStage = 'BS-III';
		message = `Your vehicle likely has BS-III emission norms.`;
		resultClass = 'unknown';
	} else if (
		year >= transitions.bs_iv_start &&
		year < transitions.bs_vi_start
	) {
		bsStage = 'BS-IV';
		message = `✅ Requires BS-IV HSRP number plate.`;
		resultClass = 'bs-iv';
	} else if (year >= transitions.bs_vi_start) {
		bsStage = 'BS-VI';
		message = `✅ Requires BS-VI HSRP number plate.`;
		resultClass = 'bs-vi';
	}

	resultDiv.innerHTML = `
        <div class="result-content">
            <div class="vehicle-display">
                <div class="vehicle-logo">
                    <img src="${brand.logo}" alt="${brand.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='🚗';">
                </div>
                <div class="vehicle-info">
                    <div class="vehicle-name">${brand.name}</div>
                    <div class="vehicle-year">Manufactured in ${year}</div>
                </div>
            </div>
            <div class="bs-stage">${bsStage}</div>
            <div class="bs-message">${message}</div>
        </div>
    `;
	resultDiv.className = `result ${resultClass}`;
	resultDiv.style.display = 'block';
}

// Initialize the app when the page loads
window.onload = initApp;
