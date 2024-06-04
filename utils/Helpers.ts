export const setToken = (token: string) => {
  localStorage.setItem("jwt", token);
};

export const getToken = () => {
  return localStorage.getItem("jwt");
};

export const removeToken = () => {
  localStorage.removeItem("jwt");
};

export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

export const formatNumber = (num: number) => {
  return new Intl.NumberFormat("de-DE").format(num);
};
