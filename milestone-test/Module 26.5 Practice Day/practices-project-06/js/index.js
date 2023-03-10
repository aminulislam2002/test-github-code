// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।
const allH2 = document.getElementsByTagName("h2");
for (const h2 of allH2) {
  h2.style.color = "lightblue";
}
// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা।
const backpackSection = (document.getElementById("backpack").style.backgroundColor = "tomato");
// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা
const cardClass = document.getElementsByClassName("card");
for (const card of cardClass) {
  card.style.borderRadius = "30px";
}
// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।
const buyBtn = document.getElementsByClassName("btn-buy");
for (const btn of buyBtn) {
  btn.addEventListener("click", function (event) {
    event.target.parentNode.remove();
  });
}

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।
document.getElementById("exampleInputEmail1").addEventListener("keyup", function (event) {
  const text = event.target.value;
  console.log(text);
  const deleteButton = document.getElementById("btn-submit");
  if (text === "delete") {
    deleteButton.removeAttribute("disabled");
  } else {
    deleteButton.setAttribute("disabled", true);
  }
});
document.getElementById("btn-submit").addEventListener("click", function (event) {
  console.log("event triggerd");
});
