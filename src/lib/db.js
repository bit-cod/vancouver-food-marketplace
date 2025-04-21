// Simple database utility for Replit
// This is a simplified version that doesn't require Cloudflare D1

const users = [];
const listings = [];
const reviews = [];
const messages = [];
const transportRequests = [];

// User functions
export const createUser = (userData) => {
  const id = `user_${Date.now()}`;
  const newUser = { id, ...userData, createdAt: new Date().toISOString() };
  users.push(newUser);
  return newUser;
};

export const getUserById = (id) => {
  return users.find(user => user.id === id);
};

export const getUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

// Listing functions
export const createListing = (listingData) => {
  const id = `listing_${Date.now()}`;
  const newListing = { id, ...listingData, createdAt: new Date().toISOString() };
  listings.push(newListing);
  return newListing;
};

export const getListings = (filters = {}) => {
  let filteredListings = [...listings];
  
  if (filters.sellerId) {
    filteredListings = filteredListings.filter(listing => listing.sellerId === filters.sellerId);
  }
  
  if (filters.category) {
    filteredListings = filteredListings.filter(listing => listing.category === filters.category);
  }
  
  return filteredListings;
};

export const getListingById = (id) => {
  return listings.find(listing => listing.id === id);
};

// Review functions
export const createReview = (reviewData) => {
  const id = `review_${Date.now()}`;
  const newReview = { id, ...reviewData, createdAt: new Date().toISOString() };
  reviews.push(newReview);
  return newReview;
};

export const getReviewsForUser = (userId) => {
  return reviews.filter(review => review.targetUserId === userId);
};

// Message functions
export const createMessage = (messageData) => {
  const id = `message_${Date.now()}`;
  const newMessage = { id, ...messageData, createdAt: new Date().toISOString() };
  messages.push(newMessage);
  return newMessage;
};

export const getMessagesBetweenUsers = (user1Id, user2Id) => {
  return messages.filter(
    message => 
      (message.senderId === user1Id && message.receiverId === user2Id) ||
      (message.senderId === user2Id && message.receiverId === user1Id)
  ).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
};

// Transport request functions
export const createTransportRequest = (requestData) => {
  const id = `transport_${Date.now()}`;
  const newRequest = { 
    id, 
    ...requestData, 
    status: 'pending',
    createdAt: new Date().toISOString() 
  };
  transportRequests.push(newRequest);
  return newRequest;
};

export const getTransportRequests = (filters = {}) => {
  let filteredRequests = [...transportRequests];
  
  if (filters.sellerId) {
    filteredRequests = filteredRequests.filter(req => req.sellerId === filters.sellerId);
  }
  
  if (filters.status) {
    filteredRequests = filteredRequests.filter(req => req.status === filters.status);
  }
  
  return filteredRequests;
};

export const updateTransportRequestStatus = (id, status) => {
  const request = transportRequests.find(req => req.id === id);
  if (request) {
    request.status = status;
    return request;
  }
  return null;
};
