document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector(".formula-btn");

    if (!btn) return; // safety check

    btn.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const panel = document.createElement("div");
        panel.classList.add("panel");

        panel.innerHTML = `
            <h2>📘 Algebra Formula Book</h2>

            <p>

            <b>🔥 BASIC IDENTITIES</b><br><br>

            (a + b)² = a² + 2ab + b²<br>
            (a - b)² = a² - 2ab + b²<br>
            (a + b)(a - b) = a² - b²<br><br>

            <b>🔥 CUBE FORMULAS</b><br><br>

            (a + b)³ = a³ + b³ + 3ab(a + b)<br>
            (a - b)³ = a³ - b³ - 3ab(a - b)<br><br>

            a³ + b³ = (a + b)(a² - ab + b²)<br>
            a³ - b³ = (a - b)(a² + ab + b²)<br><br>

            <b>🔥 TRIPLE TERMS</b><br><br>

            (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca<br><br>

            <b>🔥 LINEAR EQUATIONS</b><br><br>

            ax + b = 0 → x = -b/a<br><br>

            <b>🔥 QUADRATIC FORMULA</b><br><br>

            ax² + bx + c = 0<br>
            x = [-b ± √(b² - 4ac)] / 2a<br><br>

            <b>🔥 FACTORIZATION</b><br><br>

            x² + (a+b)x + ab = (x+a)(x+b)<br><br>

            <b>🔥 SPECIAL PRODUCTS</b><br><br>

            (x + a)(x + b) = x² + (a+b)x + ab<br>
            (x - a)(x - b) = x² - (a+b)x + ab<br><br>

            <b>🔥 ADVANCED FACTS</b><br><br>

            a² - b² = (a - b)(a + b)<br>
            (a + b + c)² expansion useful in geometry problems<br><br>

            <b>✔ NOTE:</b><br>
            ये सभी formulas algebra के हर chapter में use होते हैं।

            </p>

            <button class="close-btn">❌ Close</button>
        `;

        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        // Close button
        panel.querySelector(".close-btn").onclick = () => overlay.remove();

        // click outside to close
        overlay.onclick = (e) => {
            if (e.target === overlay) overlay.remove();
        };

    });

});
document.addEventListener("DOMContentLoaded", () => {

  const details = {
    variables: `
📘 VARIABLES (चर)

📌 Definition:
Variables वे symbols होते हैं जो unknown values को represent करते हैं।

📌 Examples:
x, y, z, a, b

📌 Use:
✔ equations solve करना
✔ formulas बनाना
✔ real life problems

📌 Real Life:
Speed = Distance / Time

📌 Important:
✔ value बदल सकती है
✔ algebra का base concept
    `,

    identities: `
📘 ALGEBRAIC IDENTITIES

📌 Important Formulas:

✔ (a + b)² = a² + 2ab + b²  
✔ (a - b)² = a² - 2ab + b²  
✔ (a + b)(a - b) = a² - b²  

📌 Cube Formulas:
✔ (a + b)³ = a³ + b³ + 3ab(a + b)  
✔ (a - b)³ = a³ - b³ - 3ab(a - b)  

📌 Use:
✔ simplification  
✔ factorization  
✔ fast calculation  
    `,
    factorisation: `
📘 FACTORISATION (गुणनखंडन)

📌 Definition:
Factorisation वह process है जिसमें किसी बड़ी algebraic expression को छोटे-छोटे factors में तोड़ा जाता है।

📌 Example:
x² + 5x + 6  
= (x + 2)(x + 3)

📌 Methods:

✔ Common Factor Method  
   Example: 2x + 4 = 2(x + 2)

✔ Grouping Method  
   Example: ax + ay + bx + by  
   = a(x + y) + b(x + y)

✔ Identity Method  
   Example: x² - a² = (x - a)(x + a)

📌 Why important?
✔ equations solve करने में मदद  
✔ simplification आसान बनाता है  
✔ algebra का core concept है  

📌 Real Life Use:
✔ area calculation  
✔ engineering formulas  
✔ speed calculations  

📌 Conclusion:
Factorisation algebra का बहुत important skill है जो हर exam में आता है।
`,
quadratic: `
📘 QUADRATIC EQUATIONS

📌 Definition:
Quadratic equation वह equation होती है जिसका highest power 2 होता है।

📌 Standard Form:
ax² + bx + c = 0  
जहाँ a ≠ 0

📌 Examples:
x² + 5x + 6 = 0  
2x² - 3x + 1 = 0  

📌 Methods to solve:

✔ 1. Factorisation Method  
Example: x² + 5x + 6  
= (x + 2)(x + 3)  
x = -2, -3  

✔ 2. Formula Method  

x = [-b ± √(b² - 4ac)] / 2a  

📌 Important Term:
Discriminant (D) = b² - 4ac  

✔ If D > 0 → 2 real roots  
✔ If D = 0 → equal roots  
✔ If D < 0 → no real roots  

📌 Real Life Use:
✔ projectile motion  
✔ area problems  
✔ optimization problems  

📌 Conclusion:
Quadratic equations algebra का very important chapter है जो real world problems में बहुत use होता है।
`,
linear: `
📘 LINEAR EQUATIONS

📌 Definition:
Linear equation वह equation होती है जिसमें variable की highest power 1 होती है।

📌 Standard Form:
ax + b = 0  (a ≠ 0)

📌 Example:
2x + 5 = 0  
→ 2x = -5  
→ x = -5/2  

📌 Steps to Solve:
✔ constant को दूसरी side ले जाओ  
✔ variable को isolate करो  
✔ simplify करके answer निकालो  

📌 Real Life Examples:
✔ distance-speed-time problems  
✔ simple profit/loss  
✔ age problems  

📌 Graph:
✔ इसका graph हमेशा straight line होता है  
✔ इसलिए इसे “Linear” कहते हैं  

📌 Important Points:
✔ only one solution  
✔ degree = 1  
✔ simplest algebra equation type  

📌 Conclusion:
Linear equations algebra का सबसे basic और important concept है।
`,
expressions: `
📘 ALGEBRAIC EXPRESSIONS

📌 Definition:
Algebraic expressions वे mathematical phrases होती हैं जिनमें variables, constants और operators होते हैं।

📌 Examples:
x + 5  
2x - 3  
3x² + 2x + 7  

📌 Parts of Expression:
✔ Variable → x, y, z  
✔ Constant → 2, 5, 10  
✔ Operator → +, -, ×, ÷  

📌 Types:

✔ 1. Monomial → एक term  
   Example: 3x, 5y²  

✔ 2. Binomial → दो terms  
   Example: x + 5  

✔ 3. Trinomial → तीन terms  
   Example: x² + 2x + 1  

✔ 4. Polynomial → many terms  

📌 Real Life Use:
✔ area calculation  
✔ speed formulas  
✔ cost calculation  

📌 Difference:
Expression ≠ Equation  
(Expression में = नहीं होता)

📌 Example:
✔ Expression: 2x + 5  
✔ Equation: 2x + 5 = 10  

📌 Conclusion:
Algebraic expressions algebra का base हैं जिनसे सभी equations बनती हैं।
`
};

    const buttons = document.querySelectorAll(".detail-btn");

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            let key = btn.getAttribute("data-topic");

            const overlay = document.createElement("div");
            overlay.classList.add("overlay");

            const panel = document.createElement("div");
            panel.classList.add("panel");

            panel.innerHTML = `
                <h2>📘 Detail</h2>
                <p>${details[key] || "No details available"}</p>
                <button class="close-btn">❌ Close</button>
            `;

            overlay.appendChild(panel);
            document.body.appendChild(overlay);

            panel.querySelector(".close-btn").onclick = () => overlay.remove();

            overlay.onclick = (e) => {
                if(e.target === overlay) overlay.remove();
            };
        });

    });

});
