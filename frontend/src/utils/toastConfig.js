export const toastConfig = {
  position: "top-right",
  reverseOrder: false,
  gutter: 12,

  toastOptions: {
    duration: 3000,

    style: {
      background: "#ffffff",
      color: "#111827",
      border: "1px solid #f3f4f6",
      padding: "14px 18px",
      borderRadius: "16px",
      fontSize: "14px",
      fontWeight: "500",
      minWidth: "340px",
      minHeight: "64px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    },

    success: {
      style: {
        borderLeft: "5px solid #22c55e",
      },

      iconTheme: {
        primary: "#22c55e",
        secondary: "#ffffff",
      },
    },

    error: {
      style: {
        borderLeft: "5px solid #ef4444",
      },

      iconTheme: {
        primary: "#ef4444",
        secondary: "#ffffff",
      },
    },

    loading: {
      style: {
        borderLeft: "5px solid #3b82f6",
      },

      iconTheme: {
        primary: "#3b82f6",
        secondary: "#ffffff",
      },
    },
  },
};