document.addEventListener("DOMContentLoaded", () => {

    const boxes = document.querySelectorAll(".box");

    const details = {
        "Natural Numbers": `
Natural Numbers (प्राकृतिक संख्याएँ) वे संख्याएँ होती हैं जिनका उपयोग हम गिनती करने के लिए करते हैं।

📌 Definition:
Natural numbers वे positive integers हैं जिनसे हम किसी भी वस्तु की गिनती करते हैं।

📌 Set:
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...

📌 Important Points:
✔ यह 1 से शुरू होती हैं (0 शामिल नहीं होता)
✔ ये हमेशा positive होती हैं
✔ ये infinite (अनंत) होती हैं

📌 Examples in real life:
👉 1 class में 30 students हैं → 30 natural number है  
👉 5 books, 10 pencils, 100 rupees → सभी natural numbers

📌 Properties:
✔ Addition: दो natural numbers का sum हमेशा natural number होता है  
   Example: 3 + 5 = 8

✔ Multiplication: हमेशा natural number होता है  
   Example: 4 × 6 = 24

📌 What is NOT natural number?
✘ 0 natural number नहीं है  
✘ Negative numbers (-1, -2) natural नहीं हैं  
✘ Fractions (1/2, 3/4) natural नहीं हैं

📌 Number Line Concept:
Natural numbers number line पर 1 से शुरू होकर right side में बढ़ते जाते हैं

1 → 2 → 3 → 4 → 5 → ...

📌 Conclusion:
Natural numbers गणित की सबसे basic counting numbers होती हैं जिनसे सभी basic calculations की शुरुआत होती है।
`,
        "Whole Numbers": `
Whole Numbers (पूर्ण संख्याएँ) वे संख्याएँ होती हैं जिनमें natural numbers के साथ 0 भी शामिल होता है।

📌 Definition:
Whole numbers वे संख्याएँ हैं जो 0 से शुरू होकर सभी positive counting numbers को शामिल करती हैं।

📌 Set:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...

📌 Important Points:
✔ इसमें 0 शामिल होता है  
✔ सभी natural numbers भी whole numbers होते हैं  
✔ ये हमेशा non-negative (0 या positive) होती हैं  
✔ ये भी infinite होती हैं

📌 Difference (Natural vs Whole):
👉 Natural numbers = 1 से शुरू होते हैं  
👉 Whole numbers = 0 से शुरू होते हैं  

📌 Examples in real life:
👉 खाली हाथ (0 items) = whole number  
👉 5 books, 10 pencils, 100 students = whole numbers  

📌 Number Line Concept:
Whole numbers number line पर 0 से शुरू होकर right side में बढ़ते हैं

0 → 1 → 2 → 3 → 4 → 5 → ...

📌 Properties:
✔ Addition: whole + whole = whole  
   Example: 2 + 3 = 5  

✔ Multiplication: whole × whole = whole  
   Example: 4 × 5 = 20  

📌 What is NOT Whole Number:
✘ Negative numbers (-1, -2, -3)  
✘ Fractions (1/2, 3/4)  
✘ Decimal negative values  

📌 Conclusion:
Whole numbers गणित की basic number system का हिस्सा हैं जो 0 से शुरू होकर counting numbers तक जाते हैं।
`,
        "Integers": `
Integers (पूर्णांक) वे संख्याएँ होती हैं जिनमें negative numbers, zero और positive numbers सभी शामिल होते हैं।

📌 Definition:
Integers वे संख्याएँ हैं जो number line पर zero के दोनों तरफ होती हैं।

📌 Set:
..., -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, ...

📌 Important Points:
✔ इसमें negative numbers शामिल होते हैं  
✔ इसमें zero शामिल होता है  
✔ इसमें positive numbers शामिल होते हैं  
✔ ये infinite (अनंत) होती हैं दोनों दिशाओं में  

📌 Number Line Concept:
Integers number line पर दोनों तरफ extend होते हैं

← negative numbers | 0 | positive numbers →

..., -3, -2, -1, 0, 1, 2, 3, ...

📌 Real Life Examples:
👉 Temperature: -5°C, 0°C, 10°C  
👉 Sea level: -100m (below), 0m, +100m  
👉 Profit & Loss: -loss, 0, profit  

📌 Properties:
✔ Addition:  
   same sign → add  
   different sign → subtract  

   Example: -3 + 5 = 2  

✔ Multiplication:
   same sign → positive  
   different sign → negative  

   Example: (-2) × (-3) = 6  

📌 What is NOT Integer:
✘ Fractions (1/2, 3/4)  
✘ Decimals (2.5, -1.3)  

📌 Difference:
👉 Natural numbers = only positive counting numbers  
👉 Whole numbers = 0 + positive numbers  
👉 Integers = negative + zero + positive  

📌 Conclusion:
Integers गणित का बहुत important set है जो real life problems जैसे temperature, finance और measurement में बहुत उपयोग होता है।
`,
        "Rational Numbers": "p/q form में लिखी जाने वाली संख्याएँ।",
        "Irrational Numbers": "जो fraction में नहीं लिखी जा सकतीं।",
        "Real Numbers": "Rational + Irrational numbers का set।"
    };

    boxes.forEach(box => {

        let titleText = box.querySelector("h2").innerText;

        // 🔥 emoji हटाने का magic
        let cleanTitle = titleText.replace(/[^a-zA-Z ]/g, "").trim();

        let btn = document.createElement("button");
        btn.innerText = "📘 Details";
        btn.classList.add("detail-btn");

        box.appendChild(btn);

        btn.addEventListener("click", () => {
            openPanel(cleanTitle, details[cleanTitle] || "Details coming soon...");
        });
    });

    function openPanel(title, content) {

        let overlay = document.createElement("div");
        overlay.classList.add("overlay");

        let panel = document.createElement("div");
        panel.classList.add("panel");

        panel.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
            <button class="close-btn">❌ Close</button>
        `;

        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        panel.querySelector(".close-btn").onclick = () => overlay.remove();

        overlay.onclick = (e) => {
            if (e.target === overlay) overlay.remove();
        };
    }

});