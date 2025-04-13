import config from '../config';

const API_URL = config.apiUrl;

// Mock data for development and fallback
const MOCK_DATA = {
  services: [
    { 
      id: 1, 
      title: 'Freight Transport', 
      description: 'Reliable freight transport services across Maharashtra', 
      features: ['24/7 tracking', 'Insurance included', 'Same day pickup'] 
    },
    { 
      id: 2, 
      title: 'Cargo Solutions', 
      description: 'Secure cargo handling and storage solutions', 
      features: ['Climate controlled', 'Security monitoring', 'Flexible storage options'] 
    },
    { 
      id: 3, 
      title: 'Express Delivery', 
      description: 'Time-sensitive delivery services', 
      features: ['Guaranteed timelines', 'Priority handling', 'Real-time updates'] 
    }
  ],
  testimonials: [
    { id: 1, name: 'Rajesh Kumar', company: 'ABC Textiles', text: 'Shiva Transport has been our logistics partner for 5 years. Their service is exceptional.' },
    { id: 2, name: 'Anita Sharma', company: 'XYZ Electronics', text: 'Reliable and professional. Our products always reach customers on time.' },
    { id: 3, name: 'Vikram Mehta', company: 'Mehta Enterprises', text: 'The best transport service in Maharashtra. Highly recommended!' }
  ],
  stats: {
    deliveries: 5000,
    onTimeRate: 97,
    citiesServed: 200
  }
};

// Utility function for making API requests
const makeRequest = async (endpoint, options = {}) => {
  try {
    // In development mode, you can use mock data
    if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_USE_MOCK_DATA === 'true') {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Return appropriate mock data based on endpoint
      if (endpoint === '/services') {
        return { success: true, data: MOCK_DATA.services };
      } else if (endpoint.startsWith('/services/')) {
        const id = parseInt(endpoint.split('/').pop(), 10);
        const service = MOCK_DATA.services.find(s => s.id === id);
        return { success: true, data: service };
      } else if (endpoint === '/testimonials') {
        return { success: true, data: MOCK_DATA.testimonials };
      } else if (endpoint === '/stats') {
        return { success: true, data: MOCK_DATA.stats };
      } else if (endpoint === '/contact' && options.method === 'POST') {
        return { success: true, message: 'Message sent successfully' };
      }
    }

    // Regular API request
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API request error:', error);
    
    // Fallback to mock data if API request fails
    if (endpoint === '/services') {
      return { success: true, data: MOCK_DATA.services };
    } else if (endpoint.startsWith('/services/')) {
      const id = parseInt(endpoint.split('/').pop(), 10);
      const service = MOCK_DATA.services.find(s => s.id === id);
      return { success: true, data: service };
    } else if (endpoint === '/testimonials') {
      return { success: true, data: MOCK_DATA.testimonials };
    } else if (endpoint === '/stats') {
      return { success: true, data: MOCK_DATA.stats };
    } else if (endpoint === '/contact' && options.method === 'POST') {
      return { success: true, message: 'Message sent successfully' };
    }
    
    throw error;
  }
};

// API service methods
const ApiService = {
  // Get all services
  getServices: async () => {
    const response = await makeRequest('/services');
    return response.data || MOCK_DATA.services;
  },

  // Get single service by ID
  getService: async (id) => {
    const response = await makeRequest(`/services/${id}`);
    return response.data || MOCK_DATA.services.find(s => s.id === id);
  },

  // Get all testimonials
  getTestimonials: async () => {
    const response = await makeRequest('/testimonials');
    return response.data || MOCK_DATA.testimonials;
  },

  // Get company stats
  getStats: async () => {
    const response = await makeRequest('/stats');
    return response.data || MOCK_DATA.stats;
  },

  // Submit contact form
  submitContactForm: async (formData) => {
    const response = await makeRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    return response;
  }
};

export default ApiService; 