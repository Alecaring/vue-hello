



const { createApp } = Vue;

createApp ({

    // qui vanno i dati
    data() {
        return {
            saluta      : "Girasole Giallo",
            colore      : "giallo",
            image       : "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
            altImage    : "Girasole image",
            sizeImage   : "image",
            txt         : "txtCss",
        };
    },
}).mount("#container");
