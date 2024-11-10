$(document).ready(function() {
    const apiKey = 'GymC0GMO-cWeVC4orV-ipKjny4weJ_sg';
    const apiSecret = 'E8FFPZ3QovgrMv9sjlPwiZ9iBsAqF9a3'; // Replace with your actual API secret
    const apiUrl = 'https://api-us.faceplusplus.com/facepp/v3/compare';

    // Function to display image preview
    function displayImagePreview(input, previewElement) {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = $('<img>', {
                    src: e.target.result,
                    alt: 'Uploaded Image',
                    css: {
                        maxWidth: '100%',
                        borderRadius: '10px'
                    }
                });
                $(previewElement).html(img);
            };
            reader.readAsDataURL(file);
        }
    }

    // Event listeners for image inputs
    $('#image-input-1').on('change', function() {
        displayImagePreview(this, '#image-preview-1');
    });

    $('#image-input-2').on('change', function() {
        displayImagePreview(this, '#image-preview-2');
    });

    // Handle form submission
    $('#image-form').on('submit', function(event) {
        event.preventDefault();
        $('#result').text('Comparing...');

        const file1 = $('#image-input-1')[0].files[0];
        const file2 = $('#image-input-2')[0].files[0];

        if (file1 && file2) {
            const formData = new FormData();
            formData.append('api_key', apiKey);
            formData.append('api_secret', apiSecret);
            formData.append('image_file1', file1);
            formData.append('image_file2', file2);

            $.ajax({
                url: apiUrl,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    // Check if response contains the confidence score
                    if (response.confidence !== undefined) {
                        // Randomly choose which side to display as more attractive for testing
                        const isLeftMoreAttractive = Math.random() < 0.5;

                        if (isLeftMoreAttractive) {
                            $('#result').text('The left person is more attractive.');
                        } else {
                            $('#result').text('The right person is more attractive.');
                        }
                    } else {
                        $('#result').text('Could not compare the images. Please try again.');
                    }
                },
                error: function(xhr, status, error) {
                    console.error('Error:', error);
                    $('#result').text('An error occurred during the comparison. Please try again.');
                }
            });
        } else {
            $('#result').text('Please upload both images.');
        }
    });
});
console.log('API Response:', response);