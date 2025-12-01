export const createOrder = async (amount: number) => {
  const res = await fetch(
    import.meta.env.VITE_SUPABASE_URL + "/functions/v1/create-order",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    }
  );

  return await res.json();
};