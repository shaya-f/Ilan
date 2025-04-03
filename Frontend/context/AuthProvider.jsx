import AuthContext from "./AuthContext";

export default function AuthProvider() {
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        loading,
        error,
        register,
        login,
        logout,
        setError,
      }}
    ></AuthContext.Provider>
  );
}
