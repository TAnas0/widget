function main () {
  console.log('start')
  console.log(document)
  console.log(document.body)
  // Create a bottom right fixed element
  var elem = document.createElement('div');
  elem.setAttribute('id', 'rating_widget');
  document.body.appendChild(elem);

  // Load the script tag for
  // var head = document.getElementsByTagName('head')[0]
  var head = document.head || document.getElementsByTagName('head')[0];
  var ratingScript = document.createElement('script');
  ratingScript.setAttribute('src','https://unpkg.com/waxwing-rating@0.0.1/dist/waxwing-rating.min.js');
  ratingScript.setAttribute('type','text/javascript');
  ratingScript.async = false
  console.log(ratingScript)
  // document.body.appendChild(ratingScript);
  // document.head.appendChild(ratingScript);
  head.appendChild(ratingScript);

  // Add the styles
  var styles = document.createElement('link')
  styles.setAttribute('rel', 'stylesheet')
  styles.setAttribute('href', 'https://unpkg.com/waxwing-rating@0.0.1/dist/waxwing-rating.css')
  // <link rel="stylesheet" href="https://unpkg.com/waxwing-rating@0.0.1/dist/waxwing-rating.css"></link>
  head.appendChild(styles);

  // render the rating
  function waitForElement () {
    if(typeof WW_Rating !== "undefined"){
      //variable exists, do what you want
      console.log('Mounting the rating comp...')
      const rating = new WW_Rating({
        target: document.querySelector("#rating_widget"),
        props: {
          title: "Rate your health",
          name: "health",
          icon: "star",
          value: 3,
          items: [
            {
              value: 1,
              text: "very bad"
            },
            {
              value: 2,
              text: "bad"
            },
            {
              value: 3,
              text: "normal"
            },
            {
              value: 4,
              text: "good"
            },
            {
              value: 5,
              text: "exelent"
            }
          ]
        }
      });
      
      rating.title = "How satisfied are you of our service?";
    }
    else{
      console.log('Will wait...')
      setTimeout(waitForElement, 250);
    }
  }

  waitForElement()

  // insert the rating into the fixed element
}

// window.onload = main
main()