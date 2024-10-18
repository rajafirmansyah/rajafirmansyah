document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      fetch('http://localhost/backend-momo/form.php', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          // Tampilkan pesan sukses
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Form submitted successfully!'
          });
          form.reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to submit form. Please try again later.'
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while submitting the form. Please try again later.'
        });
      });
    });
  });
