const API_URL = "http://127.0.0.1:8000/predict";

export const predict = async (formData) => {
  try {
    console.log("🚀 Sending to backend:", formData);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("📊 Response status:", response.status);

    const data = await response.json();
    console.log("📥 Response data:", data);

    if (!response.ok) {
      console.error("❌ Backend error:", data);
      throw new Error(data.detail || data.error || "Prediction failed");
    }

    return data;
  } catch (error) {
    console.error("❌ Prediction Error:", error);
    throw error;
  }
};