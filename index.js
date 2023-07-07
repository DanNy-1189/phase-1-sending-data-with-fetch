function submitData (name, email) {
    const formData = {
        name: "Steve",
        email: "steve@steve.com",
      };
      
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      };
      
      return fetch("http://localhost:3000/users", configurationObject)
      .then(resp => resp.json())
      .then(obj => document.body.innerHTML = obj.id)
      .catch(error => document.body.innerHTML = error.message)
}

