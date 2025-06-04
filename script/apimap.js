// Map API KEY
const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

// Helper to show placeholder image
function showMapPlaceholder() {
  const mapDiv = document.getElementById('map');
  mapDiv.innerHTML = `
    <img src="mapPin.png"
         alt="Map unavailable"
         class="mapPlaceholder" />
  `;
}

// Dynamically load Google Maps API
function loadGoogleMapsScript(callback) {
  if (!API_KEY || API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY') {
    showMapPlaceholder();
    return;
  }
  if (window.google && window.google.maps) {
    callback();
    return;
  }
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
}

// Initialize map after script loads
function initMap() {
  const mapDiv = document.getElementById('map');
  const map = new google.maps.Map(mapDiv, {
    zoom: 8,
    center: { lat: -34.397, lng: 150.644 }
  });

  // Placing a marker on the map
  new google.maps.Marker({
    position: { lat: -60.30387272181985, lng: 10.635886470816981 },
    map: map,
    title: 'Braastad Gaard'
  });
}

// Load the script and then initialize the map
loadGoogleMapsScript(initMap);