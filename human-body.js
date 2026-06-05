function openModal(type){

    const title = document.getElementById("modal-title");
    const text = document.getElementById("modal-text");
    const modal = document.getElementById("modal");

    const data = {
    nervous: {
        title: "🧠 Nervous System",
        text:
`यह शरीर का सबसे महत्वपूर्ण नियंत्रण तंत्र है।

🧠 मुख्य भाग:
• मस्तिष्क (Brain)
• रीढ़ की हड्डी (Spinal Cord)
• नसें (Nerves)

⚙️ कार्य:
• शरीर के सभी अंगों को signals भेजना
• गति और प्रतिक्रिया को नियंत्रित करना
• सोचने और निर्णय लेने की क्षमता देना
• याददाश्त और संवेदना को संभालना

⚠️ महत्व:
अगर यह सिस्टम काम करना बंद कर दे तो शरीर की सभी गतिविधियाँ रुक जाती हैं।`
    },

    circulatory: {
        title: "❤️ Circulatory System",
        text:
`यह प्रणाली पूरे शरीर में रक्त का संचार करती है।

❤️ मुख्य भाग:
• हृदय (Heart)
• रक्त (Blood)
• धमनियाँ (Arteries)
• शिराएँ (Veins)

⚙️ कार्य:
• ऑक्सीजन और पोषक तत्वों को शरीर में पहुँचाना
• हार्मोन को विभिन्न अंगों तक ले जाना
• अपशिष्ट पदार्थों को हटाने में मदद करना

💡 यह शरीर की जीवन-रेखा मानी जाती है।`
    },

    respiratory: {
        title: "🫁 Respiratory System",
        text:
`यह प्रणाली शरीर को ऑक्सीजन प्रदान करती है।

🫁 मुख्य भाग:
• नाक (Nose)
• श्वासनली (Trachea)
• फेफड़े (Lungs)
• डायाफ्राम (Diaphragm)

⚙️ कार्य:
• ऑक्सीजन अंदर लेना
• कार्बन डाइऑक्साइड बाहर निकालना
• रक्त को ऑक्सीजन से भरना

💡 बिना इस प्रणाली के जीवन संभव नहीं है।`
    },

    digestive: {
        title: "🍽 Digestive System",
        text:
`यह प्रणाली भोजन को ऊर्जा में बदलती है।

🍽 मुख्य भाग:
• मुंह (Mouth)
• भोजन नली (Esophagus)
• पेट (Stomach)
• छोटी आंत (Small Intestine)
• बड़ी आंत (Large Intestine)

⚙️ प्रक्रिया:
• भोजन को चबाना और तोड़ना
• पाचन क्रिया द्वारा ऊर्जा बनाना
• पोषक तत्वों का अवशोषण

💡 शरीर को ऊर्जा देने का मुख्य स्रोत।`
    },

    skeletal: {
        title: "🦴 Skeletal System",
        text:
`यह प्रणाली शरीर को संरचना और सुरक्षा देती है।

🦴 मुख्य भाग:
• 206 हड्डियाँ
• जोड़ (Joints)
• कार्टिलेज (Cartilage)

⚙️ कार्य:
• शरीर को आकार देना
• महत्वपूर्ण अंगों की रक्षा करना
• शरीर को सहारा देना
• खनिजों (Calcium) का भंडारण

💡 शरीर का ढांचा यही बनाता है।`
    },

    muscular: {
        title: "💪 Muscular System",
        text:
`यह प्रणाली शरीर की गति को नियंत्रित करती है।

💪 मुख्य भाग:
• 600+ मांसपेशियाँ
• टेंडन (Tendons)

⚙️ कार्य:
• चलना, दौड़ना, उठाना
• शरीर को मूवमेंट देना
• ताकत और स्थिरता प्रदान करना

💡 बिना मांसपेशियों के शरीर हिल नहीं सकता।`
    }
};

    if(!data[type]) return;

    title.innerText = data[type].title;
    text.innerText = data[type].text;

    modal.style.display = "flex";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

/* click outside close */
window.addEventListener("click", function(e){
    const modal = document.getElementById("modal");
    if(e.target === modal){
        modal.style.display = "none";
    }
});