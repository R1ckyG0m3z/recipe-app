import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Check for saved user in localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('recipeAppUser');
    if (savedUser) {
      setUser(savedUser);
      setIsAuthenticated(true);
      // Load favorites for this user
      const savedFavorites = localStorage.getItem(`favorites_${savedUser}`);
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    }
  }, []);

  const login = (username) => {
    setUser(username);
    setIsAuthenticated(true);
    localStorage.setItem('recipeAppUser', username);
    // Load favorites for this user
    const savedFavorites = localStorage.getItem(`favorites_${username}`);
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    } else {
      setFavorites([]);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setFavorites([]);
    localStorage.removeItem('recipeAppUser');
  };

  const addFavorite = (recipeId) => {
    if (!favorites.includes(recipeId)) {
      const newFavorites = [...favorites, recipeId];
      setFavorites(newFavorites);
      localStorage.setItem(`favorites_${user}`, JSON.stringify(newFavorites));
    }
  };

  const removeFavorite = (recipeId) => {
    const newFavorites = favorites.filter(id => id !== recipeId);
    setFavorites(newFavorites);
    localStorage.setItem(`favorites_${user}`, JSON.stringify(newFavorites));
  };

  const isFavorite = (recipeId) => {
    return favorites.includes(recipeId);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
