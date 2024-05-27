document.addEventListener('DOMContentLoaded', () => {
    const formControl = document.querySelectorAll('.form-control')
    const invalidInput = false;

    function checkInput (formControl) {
        let anyInputEmpty = false;
        formControl.forEach(input => {
            const trimmedValue = input.value.trim();
            if (trimmedValue === '') {
                anyInputEmpty = true;
            }
        });

        if (anyInputEmpty) {
            alert('Por favor preencha todos os campos');
        } else { 
            displayMessage(formControl);
        }
    }

    function displayMessage (formControl) {      
        document.getElementById('messageModal').style.display = 'block';
        formControl.forEach(input => {
            input.value = '';
        });
    }

    document.querySelector('.submit-btn').addEventListener('click', function(event) {
        event.preventDefault();
        checkInput(formControl);
    });
    
    const modal = document.getElementById('messageModal');
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
});
