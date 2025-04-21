// Authentication utilities for Replit version
// Simplified version without actual JWT implementation

// Store sessions in memory for demo purposes
const sessions = {};

export const createSession = (userId) => {
  const sessionId = `session_${Date.now()}`;
  sessions[sessionId] = {
    userId,
    createdAt: new Date().toISOString()
  };
  return sessionId;
};

export const validateSession = (sessionId) => {
  return sessions[sessionId] || null;
};

export const removeSession = (sessionId) => {
  if (sessions[sessionId]) {
    delete sessions[sessionId];
    return true;
  }
  return false;
};

// Password utilities
export const hashPassword = async (password) => {
  // In a real app, we would use bcrypt
  // This is a simple hash for demo purposes
  return `hashed_${password}`;
};

export const verifyPassword = async (password, hashedPassword) => {
  // Simple verification for demo
  return hashedPassword === `hashed_${password}`;
};
