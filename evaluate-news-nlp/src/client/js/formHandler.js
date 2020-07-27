function handleSubmit(event) {
    event.preventDefault();
    const text = document.getElementById("test-statement").value;
    if (!text) return;
    console.log(text);
    fetch("/apiData", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById("text_polarity").innerHTML = data.polarity;
        document.getElementById("text_check").innerHTML =
          data.subjectivity;
        document.getElementById("text_polarity_check").innerHTML =
          data.polarity_confidence;
        document.getElementById("text_subjectivity_check").innerHTML =
          data.subjectivity_confidence;
      });
  }
  
  export { handleSubmit };
