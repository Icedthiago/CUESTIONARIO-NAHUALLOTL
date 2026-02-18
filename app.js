const formulario = document.getElementById("cuestionario");
const resultadoDiv = document.getElementById("resultado");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const conteo = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0,
        g: 0, h: 0, i: 0, j: 0, k: 0, l: 0
    };

    const respuestas = formulario.querySelectorAll("input[type='radio']:checked");

    if (respuestas.length < 22) {
        resultadoDiv.innerHTML = "<p>⚠️ Responde todas las preguntas.</p>";
        return;
    }

    respuestas.forEach(r => {
        conteo[r.value]++;
    });

    // 🔥 Convertimos el conteo en array y lo ordenamos
    const ranking = Object.entries(conteo)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3); // TOP 3

const mensajes = {
    a: ` Metamorfosis  
    Transforma el alma del usuario para darle nuevas formas, aspectos o habilidades de otros seres.  
    Hechiceros de identidad fluida, empáticos y mentalmente flexibles, pero propensos a crisis de identidad.`,

    b: ` Invocación  
    Crea espacios donde se almacenan espectros, objetos, alebrijes o artefactos hechos de Tonall.  
    Hechiceros meticulosos y estrategas, obsesivos con el control y dependientes de sus herramientas.`,

    c: ` Elementales  
    Manipulan elementos naturales y sus variaciones, sin ser completamente inmunes a ellos.  
    Hechiceros energéticos y carismáticos, pero temperamentales y de pensamiento extremo.`,

    d: ` Biokinesis  
    Altera sangre, músculos o huesos para potenciar el cuerpo del hechicero.  
    Obsesivos con el rendimiento físico, con gran autoconocimiento corporal, pero con dismorfia.`,

    e: ` Espiritual  
    Manipula el alma, controla espectros y permite interactuar con los muertos.  
    Sensibles al más allá, resilientes ante la muerte, pero cínicos y morbosos.`,

    f: ` Mimetismo  
    Copia estructuras de Tonall para imitar habilidades, apariencias o destruirlas mediante sellos.  
    Astutos y observadores, versátiles pero con una identidad inestable.`,

    g: ` Espacial  
    Rompe las leyes universales usando conocimiento matemático y físico avanzado.  
    Hechiceros analíticos y abstractos, brillantes bajo presión, pero fríos y apáticos.`,

    h: ` Transmutación  
    Convierte Tonall en materia o energía respetando la conservación y la estructura atómica.  
    Creativos y pacientes, obsesionados con la eficiencia y la perfección.`,

    i: ` Astral  
    Depende de la posición de las estrellas o de la energía cósmica para funcionar.  
    Hechiceros poéticos y contemplativos, pasivos y fatalistas ante el destino.`,

    j: ` Vital / Celestial  
    Uso de Tonall puro, común en practicantes religiosos o devotos.  
    Personas con paz interior y gran autocontrol, bondadosas pero con juicio moral rígido.`,

    k: ` Mental  
    Permite entrar y manipular la mente mediante ondas, luz o estímulos externos.  
    Hechiceros manipuladores, persuasivos y socialmente inteligentes, pero cínicos y poco empáticos.`,

    l: ` Devastador  
    Hechizos de destrucción masiva que consumen enormes cantidades de Tonall.  
    Hechiceros coléricos y apasionados, resilientes pero autodestructivos.`
};


    // 🏆 Construimos el mensaje final
    let html = `<h2>🔮 Tu afinidad dominante (TOP 3)</h2>`;

    ranking.forEach((item, index) => {
        const letra = item[0];
        const puntos = item[1];

        html += `
            <p>
                <strong>${index + 1}° lugar:</strong>
                ${mensajes[letra]}
                <br>
                <i>(${puntos} respuestas)</i>
            </p>
        `;
    });

    resultadoDiv.innerHTML = html;
});