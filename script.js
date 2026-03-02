const form = document.getElementById("user");
const out = document.getElementById("out");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = new FormData(form);
    const payload = {
        name : fd.get("name"),
        lastname : fd.get("lastname"),
        birthdayString : String(fd.get("birthday")),
        group_id : number(fd.get("group_id")),
    };
    const e = await fetch("http://localhost:5000/api/users"),
    {
        method: "POST",
        headers: {"Content-type": "application/json"},
body: JSON.stringify(payload),
   out.textContent= `HTTP $ {r.status}\n${await r.text()}`         
    });
    
