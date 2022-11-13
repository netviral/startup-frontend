$('#form').on('submit', function(event) {
    event.preventDefault();
    loader=document.getElementById("loader");
    const thankYouMessage = document.querySelector('#thank-you-message');
    thankYouMessage.innerHTML="Submitting. Please do not refresh or leave this page."
    thankYouMessage.classList.add('show');
    loader.style.display="inline";
    var name = $('input[name="name"]').val(),
       email = $('input[name="email"]').val(),
       phone= $('input[name="phone"]').val(),
       anonymous= $('select[name="anonymous"]').val(),
       title= $('input[name="title"]').val(),
       formOfWork= $('select[name="form"]').val(),
       category= $('select[name="category"]').val(),
       previewText= $('textarea[name="previewText"]').val(),
       link = $('input[name="link"]').val(),
       design= $('textarea[name="design"]').val(),
       collab= $('input[name="collab"]').val();

    document.querySelector('form').reset();

    $.ajax({
      url: '/submit-piece',
      method: "POST",
      data: {
          name, 
          email, 
          phone, 
          anonymous, 
          title,
          formOfWork,
          category,
          previewText,
          link,
          design,
          collab
      },
      success: function(response) {
        loader.style.display="none";
        thankYouMessage.innerHTML="You have successfully submitted your piece. Thank you.";
        setTimeout(() => {
            thankYouMessage.classList.remove("show");
        }
        , 20000);

      },
      fail: function(error) {
        thankYouMessage.innerHTML="Oops! An error occured. Please try again! :(";
        thankYouMessage.classList.add('show');
        document.querySelector('form').reset();
        setTimeout(() => {
            thankYouMessage.classList.remove("show");
        }
        , 20000);
        console.log(error);
      }
    });


    
  });