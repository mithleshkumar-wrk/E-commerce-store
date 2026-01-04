export const getOrderAge = (createdAt) => {
  if (!createdAt) return { days: 0, hours: 0, minutes: 0 };

  const createdTime = new Date(createdAt);
  const now = new Date();

  const diffMs = now - createdTime; // difference in milliseconds

  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const minutes = totalMinutes % 60;

  return { days, hours, minutes };
};

