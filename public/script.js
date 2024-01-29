document.getElementById('myForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
        email:event.target.email.value,
        name:event.target.name.value,

    }
const formData = JSON.stringify(data);
debugger
    try {
        const response = await fetch(`http://${window.location.hostname}:3000/`, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/json'
            },
        });
debugger
        if (response.redirected) {
            window.location.href = response.url;
        } else if (!response.ok) {
            throw new Error('Network response was not ok');
        } else {
            console.log('Form submitted');
        }
        console.log('Form submitted');
    } catch (error) {
        console.error('Error:', error);
    }
});
