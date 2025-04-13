const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample transport service data
const services = [
  {
    id: 1,
    title: "Freight Transport",
    description: "Reliable freight transport services across Maharashtra with timely delivery and cargo safety.",
    imageUrl: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["GPS tracking", "24/7 customer support", "Insured shipments"]
  },
  {
    id: 2,
    title: "Cargo Solutions",
    description: "End-to-end cargo management solutions including storage, handling, and transportation.",
    imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Warehousing", "Inventory management", "Custom packaging"]
  },
  {
    id: 3,
    title: "Express Delivery",
    description: "Same-day and next-day delivery options for time-sensitive shipments across Mumbai and Maharashtra.",
    imageUrl: "https://images.unsplash.com/photo-1615819925861-d4b84d87c93b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Priority handling", "Real-time tracking", "Delivery confirmation"]
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    company: "Sharma Textiles Ltd",
    comment: "Shiva Transport has been our logistics partner for over 5 years. Their reliability and professionalism are unmatched in the industry.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    company: "Maharashtra Exports",
    comment: "The express delivery service saved our business multiple times when we needed urgent shipments to reach our clients.",
    rating: 5
  },
  {
    id: 3,
    name: "Anand Mehta",
    company: "Mehta Manufacturing",
    comment: "Great service at competitive prices. Their cargo solutions helped us streamline our supply chain significantly.",
    rating: 4
  }
];

// API endpoints
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Shiva Transport API' });
});

app.get('/api/services', (req, res) => {
  res.json(services);
});

app.get('/api/services/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) return res.status(404).json({ message: 'Service not found' });
  res.json(service);
});

app.get('/api/testimonials', (req, res) => {
  res.json(testimonials);
});

// Stats endpoint
app.get('/api/stats', (req, res) => {
  const stats = {
    deliveries: 5000,
    cities: 200,
    onTimeRate: 97,
    customers: 1200
  };
  res.json(stats);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  // In a real application, you would save this to a database
  // and/or send an email notification
  console.log('Contact form submission:', req.body);
  res.json({ success: true, message: 'Thank you for your message. We will get back to you soon!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 